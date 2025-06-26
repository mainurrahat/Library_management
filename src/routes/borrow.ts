import express, { Request, Response, Router } from "express";
import Borrow from "../model/ModelBorrow";
import Book from "../model/ModelBookroutes";
import mongoose from "mongoose";

const router: Router = express.Router();

//post krsi
interface BorrowRequestBody {
  book: string;
  quantity: number;
  dueDate: string;
}

const borrowBookHandler = async (
  req: Request<{}, {}, BorrowRequestBody>,
  res: Response
): Promise<void> => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

    if (!bookId || !quantity || !dueDate) {
      res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      res.status(400).json({
        success: false,
        message: "Invalid book ID",
      });
      return;
    }

    const book = await Book.findById(bookId);
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
      return;
    }

    try {
      await book.decreaseCopies(quantity);
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Cannot borrow book",
      });
      return;
    }

    const borrow = new Borrow({ book: bookId, quantity, dueDate });
    await borrow.save();

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to borrow book",
      error: error.message,
    });
  }
};

router.post("/", borrowBookHandler);
//get korsi
router.get("/", async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookInfo",
        },
      },
      { $unwind: "$bookInfo" },
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookInfo.title",
            isbn: "$bookInfo.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve borrowed books summary",
      error: error.message,
    });
  }
});

export default router;

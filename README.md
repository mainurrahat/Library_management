# 📚 Library Management API

A robust **Library Management System** built with **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 🚀 Live Link
[Click to View Live Deployment] (https://libraryproject-gamma.vercel.app/)

---

## 🎯 Project Objective

Develop a full-stack RESTful API to manage a library's book catalog and borrowing system with:

✅ Schema validation  
✅ Business logic enforcement (availability control)  
✅ Aggregation pipelines  
✅ Mongoose static & instance methods  
✅ Middleware (pre/post hooks)  
✅ Filtering, sorting, and pagination  

---

## 🏗️ Technologies Used

- **Node.js** + **Express.js**  
- **TypeScript**  
- **MongoDB Atlas** with **Mongoose**  
- **Vercel** (for deployment)  
- **dotenv** for environment management  

---

## 🗂️ Project Structure

src/
├── model/
│ ├── Book.model.ts
│ ├── Borrow.model.ts
├── routes/
│ ├── book.routes.ts
│ ├── borrow.routes.ts
├── controllers/
├── middlewares/
├── App.ts
├── server.ts

 

---

## 📦 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone  
cd library-management-api
```

2️⃣ Install Dependencies
```
npm install
```

3️⃣ Environment Variables
Create a .env file in the root:
```
DB_USER=your_mongo_user
DB_PASS=your_mongo_password
PORT=5000
```

4️⃣ Run in Development
```
npm run dev
```
5️⃣ Build and Start
```
npm run build
npm start
```
## 📖 API Endpoints

### 🔹 Book Endpoints

✔ `POST /api/books` → Create a new book  
✔ `GET /api/books` → Get all books (supports filtering, sorting, limit)  
✔ `GET /api/books/:bookId` → Get a book by ID  
✔ `PUT /api/books/:bookId` → Update a book  
✔ `DELETE /api/books/:bookId` → Delete a book  


### 🔹 Borrow Endpoints

✔ `POST /api/borrow` → Borrow a book (with availability check)  
✔ `GET /api/borrow` → Borrowed books summary (aggregation)  



## 🔧 Features

✅ Mongoose Schema validation  
✅ Unique ISBN constraint for each book  
✅ Business logic for borrow availability control  
✅ Aggregation to summarize borrowed books  
✅ Filtering, sorting, and pagination for book listing  
✅ Clean, consistent error handling  
✅ Use of Mongoose static methods & middleware  


## 🧩 Example API Responses

### ✅ Successful Book Creation

```
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 5,
    "available": true,
    "createdAt": "2025-06-25T10:00:00.000Z",
    "updatedAt": "2025-06-25T10:00:00.000Z"
  }
}
```
❌ Validation Error Example
```
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number"
      }
    }
  }
}
```
## 🛡️ Error Handling

All API endpoints follow a **unified error response structure**, ensuring:

✅ Easy debugging  
✅ Smooth frontend integration  
✅ Consistent error format across the project  

---

## 🏅 Bonus Features

✨ **Clean, Readable Code**  
- Follows proper naming conventions  
- Maintains code clarity for future maintenance  

✨ **Strict API Structure**  
- Designed strictly based on the assignment requirements  
- Fulfills all mentioned specifications  

✨ **Mongoose Middleware**  
- Implements pre/post middleware for automated operations  
- Enhances data validation and handling  

✨ **Secure Environment Setup**  
- Uses `.env` files for managing sensitive credentials  
- Keeps API keys and configurations safe  

✨ **Comprehensive Project Documentation**  
- Well-written `README.md` for setup instructions  
- Ensures smooth onboarding for developers  

✨ **Short Video Demonstration Included**  
- Quick project walkthrough  
- Explains core functionalities clearly  

---

## 🎥 Video Demonstration

🔗 [Watch Project Video Explanation](#)  
*(Replace with your actual video link)*

---
🤝 Author
Developed by Mainur Islam Rahat

🔗 GitHub Profile : https://github.com/mainurrahat

📝 License
This project is for academic purposes only and follows standard open-source practices.



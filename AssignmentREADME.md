# 🛍️ Express.js Product API

A simple RESTful API built using **Express.js** that allows you to manage products. Includes CRUD operations, middleware for logging and authentication, robust error handling, and advanced features like filtering, searching, pagination, and statistics.

---

## 🚀 How to Run

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd <your-repo-directory>
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the server**
```bash
npm start
```

Server will start on:
```
http://localhost:3000
```

---

## 🔐 Environment Variables
Create a `.env` file based on `.env.example`:
```env
PORT=3000
API_KEY=123456
```

---

## 📂 Endpoints Documentation

### 🔹 GET `/api/products`
Get all products (with filtering, search & pagination support).

#### Query Parameters:
- `category` (optional): Filter by category
- `search` (optional): Search by product name
- `page` (optional): Page number (pagination)
- `limit` (optional): Results per page

#### Example:
```
GET /api/products?category=electronics&search=lap&page=1&limit=2
```

### 🔹 GET `/api/products/:id`
Fetch a single product by ID.

### 🔹 POST `/api/products`
Create a new product.

#### Required Headers:
```
x-api-key: 123456
```

#### Body:
```json
{
  "name": "New Product",
  "description": "Cool stuff",
  "price": 99.99,
  "category": "gadgets",
  "inStock": true
}
```

### 🔹 PUT `/api/products/:id`
Update an existing product.

### 🔹 DELETE `/api/products/:id`
Delete a product by ID.

### 🔹 GET `/api/products/stats`
Returns stats like count by category.

---

## 🧪 Testing
You can test your API using tools like:
- Postman
- Curl
- Thunder Client (VS Code Extension)

---

## 🛠️ Built With
- Express.js
- Node.js
- uuid
- body-parser

---

## 👨‍💻 Author
Cornelius Wekesa

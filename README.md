# ✨ Sitara Grace – Shopping Web App

**Sitara Grace** is a full-stack e-commerce web application built using **HTML, CSS, JavaScript, PHP, and PostgreSQL**.
It provides a smooth shopping experience with modern UI and backend integration.

---

## 🚀 Features

* 🧑 User Registration & Login
* 🛍️ Product Browsing
* 🛒 Add to Cart
* 💳 Payment Page UI
* 📩 Contact Form
* 🔗 PHP Backend Integration
* 🗄️ PostgreSQL Database for users, orders, and contact messages

---

## 🏗️ Project Structure

```
shoppin-app/
│
├── frontend/        # UI (HTML, CSS, JS)
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── product.html
│   ├── cart.html
│   └── style.css
│
├── backend/         # Server-side (PHP)
│   ├── db.php
│   ├── config.php
│   ├── contact.php
│   └── database.php
│
├── database/        # DB scripts (optional)
│
└── README.md
```

---

## ⚙️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** PHP
* **Database:** PostgreSQL
* **Server:** XAMPP (Apache)

---

## 🧑‍💻 How to Run Locally

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/shoppin-app.git
```

### 2️⃣ Move to XAMPP Folder

```
C:\xampp\htdocs\
```

### 3️⃣ Start Server

* Open XAMPP
* Start **Apache**

### 4️⃣ Setup Database

* Open pgAdmin
* Create database: `myproject_db`
* Run `database/schema.sql` to create the required tables

### 5️⃣ Update DB Connection

Create `backend/.env` from `backend/.env.example`:

```env
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=myproject_db
DB_USER=postgres
DB_PASSWORD=YOUR_PASSWORD
```

### 6️⃣ Run Project

Open browser:

```
http://localhost/shoppin-app/frontend/index.html
```

---

## 📸 Screenshots

*Add screenshots of Sitara Grace UI here*

---

## 🔒 Security Note

* Use prepared statements to prevent SQL injection
* Do not upload sensitive credentials

---

## 📌 Future Improvements

* 🔐 Authentication system
* 📊 Admin dashboard
* 💡 Better UI/UX
* 🌍 Deployment

---

## 🙌 Author

**Kunal Sharma**
💻 Developer

---

## ⭐ Project Name Meaning

**Sitara Grace** represents elegance, beauty, and a modern shopping experience ✨

---

# 🚀 Assignment: Build a React UI from Figma Design

## 📌 Objective

This project is a **responsive front-end application** built using **React + Tailwind CSS**, where the provided Figma design has been replicated with high visual accuracy.

The assignment focuses on:

* Translating **design → pixel-accurate UI**
* Building **scalable and reusable components**
* Managing **state and interactions using React Hooks**
* Writing **clean, maintainable, and structured code**

---

## 🖥️ Task Overview

The application consists of two main screens:

### 🔹 Screen 1: Knowledge Base Home

* Displays a list of knowledge base cards
* Includes search functionality
* Clean layout with proper spacing & alignment

### 🔹 Screen 2: Create New Drawer / Modal

* Opens on clicking **“Create New”**
* Slide-in drawer UI with overlay
* Contains form inputs and dropdowns

---

## 🎨 UI Implementation

* Pixel-accurate implementation based on Figma design
* Maintained consistent:

  * **Spacing**
  * **Typography**
  * **Alignment**
  * **Color system**

### 🎨 Color Palette

* **Primary Color:** `#4F46E5`
* **Secondary Color:** `#1E1B4B`

---

## ⚙️ Features

### ✅ Dashboard UI

* Responsive grid layout for cards
* Clean and modern UI

### 🔍 Search Bar

* Controlled input using React state
* Real-time input handling

### ➕ Create New Button

* Fully functional (clickable)
* Opens drawer/modal

### 📂 Drawer / Modal

* Smooth slide-in animation
* Background overlay with blur
* Form with inputs and dropdowns

### 🧩 Reusable Components

* Card Component
* Button Component
* Drawer / Modal Component
* Top Section (Header + Search)

### 📊 Footer Pagination

* Square navigation buttons
* Disabled states
* Proper alignment

---

## 🧱 Component-Based Architecture

The UI is divided into reusable components:

```id="n4x0k1"
src/
│── components/
│   ├── Card.jsx
│   ├── TopSection.jsx
│   ├── CreateKnowledgeDrawer.jsx
│   ├── Button.jsx
│
│── pages/
│   ├── Dashboard.jsx
│
│── App.jsx
│── main.jsx
```

---

## ⚛️ React Hooks Usage

The project uses **functional components with hooks**:

### 🔹 useState

* Manage modal/drawer visibility
* Handle search input state

```js id="a7m2pq"
const [isModalOpen, setIsModalOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
```

### 🔹 Controlled Inputs

* Search field and form inputs are controlled using state

---

## 🧹 Code Quality

This project follows best practices:

* ✅ Clean and readable code
* ✅ Reusable components
* ✅ Proper naming conventions
* ✅ Separation of concerns
* ✅ Consistent styling

---

## 🛠️ Tech Stack

* ⚛️ React (Functional Components + Hooks)
* 🎨 Tailwind CSS
* 🎯 Lucide React Icons
* ⚡ Vite

---

## 📱 Responsiveness

* Mobile-first approach
* Optimized for:

  * 📱 Mobile
  * 💻 Tablet
  * 🖥️ Desktop

---

## 📦 Setup & Installation

```bash id="h8k2lm"
# Clone repository
git clone https://github.com/your-username/aventisia-frontend-assignment.git

# Navigate to project
cd aventisia-frontend-assignment

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📸 Deliverables

* ✅ Source Code (GitHub Repository)
* ✅ Screenshots of UI
* 🔗 Live Demo (Optional)

---

## 🚧 Future Improvements

* API integration
* Form validation
* Dynamic data handling
* Global state management (Context API / Redux)
* Dark mode support

---

## 👨‍💻 Author

**Nishant Choudhary**
Frontend Developer (MERN Stack)

---

## 📄 License

This project is created for assignment purposes.

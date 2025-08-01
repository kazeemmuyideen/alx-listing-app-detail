# 🏡 ALX Listing App – Property Detail Page

This project is part of the ALX Frontend Milestone focused on building a **responsive Property Detail Page** using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Dynamic Routing**.

## 📌 Objective

To create a detailed and responsive property page that displays:
- Property information (name, location, rating)
- Property images
- Description and amenities
- Reviews
- A functional booking section

This exercise helps you learn:
- Dynamic routing with `[id].tsx`
- Props-based component architecture
- Tailwind CSS styling
- Reusable component design

---

## 📁 Folder Structure
alx-listing-app-detail/
│
├── components/
│ └── property/ # Contains all components related to the property detail page
│ ├── PropertyDetail.tsx # Main layout for displaying property info, images, description
│ ├── BookingSection.tsx # Booking form with date pickers and payment calculation
│ └── ReviewSection.tsx # Lists all user reviews with avatar, rating, and comments
│
├── constants/
│ └── index.ts # Mock property listing data used for display
│
├── interfaces/
│ └── index.ts # TypeScript interfaces for data types like Property, Review
│
├── pages/
│ └── property/
│ └── [id].tsx # Dynamic route that renders property details based on name
│
├── public/
│ └── images/ # Sample images used in the UI (e.g., properties, users)
│ ├── villa.jpg
│ ├── user1.jpg
│ └── user2.jpg
│
├── styles/
│ └── globals.css # Global Tailwind CSS configuration
│
├── README.md # Project overview and documentation
└── package.json # Project dependencies and scripts

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js and npm installed
- Tailwind CSS configured
- Next.js and TypeScript setup

### 🔧 Installation

1. Clone the project:
   ```bash
   git clone https://github.com/<your-username>/alx-listing-app-detail.git
   cd alx-listing-app-detail


---

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/kazeemmuyideen/alx-listing-app-00.git
cd alx-listing-app-00

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

🔨 Build for Production
# Build the app
npm run build

# Start production server
npm run start


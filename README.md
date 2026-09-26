# 🏋️ FitLog — Workout Library

FitLog is a modern and responsive workout library application built with Next.js. It allows users to explore workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and manage their workout plan from a dedicated My Plan page.

The application is designed with a clean, dark fitness-focused interface and works across mobile, tablet, and desktop devices.

---

## 📌 Project Overview

FitLog helps users organize their daily workouts in a simple and practical way.

Users can:

* Browse all available workouts
* View detailed information about each workout
* Add workouts to Today's Plan
* Save workouts for later
* Mark planned workouts as completed
* Remove workouts from their plan
* Sort workouts by duration, calories, or rating
* Track total exercises, minutes, and calories
* Navigate between workout and plan pages easily

---

## 🛠️ Technologies Used

| Technology            | Purpose                                       |
| --------------------- | --------------------------------------------- |
| **Next.js**           | Application framework and routing             |
| **React**             | Building reusable UI components               |
| **TypeScript**        | Type-safe development                         |
| **Tailwind CSS**      | Styling and responsive design                 |
| **DaisyUI**           | UI components and styling utilities           |
| **React Context API** | Managing workout plan and saved workout state |
| **React Hot Toast**   | Showing action notifications                  |
| **Next/Image**        | Optimized image rendering                     |
| **Git & GitHub**      | Version control and project management        |

---

## ✨ Key Features

### 1. 🏋️ Workout Library

Users can browse the complete workout library from the home page.

Each workout card displays:

* Workout image
* Workout category
* Workout name
* Equipment
* Duration
* Calories
* Rating

The library uses a responsive grid layout that adapts to different screen sizes.

---

### 2. 📖 Workout Details

Users can click on any workout to open its detailed page.

The details page includes:

* Large workout image
* Workout name
* Description
* Category
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Step-by-step instructions

Users can also add the workout to their plan or save it for later.

---

### 3. 📋 Today's Plan

Users can add workouts to their **Today's Plan**.

The My Plan page displays:

* Total exercises
* Total workout minutes
* Total calories
* Planned workout cards
* View Details button
* Mark as Done button
* Remove button

The plan counters are also displayed in the navbar.

---

### 4. 🔖 Save for Later

Users can save workouts that they want to complete later.

Saved workouts are available inside the **Saved** tab of the My Plan page.

Users can:

* View workout details
* Remove saved workouts

The navbar also displays the total number of saved workouts.

---

### 5. ✅ Mark Workout as Done

Users can mark a planned workout as completed.

After completing a workout:

* The workout gets a completed state
* The workout title is visually updated
* A completed indicator is shown
* The user can mark it as undone again

Toast notifications are used to provide feedback for user actions.

---

### 6. 🔔 Toast Notifications

FitLog provides feedback when users perform important actions.

Examples:

* Workout added to today's plan
* Workout saved for later
* Workout removed from today's plan
* Workout removed from saved workouts
* Workout marked as completed

---

### 7. 🔃 Sort Workouts

The My Plan page includes a **Sort By** option.

Available sorting options:

* Duration
* Calories
* Rating

The default sorting option is **Duration**.

Users can change the sorting option and the workout list updates accordingly.

---

### 8. 📱 Fully Responsive Design

The application is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The layout adapts automatically for different screen sizes.

Responsive features include:

* Mobile navigation
* Responsive workout grid
* Responsive hero section
* Flexible workout cards
* Responsive My Plan layout
* Mobile-friendly buttons and controls

---

## 📄 Main Pages

### 🏠 Home / Workout Library

Contains:

* Navbar
* Hero section
* Workout library
* Workout cards
* Footer

### 📖 Workout Details

Contains:

* Workout image
* Workout information
* Key specifications
* Instructions
* Add to Today's Plan
* Save for Later

### 📋 My Plan

Contains:

* Plan statistics
* Today's Plan tab
* Saved tab
* Workout cards
* Sorting
* View Details
* Mark as Done
* Remove

### ❌ 404 Page

A custom 404 page is included for invalid or unknown routes.

---

## 🎯 Challenge Features

The project also includes challenge requirements such as:

* Sort dropdown
* Duration sorting
* Calories sorting
* Rating sorting
* Mark as Done functionality
* Remove workout functionality
* Toast notifications
* Responsive interface
* Structured Git commit history

---

## 🧠 State Management

FitLog uses the **React Context API** to manage workout-related state.

The shared context handles:

* Today's Plan
* Saved workouts
* Adding workouts
* Removing workouts
* Updating navbar counters

This allows the workout state to be shared between different pages and components.

---


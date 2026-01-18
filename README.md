# Memory Game - Admin Dashboard (Final)

A professional, responsive Angular Admin Dashboard built to manage and monitor the Memory Game activity. This project focuses on **Advanced Angular Features**, **Security**, and **Clean Code** principles.

## 🚀 Features

- **Authentication & Authorization**: Full JWT integration with secure Login and Route Guards.
- **Real-time Statistics**: Aggregate data visualization for game performance.
- **Player Management**: Interactive table to view and manage player data.
- **Activity Monitoring**: Tracking game dates and session history.
- **Security Interceptor**: Global HTTP interceptor for automatic token injection and 401/403 error handling.
- **Modern UI**: Built with **Angular Material**, following a "Mobile First" and responsive design approach.

## 🛠️ Tech Stack

- **Framework**: Angular v21 (using Signals API).
- **Language**: TypeScript (Strict Typing).
- **Styling**: Angular Material & CSS Grid/Flexbox.
- **State Management**: Angular Signals for efficient, reactive UI updates.
- **HTTP Client**: Standalone HttpClient with functional Interceptors.

## 📦 Installation & Setup

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm start || ng serve
    ```
    Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🔐 Credentials (Admin)

- **Username**: `Henk` , **Username**: `henk`
- **Role**: Administrator access required for `/admin` endpoints.

## 🏗️ Project Structure

- `src/app/components`: Feature-specific components (Login, Dashboard, Stats, etc.).
- `src/app/services`: Business logic and API communication.
- `src/app/interceptors`: Global HTTP logic and security handling.
- `src/app/guards`: Route protection logic.

---

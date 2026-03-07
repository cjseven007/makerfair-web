# **Project Setup Guide**

---

## 1. Prerequisites

Before starting, make sure the following software is installed:

- Node.js
- Git
  To check installaton:

```bash
node -v
npm -v
git --version
```

## 2. Clone the Repository

First, clone the project to your local machine.

```bash
git clone https://github.com/cjseven007/makerfair-web.git
```

Move into the project folder:

```bash
cd makerfair-web
```

## 3. Install Dependencies

Install all required packages:

```bash
npm install
```

This installs all libraries defined in `package.json`.

## 4. Run the Development Server

Start the React development server:

```bash
npm run dev
```

After running, you should see something like:

```
Local: http://localhost:5173
```

Open that URL in your browser to view the application.

## 5. Git Workflow (Basic Contribution Guide)

### Step 1: Pull the latest changes

Always update your local repository first.

```bash
git pull origin main
```

### Step 2: Create a new branch

Never work directly on `main`. Create your own branch.

Example:

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
feature/login-page
feature/navbar-ui
fix/button-bug
```

### Step 3: Make your changes

Edit the code and test it locally using:

```bash
npm run dev
```

### Step 4: Check modified files

```bash
git status
```

### Step 5: Add your changes

```bash
git add .
```

### Step 6: Commit your changes

```bash
git commit -m "Add login page UI"
```

Use clear commit messages.

Examples:

```
Add navbar component
Fix button alignment
Update homepage layout
```

### Step 7: Push your branch

Push your branch to GitHub:

```bash
git push origin feature/your-feature-name
```

or (if not the first time pushing this branch)

```bash
git push
```

Example:

```bash
git push origin feature/login-page
```

### Step 8: Create a Pull Request (PR)

After pushing:

1. Go to the GitHub repository
2. You will see a button "Compare & Pull Request"
3. Click it
4. Add a short description of your changes
5. Submit the Pull Request

A maintainer will review it before merging into `main`.

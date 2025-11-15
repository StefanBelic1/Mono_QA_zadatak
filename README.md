# 🧪 QA Automation – Photo Gallery (Cypress E2E Tests)

This repository contains automated end-to-end tests written in **Cypress** for the Photo Gallery web application  
👉 [Demo Application](https://demo.baasic.com/angular/starterkit-photo-gallery/main)

---

## 📖 Project Overview

The goal of this project is to demonstrate practical QA skills through:
- **Functional testing** of the core application features  
- **Exploratory testing** and bug documentation  
- **Automation** using Cypress for key user flows  

All manual findings are documented in:
- 🐞 `BUG_REPORT.md` – detailed list of discovered issues  
- 🧩 `TEST_PLAN.md` – description of test strategy, prioritization, and coverage  

Automated tests are located in the `e2e/` folder.

---

## ⚙️ Framework and Tools Used

| Tool / Library | Purpose |
|-----------------|----------|
| **Cypress** | Main framework for end-to-end web testing |
| **cypress-file-upload** | Plugin for image upload testing |
| **JavaScript (ES6)** | Test scripting language |
| **Google Chrome** | Default browser used for test execution |
| **Windows 10 / Android 14** | Test environments |

---


## 🧩 What Is Covered

The automated Cypress tests cover the following scenarios:

| Scenario | Description | Priority |
|-----------|-------------|-----------|
| **Login – Positive** | Successful login with valid user credentials | **HIGH** |
| **Login – Negative** | Failed login with invalid credentials | **HIGH** |
| **Create Gallery** | User can create a new gallery/album | **HIGH** |
| **Delete Gallery** | User can delete an existing album | **HIGH** |
| **Open Album** | User can open an existing album and view photos | **MEDIUM** |
| **Open Photo** | User can open a specific photo from an album | **MEDIUM** |
| **Upload Photo** | User can upload a new image to an album | **HIGH** |
| **Logout** | User logs out successfully | **HIGH** |

Additional validation tests include:
- Password validation on registration  
- Functional testing of “Forgot Password” flow  
- Upload behavior when missing required fields  

---

## 💻 Setup Instructions

### 1️⃣ Install Node.js and npm
-Download and install Node.js (which includes npm):  
🔗 [https://nodejs.org/](https://nodejs.org/)

### Verify installation:
- node -v
- npm -v
### 2️⃣ Clone the Repository

- git clone https://github.com/StefanBelic1/Mono_QA_task.git
- cd Mono_QA_task
### 3️⃣ Install Dependencies
- npm init (package name : mono_qa_task, author : tester) 
- npm install cypress --save-dev
- This will install Cypress.

### 4️⃣ Run Cypress Tests

**Before running tests:** 
- Move the folders e2e and fixtures into a newly created folder named cypress.
- If asked whether to replace the existing fixtures folder — click Yes.
- Install the file upload plugin:
    - npm install -save-dev cypress-file-upload
- Open the file cypress/support/e2e.js (using VS Code or Notepad) and add the following line at the bottom: "import 'cypress-file-upload';"

🖥️ Option 1: Open Cypress GUI

npx cypress open
- Then select:
- E2E Testing
- Choose browser (e.g. Chrome)
- Pick any test file under /e2e/ to run

⚡ Option 2: Run in Headless Mode
- npx cypress run
or run a specific test:
- npx cypress run --spec "cypress/e2e/login.cy.js"
**🧠 Notes for Reviewers**
- All test images used in upload tests are located inside the fixtures/ folder
  (Cypress automatically loads files from there).

---
Valid login credentials:
- Username: stefanbelic
- Password: sifra123


Screenshots for discovered bugs are stored in the screenshots/ folder.


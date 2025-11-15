# 🧩 TEST PLAN – Photo Gallery  

---

## Application Analysis  

**Demo:** [https://demo.baasic.com/angular/starterkit-photo-gallery/main](https://demo.baasic.com/angular/starterkit-photo-gallery/main)  

The application is a simple web-based photo gallery designed for sharing images.  
It allows users to:  
- Register and log in to the system  
- Browse and search photos  
- Create albums and upload new photos  
- Log out of their profile  

---

## Automation Prioritization  

| Scenario | Description | Priority | Reason |
|-----------|-------------|-----------|--------|
| Login – Positive | Successful login with valid user credentials | **HIGH** | Critical functionality |
| Login – Negative | Failed login with invalid credentials | **HIGH** | Validation and security check |
| Create Gallery | User can create a new gallery | **HIGH** | Core functionality of the app |
| Delete Gallery | User can delete a gallery | **HIGH** | Very important for user experience |
| Open Album | User can open an existing album and view its content | **MEDIUM** | Important for verifying navigation and data loading |
| Logout | User logs out successfully | **HIGH** | Important for security |


---

## Test Strategy  

### Types of Testing  
- **Exploratory Testing** – manual exploration to understand the application and identify bugs  
- **Functional Testing** – verifying core features (registration, login, upload, logout)  
- **Regression Testing** – automated tests executed regularly to detect new issues after updates  

### Tools and Environment  
- **Automation Tool:** Cypress  
- **Browser:** Chrome-version 142.0.7444.162  
- **Operating Systems:** Windows 10, Android 14  
- **Test Data:** test user account and sample images (.jpg)  

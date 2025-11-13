# 🐞 BUG REPORT – Photo Gallery  

---

## ♦️ Bug #1 – Unclear Dropdown Menu Icon  

**Type:** UI Bug  
**Severity:** Low  
**Environment:** Chrome, Android 14, Windows 10  

### Steps to Reproduce  
1. Open the homepage.  
2. Observe the dropdown menu icon (screenshots/bug1.png).  

### Expected Result  
The dropdown menu should use a recognizable icon, such as a classic "hamburger" icon or a downward arrow (screenshots/hamburger.png).  

### Actual Result  
The dropdown button is unclear and looks like a theme selector (dark/light mode).  

---

## ♦️ Bug #2 – Blog Name Link in Footer Is Not Clickable  

**Type:** Frontend Bug  
**Severity:** Medium  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Open the homepage.  
2. Scroll to the bottom.  
3. Click on "Blog name."  

### Expected Result  
The copyright text should include the correct name and link to the relevant website.  

### Actual Result  
"Blog name" is an empty link and does not redirect anywhere when clicked. (screenshots/bug_blog_name.png)  

---

## ♦️ Bug #3 – Opening Image from User Album Leads to 404 Page  

**Type:** Functional Bug  
**Severity:** High  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Log in to the application.  
2. Open My Album (e.g., "TestAlbum").  
3. Click on any image within your album.  

### Expected Result  
The selected image should open in a detailed view.  

### Actual Result  
Instead of displaying the image, a 404: "Page Missing" page appears. (screenshots/bug3_404.png)  

---

## ♦️ Bug #4 – Clicking “Menu” Inside Profile Redirects to Homepage  

**Type:** Functional Bug  
**Severity:** Medium  
**Environment:** Chrome, Windows 10  

### Steps to Reproduce  
1. Log in to the application.  
2. Open your profile.  
3. Open the dropdown menu.  
4. Click on "Menu."  

### Expected Result  
The menu should open without redirecting to the homepage.  

### Actual Result  
After clicking, the menu opens but the user is redirected to the homepage.  

---

## ♦️ Bug #5 – Albums on Homepage Displayed as Individual Images  

**Type:** Functional / UX Bug  
**Severity:** Medium  
**Environment:** Chrome, Windows 10  

### Steps to Reproduce  
1. Open the homepage.  
2. Observe the displayed albums.  

### Expected Result  
The homepage should show only albums, each with a cover photo and title.  
Individual images should appear only after entering a specific album.  

### Actual Result  
Both the album cover and its images appear together as individual photos.  
This causes confusion, as users cannot distinguish between albums. (screenshots/bug_albumCover_Photos.png)  

---

## ♦️ Bug #6 – Album Photo Count Not Updated After Deletion  

**Type:** Functional Bug  
**Severity:** Low  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Open an album containing multiple photos.  
2. Delete one photo.  
3. Observe the album photo count without refreshing the page.  

### Expected Result  
After deletion, the album's photo count should update immediately to reflect the correct number.  

### Actual Result  
The old count remains visible until the page is manually refreshed.  

---

## ♦️ Bug #7 – Custom Photo Name Overwritten by File Name After Upload  

**Type:** Functional / UX Bug  
**Severity:** Medium  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Open the upload form for adding a new photo.  
2. Enter a custom name in the "Photo Name" field (e.g., "forest").  
3. Select and upload a file with a different filename (e.g., "IMG_1234.jpg").  
4. Observe the "Photo Name" field after upload.  

### Expected Result  
The manually entered name should remain unchanged unless the app explicitly warns the user.  

### Actual Result  
After upload, the "Photo Name" field is automatically replaced with the file name ("forest" → "IMG_1234"), overwriting user input without confirmation.  

---

## ♦️ Bug #8 – Homepage Header Message Grammatically Incorrect  

**Type:** UI / Content Bug  
**Severity:** Low  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Open the homepage.  
2. Observe the hero message: "We are celebrating the vastness of life."  

### Expected Result  
The message should be grammatically correct and more natural, e.g.,  
"We celebrate the vastness of life."  

### Actual Result  
The current phrase "We are celebrating the vastness of life" sounds unnatural and inconsistent with the app's tone.  

---

## ♦️ Bug #9 – "Set New Password" Link Leads to 404 Page  

**Type:** Functional Bug  
**Severity:** High  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Open the homepage.  
2. Open Menu → Login.  
3. Click "Forgot Your Password? Recover Your Password Here!"  
4. Enter a valid registered email.  
5. Open the received email and click "Set New Password".  

### Expected Result  
A page should open where the user can set a new password successfully.  

### Actual Result  
The link opens a "404 Not Found" page.  
Password reset cannot be completed. (screenshots/bug_newPassword.png)  

---

## ♦️ Bug #10 – Social Login Options Not Working  

**Type:** Functional Bug  
**Severity:** High  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Open the Login page.  
2. Click any option under Social Login (Facebook, Google, Twitter, GitHub).  

### Expected Result  
A login window should appear for the chosen provider, and the user should be authenticated and redirected back to the app.  

### Actual Result  
An error message appears:  
"undefined: Social login configuration not found."  
Social login is not functional.  

---

## ♦️ Bug #11 – Invalid Email Format Accepted During Registration  

**Type:** Validation / Functional Bug  
**Severity:** High  
**Environment:** Chrome, Android 14, Windows 10  

### Steps to Reproduce  
1. Open the registration page.  
2. Enter an invalid email address, e.g., "test@gmailc.om".  
3. Complete registration.  
4. Attempt to register.  

### Expected Result  
The system should display an error message indicating the email format is invalid and prevent registration.  

### Actual Result  
Registration succeeds, and the app claims to send an activation email to the invalid address.  
The user cannot confirm the account or log in.  

---

## ♦️ Bug #12 – Dropdown Icon Disappears After Refresh  

**Type:** UI Bug  
**Severity:** Medium  
**Environment:** Chrome, Android 14  

### Steps to Reproduce  
1. Open the homepage.  
2. Refresh the page.  

### Expected Result  
The page should reload without visual changes.  

### Actual Result  
After refresh, the dropdown menu icon disappears, leaving an empty white space. (screenshots/noLogo.jpeg)  

---

## ♦️ Bug #13 – Dropdown Menu Cannot Be Closed After Opening  

**Type:** Functional Bug  
**Severity:** Medium  
**Environment:** Chrome, Android 14  

### Steps to Reproduce  
1. Open the homepage.  
2. Click the dropdown menu to open it.  
3. Click again to close it.  

### Expected Result  
The dropdown should collapse when clicked again.  

### Actual Result  
The dropdown remains open and does not respond to clicks. (screenshots/notWorking.jpeg)  

---

## ♦️ Bug #14 – Gallery and Album Preview Not Functional  

**Type:** Functional Bug  
**Severity:** High  
**Environment:** Chrome, Android 14  

### Steps to Reproduce  
1. Open the homepage.  
2. Click the gallery icon.  
3. Scroll down.  

### Expected Result  
The gallery should remain open, allowing the user to browse albums and photos.  

### Actual Result  
After scrolling, the gallery closes unexpectedly, preventing browsing.  

---

## ♦️ Bug #15 – Unnecessary Additional Step When Creating an Album  

**Type:** UX / Functional Bug  
**Severity:** Medium  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Open the application and go to the Create Album page.  
2. Enter a valid Album Name and Description.  
3. Click Save Album.  
4. Observe that a new screen appears saying "Almost done!", asking to upload a cover image.  

### Expected Result  
The album creation process should request all required information, including the cover image on the same screen, before clicking Save Album.  
The album should not require an additional confirmation screen.  

### Actual Result  
After saving the album, a new page appears "Almost done!" asking the user to upload a cover image.  
This introduces an unnecessary extra step and interrupts the album creation flow.  

---

## ♦️ Bug #16 – Weak Password Accepted During Registration  

**Type:** Validation / Security Bug  
**Severity:** High  
**Environment:** Chrome, Windows 10, Android 14  

### Steps to Reproduce  
1. Open the registration page.  
2. Enter a valid email address and username.  
3. Set the password to a weak value, e.g., "asdb" (only lowercase letters, no numbers or symbols).  
4. Complete the registration process.  

### Expected Result  
The system should validate the password strength and prevent registration with weak passwords.  
It should require a password that includes a combination of uppercase letters, lowercase letters, numbers, and/or special characters and enforce a minimum length to at least 8 characters.  

### Actual Result  
The application allows registration with an extremely weak password such as "asdb", without any warning or validation error.  


---

# 💡 Suggestions / Improvements  

---

### Suggestion #1 – Enable User Search  

**Type:** UX Improvement  
**Priority:** Medium  
**Environment:** Chrome, Windows 10  

#### Description  
Currently, it is only possible to search by photo title.  

#### Expected Benefit  
Allowing users to search by author would make it easier to find photos from specific users and improve overall user experience.  

---

### Suggestion #2 – Add "Drag & Drop" Photo Upload  

**Type:** UX Improvement  
**Priority:** Medium  
**Environment:** Chrome, Windows 10  

#### Description  
Currently, photos can only be uploaded via the standard "Browse files" option.  
It is recommended to add a drag & drop upload feature within the upload area.  

#### Expected Benefit  
Provides a faster and more intuitive way to upload photos, aligning with modern web app standards.  
The drag & drop feature should complement, not replace, the existing upload dialog.  

---

### Suggestion #3 – Improve Upload Name Handling  

**Type:** Functional Improvement  
**Priority:** Medium  
**Environment:** Chrome, Windows 10  

#### Description  
Currently, uploaded photos automatically inherit the file name, even if the user entered a custom title beforehand.  
If the "Photo Name" field is already filled, it should not be overwritten.  
Optionally, add a toggle "Use File Name" that lets the user choose whether to sync the title with the file name.  

#### Expected Benefit  
Prevents user input from being overwritten and reduces the need to re-enter photo titles after upload.  

---

### Suggestion #4 – Replace Infinite Scrolling with Pagination  

**Type:** UX Improvement  
**Priority:** Medium  
**Environment:** Chrome, Windows 10  

#### Description  
The gallery currently uses infinite scrolling.  
Introduce pagination — e.g., display 20 photos per page, with navigation to next/previous pages.  

#### Expected Benefit  
- Easier navigation and return to previous content  
- Faster loading times  
- Clearer gallery structure and better control  

---

### Suggestion #5 – Add Autocomplete for Search  

**Type:** UX Improvement  
**Priority:** Medium  
**Environment:** Chrome, Android 14, Windows 10  

#### Description  
Currently, search results appear only after entering the full term and pressing Enter.  
Implement autocomplete so that suggestions appear as the user types (e.g., after two characters).  
Include a slight delay (e.g., 300–500 ms) to avoid excessive API requests.  

#### Expected Benefit  
- Faster and more intuitive searching  
- Fewer typing errors  
- Improved user experience  

---

### Suggestion #6 – Remove Unnecessary Gallery Access Step  

**Type:** UX Improvement  
**Priority:** Low  
**Environment:** Chrome, Windows 10  

#### Description  
The gallery requires an additional click to open before scrolling, instead of being visible immediately.  

#### Expected Benefit  
Simplifies navigation by allowing users to scroll directly to the gallery without an extra step.  

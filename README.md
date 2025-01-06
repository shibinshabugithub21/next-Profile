<!-- User Profile Creation Form Documentation -->

1. Project Overview
The purpose of this project is to create a user profile creation form using Next.js. The form will allow users to input personal details and validate their password against specific requirements. The form will use Tailwind CSS for styling and will include client-side validation for the following fields:

Name: Required
Email: Required, Must be in valid email format
Phone: Optional
Password: Required, Must meet password policy
Once the form is filled out and validated, the user will be shown a confirmation message upon successful submission.

2. Functional Requirements
2.1 Form Fields
The form should allow users to input the following details:

Name:

Required: Yes
Type: String
Validation:
Must only accept alphabetic characters and spaces.
Error Message: "Name is required" or "Name should only contain letters and spaces."
Email:

Required: Yes
Type: String
Validation:
Must be a valid email address format (e.g., user@example.com).
Error Message: "Email is required" or "Invalid email format."
Phone:

Required: No
Type: Numeric
Validation:
If filled, it should only contain numeric digits.
Should be exactly 10 digits.
Error Message: "Phone must contain only numbers" or "Phone number should be exactly 10 digits."
Password:

Required: Yes
Type: String
Validation:
Must meet the following criteria:
At least 8 characters long.
Contains at least one uppercase letter.
Contains at least one lowercase letter.
Contains at least one numeric digit.
Contains at least one special character (e.g., @, #, $, %).
Error Messages:
"Password must be at least 8 characters"
"Password must include at least one uppercase letter"
"Password must include at least one lowercase letter"
"Password must include at least one numeric digit"
"Password must include at least one special character"
2.2 Password Policy Validation
The system must validate the password based on the following rules:

Minimum Length: At least 8 characters long.
Uppercase Letter: At least one uppercase letter (A-Z).
Lowercase Letter: At least one lowercase letter (a-z).
Numeric Digit: At least one numeric digit (0-9).
Special Character: At least one special character (e.g., @, #, $, %, etc.).
Example of a valid password: Password123!

2.3 Validation and Error Messages
Field Validation:

If any required field is left empty (excluding Phone), an error message should be displayed specifying the missing field.
If the password does not meet the specified policy, the form should show an error message listing the violated password rules.
If the email format is invalid, an error message indicating "Invalid email format" should be displayed.
Example Errors:

Missing Name: "Name is required."
Invalid Email: "Invalid email format."
Password Policy Violations: "Password must be at least 8 characters long," etc.
2.4 Form Submission
On Success:

When the form is successfully validated, a confirmation message should be displayed (e.g., "Profile successfully created!").
Form Reset:

Upon successful submission, the form should reset, and all input fields should be cleared.
No Backend Integration:

For this exercise, backend integration is not required. The focus is on client-side validation and form handling.


Here's a structured version of your User Profile Creation Form Documentation:

User Profile Creation Form Documentation
1. Project Overview
The purpose of this project is to create a user profile creation form using Next.js. The form will allow users to input personal details and validate their password against specific requirements. The form will use Tailwind CSS for styling and will include client-side validation for the following fields:

Name: Required
Email: Required, Must be in valid email format
Phone: Optional
Password: Required, Must meet password policy
Once the form is filled out and validated, the user will be shown a confirmation message upon successful submission.

2. Functional Requirements
2.1 Form Fields
The form should allow users to input the following details:

Name:

Required: Yes
Type: String
Validation:
Must only accept alphabetic characters and spaces.
Error Message: "Name is required" or "Name should only contain letters and spaces."
Email:

Required: Yes
Type: String
Validation:
Must be a valid email address format (e.g., user@example.com).
Error Message: "Email is required" or "Invalid email format."
Phone:

Required: No
Type: Numeric
Validation:
If filled, it should only contain numeric digits.
Should be exactly 10 digits.
Error Message: "Phone must contain only numbers" or "Phone number should be exactly 10 digits."
Password:

Required: Yes
Type: String
Validation:
Must meet the following criteria:
At least 8 characters long.
Contains at least one uppercase letter.
Contains at least one lowercase letter.
Contains at least one numeric digit.
Contains at least one special character (e.g., @, #, $, %).
Error Messages:
"Password must be at least 8 characters"
"Password must include at least one uppercase letter"
"Password must include at least one lowercase letter"
"Password must include at least one numeric digit"
"Password must include at least one special character"
2.2 Password Policy Validation
The system must validate the password based on the following rules:

Minimum Length: At least 8 characters long.
Uppercase Letter: At least one uppercase letter (A-Z).
Lowercase Letter: At least one lowercase letter (a-z).
Numeric Digit: At least one numeric digit (0-9).
Special Character: At least one special character (e.g., @, #, $, %, etc.).
Example of a valid password: Password123!

2.3 Validation and Error Messages
Field Validation:

If any required field is left empty (excluding Phone), an error message should be displayed specifying the missing field.
If the password does not meet the specified policy, the form should show an error message listing the violated password rules.
If the email format is invalid, an error message indicating "Invalid email format" should be displayed.
Example Errors:

Missing Name: "Name is required."
Invalid Email: "Invalid email format."
Password Policy Violations: "Password must be at least 8 characters long," etc.
2.4 Form Submission
On Success:

When the form is successfully validated, a confirmation message should be displayed (e.g., "Profile successfully created!").
Form Reset:

Upon successful submission, the form should reset, and all input fields should be cleared.
No Backend Integration:

For this exercise, backend integration is not required. The focus is on client-side validation and form handling.
3. Styling with Tailwind CSS
Tailwind CSS will be used for styling. Ensure that you have Tailwind CSS installed and configured in your Next.js project.

Form Inputs, Buttons, and Error Messages will be styled using Tailwind’s utility-first classes.


<!-- 4. Unit Testing -->
4.1 Introduction to Unit Testing
Unit testing is a practice of testing individual units (components) of the application to ensure that each part functions as expected. For this project, Jest and React Testing Library will be used to write unit tests for the form components.

4.2 Testing Setup:npm install --save-dev jest @testing-library/react @testing-library/jest-dom


5. Conclusion
This project aims to create a robust user registration form with real-time validation and error handling. The key features include:

Validating the name, email, and password fields.
Enforcing password strength with specific policies.
Providing clear error messages and success messages.
Utilizing Tailwind CSS for a responsive design.
Writing unit tests to ensure that the form behaves correctly.
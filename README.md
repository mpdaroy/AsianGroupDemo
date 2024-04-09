# AsianGroupDemo


Steps to Run the WebDriver.io
1. Clone the repository
2. Open PowerShell and navigate to the directory where you clone it
3. Run 'npm install'
4. Run 'npm run wdio' to execute the test cases



Login Test Suite
TC1A - As a user, it should be able to select language on dropdown - JP
TC1B - As a user, it should be able to select language on dropdown - KR
TC1C - As a user, it should be able to select language on dropdown - CN
TC1D - As a user, it should be able to select language on dropdown - EN
TC2 - As a user, it should prompt error message when email is misspelled, blank or invalid
TC3 - As a user, it should prompt error message when password is blank or incorrect
TC4 - As a user, it should load Forgot Password page when click forgot password link
TC5 - As a user, it should navigate to Register Page when clicking on Register link
TC6 - As a user, it should store credentials when remember me checkbox is checked
TC7 - As a user, it should NOT store credentials when remember me checkbox is unchecked
TC8 - As a user, it should be able to Login successfully


Register Test Suite
TC1 - As a user, It should be able to click register link
TC2 - As a user, It should be able to successfully registered after inputting all fields
TC3A - As a user, It should prompt error message when email is blank
TC3B - As a user, It should prompt error message when email is invalid
TC4 - As a user, It should prompt error message when password is blank
TC5A - As a user, It should prompt error message when confirm password is blank
TC5B - As a user, It should prompt error message when confirm password is mismatch
TC6A - As a user, it should be able to select language in registering - JP
TC6B - As a user, it should be able to select language in registering - KR
TC6C - As a user, it should be able to select language in registering - EN
TC6D - As a user, it should be able to select language in registering - CN
TC7 - As a user, it should be able to click back to Login when on Register page

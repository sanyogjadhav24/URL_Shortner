
#URL Shortener
This project is a simple URL Shortener application built with Node.js and Express. It allows users to shorten URLs and provides an analytics table to track information like the number of clicks and the original URLs.

Features:
-Shorten long URLs into easily shareable links.
-Track analytics such as:
  -Shortened URL ID
  -Original URL
  -Number of clicks on each URL.
-User-friendly interface.


Getting Started:

Follow these steps to set up and run the project locally:

Prerequisites
Make sure you have the following installed:

-Node.js (v14 or above)
-npm (Node Package Manager)
-Installation


-Clone this repository to your local machine:
       git clone <repository-url>
-Navigate to the project directory:
      cd <project-directory>
-Install the required dependencies:
      npm install

      
Running the Project:

-Start the application:
    npm start
-Open your browser and navigate to:
  http://localhost:8001
  
How to Use:

-Enter the original URL in the input box and click "Generate."
-The application will provide a shortened URL.
-View the analytics table to track:
-Shortened URL ID
-The redirect link
-The number of clicks on the shortened URL.


Folder Structure:

project-folder/
├── assets/              # Contains static assets like CSS files
│   └── style.css        # CSS for the application
├── views/               # Contains EJS templates
│   └── index.ejs        # Main HTML page
├── routes/              # Application routes
│   └── url.js           # URL shortening and analytics routes
├── app.js               # Main application file
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation

Dependencies:

This project uses the following npm packages:

express: For handling server-side logic.
body-parser: For parsing incoming request bodies.
mongoose: For connecting to and working with MongoDB.
ejs: For rendering dynamic HTML templates.

Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.

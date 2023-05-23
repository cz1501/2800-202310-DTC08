# 2800-202310-DTC08

# Project Title
* NewJourney

## 1. Project Description
Our Project, NewJourney, is developing an app to provide multilingual assistance to help newcomers navigate everyday tasks in Vancouver by providing step-by-step, easy-to-digest road maps.

## 2. Complete setup & installion
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps to assemble a development environment (assuming you're a part of our development team):
1. Ask us to add you as a collaborator on the github repo. Our contact information is at the bottom of this file.
2. You will get an email from github - accept the invitation to collaborate.
3. Clone the repo to your machine to be able to work on it locally. 
4. You will need a .env file with the following fields:
```
OPENAI_API_KEY 
ATLAS_DB_USERNAME
ATLAS_DB_PASSWORD
ATLAS_DB_HOS
NODE_SESSION_SECRET
MONGO_SESSION_SECRET
PORT=3000
GMAIL_KEY0=2800-202310-DTC08
GMAIL_KEY
GMAIL_EMAIL
BCRYPT_SALT
CLIENT_URL
```
If you are a developer working on this project with us (or an instructor marking our project), which we assume you are if you are reading these instructions, we will provide the values of these keys to you separately to make sure anything posted to github is okay to be shared publicly.
5. Make sure to type "npm install" in your terminal to make sure your project has all the necessary modules to run.
6. If you don't have nodemon, install it. Instructions can be found here: https://www.npmjs.com/package/nodemon 
7. Now, you can run the project on localhost. Type "nodemon server.js" in your terminal.
8. Type "localhost:3000" in your internet browser. There's our index.ejs page!

## 3. Core Features
* Create account/login
1. On the index page (it says NewJourney at the top and has a bunch of language names in the background), select your language from the dropdown and click the green checkmark.
2. If you don't have an account yet, click the yellow signup button.
3. Enter all your information in the input fields and click "register". You will be signed in!
4. If you already have an account, after clicking the green checkmark on the index page, click the grey login button.
5. Enter your username and email, and click login. You will be signed in!

* Ask questions to the app which will recieve replies generated by ChatGPT in the form of step-by-step roadmaps. 
1. Once you are logged in, you will see the main.ejs page. You can verify this by looking at your browser address bar, which should read '/main' at the end.
2. Type your query in the input field that says "How to ...".
3. Click the envelope icon.
4. You will have to wait a few seconds. A loading animation will appear. This is normal. Sometimes, when chatGPT is overloaded, you will encounter an error page at this step. That's okay! Take a breath, grab some water, come back later, and try again.
5. A roadmap will appear before your eyes with step-by-step instructions on how to complete what you asked for instructions for. 

* Users can save roadmaps
1. After receiving a roadmap reply from the chatGPT API, There is a bookmark icon. Click it! 
2. You will get a message saying your roadmap has been saved.
3. Verify that your roadmap has been saved by navigating to "My Maps" (the middle icon on the bottom nav bar).

* Users can check off steps they have completed of roadmaps

* Users can change their language preferences
* Users can share roadmaps to others using the app

## 4. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* ...
* ...
* ...

## 5. Known Bugs and Limitations
Here are some known limitations:
* The speed of ChatGPT replies are approximately 30 seconds. We have added a 'loading' animation so it's obvious that something is happening
* The relevance of GPT replies - last trained on information from September 2021 some info will be out of date. This has been previously discussed
* ...


## 6. Features for Future
What we'd like to build in the future:
* ...
* ...
* ...
	
## 7. Contents of Folder
Content of the project folder:


 Top level of project folder: 
├── .gitignore                # Git ignore file
├── README.md                 # README for this project
└── ...


## 8. Names of Contributors and Contact
List team members and/or short bio's here... 
* Charlie: cz4100@gmail.com
* Kate: sullivan.kate.e@gmail.com
* Oceaan: oceaanpendharkar@gmail.com
* Victor: vsctl95@gmail.com
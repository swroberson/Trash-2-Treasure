# CEN3031 - Software Engineering
## Team 8's Submission for "_Florida Hacks with IBM_" Hackathon
#### Team Members/Roles
- Andrew Zelenski - Developer
- Luke Mao - Scrum Master
- Matt Marchio - Developer
- Sam Roberson - Project Manager

###  Dependencies
- React Native CLI
- Xcode (iOS) / Android Developer (Android)
- Node (version 12 or later)
- MongoDB Realm for React Native

#### Required API Keys
- Maps - Google Maps Platform: AIzaSyD_u-kxWvULSpY4Mw74GpkpTirRlXcFBDY. 
- Public API Key for the MongoDB Realm Application: 6c4589c7-ca85-4cc9-805f-a4d90753ea5a.

### To Run the App
- After installing the necessary dependencies, clone this github repository
- Open the project file in the IDE of your choice
- To start the metro server, open a command terminal at the project’s root directory and enter the command `npm start`
- Before building and running the app for the first time, open another command terminal at the project’s root directory and enter the command `npm install`
- If you plan on running the app on an iOS emulator, you’ll have to update the Podfile. To do this, run the command 
	`cd ios && pod install && cd ..`
- Launch the app on the emulator of your choice by entering the command `npx react-native run-[android/ios]`

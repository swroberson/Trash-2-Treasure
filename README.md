# CEN3031 - Software Engineering
## Team 8's Submission for "_Florida Hacks with IBM_" Hackathon
### Team Members/Roles
- Andrew Zelenski - Developer
- Luke Mao - Scrum Master
- Matt Marchio - Developer
- Sam Roberson - Project Manager

### Project Description
_Trash 2 Treasure_ is a cross-platform mobile app used to encourage UF students to recycle empty food and beverage containers/wrappers. 
Students around the UF Gainesville Campus who download this app and participate in this program will have the opportunity to bring their recyclables to specified locations around campus.
By depositing their recyclables at these locations, users would be awarded points based on how many items they recycled, which could be redeemed at the UF team store, campus cafeterias, and other participating stores.


###  Dependencies
- React Native CLI
- Xcode (iOS) / Android Developer (Android)
- Node (version 12 or later)
- MongoDB Realm for React Native

#### Required API Keys
- Maps - Google Maps Platform: `AIzaSyD_u-kxWvULSpY4Mw74GpkpTirRlXcFBDY` 
- Public API Key for the MongoDB Realm Application: `6c4589c7-ca85-4cc9-805f-a4d90753ea5a`

### Running the application
- After installing the necessary dependencies, clone this github repository
- Before building and running the app for the first time, open a command terminal at the project’s root directory and enter the command `npm install`
- To start the metro server, open a command terminal at the project’s root directory and enter the command `npm start`
- If you plan on running the app on an iOS emulator, you’ll have to update the Podfile with `cd ios && pod install && cd ..`
- Launch the app on the emulator of your choice by entering the command `npx react-native run-[android|ios]`

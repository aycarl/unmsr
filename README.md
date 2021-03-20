# UNM Student Resource App (UNM-SR)

UNM-SR is a resource application for all UNM students. The goal of this app is to connect students to clubs, organizations, resources and events on campus.
For new and continuing students, finding and connecting with communities and friends with similar interests could be challenging especially in recently times due to the COVID-19 pandemic restrictions. 
UNM-SR empowers students to **explore**, **discover** and **connect** with student clubs, organizations and other on-campus resources, as well as their respective events and updated.
Currently, UNM-SR displays UNM events from the [UNM Open data store](https://opendata.unm.edu/) and data on a few 
student organizations from the [UNM Student Activities Center](https://unm-community.symplicity.com/index.php?s=student_group)

---
UNM-SR was built using [Expo](https://docs.expo.io/), is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

## Development & Maintenance
For more more information on development and maintenance of the app, visit the [wiki](https://github.com/aycarl/unmsr/wiki).

## Planning & Design
* Initial concepts and prototype: [Adobe XD Prototype](https://xd.adobe.com/view/52291350-7d85-4961-86e0-dd6a36e02399-077a/)
* User Flow planning, application state design, NoSQL database objects: [Whimsical Board](https://whimsical.com/aycarl-62GQVYzpH9AFv9Z7QNUr6T@VsSo8s35UiUnYLpBRNbYeV)
* Planning and Project Management: [Trello board](https://trello.com/invite/b/tPcqzi9f/d70b5feab85a388f43ad1e2452c51811/unm-sr) (PS. you can only view)

## App Preview
The following are three screenshots of the app running on a device (from the left):
* 1st screenshot: The explore sreen where users (students) can search for UNM organizations
* 2ns screenshot: The details page of a sample/demo student organization
* 3rd screenshot: The user's profile page

![3 Screenshots of the UNMSR App](https://github.com/aycarl/unmsr/blob/dev/assets/330ppi/app-screenshots%40330x-01.png)

### Try it out!

Download the APK file here: [UNM SR App](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40aycarl/unmsr-f8a11a3afa224199a71c15cf637a6fc3-signed.apk)
* Note this is only for Andoird devices & you must enable the the installation of apps from "unknown" sources since tha UNM SR App is not yet on the Andoird play store/

**OR**

Test the app in a development environment with the Expo Mobile App: https://expo.io/@aycarl/projects/unmsr

#### User Authentication
Use the test account below or sign up and create your own!
* **Email:** `alexis@unm.edu`
* **Password:** `asdf4321`


## Installation (Development Environment)
### Requirements
* [Node.js LTS release](https://nodejs.org/en/)
* [Yarn package dependency manager](https://classic.yarnpkg.com/en/docs/install#windows-stable)
* [Git](https://git-scm.com)

### Steps (in your command prompt window)
1. [Install the Expo CLI](https://docs.expo.io/get-started/installation/)
```
$ npm install --global expo-cli
```

2. Clone this repository
```
$ git clone https://github.com/aycarl/unmsr.git
```

3. navigate to local repository directory
```
$ cd unmsr
```

4. Paste a copy of the `.env` file containing the environment variables in the root directory of your local clone
- `.env` file available on [request](#contact-info)

5. Install app dependency packages
```
$ yarn install
```

6. Run application locally
```
$ yarn start
```

7. View application on a mobile device: 
* Download the Expo client app for iOS or Android
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) and greater.
  - [iOS App Store](https://itunes.com/apps/exponent) - iOS 10 and greater.
* Open Expo Client App
* Scan QR code displayed in command prompt window or in Expo Developer Tools in your local browser

## Tools and Development Dependencies
UNM-SR is 100% built with Javascript. Tools used include:
* [Expo CLI](https://docs.expo.io/)
* [React Native](https://reactnative.dev/) (multi-platform javascript mobile application framework)
* [React Navigation](https://reactnavigation.org/docs/getting-started/) (screen navigation management)
* [React Native Paper](https://callstack.github.io/react-native-paper/index.html) (styling)
* [React Redux](https://redux.js.org/) (state management)
* [Reselect](https://github.com/reduxjs/reselect) (memoized data selectors from app state)

Data Sources
* Events data [UNM Open Data](https://opendata.unm.edu/index.html)
* Test organization data mocked from the [UNM Student Activities Center](https://unm-community.symplicity.com/index.php?s=student_group)

Database & User Authentication
* [Google Firebase](https://firebase.google.com/)

## Team Member

### [Carl Yao Agbenyega](https://github.com/aycarl) - Full-Stack Developer
Carl is a recent graduate from the Masters in Information Systems and Assurance program at the UNM Anderson School of Management.
He is a software developer with a passion for design.

## Contact Info
- **Email:** aycarl@unm.edu / aycarl@hotmail.com

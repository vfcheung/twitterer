# Twitterer

This project will help familiarize LA Blueprint's devs with React Native. It will also help devs set up their environment before jumping into the NPO projects.

## What is this project?

You will develop a super simple Yik Yak/Twitter clone.

In this app, a user can
- enter their name
- see a list of everyone's tweets in chronological order
- create a new tweet

Demo: https://www.youtube.com/watch?v=YqLg310TVAI

Important tools you will use:
- React Native: A library and framework for building Android and iOS apps in Javascript.
- Firebase: A cloud provider that contains many useful services. Here, we will use Firestore, a database.
- ESLint: A linter, or a tool that checks your code for style issues. This helps keep all our code consistent.
- Visual Studio Code: You can use any editor you want, but VS Code is what most of us at LA Blueprint use and contains many features that will improve your workflow.
- Git: Practice version control by commiting small diffs and commiting often.

## Get started

### Get started with React Native

Finish the intro React course on codecademy: https://www.codecademy.com/learn/react-101
  - This is not React Native, but the concepts will be the same
  
Then read/skim the official tutorial to learn the specifics of React Native: https://facebook.github.io/react-native/docs/tutorial

### Set up your environment

Follow the offical React Native guide: https://facebook.github.io/react-native/docs/getting-started
- Choose React Native CLI instead of Expo CLI

Download Visual Studio Code, the editor most of us use.

Install git if you don't have it.

### Set up ESLint

Find the ```.eslintrc.js``` file in this repo and copy it to yours. This file contains all the rules that we use for our code style.

### Automatically lint your code with ESLint on VS Code

To more productively comply with our ESLint rules, we can underline the problem areas and enable autoformatting on save.

Install the ESLint plugin: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Then add the following to your ```.vscode/settings.json``` (create it if it doesn't exist):

```json
{
  "javascript.format.enable": false,
  "eslint.run": "onType",
  "files.eol": "\n",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}

```

If this file already exists and there's something in it, just add these settings to the end:

```json
{
  ...other settings

  ...

  "javascript.format.enable": false,
  "eslint.run": "onType",
  "files.eol": "\n",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

Then add the following eslint packages to your ```devDependencies``` in your ```package.json```:

```json
"devDependencies": {

  ...

  "eslint-config-airbnb": "^18.0.1",
  "eslint-plugin-import": "^2.18.2",
  "eslint-plugin-jsx-a11y": "^6.2.3",
  "eslint-plugin-react": "^7.17.0",
  "eslint-plugin-react-hooks": "^1.7.0",
  
  ...

},
```

Then run ```npm install``` to install these packages.

Then restart VS Code and now all your style issues will be automatically highlighted as you type and fixed when you save!

### Block commiting changes that do not comply with our ESLint rules

Add a git pre-commit hook to your ```.git/hooks``` folder. Ask a Project Lead how to do this.

### (Windows) Prevent git from converting LF to CRLF

Add the following line to the end of your ```.gitattributes``` (create it if it doesn't exist):

```
* text eol=lf
```

## Milestones

Initial steps:

1. Get an empty React Native app running on your phone or emulator.
2. Create a ```<HomeScreen />``` component with a ```<TextInput />``` for your name and ```<Button />``` that doesn't do anything for now. Render the ```<HomeScreen />``` in ```App.js``` so you can see it in your phone or emulator (you should delete the example code in ```App.js``` that came with the empty React Native project). See the demo video for an example of how this should look. Look for the ```<HomeScreen />``` component in the example code in this repo if you get stuck.
3. An app with only a home screen is pointless, so we will add a second screen and a navigator to switch between the screens. Create a ```<TweetsScreen />``` component with nothing on it. From the ```<HomeScreen />```, navigate to the ```<TweetsScreen />``` after clicking the ```<Button />``` you made in Milestone 2. You will need to use ```createStackNavigator``` from React Navigation. See the example code in this repo or skim this introduction: https://medium.com/@rossbulat/introduction-to-react-navigation-and-navigators-in-react-native-3efcf7239a43
4. Create a ```<NewTweetScreen />``` with nothing on it. From the ```<TweetsScreen />```, add a ```<Button />``` that navigates to ```<NewTweetScreen />```.
5. On the ```<NewTweetScreen />```, add a ```<TextInput />``` for your tweet and ```<Button />``` that doesn't do anything for now.
6. Add a welcome message on the ```<TweetsScreen />``` that includes the name the user enters on the ```<HomeScreen />```. You will need to figure out how to pass the name between screens when you navigate.

The hardest steps:

7. Add firebase! We will use the firestore database to store and load the tweets. https://invertase.io/oss/react-native-firebase/quick-start/create-firebase-project
8. On the ```<NewTweetScreen />```, set up the ```<Button />``` to upload the tweet and username to firestore.
9. On the ```<TweetsScreen />```, read the entire tweets collection from firestore and display them in a **list** of custom ```<Tweet />``` component (you can make this yourself however you like).

Be sure to make many git commits along the way. One commit per milestone is a good option, but feel free to do it however you like as long as the commits are small and represent something complete.

Focus on functionality over form. The app will look ugly and not be very usable, but that's fine for now. We want you to get comfortable with creating an app that works, and styling will be something you can learn as you go.

And have fun with this! It's very rewarding to create an app because you can instantly see your work.

Good luck!


## Useful links

- React Native API documentation: https://facebook.github.io/react-native/docs/activityindicator
  - Find what UI elements you can leverage!
- React Navigation introduction: https://medium.com/@rossbulat/introduction-to-react-navigation-and-navigators-in-react-native-3efcf7239a43
  - A single screen isn't useful. Create an app with multiple screens!
- React Native Firebase: https://invertase.io/oss/react-native-firebase/
  - This is a library with functions for interacting with Firebase. It's super useful.
- Firestore (Firebase's database) documentation: https://firebase.google.com/docs/firestore/manage-data/add-data
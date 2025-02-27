# ToDoList-ReactNative

ToDoList-ReactNative is a todo list mobile app that's developed using [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/).

## How to run the app
1. Set Up Your Environment, follow the official guide on [reactnative.dev](https://reactnative.dev/docs/set-up-your-environment) and make sure to select your OS
2. cd to `app` and run the following:
```sh
cd app # Make sure you're in the app's directory

yarn install # Get all the required packages

yarn android # Builds & runs the Android app

# or
yarn ios # to build & run the IOS app
```

## Entering Development Environment

If you're using Linux/Nix (for Android), run the following commands:

otherwise refer to [Expo (Setup your env)](https://docs.expo.dev/get-started/set-up-your-environment/) for specific information about how to setup your development environment.

## Using Direnv
```bash
#cd to your project
direnv allow # Depends on ur internet speed, sit back, relax and watch the magic happens.

dev # Starts the emulator, development server and app
```
## Not using Direnv
```bash
#cd to your project
nix develop . # Depends on ur internet speed, sit back, relax and watch the magic happens.

dev # Starts the emulator, development serve, builds and run the app
```

# Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)


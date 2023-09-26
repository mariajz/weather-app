# Getting Started with Weather App

## Overview

This react native weather app is designed to replicate the user experience of the iOS Weather App. It provides users with accurate and up-to-date weather information in an intuitive and visually appealing interface.

-   Real-time weather data tailored to your current location.
-   Daily weather summaries starting from the present time.
-   14-day forecast (number of days may vary depending on API plan).
-   Smart location search for precise weather updates based on your input.
-   Additional features including Humidity, Visibility, "Feels like" temperature, UV index with warnings, and actionable suggestions.

## Table of Contents

-   [Preview](#preview)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Folder Structure](#folder-structure)
-   [Running the App](#running-the-app)
-   [Available Scripts](#available-scripts)
-   [Dependencies](#dependencies)
-   [Troubleshooting](#troubleshooting)
-   [Disclaimer](#disclaimer)

### Preview <a id="preview"></a>

---

<img src="assets/gifs/simulator-recording.gif" width="200" height="432" />

### Prerequisites <a id="prerequisites"></a>

---

Before you start, ensure you have the following software installed:

-   Node.js (Recommended: version >= v18.0.0)
-   yarn (Recommended: version >= 1.22.19)
-   Xcode (For iOS development)
-   Android Studio (For Android development)

### Getting Started <a id="getting-started"></a>

---

#### Step 1: Clone the repo

To clone the repo, run the following command from your desired folder:

```bash
git clone git@github.com:mariajz/weather-app.git
```

#### Step 2: Install dependencies

Run the following command to install all the packages and dependencies:

```bash
yarn
```

#### Step 3: Add Api Key

Signup for a free plan on [WeatherApi](https://www.weatherapi.com/)

```bash
open .env
echo 'WEATHER_API_KEY="your key"' >> .env
```

### Folder Structure <a id="folder-structure"></a>

---

-   src/: Contains the source code of the React Native app.
    -   components/: Houses reusable components.
    -   screens/: Contains different screens of the app.
    -   navigation/: Manages app navigation.
-   assets/: Includes static assets like images and icons.

### Running the App <a id="running-the-app"></a>

---

To launch your app on either Android or iOS, use the following commands:

##### For Android

```bash
yarn android
```

##### For iOS

```bash
yarn ios
```

Please ensure you grant location permission to fetch weather details based on your current location.

### Available Scripts <a id="available-scripts"></a>

---

For linting errors, use the following command:

```bash
yarn lint
```

To execute all tests, use the following command:

```bash
yarn test
```

To restart the Metro Bundler, use the following command:

```bash
yarn metro
```

### Dependencies <a id="dependencies"></a>

---

List of major dependencies:

-   [React Navigation](https://reactnavigation.org/): Navigation library for React Native.
-   [Jotai](https://jotai.org/): State management library.
-   Axios: A versatile HTTP client for making network requests.
-   [react-native-geolocation-service](https://www.npmjs.com/package/react-native-geolocation-service): Enables fetching user's location with ease

### Troubleshooting <a id="troubleshooting"></a>

---

If you encounter any issues while setting up or running the app, refer to the [troubleshooting guide](Troubleshooting.md).

### Disclaimer <a id="disclaimer"></a>

---

Weather App is inspired by the design and functionality of the iOS Weather App, but no copyrighted code or assets have been used in its development. It is an independent project created for educational and demonstration purposes.

The icons used in the app are sourced from [Flaticon](https://www.flaticon.com/)

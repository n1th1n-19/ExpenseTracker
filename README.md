├── .gitignore
├── App.js
├── README.md
├── app.json
├── assets
    ├── adaptive-icon.png
    ├── android
    │   ├── play_store_512.png
    │   └── res
    │   │   ├── mipmap-anydpi-v26
    │   │       └── ic_launcher.xml
    │   │   ├── mipmap-hdpi
    │   │       ├── ic_launcher.png
    │   │       ├── ic_launcher_background.png
    │   │       ├── ic_launcher_foreground.png
    │   │       └── ic_launcher_monochrome.png
    │   │   ├── mipmap-mdpi
    │   │       ├── ic_launcher.png
    │   │       ├── ic_launcher_background.png
    │   │       ├── ic_launcher_foreground.png
    │   │       └── ic_launcher_monochrome.png
    │   │   ├── mipmap-xhdpi
    │   │       ├── ic_launcher.png
    │   │       ├── ic_launcher_background.png
    │   │       ├── ic_launcher_foreground.png
    │   │       └── ic_launcher_monochrome.png
    │   │   ├── mipmap-xxhdpi
    │   │       ├── ic_launcher.png
    │   │       ├── ic_launcher_background.png
    │   │       ├── ic_launcher_foreground.png
    │   │       └── ic_launcher_monochrome.png
    │   │   └── mipmap-xxxhdpi
    │   │       ├── ic_launcher.png
    │   │       ├── ic_launcher_background.png
    │   │       ├── ic_launcher_foreground.png
    │   │       └── ic_launcher_monochrome.png
    ├── app-icon.png
    ├── favicon.ico
    ├── favicon.png
    ├── icon.png
    ├── splash-icon.png
    └── web
    │   ├── README.txt
    │   ├── apple-touch-icon.png
    │   ├── icon-192-maskable.png
    │   ├── icon-192.png
    │   ├── icon-512-maskable.png
    │   └── icon-512.png
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── components
        ├── CategoryPicker.js
        ├── CategorySelectionPopup.js
        ├── CustomAlert.js
        ├── CustomPopup.js
        ├── DebugPopup.js
        ├── ExpenseDetailsPopup.js
        ├── ExpenseForm.js
        ├── ExpenseItem.js
        ├── FilterSortPopup.js
        ├── InlineCategoryPicker.js
        ├── SimpleCategoryPopup.js
        ├── SimpleFilterPopup.js
        └── TestModal.js
    ├── context
        ├── ExpenseContext.js
        └── SecurityContext.js
    ├── hooks
        └── useCustomAlert.js
    ├── navigation
        └── AppNavigator.js
    ├── screens
        ├── AddExpenseScreen.js
        ├── HomeScreen.js
        ├── PinEntryScreen.js
        ├── PinSetupScreen.js
        ├── SettingsScreen.js
        └── StatisticsScreen.js
    └── utils
        ├── helpers.js
        └── storage.js


/.gitignore:
--------------------------------------------------------------------------------
 1 | # Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files
 2 | 
 3 | # dependencies
 4 | node_modules/
 5 | 
 6 | # Expo
 7 | .expo/
 8 | dist/
 9 | web-build/
10 | expo-env.d.ts
11 | 
12 | # Native
13 | .kotlin/
14 | *.orig.*
15 | *.jks
16 | *.p8
17 | *.p12
18 | *.key
19 | *.mobileprovision
20 | 
21 | # Metro
22 | .metro-health-check*
23 | 
24 | # debug
25 | npm-debug.*
26 | yarn-debug.*
27 | yarn-error.*
28 | 
29 | # macOS
30 | .DS_Store
31 | *.pem
32 | 
33 | # local env files
34 | .env*.local
35 | 
36 | # typescript
37 | *.tsbuildinfo
38 | 
39 | # generated native folders
40 | /ios
41 | /android
42 | 


--------------------------------------------------------------------------------
/App.js:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { StatusBar } from 'expo-status-bar';
 3 | import { ExpenseProvider } from './src/context/ExpenseContext';
 4 | import { SecurityProvider } from './src/context/SecurityContext';
 5 | import AppNavigator from './src/navigation/AppNavigator';
 6 | 
 7 | export default function App() {
 8 |   return (
 9 |     <SecurityProvider>
10 |       <ExpenseProvider>
11 |         <AppNavigator />
12 |         <StatusBar style="light" backgroundColor="#000000" />
13 |       </ExpenseProvider>
14 |     </SecurityProvider>
15 |   );
16 | }
17 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
1 | [![n1th1n-19/Xpens context](https://badge.forgithub.com/n1th1n-19/Xpens?accept=text%2Fhtml&maxTokens=500000)](https://uithub.com/n1th1n-19/Xpens?accept=text%2Fhtml&maxTokens=500000)
2 | 


--------------------------------------------------------------------------------
/app.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "expo": {
 3 |     "name": "Xpens",
 4 |     "slug": "xpens",
 5 |     "version": "1.0.0",
 6 |     "orientation": "portrait",
 7 |     "icon": "./assets/app-icon.png",
 8 |     "userInterfaceStyle": "light",
 9 |     "newArchEnabled": true,
10 |     "splash": {
11 |       "image": "./assets/splash-icon.png",
12 |       "resizeMode": "contain",
13 |       "backgroundColor": "#000000"
14 |     },
15 |     "assetBundlePatterns": [
16 |       "**/*"
17 |     ],
18 |     "ios": {
19 |       "supportsTablet": true
20 |     },
21 |     "android": {
22 |       "package": "com.yourname.xpens",
23 |       "versionCode": 1,
24 |       "compileSdkVersion": 34,
25 |       "targetSdkVersion": 34,
26 |       "buildToolsVersion": "34.0.0",
27 |       "icon": "./assets/app-icon.png",
28 |       "adaptiveIcon": {
29 |         "foregroundImage": "./assets/adaptive-icon.png",
30 |         "backgroundColor": "#000000"
31 |       },
32 |       "splash": {
33 |         "image": "./assets/splash-icon.png",
34 |         "resizeMode": "contain",
35 |         "backgroundColor": "#000000"
36 |       },
37 |       "permissions": [
38 |         "WRITE_EXTERNAL_STORAGE"
39 |       ],
40 |       "edgeToEdgeEnabled": true
41 |     },
42 |     "web": {
43 |       "bundler": "metro",
44 |       "output": "static"
45 |     },
46 |     "plugins": [
47 |       [
48 |         "expo-build-properties",
49 |         {
50 |           "android": {
51 |             "compileSdkVersion": 34,
52 |             "targetSdkVersion": 34,
53 |             "buildToolsVersion": "34.0.0"
54 |           }
55 |         }
56 |       ]
57 |     ]
58 |   }
59 | }
60 | 


--------------------------------------------------------------------------------
/assets/adaptive-icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/adaptive-icon.png


--------------------------------------------------------------------------------
/assets/android/play_store_512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/play_store_512.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-anydpi-v26/ic_launcher.xml:
--------------------------------------------------------------------------------
1 | <?xml version="1.0" encoding="utf-8"?>
2 | <adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
3 |   <background android:drawable="@mipmap/ic_launcher_background"/>
4 |   <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
5 |   <monochrome android:drawable="@mipmap/ic_launcher_monochrome"/>
6 | </adaptive-icon>


--------------------------------------------------------------------------------
/assets/android/res/mipmap-hdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-hdpi/ic_launcher.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-hdpi/ic_launcher_background.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-hdpi/ic_launcher_background.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-hdpi/ic_launcher_foreground.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-hdpi/ic_launcher_foreground.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-hdpi/ic_launcher_monochrome.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-hdpi/ic_launcher_monochrome.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-mdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-mdpi/ic_launcher.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-mdpi/ic_launcher_background.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-mdpi/ic_launcher_background.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-mdpi/ic_launcher_foreground.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-mdpi/ic_launcher_foreground.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-mdpi/ic_launcher_monochrome.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-mdpi/ic_launcher_monochrome.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xhdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xhdpi/ic_launcher.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xhdpi/ic_launcher_background.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xhdpi/ic_launcher_background.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xhdpi/ic_launcher_foreground.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xhdpi/ic_launcher_foreground.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xhdpi/ic_launcher_monochrome.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xhdpi/ic_launcher_monochrome.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xxhdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xxhdpi/ic_launcher.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xxhdpi/ic_launcher_background.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xxhdpi/ic_launcher_background.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xxhdpi/ic_launcher_foreground.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xxhdpi/ic_launcher_foreground.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xxhdpi/ic_launcher_monochrome.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xxhdpi/ic_launcher_monochrome.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xxxhdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xxxhdpi/ic_launcher.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xxxhdpi/ic_launcher_background.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xxxhdpi/ic_launcher_background.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xxxhdpi/ic_launcher_foreground.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xxxhdpi/ic_launcher_foreground.png


--------------------------------------------------------------------------------
/assets/android/res/mipmap-xxxhdpi/ic_launcher_monochrome.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/android/res/mipmap-xxxhdpi/ic_launcher_monochrome.png


--------------------------------------------------------------------------------
/assets/app-icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/app-icon.png


--------------------------------------------------------------------------------
/assets/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/favicon.ico


--------------------------------------------------------------------------------
/assets/favicon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/favicon.png


--------------------------------------------------------------------------------
/assets/icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/icon.png


--------------------------------------------------------------------------------
/assets/splash-icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/splash-icon.png


--------------------------------------------------------------------------------
/assets/web/README.txt:
--------------------------------------------------------------------------------
 1 | Add this to your HTML <head>:
 2 | 
 3 |     <link rel="icon" href="/favicon.ico" sizes="any">
 4 |     <link rel="apple-touch-icon" href="/apple-touch-icon.png">
 5 | 
 6 | Add this to your app's manifest.json:
 7 | 
 8 |     ...
 9 |     {
10 |       "icons": [
11 |         { "src": "/favicon.ico", "type": "image/x-icon", "sizes": "16x16 32x32" },
12 |         { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
13 |         { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" },
14 |         { "src": "/icon-192-maskable.png", "type": "image/png", "sizes": "192x192", "purpose": "maskable" },
15 |         { "src": "/icon-512-maskable.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
16 |       ]
17 |     }
18 |     ...
19 | 


--------------------------------------------------------------------------------
/assets/web/apple-touch-icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/web/apple-touch-icon.png


--------------------------------------------------------------------------------
/assets/web/icon-192-maskable.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/web/icon-192-maskable.png


--------------------------------------------------------------------------------
/assets/web/icon-192.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/web/icon-192.png


--------------------------------------------------------------------------------
/assets/web/icon-512-maskable.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/web/icon-512-maskable.png


--------------------------------------------------------------------------------
/assets/web/icon-512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/n1th1n-19/Xpens/85f58adbe2ef4bf247ae33fc95728952b7cc5b03/assets/web/icon-512.png


--------------------------------------------------------------------------------
/index.js:
--------------------------------------------------------------------------------
1 | import { registerRootComponent } from 'expo';
2 | 
3 | import App from './App';
4 | 
5 | // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
6 | // It also ensures that whether you load the app in Expo Go or in a native build,
7 | // the environment is set up appropriately
8 | registerRootComponent(App);
9 | 


--------------------------------------------------------------------------------
/package-lock.json:
--------------------------------------------------------------------------------
   1 | {
   2 |   "name": "xpens",
   3 |   "version": "1.0.0",
   4 |   "lockfileVersion": 3,
   5 |   "requires": true,
   6 |   "packages": {
   7 |     "": {
   8 |       "name": "xpens",
   9 |       "version": "1.0.0",
  10 |       "dependencies": {
  11 |         "@expo/metro-config": "~54.0.2",
  12 |         "@react-native-async-storage/async-storage": "2.2.0",
  13 |         "@react-native-community/datetimepicker": "8.4.4",
  14 |         "@react-navigation/bottom-tabs": "^7.4.7",
  15 |         "@react-navigation/native": "^7.1.17",
  16 |         "@react-navigation/stack": "^7.4.8",
  17 |         "expo": "~54.0.7",
  18 |         "expo-build-properties": "~1.0.8",
  19 |         "expo-constants": "~18.0.8",
  20 |         "expo-crypto": "~15.0.7",
  21 |         "expo-device": "~8.0.7",
  22 |         "expo-file-system": "~19.0.14",
  23 |         "expo-local-authentication": "~17.0.7",
  24 |         "expo-sharing": "~14.0.7",
  25 |         "expo-status-bar": "~3.0.8",
  26 |         "react": "19.1.0",
  27 |         "react-dom": "19.1.0",
  28 |         "react-native": "0.81.4",
  29 |         "react-native-safe-area-context": "~5.6.0",
  30 |         "react-native-screens": "~4.16.0",
  31 |         "react-native-uuid": "^2.0.3",
  32 |         "react-native-web": "^0.21.0"
  33 |       }
  34 |     },
  35 |     "node_modules/@0no-co/graphql.web": {
  36 |       "version": "1.2.0",
  37 |       "resolved": "https://registry.npmjs.org/@0no-co/graphql.web/-/graphql.web-1.2.0.tgz",
  38 |       "integrity": "sha512-/1iHy9TTr63gE1YcR5idjx8UREz1s0kFhydf3bBLCXyqjhkIc6igAzTOx3zPifCwFR87tsh/4Pa9cNts6d2otw==",
  39 |       "license": "MIT",
  40 |       "peerDependencies": {
  41 |         "graphql": "^14.0.0 || ^15.0.0 || ^16.0.0"
  42 |       },
  43 |       "peerDependenciesMeta": {
  44 |         "graphql": {
  45 |           "optional": true
  46 |         }
  47 |       }
  48 |     },
  49 |     "node_modules/@babel/code-frame": {
  50 |       "version": "7.10.4",
  51 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
  52 |       "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
  53 |       "license": "MIT",
  54 |       "dependencies": {
  55 |         "@babel/highlight": "^7.10.4"
  56 |       }
  57 |     },
  58 |     "node_modules/@babel/compat-data": {
  59 |       "version": "7.28.4",
  60 |       "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.4.tgz",
  61 |       "integrity": "sha512-YsmSKC29MJwf0gF8Rjjrg5LQCmyh+j/nD8/eP7f+BeoQTKYqs9RoWbjGOdy0+1Ekr68RJZMUOPVQaQisnIo4Rw==",
  62 |       "license": "MIT",
  63 |       "engines": {
  64 |         "node": ">=6.9.0"
  65 |       }
  66 |     },
  67 |     "node_modules/@babel/core": {
  68 |       "version": "7.28.4",
  69 |       "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.4.tgz",
  70 |       "integrity": "sha512-2BCOP7TN8M+gVDj7/ht3hsaO/B/n5oDbiAyyvnRlNOs+u1o+JWNYTQrmpuNp1/Wq2gcFrI01JAW+paEKDMx/CA==",
  71 |       "license": "MIT",
  72 |       "dependencies": {
  73 |         "@babel/code-frame": "^7.27.1",
  74 |         "@babel/generator": "^7.28.3",
  75 |         "@babel/helper-compilation-targets": "^7.27.2",
  76 |         "@babel/helper-module-transforms": "^7.28.3",
  77 |         "@babel/helpers": "^7.28.4",
  78 |         "@babel/parser": "^7.28.4",
  79 |         "@babel/template": "^7.27.2",
  80 |         "@babel/traverse": "^7.28.4",
  81 |         "@babel/types": "^7.28.4",
  82 |         "@jridgewell/remapping": "^2.3.5",
  83 |         "convert-source-map": "^2.0.0",
  84 |         "debug": "^4.1.0",
  85 |         "gensync": "^1.0.0-beta.2",
  86 |         "json5": "^2.2.3",
  87 |         "semver": "^6.3.1"
  88 |       },
  89 |       "engines": {
  90 |         "node": ">=6.9.0"
  91 |       },
  92 |       "funding": {
  93 |         "type": "opencollective",
  94 |         "url": "https://opencollective.com/babel"
  95 |       }
  96 |     },
  97 |     "node_modules/@babel/core/node_modules/@babel/code-frame": {
  98 |       "version": "7.27.1",
  99 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
 100 |       "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
 101 |       "license": "MIT",
 102 |       "dependencies": {
 103 |         "@babel/helper-validator-identifier": "^7.27.1",
 104 |         "js-tokens": "^4.0.0",
 105 |         "picocolors": "^1.1.1"
 106 |       },
 107 |       "engines": {
 108 |         "node": ">=6.9.0"
 109 |       }
 110 |     },
 111 |     "node_modules/@babel/core/node_modules/semver": {
 112 |       "version": "6.3.1",
 113 |       "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
 114 |       "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
 115 |       "license": "ISC",
 116 |       "bin": {
 117 |         "semver": "bin/semver.js"
 118 |       }
 119 |     },
 120 |     "node_modules/@babel/generator": {
 121 |       "version": "7.28.3",
 122 |       "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.3.tgz",
 123 |       "integrity": "sha512-3lSpxGgvnmZznmBkCRnVREPUFJv2wrv9iAoFDvADJc0ypmdOxdUtcLeBgBJ6zE0PMeTKnxeQzyk0xTBq4Ep7zw==",
 124 |       "license": "MIT",
 125 |       "dependencies": {
 126 |         "@babel/parser": "^7.28.3",
 127 |         "@babel/types": "^7.28.2",
 128 |         "@jridgewell/gen-mapping": "^0.3.12",
 129 |         "@jridgewell/trace-mapping": "^0.3.28",
 130 |         "jsesc": "^3.0.2"
 131 |       },
 132 |       "engines": {
 133 |         "node": ">=6.9.0"
 134 |       }
 135 |     },
 136 |     "node_modules/@babel/helper-annotate-as-pure": {
 137 |       "version": "7.27.3",
 138 |       "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.27.3.tgz",
 139 |       "integrity": "sha512-fXSwMQqitTGeHLBC08Eq5yXz2m37E4pJX1qAU1+2cNedz/ifv/bVXft90VeSav5nFO61EcNgwr0aJxbyPaWBPg==",
 140 |       "license": "MIT",
 141 |       "dependencies": {
 142 |         "@babel/types": "^7.27.3"
 143 |       },
 144 |       "engines": {
 145 |         "node": ">=6.9.0"
 146 |       }
 147 |     },
 148 |     "node_modules/@babel/helper-compilation-targets": {
 149 |       "version": "7.27.2",
 150 |       "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
 151 |       "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
 152 |       "license": "MIT",
 153 |       "dependencies": {
 154 |         "@babel/compat-data": "^7.27.2",
 155 |         "@babel/helper-validator-option": "^7.27.1",
 156 |         "browserslist": "^4.24.0",
 157 |         "lru-cache": "^5.1.1",
 158 |         "semver": "^6.3.1"
 159 |       },
 160 |       "engines": {
 161 |         "node": ">=6.9.0"
 162 |       }
 163 |     },
 164 |     "node_modules/@babel/helper-compilation-targets/node_modules/semver": {
 165 |       "version": "6.3.1",
 166 |       "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
 167 |       "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
 168 |       "license": "ISC",
 169 |       "bin": {
 170 |         "semver": "bin/semver.js"
 171 |       }
 172 |     },
 173 |     "node_modules/@babel/helper-create-class-features-plugin": {
 174 |       "version": "7.28.3",
 175 |       "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.28.3.tgz",
 176 |       "integrity": "sha512-V9f6ZFIYSLNEbuGA/92uOvYsGCJNsuA8ESZ4ldc09bWk/j8H8TKiPw8Mk1eG6olpnO0ALHJmYfZvF4MEE4gajg==",
 177 |       "license": "MIT",
 178 |       "dependencies": {
 179 |         "@babel/helper-annotate-as-pure": "^7.27.3",
 180 |         "@babel/helper-member-expression-to-functions": "^7.27.1",
 181 |         "@babel/helper-optimise-call-expression": "^7.27.1",
 182 |         "@babel/helper-replace-supers": "^7.27.1",
 183 |         "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1",
 184 |         "@babel/traverse": "^7.28.3",
 185 |         "semver": "^6.3.1"
 186 |       },
 187 |       "engines": {
 188 |         "node": ">=6.9.0"
 189 |       },
 190 |       "peerDependencies": {
 191 |         "@babel/core": "^7.0.0"
 192 |       }
 193 |     },
 194 |     "node_modules/@babel/helper-create-class-features-plugin/node_modules/semver": {
 195 |       "version": "6.3.1",
 196 |       "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
 197 |       "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
 198 |       "license": "ISC",
 199 |       "bin": {
 200 |         "semver": "bin/semver.js"
 201 |       }
 202 |     },
 203 |     "node_modules/@babel/helper-create-regexp-features-plugin": {
 204 |       "version": "7.27.1",
 205 |       "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.27.1.tgz",
 206 |       "integrity": "sha512-uVDC72XVf8UbrH5qQTc18Agb8emwjTiZrQE11Nv3CuBEZmVvTwwE9CBUEvHku06gQCAyYf8Nv6ja1IN+6LMbxQ==",
 207 |       "license": "MIT",
 208 |       "dependencies": {
 209 |         "@babel/helper-annotate-as-pure": "^7.27.1",
 210 |         "regexpu-core": "^6.2.0",
 211 |         "semver": "^6.3.1"
 212 |       },
 213 |       "engines": {
 214 |         "node": ">=6.9.0"
 215 |       },
 216 |       "peerDependencies": {
 217 |         "@babel/core": "^7.0.0"
 218 |       }
 219 |     },
 220 |     "node_modules/@babel/helper-create-regexp-features-plugin/node_modules/semver": {
 221 |       "version": "6.3.1",
 222 |       "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
 223 |       "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
 224 |       "license": "ISC",
 225 |       "bin": {
 226 |         "semver": "bin/semver.js"
 227 |       }
 228 |     },
 229 |     "node_modules/@babel/helper-define-polyfill-provider": {
 230 |       "version": "0.6.5",
 231 |       "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.6.5.tgz",
 232 |       "integrity": "sha512-uJnGFcPsWQK8fvjgGP5LZUZZsYGIoPeRjSF5PGwrelYgq7Q15/Ft9NGFp1zglwgIv//W0uG4BevRuSJRyylZPg==",
 233 |       "license": "MIT",
 234 |       "dependencies": {
 235 |         "@babel/helper-compilation-targets": "^7.27.2",
 236 |         "@babel/helper-plugin-utils": "^7.27.1",
 237 |         "debug": "^4.4.1",
 238 |         "lodash.debounce": "^4.0.8",
 239 |         "resolve": "^1.22.10"
 240 |       },
 241 |       "peerDependencies": {
 242 |         "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
 243 |       }
 244 |     },
 245 |     "node_modules/@babel/helper-globals": {
 246 |       "version": "7.28.0",
 247 |       "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
 248 |       "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
 249 |       "license": "MIT",
 250 |       "engines": {
 251 |         "node": ">=6.9.0"
 252 |       }
 253 |     },
 254 |     "node_modules/@babel/helper-member-expression-to-functions": {
 255 |       "version": "7.27.1",
 256 |       "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.27.1.tgz",
 257 |       "integrity": "sha512-E5chM8eWjTp/aNoVpcbfM7mLxu9XGLWYise2eBKGQomAk/Mb4XoxyqXTZbuTohbsl8EKqdlMhnDI2CCLfcs9wA==",
 258 |       "license": "MIT",
 259 |       "dependencies": {
 260 |         "@babel/traverse": "^7.27.1",
 261 |         "@babel/types": "^7.27.1"
 262 |       },
 263 |       "engines": {
 264 |         "node": ">=6.9.0"
 265 |       }
 266 |     },
 267 |     "node_modules/@babel/helper-module-imports": {
 268 |       "version": "7.27.1",
 269 |       "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
 270 |       "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
 271 |       "license": "MIT",
 272 |       "dependencies": {
 273 |         "@babel/traverse": "^7.27.1",
 274 |         "@babel/types": "^7.27.1"
 275 |       },
 276 |       "engines": {
 277 |         "node": ">=6.9.0"
 278 |       }
 279 |     },
 280 |     "node_modules/@babel/helper-module-transforms": {
 281 |       "version": "7.28.3",
 282 |       "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
 283 |       "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
 284 |       "license": "MIT",
 285 |       "dependencies": {
 286 |         "@babel/helper-module-imports": "^7.27.1",
 287 |         "@babel/helper-validator-identifier": "^7.27.1",
 288 |         "@babel/traverse": "^7.28.3"
 289 |       },
 290 |       "engines": {
 291 |         "node": ">=6.9.0"
 292 |       },
 293 |       "peerDependencies": {
 294 |         "@babel/core": "^7.0.0"
 295 |       }
 296 |     },
 297 |     "node_modules/@babel/helper-optimise-call-expression": {
 298 |       "version": "7.27.1",
 299 |       "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.27.1.tgz",
 300 |       "integrity": "sha512-URMGH08NzYFhubNSGJrpUEphGKQwMQYBySzat5cAByY1/YgIRkULnIy3tAMeszlL/so2HbeilYloUmSpd7GdVw==",
 301 |       "license": "MIT",
 302 |       "dependencies": {
 303 |         "@babel/types": "^7.27.1"
 304 |       },
 305 |       "engines": {
 306 |         "node": ">=6.9.0"
 307 |       }
 308 |     },
 309 |     "node_modules/@babel/helper-plugin-utils": {
 310 |       "version": "7.27.1",
 311 |       "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
 312 |       "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
 313 |       "license": "MIT",
 314 |       "engines": {
 315 |         "node": ">=6.9.0"
 316 |       }
 317 |     },
 318 |     "node_modules/@babel/helper-remap-async-to-generator": {
 319 |       "version": "7.27.1",
 320 |       "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.27.1.tgz",
 321 |       "integrity": "sha512-7fiA521aVw8lSPeI4ZOD3vRFkoqkJcS+z4hFo82bFSH/2tNd6eJ5qCVMS5OzDmZh/kaHQeBaeyxK6wljcPtveA==",
 322 |       "license": "MIT",
 323 |       "dependencies": {
 324 |         "@babel/helper-annotate-as-pure": "^7.27.1",
 325 |         "@babel/helper-wrap-function": "^7.27.1",
 326 |         "@babel/traverse": "^7.27.1"
 327 |       },
 328 |       "engines": {
 329 |         "node": ">=6.9.0"
 330 |       },
 331 |       "peerDependencies": {
 332 |         "@babel/core": "^7.0.0"
 333 |       }
 334 |     },
 335 |     "node_modules/@babel/helper-replace-supers": {
 336 |       "version": "7.27.1",
 337 |       "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.27.1.tgz",
 338 |       "integrity": "sha512-7EHz6qDZc8RYS5ElPoShMheWvEgERonFCs7IAonWLLUTXW59DP14bCZt89/GKyreYn8g3S83m21FelHKbeDCKA==",
 339 |       "license": "MIT",
 340 |       "dependencies": {
 341 |         "@babel/helper-member-expression-to-functions": "^7.27.1",
 342 |         "@babel/helper-optimise-call-expression": "^7.27.1",
 343 |         "@babel/traverse": "^7.27.1"
 344 |       },
 345 |       "engines": {
 346 |         "node": ">=6.9.0"
 347 |       },
 348 |       "peerDependencies": {
 349 |         "@babel/core": "^7.0.0"
 350 |       }
 351 |     },
 352 |     "node_modules/@babel/helper-skip-transparent-expression-wrappers": {
 353 |       "version": "7.27.1",
 354 |       "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.27.1.tgz",
 355 |       "integrity": "sha512-Tub4ZKEXqbPjXgWLl2+3JpQAYBJ8+ikpQ2Ocj/q/r0LwE3UhENh7EUabyHjz2kCEsrRY83ew2DQdHluuiDQFzg==",
 356 |       "license": "MIT",
 357 |       "dependencies": {
 358 |         "@babel/traverse": "^7.27.1",
 359 |         "@babel/types": "^7.27.1"
 360 |       },
 361 |       "engines": {
 362 |         "node": ">=6.9.0"
 363 |       }
 364 |     },
 365 |     "node_modules/@babel/helper-string-parser": {
 366 |       "version": "7.27.1",
 367 |       "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
 368 |       "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
 369 |       "license": "MIT",
 370 |       "engines": {
 371 |         "node": ">=6.9.0"
 372 |       }
 373 |     },
 374 |     "node_modules/@babel/helper-validator-identifier": {
 375 |       "version": "7.27.1",
 376 |       "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.27.1.tgz",
 377 |       "integrity": "sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==",
 378 |       "license": "MIT",
 379 |       "engines": {
 380 |         "node": ">=6.9.0"
 381 |       }
 382 |     },
 383 |     "node_modules/@babel/helper-validator-option": {
 384 |       "version": "7.27.1",
 385 |       "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
 386 |       "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
 387 |       "license": "MIT",
 388 |       "engines": {
 389 |         "node": ">=6.9.0"
 390 |       }
 391 |     },
 392 |     "node_modules/@babel/helper-wrap-function": {
 393 |       "version": "7.28.3",
 394 |       "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.28.3.tgz",
 395 |       "integrity": "sha512-zdf983tNfLZFletc0RRXYrHrucBEg95NIFMkn6K9dbeMYnsgHaSBGcQqdsCSStG2PYwRre0Qc2NNSCXbG+xc6g==",
 396 |       "license": "MIT",
 397 |       "dependencies": {
 398 |         "@babel/template": "^7.27.2",
 399 |         "@babel/traverse": "^7.28.3",
 400 |         "@babel/types": "^7.28.2"
 401 |       },
 402 |       "engines": {
 403 |         "node": ">=6.9.0"
 404 |       }
 405 |     },
 406 |     "node_modules/@babel/helpers": {
 407 |       "version": "7.28.4",
 408 |       "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
 409 |       "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
 410 |       "license": "MIT",
 411 |       "dependencies": {
 412 |         "@babel/template": "^7.27.2",
 413 |         "@babel/types": "^7.28.4"
 414 |       },
 415 |       "engines": {
 416 |         "node": ">=6.9.0"
 417 |       }
 418 |     },
 419 |     "node_modules/@babel/highlight": {
 420 |       "version": "7.25.9",
 421 |       "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.25.9.tgz",
 422 |       "integrity": "sha512-llL88JShoCsth8fF8R4SJnIn+WLvR6ccFxu1H3FlMhDontdcmZWf2HgIZ7AIqV3Xcck1idlohrN4EUBQz6klbw==",
 423 |       "license": "MIT",
 424 |       "dependencies": {
 425 |         "@babel/helper-validator-identifier": "^7.25.9",
 426 |         "chalk": "^2.4.2",
 427 |         "js-tokens": "^4.0.0",
 428 |         "picocolors": "^1.0.0"
 429 |       },
 430 |       "engines": {
 431 |         "node": ">=6.9.0"
 432 |       }
 433 |     },
 434 |     "node_modules/@babel/parser": {
 435 |       "version": "7.28.4",
 436 |       "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.4.tgz",
 437 |       "integrity": "sha512-yZbBqeM6TkpP9du/I2pUZnJsRMGGvOuIrhjzC1AwHwW+6he4mni6Bp/m8ijn0iOuZuPI2BfkCoSRunpyjnrQKg==",
 438 |       "license": "MIT",
 439 |       "dependencies": {
 440 |         "@babel/types": "^7.28.4"
 441 |       },
 442 |       "bin": {
 443 |         "parser": "bin/babel-parser.js"
 444 |       },
 445 |       "engines": {
 446 |         "node": ">=6.0.0"
 447 |       }
 448 |     },
 449 |     "node_modules/@babel/plugin-proposal-decorators": {
 450 |       "version": "7.28.0",
 451 |       "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-decorators/-/plugin-proposal-decorators-7.28.0.tgz",
 452 |       "integrity": "sha512-zOiZqvANjWDUaUS9xMxbMcK/Zccztbe/6ikvUXaG9nsPH3w6qh5UaPGAnirI/WhIbZ8m3OHU0ReyPrknG+ZKeg==",
 453 |       "license": "MIT",
 454 |       "dependencies": {
 455 |         "@babel/helper-create-class-features-plugin": "^7.27.1",
 456 |         "@babel/helper-plugin-utils": "^7.27.1",
 457 |         "@babel/plugin-syntax-decorators": "^7.27.1"
 458 |       },
 459 |       "engines": {
 460 |         "node": ">=6.9.0"
 461 |       },
 462 |       "peerDependencies": {
 463 |         "@babel/core": "^7.0.0-0"
 464 |       }
 465 |     },
 466 |     "node_modules/@babel/plugin-proposal-export-default-from": {
 467 |       "version": "7.27.1",
 468 |       "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-default-from/-/plugin-proposal-export-default-from-7.27.1.tgz",
 469 |       "integrity": "sha512-hjlsMBl1aJc5lp8MoCDEZCiYzlgdRAShOjAfRw6X+GlpLpUPU7c3XNLsKFZbQk/1cRzBlJ7CXg3xJAJMrFa1Uw==",
 470 |       "license": "MIT",
 471 |       "dependencies": {
 472 |         "@babel/helper-plugin-utils": "^7.27.1"
 473 |       },
 474 |       "engines": {
 475 |         "node": ">=6.9.0"
 476 |       },
 477 |       "peerDependencies": {
 478 |         "@babel/core": "^7.0.0-0"
 479 |       }
 480 |     },
 481 |     "node_modules/@babel/plugin-syntax-async-generators": {
 482 |       "version": "7.8.4",
 483 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
 484 |       "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
 485 |       "license": "MIT",
 486 |       "dependencies": {
 487 |         "@babel/helper-plugin-utils": "^7.8.0"
 488 |       },
 489 |       "peerDependencies": {
 490 |         "@babel/core": "^7.0.0-0"
 491 |       }
 492 |     },
 493 |     "node_modules/@babel/plugin-syntax-bigint": {
 494 |       "version": "7.8.3",
 495 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz",
 496 |       "integrity": "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==",
 497 |       "license": "MIT",
 498 |       "dependencies": {
 499 |         "@babel/helper-plugin-utils": "^7.8.0"
 500 |       },
 501 |       "peerDependencies": {
 502 |         "@babel/core": "^7.0.0-0"
 503 |       }
 504 |     },
 505 |     "node_modules/@babel/plugin-syntax-class-properties": {
 506 |       "version": "7.12.13",
 507 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
 508 |       "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
 509 |       "license": "MIT",
 510 |       "dependencies": {
 511 |         "@babel/helper-plugin-utils": "^7.12.13"
 512 |       },
 513 |       "peerDependencies": {
 514 |         "@babel/core": "^7.0.0-0"
 515 |       }
 516 |     },
 517 |     "node_modules/@babel/plugin-syntax-class-static-block": {
 518 |       "version": "7.14.5",
 519 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
 520 |       "integrity": "sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==",
 521 |       "license": "MIT",
 522 |       "dependencies": {
 523 |         "@babel/helper-plugin-utils": "^7.14.5"
 524 |       },
 525 |       "engines": {
 526 |         "node": ">=6.9.0"
 527 |       },
 528 |       "peerDependencies": {
 529 |         "@babel/core": "^7.0.0-0"
 530 |       }
 531 |     },
 532 |     "node_modules/@babel/plugin-syntax-decorators": {
 533 |       "version": "7.27.1",
 534 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-decorators/-/plugin-syntax-decorators-7.27.1.tgz",
 535 |       "integrity": "sha512-YMq8Z87Lhl8EGkmb0MwYkt36QnxC+fzCgrl66ereamPlYToRpIk5nUjKUY3QKLWq8mwUB1BgbeXcTJhZOCDg5A==",
 536 |       "license": "MIT",
 537 |       "dependencies": {
 538 |         "@babel/helper-plugin-utils": "^7.27.1"
 539 |       },
 540 |       "engines": {
 541 |         "node": ">=6.9.0"
 542 |       },
 543 |       "peerDependencies": {
 544 |         "@babel/core": "^7.0.0-0"
 545 |       }
 546 |     },
 547 |     "node_modules/@babel/plugin-syntax-dynamic-import": {
 548 |       "version": "7.8.3",
 549 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
 550 |       "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
 551 |       "license": "MIT",
 552 |       "dependencies": {
 553 |         "@babel/helper-plugin-utils": "^7.8.0"
 554 |       },
 555 |       "peerDependencies": {
 556 |         "@babel/core": "^7.0.0-0"
 557 |       }
 558 |     },
 559 |     "node_modules/@babel/plugin-syntax-export-default-from": {
 560 |       "version": "7.27.1",
 561 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-default-from/-/plugin-syntax-export-default-from-7.27.1.tgz",
 562 |       "integrity": "sha512-eBC/3KSekshx19+N40MzjWqJd7KTEdOoLesAfa4IDFI8eRz5a47i5Oszus6zG/cwIXN63YhgLOMSSNJx49sENg==",
 563 |       "license": "MIT",
 564 |       "dependencies": {
 565 |         "@babel/helper-plugin-utils": "^7.27.1"
 566 |       },
 567 |       "engines": {
 568 |         "node": ">=6.9.0"
 569 |       },
 570 |       "peerDependencies": {
 571 |         "@babel/core": "^7.0.0-0"
 572 |       }
 573 |     },
 574 |     "node_modules/@babel/plugin-syntax-flow": {
 575 |       "version": "7.27.1",
 576 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.27.1.tgz",
 577 |       "integrity": "sha512-p9OkPbZ5G7UT1MofwYFigGebnrzGJacoBSQM0/6bi/PUMVE+qlWDD/OalvQKbwgQzU6dl0xAv6r4X7Jme0RYxA==",
 578 |       "license": "MIT",
 579 |       "dependencies": {
 580 |         "@babel/helper-plugin-utils": "^7.27.1"
 581 |       },
 582 |       "engines": {
 583 |         "node": ">=6.9.0"
 584 |       },
 585 |       "peerDependencies": {
 586 |         "@babel/core": "^7.0.0-0"
 587 |       }
 588 |     },
 589 |     "node_modules/@babel/plugin-syntax-import-attributes": {
 590 |       "version": "7.27.1",
 591 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-attributes/-/plugin-syntax-import-attributes-7.27.1.tgz",
 592 |       "integrity": "sha512-oFT0FrKHgF53f4vOsZGi2Hh3I35PfSmVs4IBFLFj4dnafP+hIWDLg3VyKmUHfLoLHlyxY4C7DGtmHuJgn+IGww==",
 593 |       "license": "MIT",
 594 |       "dependencies": {
 595 |         "@babel/helper-plugin-utils": "^7.27.1"
 596 |       },
 597 |       "engines": {
 598 |         "node": ">=6.9.0"
 599 |       },
 600 |       "peerDependencies": {
 601 |         "@babel/core": "^7.0.0-0"
 602 |       }
 603 |     },
 604 |     "node_modules/@babel/plugin-syntax-import-meta": {
 605 |       "version": "7.10.4",
 606 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
 607 |       "integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
 608 |       "license": "MIT",
 609 |       "dependencies": {
 610 |         "@babel/helper-plugin-utils": "^7.10.4"
 611 |       },
 612 |       "peerDependencies": {
 613 |         "@babel/core": "^7.0.0-0"
 614 |       }
 615 |     },
 616 |     "node_modules/@babel/plugin-syntax-json-strings": {
 617 |       "version": "7.8.3",
 618 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
 619 |       "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
 620 |       "license": "MIT",
 621 |       "dependencies": {
 622 |         "@babel/helper-plugin-utils": "^7.8.0"
 623 |       },
 624 |       "peerDependencies": {
 625 |         "@babel/core": "^7.0.0-0"
 626 |       }
 627 |     },
 628 |     "node_modules/@babel/plugin-syntax-jsx": {
 629 |       "version": "7.27.1",
 630 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.27.1.tgz",
 631 |       "integrity": "sha512-y8YTNIeKoyhGd9O0Jiyzyyqk8gdjnumGTQPsz0xOZOQ2RmkVJeZ1vmmfIvFEKqucBG6axJGBZDE/7iI5suUI/w==",
 632 |       "license": "MIT",
 633 |       "dependencies": {
 634 |         "@babel/helper-plugin-utils": "^7.27.1"
 635 |       },
 636 |       "engines": {
 637 |         "node": ">=6.9.0"
 638 |       },
 639 |       "peerDependencies": {
 640 |         "@babel/core": "^7.0.0-0"
 641 |       }
 642 |     },
 643 |     "node_modules/@babel/plugin-syntax-logical-assignment-operators": {
 644 |       "version": "7.10.4",
 645 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
 646 |       "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
 647 |       "license": "MIT",
 648 |       "dependencies": {
 649 |         "@babel/helper-plugin-utils": "^7.10.4"
 650 |       },
 651 |       "peerDependencies": {
 652 |         "@babel/core": "^7.0.0-0"
 653 |       }
 654 |     },
 655 |     "node_modules/@babel/plugin-syntax-nullish-coalescing-operator": {
 656 |       "version": "7.8.3",
 657 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
 658 |       "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
 659 |       "license": "MIT",
 660 |       "dependencies": {
 661 |         "@babel/helper-plugin-utils": "^7.8.0"
 662 |       },
 663 |       "peerDependencies": {
 664 |         "@babel/core": "^7.0.0-0"
 665 |       }
 666 |     },
 667 |     "node_modules/@babel/plugin-syntax-numeric-separator": {
 668 |       "version": "7.10.4",
 669 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
 670 |       "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
 671 |       "license": "MIT",
 672 |       "dependencies": {
 673 |         "@babel/helper-plugin-utils": "^7.10.4"
 674 |       },
 675 |       "peerDependencies": {
 676 |         "@babel/core": "^7.0.0-0"
 677 |       }
 678 |     },
 679 |     "node_modules/@babel/plugin-syntax-object-rest-spread": {
 680 |       "version": "7.8.3",
 681 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
 682 |       "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
 683 |       "license": "MIT",
 684 |       "dependencies": {
 685 |         "@babel/helper-plugin-utils": "^7.8.0"
 686 |       },
 687 |       "peerDependencies": {
 688 |         "@babel/core": "^7.0.0-0"
 689 |       }
 690 |     },
 691 |     "node_modules/@babel/plugin-syntax-optional-catch-binding": {
 692 |       "version": "7.8.3",
 693 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
 694 |       "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
 695 |       "license": "MIT",
 696 |       "dependencies": {
 697 |         "@babel/helper-plugin-utils": "^7.8.0"
 698 |       },
 699 |       "peerDependencies": {
 700 |         "@babel/core": "^7.0.0-0"
 701 |       }
 702 |     },
 703 |     "node_modules/@babel/plugin-syntax-optional-chaining": {
 704 |       "version": "7.8.3",
 705 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
 706 |       "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
 707 |       "license": "MIT",
 708 |       "dependencies": {
 709 |         "@babel/helper-plugin-utils": "^7.8.0"
 710 |       },
 711 |       "peerDependencies": {
 712 |         "@babel/core": "^7.0.0-0"
 713 |       }
 714 |     },
 715 |     "node_modules/@babel/plugin-syntax-private-property-in-object": {
 716 |       "version": "7.14.5",
 717 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
 718 |       "integrity": "sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==",
 719 |       "license": "MIT",
 720 |       "dependencies": {
 721 |         "@babel/helper-plugin-utils": "^7.14.5"
 722 |       },
 723 |       "engines": {
 724 |         "node": ">=6.9.0"
 725 |       },
 726 |       "peerDependencies": {
 727 |         "@babel/core": "^7.0.0-0"
 728 |       }
 729 |     },
 730 |     "node_modules/@babel/plugin-syntax-top-level-await": {
 731 |       "version": "7.14.5",
 732 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
 733 |       "integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
 734 |       "license": "MIT",
 735 |       "dependencies": {
 736 |         "@babel/helper-plugin-utils": "^7.14.5"
 737 |       },
 738 |       "engines": {
 739 |         "node": ">=6.9.0"
 740 |       },
 741 |       "peerDependencies": {
 742 |         "@babel/core": "^7.0.0-0"
 743 |       }
 744 |     },
 745 |     "node_modules/@babel/plugin-syntax-typescript": {
 746 |       "version": "7.27.1",
 747 |       "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.27.1.tgz",
 748 |       "integrity": "sha512-xfYCBMxveHrRMnAWl1ZlPXOZjzkN82THFvLhQhFXFt81Z5HnN+EtUkZhv/zcKpmT3fzmWZB0ywiBrbC3vogbwQ==",
 749 |       "license": "MIT",
 750 |       "dependencies": {
 751 |         "@babel/helper-plugin-utils": "^7.27.1"
 752 |       },
 753 |       "engines": {
 754 |         "node": ">=6.9.0"
 755 |       },
 756 |       "peerDependencies": {
 757 |         "@babel/core": "^7.0.0-0"
 758 |       }
 759 |     },
 760 |     "node_modules/@babel/plugin-transform-arrow-functions": {
 761 |       "version": "7.27.1",
 762 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.27.1.tgz",
 763 |       "integrity": "sha512-8Z4TGic6xW70FKThA5HYEKKyBpOOsucTOD1DjU3fZxDg+K3zBJcXMFnt/4yQiZnf5+MiOMSXQ9PaEK/Ilh1DeA==",
 764 |       "license": "MIT",
 765 |       "dependencies": {
 766 |         "@babel/helper-plugin-utils": "^7.27.1"
 767 |       },
 768 |       "engines": {
 769 |         "node": ">=6.9.0"
 770 |       },
 771 |       "peerDependencies": {
 772 |         "@babel/core": "^7.0.0-0"
 773 |       }
 774 |     },
 775 |     "node_modules/@babel/plugin-transform-async-generator-functions": {
 776 |       "version": "7.28.0",
 777 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-generator-functions/-/plugin-transform-async-generator-functions-7.28.0.tgz",
 778 |       "integrity": "sha512-BEOdvX4+M765icNPZeidyADIvQ1m1gmunXufXxvRESy/jNNyfovIqUyE7MVgGBjWktCoJlzvFA1To2O4ymIO3Q==",
 779 |       "license": "MIT",
 780 |       "dependencies": {
 781 |         "@babel/helper-plugin-utils": "^7.27.1",
 782 |         "@babel/helper-remap-async-to-generator": "^7.27.1",
 783 |         "@babel/traverse": "^7.28.0"
 784 |       },
 785 |       "engines": {
 786 |         "node": ">=6.9.0"
 787 |       },
 788 |       "peerDependencies": {
 789 |         "@babel/core": "^7.0.0-0"
 790 |       }
 791 |     },
 792 |     "node_modules/@babel/plugin-transform-async-to-generator": {
 793 |       "version": "7.27.1",
 794 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.27.1.tgz",
 795 |       "integrity": "sha512-NREkZsZVJS4xmTr8qzE5y8AfIPqsdQfRuUiLRTEzb7Qii8iFWCyDKaUV2c0rCuh4ljDZ98ALHP/PetiBV2nddA==",
 796 |       "license": "MIT",
 797 |       "dependencies": {
 798 |         "@babel/helper-module-imports": "^7.27.1",
 799 |         "@babel/helper-plugin-utils": "^7.27.1",
 800 |         "@babel/helper-remap-async-to-generator": "^7.27.1"
 801 |       },
 802 |       "engines": {
 803 |         "node": ">=6.9.0"
 804 |       },
 805 |       "peerDependencies": {
 806 |         "@babel/core": "^7.0.0-0"
 807 |       }
 808 |     },
 809 |     "node_modules/@babel/plugin-transform-block-scoping": {
 810 |       "version": "7.28.4",
 811 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.28.4.tgz",
 812 |       "integrity": "sha512-1yxmvN0MJHOhPVmAsmoW5liWwoILobu/d/ShymZmj867bAdxGbehIrew1DuLpw2Ukv+qDSSPQdYW1dLNE7t11A==",
 813 |       "license": "MIT",
 814 |       "dependencies": {
 815 |         "@babel/helper-plugin-utils": "^7.27.1"
 816 |       },
 817 |       "engines": {
 818 |         "node": ">=6.9.0"
 819 |       },
 820 |       "peerDependencies": {
 821 |         "@babel/core": "^7.0.0-0"
 822 |       }
 823 |     },
 824 |     "node_modules/@babel/plugin-transform-class-properties": {
 825 |       "version": "7.27.1",
 826 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-class-properties/-/plugin-transform-class-properties-7.27.1.tgz",
 827 |       "integrity": "sha512-D0VcalChDMtuRvJIu3U/fwWjf8ZMykz5iZsg77Nuj821vCKI3zCyRLwRdWbsuJ/uRwZhZ002QtCqIkwC/ZkvbA==",
 828 |       "license": "MIT",
 829 |       "dependencies": {
 830 |         "@babel/helper-create-class-features-plugin": "^7.27.1",
 831 |         "@babel/helper-plugin-utils": "^7.27.1"
 832 |       },
 833 |       "engines": {
 834 |         "node": ">=6.9.0"
 835 |       },
 836 |       "peerDependencies": {
 837 |         "@babel/core": "^7.0.0-0"
 838 |       }
 839 |     },
 840 |     "node_modules/@babel/plugin-transform-class-static-block": {
 841 |       "version": "7.28.3",
 842 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-class-static-block/-/plugin-transform-class-static-block-7.28.3.tgz",
 843 |       "integrity": "sha512-LtPXlBbRoc4Njl/oh1CeD/3jC+atytbnf/UqLoqTDcEYGUPj022+rvfkbDYieUrSj3CaV4yHDByPE+T2HwfsJg==",
 844 |       "license": "MIT",
 845 |       "dependencies": {
 846 |         "@babel/helper-create-class-features-plugin": "^7.28.3",
 847 |         "@babel/helper-plugin-utils": "^7.27.1"
 848 |       },
 849 |       "engines": {
 850 |         "node": ">=6.9.0"
 851 |       },
 852 |       "peerDependencies": {
 853 |         "@babel/core": "^7.12.0"
 854 |       }
 855 |     },
 856 |     "node_modules/@babel/plugin-transform-classes": {
 857 |       "version": "7.28.4",
 858 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.28.4.tgz",
 859 |       "integrity": "sha512-cFOlhIYPBv/iBoc+KS3M6et2XPtbT2HiCRfBXWtfpc9OAyostldxIf9YAYB6ypURBBbx+Qv6nyrLzASfJe+hBA==",
 860 |       "license": "MIT",
 861 |       "dependencies": {
 862 |         "@babel/helper-annotate-as-pure": "^7.27.3",
 863 |         "@babel/helper-compilation-targets": "^7.27.2",
 864 |         "@babel/helper-globals": "^7.28.0",
 865 |         "@babel/helper-plugin-utils": "^7.27.1",
 866 |         "@babel/helper-replace-supers": "^7.27.1",
 867 |         "@babel/traverse": "^7.28.4"
 868 |       },
 869 |       "engines": {
 870 |         "node": ">=6.9.0"
 871 |       },
 872 |       "peerDependencies": {
 873 |         "@babel/core": "^7.0.0-0"
 874 |       }
 875 |     },
 876 |     "node_modules/@babel/plugin-transform-computed-properties": {
 877 |       "version": "7.27.1",
 878 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.27.1.tgz",
 879 |       "integrity": "sha512-lj9PGWvMTVksbWiDT2tW68zGS/cyo4AkZ/QTp0sQT0mjPopCmrSkzxeXkznjqBxzDI6TclZhOJbBmbBLjuOZUw==",
 880 |       "license": "MIT",
 881 |       "dependencies": {
 882 |         "@babel/helper-plugin-utils": "^7.27.1",
 883 |         "@babel/template": "^7.27.1"
 884 |       },
 885 |       "engines": {
 886 |         "node": ">=6.9.0"
 887 |       },
 888 |       "peerDependencies": {
 889 |         "@babel/core": "^7.0.0-0"
 890 |       }
 891 |     },
 892 |     "node_modules/@babel/plugin-transform-destructuring": {
 893 |       "version": "7.28.0",
 894 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.28.0.tgz",
 895 |       "integrity": "sha512-v1nrSMBiKcodhsyJ4Gf+Z0U/yawmJDBOTpEB3mcQY52r9RIyPneGyAS/yM6seP/8I+mWI3elOMtT5dB8GJVs+A==",
 896 |       "license": "MIT",
 897 |       "dependencies": {
 898 |         "@babel/helper-plugin-utils": "^7.27.1",
 899 |         "@babel/traverse": "^7.28.0"
 900 |       },
 901 |       "engines": {
 902 |         "node": ">=6.9.0"
 903 |       },
 904 |       "peerDependencies": {
 905 |         "@babel/core": "^7.0.0-0"
 906 |       }
 907 |     },
 908 |     "node_modules/@babel/plugin-transform-export-namespace-from": {
 909 |       "version": "7.27.1",
 910 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-export-namespace-from/-/plugin-transform-export-namespace-from-7.27.1.tgz",
 911 |       "integrity": "sha512-tQvHWSZ3/jH2xuq/vZDy0jNn+ZdXJeM8gHvX4lnJmsc3+50yPlWdZXIc5ay+umX+2/tJIqHqiEqcJvxlmIvRvQ==",
 912 |       "license": "MIT",
 913 |       "dependencies": {
 914 |         "@babel/helper-plugin-utils": "^7.27.1"
 915 |       },
 916 |       "engines": {
 917 |         "node": ">=6.9.0"
 918 |       },
 919 |       "peerDependencies": {
 920 |         "@babel/core": "^7.0.0-0"
 921 |       }
 922 |     },
 923 |     "node_modules/@babel/plugin-transform-flow-strip-types": {
 924 |       "version": "7.27.1",
 925 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.27.1.tgz",
 926 |       "integrity": "sha512-G5eDKsu50udECw7DL2AcsysXiQyB7Nfg521t2OAJ4tbfTJ27doHLeF/vlI1NZGlLdbb/v+ibvtL1YBQqYOwJGg==",
 927 |       "license": "MIT",
 928 |       "dependencies": {
 929 |         "@babel/helper-plugin-utils": "^7.27.1",
 930 |         "@babel/plugin-syntax-flow": "^7.27.1"
 931 |       },
 932 |       "engines": {
 933 |         "node": ">=6.9.0"
 934 |       },
 935 |       "peerDependencies": {
 936 |         "@babel/core": "^7.0.0-0"
 937 |       }
 938 |     },
 939 |     "node_modules/@babel/plugin-transform-for-of": {
 940 |       "version": "7.27.1",
 941 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.27.1.tgz",
 942 |       "integrity": "sha512-BfbWFFEJFQzLCQ5N8VocnCtA8J1CLkNTe2Ms2wocj75dd6VpiqS5Z5quTYcUoo4Yq+DN0rtikODccuv7RU81sw==",
 943 |       "license": "MIT",
 944 |       "dependencies": {
 945 |         "@babel/helper-plugin-utils": "^7.27.1",
 946 |         "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1"
 947 |       },
 948 |       "engines": {
 949 |         "node": ">=6.9.0"
 950 |       },
 951 |       "peerDependencies": {
 952 |         "@babel/core": "^7.0.0-0"
 953 |       }
 954 |     },
 955 |     "node_modules/@babel/plugin-transform-function-name": {
 956 |       "version": "7.27.1",
 957 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.27.1.tgz",
 958 |       "integrity": "sha512-1bQeydJF9Nr1eBCMMbC+hdwmRlsv5XYOMu03YSWFwNs0HsAmtSxxF1fyuYPqemVldVyFmlCU7w8UE14LupUSZQ==",
 959 |       "license": "MIT",
 960 |       "dependencies": {
 961 |         "@babel/helper-compilation-targets": "^7.27.1",
 962 |         "@babel/helper-plugin-utils": "^7.27.1",
 963 |         "@babel/traverse": "^7.27.1"
 964 |       },
 965 |       "engines": {
 966 |         "node": ">=6.9.0"
 967 |       },
 968 |       "peerDependencies": {
 969 |         "@babel/core": "^7.0.0-0"
 970 |       }
 971 |     },
 972 |     "node_modules/@babel/plugin-transform-literals": {
 973 |       "version": "7.27.1",
 974 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.27.1.tgz",
 975 |       "integrity": "sha512-0HCFSepIpLTkLcsi86GG3mTUzxV5jpmbv97hTETW3yzrAij8aqlD36toB1D0daVFJM8NK6GvKO0gslVQmm+zZA==",
 976 |       "license": "MIT",
 977 |       "dependencies": {
 978 |         "@babel/helper-plugin-utils": "^7.27.1"
 979 |       },
 980 |       "engines": {
 981 |         "node": ">=6.9.0"
 982 |       },
 983 |       "peerDependencies": {
 984 |         "@babel/core": "^7.0.0-0"
 985 |       }
 986 |     },
 987 |     "node_modules/@babel/plugin-transform-logical-assignment-operators": {
 988 |       "version": "7.27.1",
 989 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-logical-assignment-operators/-/plugin-transform-logical-assignment-operators-7.27.1.tgz",
 990 |       "integrity": "sha512-SJvDs5dXxiae4FbSL1aBJlG4wvl594N6YEVVn9e3JGulwioy6z3oPjx/sQBO3Y4NwUu5HNix6KJ3wBZoewcdbw==",
 991 |       "license": "MIT",
 992 |       "dependencies": {
 993 |         "@babel/helper-plugin-utils": "^7.27.1"
 994 |       },
 995 |       "engines": {
 996 |         "node": ">=6.9.0"
 997 |       },
 998 |       "peerDependencies": {
 999 |         "@babel/core": "^7.0.0-0"
1000 |       }
1001 |     },
1002 |     "node_modules/@babel/plugin-transform-modules-commonjs": {
1003 |       "version": "7.27.1",
1004 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.27.1.tgz",
1005 |       "integrity": "sha512-OJguuwlTYlN0gBZFRPqwOGNWssZjfIUdS7HMYtN8c1KmwpwHFBwTeFZrg9XZa+DFTitWOW5iTAG7tyCUPsCCyw==",
1006 |       "license": "MIT",
1007 |       "dependencies": {
1008 |         "@babel/helper-module-transforms": "^7.27.1",
1009 |         "@babel/helper-plugin-utils": "^7.27.1"
1010 |       },
1011 |       "engines": {
1012 |         "node": ">=6.9.0"
1013 |       },
1014 |       "peerDependencies": {
1015 |         "@babel/core": "^7.0.0-0"
1016 |       }
1017 |     },
1018 |     "node_modules/@babel/plugin-transform-named-capturing-groups-regex": {
1019 |       "version": "7.27.1",
1020 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.27.1.tgz",
1021 |       "integrity": "sha512-SstR5JYy8ddZvD6MhV0tM/j16Qds4mIpJTOd1Yu9J9pJjH93bxHECF7pgtc28XvkzTD6Pxcm/0Z73Hvk7kb3Ng==",
1022 |       "license": "MIT",
1023 |       "dependencies": {
1024 |         "@babel/helper-create-regexp-features-plugin": "^7.27.1",
1025 |         "@babel/helper-plugin-utils": "^7.27.1"
1026 |       },
1027 |       "engines": {
1028 |         "node": ">=6.9.0"
1029 |       },
1030 |       "peerDependencies": {
1031 |         "@babel/core": "^7.0.0"
1032 |       }
1033 |     },
1034 |     "node_modules/@babel/plugin-transform-nullish-coalescing-operator": {
1035 |       "version": "7.27.1",
1036 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-nullish-coalescing-operator/-/plugin-transform-nullish-coalescing-operator-7.27.1.tgz",
1037 |       "integrity": "sha512-aGZh6xMo6q9vq1JGcw58lZ1Z0+i0xB2x0XaauNIUXd6O1xXc3RwoWEBlsTQrY4KQ9Jf0s5rgD6SiNkaUdJegTA==",
1038 |       "license": "MIT",
1039 |       "dependencies": {
1040 |         "@babel/helper-plugin-utils": "^7.27.1"
1041 |       },
1042 |       "engines": {
1043 |         "node": ">=6.9.0"
1044 |       },
1045 |       "peerDependencies": {
1046 |         "@babel/core": "^7.0.0-0"
1047 |       }
1048 |     },
1049 |     "node_modules/@babel/plugin-transform-numeric-separator": {
1050 |       "version": "7.27.1",
1051 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-numeric-separator/-/plugin-transform-numeric-separator-7.27.1.tgz",
1052 |       "integrity": "sha512-fdPKAcujuvEChxDBJ5c+0BTaS6revLV7CJL08e4m3de8qJfNIuCc2nc7XJYOjBoTMJeqSmwXJ0ypE14RCjLwaw==",
1053 |       "license": "MIT",
1054 |       "dependencies": {
1055 |         "@babel/helper-plugin-utils": "^7.27.1"
1056 |       },
1057 |       "engines": {
1058 |         "node": ">=6.9.0"
1059 |       },
1060 |       "peerDependencies": {
1061 |         "@babel/core": "^7.0.0-0"
1062 |       }
1063 |     },
1064 |     "node_modules/@babel/plugin-transform-object-rest-spread": {
1065 |       "version": "7.28.4",
1066 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-rest-spread/-/plugin-transform-object-rest-spread-7.28.4.tgz",
1067 |       "integrity": "sha512-373KA2HQzKhQCYiRVIRr+3MjpCObqzDlyrM6u4I201wL8Mp2wHf7uB8GhDwis03k2ti8Zr65Zyyqs1xOxUF/Ew==",
1068 |       "license": "MIT",
1069 |       "dependencies": {
1070 |         "@babel/helper-compilation-targets": "^7.27.2",
1071 |         "@babel/helper-plugin-utils": "^7.27.1",
1072 |         "@babel/plugin-transform-destructuring": "^7.28.0",
1073 |         "@babel/plugin-transform-parameters": "^7.27.7",
1074 |         "@babel/traverse": "^7.28.4"
1075 |       },
1076 |       "engines": {
1077 |         "node": ">=6.9.0"
1078 |       },
1079 |       "peerDependencies": {
1080 |         "@babel/core": "^7.0.0-0"
1081 |       }
1082 |     },
1083 |     "node_modules/@babel/plugin-transform-optional-catch-binding": {
1084 |       "version": "7.27.1",
1085 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-optional-catch-binding/-/plugin-transform-optional-catch-binding-7.27.1.tgz",
1086 |       "integrity": "sha512-txEAEKzYrHEX4xSZN4kJ+OfKXFVSWKB2ZxM9dpcE3wT7smwkNmXo5ORRlVzMVdJbD+Q8ILTgSD7959uj+3Dm3Q==",
1087 |       "license": "MIT",
1088 |       "dependencies": {
1089 |         "@babel/helper-plugin-utils": "^7.27.1"
1090 |       },
1091 |       "engines": {
1092 |         "node": ">=6.9.0"
1093 |       },
1094 |       "peerDependencies": {
1095 |         "@babel/core": "^7.0.0-0"
1096 |       }
1097 |     },
1098 |     "node_modules/@babel/plugin-transform-optional-chaining": {
1099 |       "version": "7.27.1",
1100 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-optional-chaining/-/plugin-transform-optional-chaining-7.27.1.tgz",
1101 |       "integrity": "sha512-BQmKPPIuc8EkZgNKsv0X4bPmOoayeu4F1YCwx2/CfmDSXDbp7GnzlUH+/ul5VGfRg1AoFPsrIThlEBj2xb4CAg==",
1102 |       "license": "MIT",
1103 |       "dependencies": {
1104 |         "@babel/helper-plugin-utils": "^7.27.1",
1105 |         "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1"
1106 |       },
1107 |       "engines": {
1108 |         "node": ">=6.9.0"
1109 |       },
1110 |       "peerDependencies": {
1111 |         "@babel/core": "^7.0.0-0"
1112 |       }
1113 |     },
1114 |     "node_modules/@babel/plugin-transform-parameters": {
1115 |       "version": "7.27.7",
1116 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.27.7.tgz",
1117 |       "integrity": "sha512-qBkYTYCb76RRxUM6CcZA5KRu8K4SM8ajzVeUgVdMVO9NN9uI/GaVmBg/WKJJGnNokV9SY8FxNOVWGXzqzUidBg==",
1118 |       "license": "MIT",
1119 |       "dependencies": {
1120 |         "@babel/helper-plugin-utils": "^7.27.1"
1121 |       },
1122 |       "engines": {
1123 |         "node": ">=6.9.0"
1124 |       },
1125 |       "peerDependencies": {
1126 |         "@babel/core": "^7.0.0-0"
1127 |       }
1128 |     },
1129 |     "node_modules/@babel/plugin-transform-private-methods": {
1130 |       "version": "7.27.1",
1131 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-private-methods/-/plugin-transform-private-methods-7.27.1.tgz",
1132 |       "integrity": "sha512-10FVt+X55AjRAYI9BrdISN9/AQWHqldOeZDUoLyif1Kn05a56xVBXb8ZouL8pZ9jem8QpXaOt8TS7RHUIS+GPA==",
1133 |       "license": "MIT",
1134 |       "dependencies": {
1135 |         "@babel/helper-create-class-features-plugin": "^7.27.1",
1136 |         "@babel/helper-plugin-utils": "^7.27.1"
1137 |       },
1138 |       "engines": {
1139 |         "node": ">=6.9.0"
1140 |       },
1141 |       "peerDependencies": {
1142 |         "@babel/core": "^7.0.0-0"
1143 |       }
1144 |     },
1145 |     "node_modules/@babel/plugin-transform-private-property-in-object": {
1146 |       "version": "7.27.1",
1147 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-private-property-in-object/-/plugin-transform-private-property-in-object-7.27.1.tgz",
1148 |       "integrity": "sha512-5J+IhqTi1XPa0DXF83jYOaARrX+41gOewWbkPyjMNRDqgOCqdffGh8L3f/Ek5utaEBZExjSAzcyjmV9SSAWObQ==",
1149 |       "license": "MIT",
1150 |       "dependencies": {
1151 |         "@babel/helper-annotate-as-pure": "^7.27.1",
1152 |         "@babel/helper-create-class-features-plugin": "^7.27.1",
1153 |         "@babel/helper-plugin-utils": "^7.27.1"
1154 |       },
1155 |       "engines": {
1156 |         "node": ">=6.9.0"
1157 |       },
1158 |       "peerDependencies": {
1159 |         "@babel/core": "^7.0.0-0"
1160 |       }
1161 |     },
1162 |     "node_modules/@babel/plugin-transform-react-display-name": {
1163 |       "version": "7.28.0",
1164 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.28.0.tgz",
1165 |       "integrity": "sha512-D6Eujc2zMxKjfa4Zxl4GHMsmhKKZ9VpcqIchJLvwTxad9zWIYulwYItBovpDOoNLISpcZSXoDJ5gaGbQUDqViA==",
1166 |       "license": "MIT",
1167 |       "dependencies": {
1168 |         "@babel/helper-plugin-utils": "^7.27.1"
1169 |       },
1170 |       "engines": {
1171 |         "node": ">=6.9.0"
1172 |       },
1173 |       "peerDependencies": {
1174 |         "@babel/core": "^7.0.0-0"
1175 |       }
1176 |     },
1177 |     "node_modules/@babel/plugin-transform-react-jsx": {
1178 |       "version": "7.27.1",
1179 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.27.1.tgz",
1180 |       "integrity": "sha512-2KH4LWGSrJIkVf5tSiBFYuXDAoWRq2MMwgivCf+93dd0GQi8RXLjKA/0EvRnVV5G0hrHczsquXuD01L8s6dmBw==",
1181 |       "license": "MIT",
1182 |       "dependencies": {
1183 |         "@babel/helper-annotate-as-pure": "^7.27.1",
1184 |         "@babel/helper-module-imports": "^7.27.1",
1185 |         "@babel/helper-plugin-utils": "^7.27.1",
1186 |         "@babel/plugin-syntax-jsx": "^7.27.1",
1187 |         "@babel/types": "^7.27.1"
1188 |       },
1189 |       "engines": {
1190 |         "node": ">=6.9.0"
1191 |       },
1192 |       "peerDependencies": {
1193 |         "@babel/core": "^7.0.0-0"
1194 |       }
1195 |     },
1196 |     "node_modules/@babel/plugin-transform-react-jsx-development": {
1197 |       "version": "7.27.1",
1198 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-development/-/plugin-transform-react-jsx-development-7.27.1.tgz",
1199 |       "integrity": "sha512-ykDdF5yI4f1WrAolLqeF3hmYU12j9ntLQl/AOG1HAS21jxyg1Q0/J/tpREuYLfatGdGmXp/3yS0ZA76kOlVq9Q==",
1200 |       "license": "MIT",
1201 |       "dependencies": {
1202 |         "@babel/plugin-transform-react-jsx": "^7.27.1"
1203 |       },
1204 |       "engines": {
1205 |         "node": ">=6.9.0"
1206 |       },
1207 |       "peerDependencies": {
1208 |         "@babel/core": "^7.0.0-0"
1209 |       }
1210 |     },
1211 |     "node_modules/@babel/plugin-transform-react-jsx-self": {
1212 |       "version": "7.27.1",
1213 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
1214 |       "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
1215 |       "license": "MIT",
1216 |       "dependencies": {
1217 |         "@babel/helper-plugin-utils": "^7.27.1"
1218 |       },
1219 |       "engines": {
1220 |         "node": ">=6.9.0"
1221 |       },
1222 |       "peerDependencies": {
1223 |         "@babel/core": "^7.0.0-0"
1224 |       }
1225 |     },
1226 |     "node_modules/@babel/plugin-transform-react-jsx-source": {
1227 |       "version": "7.27.1",
1228 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
1229 |       "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
1230 |       "license": "MIT",
1231 |       "dependencies": {
1232 |         "@babel/helper-plugin-utils": "^7.27.1"
1233 |       },
1234 |       "engines": {
1235 |         "node": ">=6.9.0"
1236 |       },
1237 |       "peerDependencies": {
1238 |         "@babel/core": "^7.0.0-0"
1239 |       }
1240 |     },
1241 |     "node_modules/@babel/plugin-transform-react-pure-annotations": {
1242 |       "version": "7.27.1",
1243 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-pure-annotations/-/plugin-transform-react-pure-annotations-7.27.1.tgz",
1244 |       "integrity": "sha512-JfuinvDOsD9FVMTHpzA/pBLisxpv1aSf+OIV8lgH3MuWrks19R27e6a6DipIg4aX1Zm9Wpb04p8wljfKrVSnPA==",
1245 |       "license": "MIT",
1246 |       "dependencies": {
1247 |         "@babel/helper-annotate-as-pure": "^7.27.1",
1248 |         "@babel/helper-plugin-utils": "^7.27.1"
1249 |       },
1250 |       "engines": {
1251 |         "node": ">=6.9.0"
1252 |       },
1253 |       "peerDependencies": {
1254 |         "@babel/core": "^7.0.0-0"
1255 |       }
1256 |     },
1257 |     "node_modules/@babel/plugin-transform-regenerator": {
1258 |       "version": "7.28.4",
1259 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.28.4.tgz",
1260 |       "integrity": "sha512-+ZEdQlBoRg9m2NnzvEeLgtvBMO4tkFBw5SQIUgLICgTrumLoU7lr+Oghi6km2PFj+dbUt2u1oby2w3BDO9YQnA==",
1261 |       "license": "MIT",
1262 |       "dependencies": {
1263 |         "@babel/helper-plugin-utils": "^7.27.1"
1264 |       },
1265 |       "engines": {
1266 |         "node": ">=6.9.0"
1267 |       },
1268 |       "peerDependencies": {
1269 |         "@babel/core": "^7.0.0-0"
1270 |       }
1271 |     },
1272 |     "node_modules/@babel/plugin-transform-runtime": {
1273 |       "version": "7.28.3",
1274 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.28.3.tgz",
1275 |       "integrity": "sha512-Y6ab1kGqZ0u42Zv/4a7l0l72n9DKP/MKoKWaUSBylrhNZO2prYuqFOLbn5aW5SIFXwSH93yfjbgllL8lxuGKLg==",
1276 |       "license": "MIT",
1277 |       "dependencies": {
1278 |         "@babel/helper-module-imports": "^7.27.1",
1279 |         "@babel/helper-plugin-utils": "^7.27.1",
1280 |         "babel-plugin-polyfill-corejs2": "^0.4.14",
1281 |         "babel-plugin-polyfill-corejs3": "^0.13.0",
1282 |         "babel-plugin-polyfill-regenerator": "^0.6.5",
1283 |         "semver": "^6.3.1"
1284 |       },
1285 |       "engines": {
1286 |         "node": ">=6.9.0"
1287 |       },
1288 |       "peerDependencies": {
1289 |         "@babel/core": "^7.0.0-0"
1290 |       }
1291 |     },
1292 |     "node_modules/@babel/plugin-transform-runtime/node_modules/semver": {
1293 |       "version": "6.3.1",
1294 |       "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
1295 |       "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
1296 |       "license": "ISC",
1297 |       "bin": {
1298 |         "semver": "bin/semver.js"
1299 |       }
1300 |     },
1301 |     "node_modules/@babel/plugin-transform-shorthand-properties": {
1302 |       "version": "7.27.1",
1303 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.27.1.tgz",
1304 |       "integrity": "sha512-N/wH1vcn4oYawbJ13Y/FxcQrWk63jhfNa7jef0ih7PHSIHX2LB7GWE1rkPrOnka9kwMxb6hMl19p7lidA+EHmQ==",
1305 |       "license": "MIT",
1306 |       "dependencies": {
1307 |         "@babel/helper-plugin-utils": "^7.27.1"
1308 |       },
1309 |       "engines": {
1310 |         "node": ">=6.9.0"
1311 |       },
1312 |       "peerDependencies": {
1313 |         "@babel/core": "^7.0.0-0"
1314 |       }
1315 |     },
1316 |     "node_modules/@babel/plugin-transform-spread": {
1317 |       "version": "7.27.1",
1318 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.27.1.tgz",
1319 |       "integrity": "sha512-kpb3HUqaILBJcRFVhFUs6Trdd4mkrzcGXss+6/mxUd273PfbWqSDHRzMT2234gIg2QYfAjvXLSquP1xECSg09Q==",
1320 |       "license": "MIT",
1321 |       "dependencies": {
1322 |         "@babel/helper-plugin-utils": "^7.27.1",
1323 |         "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1"
1324 |       },
1325 |       "engines": {
1326 |         "node": ">=6.9.0"
1327 |       },
1328 |       "peerDependencies": {
1329 |         "@babel/core": "^7.0.0-0"
1330 |       }
1331 |     },
1332 |     "node_modules/@babel/plugin-transform-sticky-regex": {
1333 |       "version": "7.27.1",
1334 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.27.1.tgz",
1335 |       "integrity": "sha512-lhInBO5bi/Kowe2/aLdBAawijx+q1pQzicSgnkB6dUPc1+RC8QmJHKf2OjvU+NZWitguJHEaEmbV6VWEouT58g==",
1336 |       "license": "MIT",
1337 |       "dependencies": {
1338 |         "@babel/helper-plugin-utils": "^7.27.1"
1339 |       },
1340 |       "engines": {
1341 |         "node": ">=6.9.0"
1342 |       },
1343 |       "peerDependencies": {
1344 |         "@babel/core": "^7.0.0-0"
1345 |       }
1346 |     },
1347 |     "node_modules/@babel/plugin-transform-typescript": {
1348 |       "version": "7.28.0",
1349 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.28.0.tgz",
1350 |       "integrity": "sha512-4AEiDEBPIZvLQaWlc9liCavE0xRM0dNca41WtBeM3jgFptfUOSG9z0uteLhq6+3rq+WB6jIvUwKDTpXEHPJ2Vg==",
1351 |       "license": "MIT",
1352 |       "dependencies": {
1353 |         "@babel/helper-annotate-as-pure": "^7.27.3",
1354 |         "@babel/helper-create-class-features-plugin": "^7.27.1",
1355 |         "@babel/helper-plugin-utils": "^7.27.1",
1356 |         "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1",
1357 |         "@babel/plugin-syntax-typescript": "^7.27.1"
1358 |       },
1359 |       "engines": {
1360 |         "node": ">=6.9.0"
1361 |       },
1362 |       "peerDependencies": {
1363 |         "@babel/core": "^7.0.0-0"
1364 |       }
1365 |     },
1366 |     "node_modules/@babel/plugin-transform-unicode-regex": {
1367 |       "version": "7.27.1",
1368 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.27.1.tgz",
1369 |       "integrity": "sha512-xvINq24TRojDuyt6JGtHmkVkrfVV3FPT16uytxImLeBZqW3/H52yN+kM1MGuyPkIQxrzKwPHs5U/MP3qKyzkGw==",
1370 |       "license": "MIT",
1371 |       "dependencies": {
1372 |         "@babel/helper-create-regexp-features-plugin": "^7.27.1",
1373 |         "@babel/helper-plugin-utils": "^7.27.1"
1374 |       },
1375 |       "engines": {
1376 |         "node": ">=6.9.0"
1377 |       },
1378 |       "peerDependencies": {
1379 |         "@babel/core": "^7.0.0-0"
1380 |       }
1381 |     },
1382 |     "node_modules/@babel/preset-react": {
1383 |       "version": "7.27.1",
1384 |       "resolved": "https://registry.npmjs.org/@babel/preset-react/-/preset-react-7.27.1.tgz",
1385 |       "integrity": "sha512-oJHWh2gLhU9dW9HHr42q0cI0/iHHXTLGe39qvpAZZzagHy0MzYLCnCVV0symeRvzmjHyVU7mw2K06E6u/JwbhA==",
1386 |       "license": "MIT",
1387 |       "dependencies": {
1388 |         "@babel/helper-plugin-utils": "^7.27.1",
1389 |         "@babel/helper-validator-option": "^7.27.1",
1390 |         "@babel/plugin-transform-react-display-name": "^7.27.1",
1391 |         "@babel/plugin-transform-react-jsx": "^7.27.1",
1392 |         "@babel/plugin-transform-react-jsx-development": "^7.27.1",
1393 |         "@babel/plugin-transform-react-pure-annotations": "^7.27.1"
1394 |       },
1395 |       "engines": {
1396 |         "node": ">=6.9.0"
1397 |       },
1398 |       "peerDependencies": {
1399 |         "@babel/core": "^7.0.0-0"
1400 |       }
1401 |     },
1402 |     "node_modules/@babel/preset-typescript": {
1403 |       "version": "7.27.1",
1404 |       "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.27.1.tgz",
1405 |       "integrity": "sha512-l7WfQfX0WK4M0v2RudjuQK4u99BS6yLHYEmdtVPP7lKV013zr9DygFuWNlnbvQ9LR+LS0Egz/XAvGx5U9MX0fQ==",
1406 |       "license": "MIT",
1407 |       "dependencies": {
1408 |         "@babel/helper-plugin-utils": "^7.27.1",
1409 |         "@babel/helper-validator-option": "^7.27.1",
1410 |         "@babel/plugin-syntax-jsx": "^7.27.1",
1411 |         "@babel/plugin-transform-modules-commonjs": "^7.27.1",
1412 |         "@babel/plugin-transform-typescript": "^7.27.1"
1413 |       },
1414 |       "engines": {
1415 |         "node": ">=6.9.0"
1416 |       },
1417 |       "peerDependencies": {
1418 |         "@babel/core": "^7.0.0-0"
1419 |       }
1420 |     },
1421 |     "node_modules/@babel/runtime": {
1422 |       "version": "7.28.4",
1423 |       "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.4.tgz",
1424 |       "integrity": "sha512-Q/N6JNWvIvPnLDvjlE1OUBLPQHH6l3CltCEsHIujp45zQUSSh8K+gHnaEX45yAT1nyngnINhvWtzN+Nb9D8RAQ==",
1425 |       "license": "MIT",
1426 |       "engines": {
1427 |         "node": ">=6.9.0"
1428 |       }
1429 |     },
1430 |     "node_modules/@babel/template": {
1431 |       "version": "7.27.2",
1432 |       "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
1433 |       "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
1434 |       "license": "MIT",
1435 |       "dependencies": {
1436 |         "@babel/code-frame": "^7.27.1",
1437 |         "@babel/parser": "^7.27.2",
1438 |         "@babel/types": "^7.27.1"
1439 |       },
1440 |       "engines": {
1441 |         "node": ">=6.9.0"
1442 |       }
1443 |     },
1444 |     "node_modules/@babel/template/node_modules/@babel/code-frame": {
1445 |       "version": "7.27.1",
1446 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
1447 |       "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
1448 |       "license": "MIT",
1449 |       "dependencies": {
1450 |         "@babel/helper-validator-identifier": "^7.27.1",
1451 |         "js-tokens": "^4.0.0",
1452 |         "picocolors": "^1.1.1"
1453 |       },
1454 |       "engines": {
1455 |         "node": ">=6.9.0"
1456 |       }
1457 |     },
1458 |     "node_modules/@babel/traverse": {
1459 |       "version": "7.28.4",
1460 |       "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.4.tgz",
1461 |       "integrity": "sha512-YEzuboP2qvQavAcjgQNVgsvHIDv6ZpwXvcvjmyySP2DIMuByS/6ioU5G9pYrWHM6T2YDfc7xga9iNzYOs12CFQ==",
1462 |       "license": "MIT",
1463 |       "dependencies": {
1464 |         "@babel/code-frame": "^7.27.1",
1465 |         "@babel/generator": "^7.28.3",
1466 |         "@babel/helper-globals": "^7.28.0",
1467 |         "@babel/parser": "^7.28.4",
1468 |         "@babel/template": "^7.27.2",
1469 |         "@babel/types": "^7.28.4",
1470 |         "debug": "^4.3.1"
1471 |       },
1472 |       "engines": {
1473 |         "node": ">=6.9.0"
1474 |       }
1475 |     },
1476 |     "node_modules/@babel/traverse--for-generate-function-map": {
1477 |       "name": "@babel/traverse",
1478 |       "version": "7.28.4",
1479 |       "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.4.tgz",
1480 |       "integrity": "sha512-YEzuboP2qvQavAcjgQNVgsvHIDv6ZpwXvcvjmyySP2DIMuByS/6ioU5G9pYrWHM6T2YDfc7xga9iNzYOs12CFQ==",
1481 |       "license": "MIT",
1482 |       "dependencies": {
1483 |         "@babel/code-frame": "^7.27.1",
1484 |         "@babel/generator": "^7.28.3",
1485 |         "@babel/helper-globals": "^7.28.0",
1486 |         "@babel/parser": "^7.28.4",
1487 |         "@babel/template": "^7.27.2",
1488 |         "@babel/types": "^7.28.4",
1489 |         "debug": "^4.3.1"
1490 |       },
1491 |       "engines": {
1492 |         "node": ">=6.9.0"
1493 |       }
1494 |     },
1495 |     "node_modules/@babel/traverse--for-generate-function-map/node_modules/@babel/code-frame": {
1496 |       "version": "7.27.1",
1497 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
1498 |       "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
1499 |       "license": "MIT",
1500 |       "dependencies": {
1501 |         "@babel/helper-validator-identifier": "^7.27.1",
1502 |         "js-tokens": "^4.0.0",
1503 |         "picocolors": "^1.1.1"
1504 |       },
1505 |       "engines": {
1506 |         "node": ">=6.9.0"
1507 |       }
1508 |     },
1509 |     "node_modules/@babel/traverse/node_modules/@babel/code-frame": {
1510 |       "version": "7.27.1",
1511 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
1512 |       "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
1513 |       "license": "MIT",
1514 |       "dependencies": {
1515 |         "@babel/helper-validator-identifier": "^7.27.1",
1516 |         "js-tokens": "^4.0.0",
1517 |         "picocolors": "^1.1.1"
1518 |       },
1519 |       "engines": {
1520 |         "node": ">=6.9.0"
1521 |       }
1522 |     },
1523 |     "node_modules/@babel/types": {
1524 |       "version": "7.28.4",
1525 |       "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.4.tgz",
1526 |       "integrity": "sha512-bkFqkLhh3pMBUQQkpVgWDWq/lqzc2678eUyDlTBhRqhCHFguYYGM0Efga7tYk4TogG/3x0EEl66/OQ+WGbWB/Q==",
1527 |       "license": "MIT",
1528 |       "dependencies": {
1529 |         "@babel/helper-string-parser": "^7.27.1",
1530 |         "@babel/helper-validator-identifier": "^7.27.1"
1531 |       },
1532 |       "engines": {
1533 |         "node": ">=6.9.0"
1534 |       }
1535 |     },
1536 |     "node_modules/@egjs/hammerjs": {
1537 |       "version": "2.0.17",
1538 |       "resolved": "https://registry.npmjs.org/@egjs/hammerjs/-/hammerjs-2.0.17.tgz",
1539 |       "integrity": "sha512-XQsZgjm2EcVUiZQf11UBJQfmZeEmOW8DpI1gsFeln6w0ae0ii4dMQEQ0kjl6DspdWX1aGY1/loyXnP0JS06e/A==",
1540 |       "license": "MIT",
1541 |       "peer": true,
1542 |       "dependencies": {
1543 |         "@types/hammerjs": "^2.0.36"
1544 |       },
1545 |       "engines": {
1546 |         "node": ">=0.8.0"
1547 |       }
1548 |     },
1549 |     "node_modules/@expo/code-signing-certificates": {
1550 |       "version": "0.0.5",
1551 |       "resolved": "https://registry.npmjs.org/@expo/code-signing-certificates/-/code-signing-certificates-0.0.5.tgz",
1552 |       "integrity": "sha512-BNhXkY1bblxKZpltzAx98G2Egj9g1Q+JRcvR7E99DOj862FTCX+ZPsAUtPTr7aHxwtrL7+fL3r0JSmM9kBm+Bw==",
1553 |       "license": "MIT",
1554 |       "dependencies": {
1555 |         "node-forge": "^1.2.1",
1556 |         "nullthrows": "^1.1.1"
1557 |       }
1558 |     },
1559 |     "node_modules/@expo/config": {
1560 |       "version": "12.0.9",
1561 |       "resolved": "https://registry.npmjs.org/@expo/config/-/config-12.0.9.tgz",
1562 |       "integrity": "sha512-HiDVVaXYKY57+L1MxSF3TaYjX6zZlGBnuWnOKZG+7mtsLD+aNTtW4bZM0pZqZfoRumyOU0SfTCwT10BWtUUiJQ==",
1563 |       "license": "MIT",
1564 |       "dependencies": {
1565 |         "@babel/code-frame": "~7.10.4",
1566 |         "@expo/config-plugins": "~54.0.1",
1567 |         "@expo/config-types": "^54.0.8",
1568 |         "@expo/json-file": "^10.0.7",
1569 |         "deepmerge": "^4.3.1",
1570 |         "getenv": "^2.0.0",
1571 |         "glob": "^10.4.2",
1572 |         "require-from-string": "^2.0.2",
1573 |         "resolve-from": "^5.0.0",
1574 |         "resolve-workspace-root": "^2.0.0",
1575 |         "semver": "^7.6.0",
1576 |         "slugify": "^1.3.4",
1577 |         "sucrase": "3.35.0"
1578 |       }
1579 |     },
1580 |     "node_modules/@expo/config-plugins": {
1581 |       "version": "54.0.1",
1582 |       "resolved": "https://registry.npmjs.org/@expo/config-plugins/-/config-plugins-54.0.1.tgz",
1583 |       "integrity": "sha512-NyBChhiWFL6VqSgU+LzK4R1vC397tEG2XFewVt4oMr4Pnalq/mJxBANQrR+dyV1RHhSyhy06RNiJIkQyngVWeg==",
1584 |       "license": "MIT",
1585 |       "dependencies": {
1586 |         "@expo/config-types": "^54.0.8",
1587 |         "@expo/json-file": "~10.0.7",
1588 |         "@expo/plist": "^0.4.7",
1589 |         "@expo/sdk-runtime-versions": "^1.0.0",
1590 |         "chalk": "^4.1.2",
1591 |         "debug": "^4.3.5",
1592 |         "getenv": "^2.0.0",
1593 |         "glob": "^10.4.2",
1594 |         "resolve-from": "^5.0.0",
1595 |         "semver": "^7.5.4",
1596 |         "slash": "^3.0.0",
1597 |         "slugify": "^1.6.6",
1598 |         "xcode": "^3.0.1",
1599 |         "xml2js": "0.6.0"
1600 |       }
1601 |     },
1602 |     "node_modules/@expo/config-plugins/node_modules/ansi-styles": {
1603 |       "version": "4.3.0",
1604 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
1605 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
1606 |       "license": "MIT",
1607 |       "dependencies": {
1608 |         "color-convert": "^2.0.1"
1609 |       },
1610 |       "engines": {
1611 |         "node": ">=8"
1612 |       },
1613 |       "funding": {
1614 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
1615 |       }
1616 |     },
1617 |     "node_modules/@expo/config-plugins/node_modules/chalk": {
1618 |       "version": "4.1.2",
1619 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
1620 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
1621 |       "license": "MIT",
1622 |       "dependencies": {
1623 |         "ansi-styles": "^4.1.0",
1624 |         "supports-color": "^7.1.0"
1625 |       },
1626 |       "engines": {
1627 |         "node": ">=10"
1628 |       },
1629 |       "funding": {
1630 |         "url": "https://github.com/chalk/chalk?sponsor=1"
1631 |       }
1632 |     },
1633 |     "node_modules/@expo/config-plugins/node_modules/color-convert": {
1634 |       "version": "2.0.1",
1635 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
1636 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
1637 |       "license": "MIT",
1638 |       "dependencies": {
1639 |         "color-name": "~1.1.4"
1640 |       },
1641 |       "engines": {
1642 |         "node": ">=7.0.0"
1643 |       }
1644 |     },
1645 |     "node_modules/@expo/config-plugins/node_modules/color-name": {
1646 |       "version": "1.1.4",
1647 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
1648 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
1649 |       "license": "MIT"
1650 |     },
1651 |     "node_modules/@expo/config-plugins/node_modules/has-flag": {
1652 |       "version": "4.0.0",
1653 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
1654 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
1655 |       "license": "MIT",
1656 |       "engines": {
1657 |         "node": ">=8"
1658 |       }
1659 |     },
1660 |     "node_modules/@expo/config-plugins/node_modules/supports-color": {
1661 |       "version": "7.2.0",
1662 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
1663 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
1664 |       "license": "MIT",
1665 |       "dependencies": {
1666 |         "has-flag": "^4.0.0"
1667 |       },
1668 |       "engines": {
1669 |         "node": ">=8"
1670 |       }
1671 |     },
1672 |     "node_modules/@expo/config-types": {
1673 |       "version": "54.0.8",
1674 |       "resolved": "https://registry.npmjs.org/@expo/config-types/-/config-types-54.0.8.tgz",
1675 |       "integrity": "sha512-lyIn/x/Yz0SgHL7IGWtgTLg6TJWC9vL7489++0hzCHZ4iGjVcfZmPTUfiragZ3HycFFj899qN0jlhl49IHa94A==",
1676 |       "license": "MIT"
1677 |     },
1678 |     "node_modules/@expo/devcert": {
1679 |       "version": "1.2.0",
1680 |       "resolved": "https://registry.npmjs.org/@expo/devcert/-/devcert-1.2.0.tgz",
1681 |       "integrity": "sha512-Uilcv3xGELD5t/b0eM4cxBFEKQRIivB3v7i+VhWLV/gL98aw810unLKKJbGAxAIhY6Ipyz8ChWibFsKFXYwstA==",
1682 |       "license": "MIT",
1683 |       "dependencies": {
1684 |         "@expo/sudo-prompt": "^9.3.1",
1685 |         "debug": "^3.1.0",
1686 |         "glob": "^10.4.2"
1687 |       }
1688 |     },
1689 |     "node_modules/@expo/devcert/node_modules/debug": {
1690 |       "version": "3.2.7",
1691 |       "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
1692 |       "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
1693 |       "license": "MIT",
1694 |       "dependencies": {
1695 |         "ms": "^2.1.1"
1696 |       }
1697 |     },
1698 |     "node_modules/@expo/devtools": {
1699 |       "version": "0.1.7",
1700 |       "resolved": "https://registry.npmjs.org/@expo/devtools/-/devtools-0.1.7.tgz",
1701 |       "integrity": "sha512-dfIa9qMyXN+0RfU6SN4rKeXZyzKWsnz6xBSDccjL4IRiE+fQ0t84zg0yxgN4t/WK2JU5v6v4fby7W7Crv9gJvA==",
1702 |       "license": "MIT",
1703 |       "dependencies": {
1704 |         "chalk": "^4.1.2"
1705 |       },
1706 |       "peerDependencies": {
1707 |         "react": "*",
1708 |         "react-native": "*"
1709 |       },
1710 |       "peerDependenciesMeta": {
1711 |         "react": {
1712 |           "optional": true
1713 |         },
1714 |         "react-native": {
1715 |           "optional": true
1716 |         }
1717 |       }
1718 |     },
1719 |     "node_modules/@expo/devtools/node_modules/ansi-styles": {
1720 |       "version": "4.3.0",
1721 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
1722 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
1723 |       "license": "MIT",
1724 |       "dependencies": {
1725 |         "color-convert": "^2.0.1"
1726 |       },
1727 |       "engines": {
1728 |         "node": ">=8"
1729 |       },
1730 |       "funding": {
1731 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
1732 |       }
1733 |     },
1734 |     "node_modules/@expo/devtools/node_modules/chalk": {
1735 |       "version": "4.1.2",
1736 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
1737 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
1738 |       "license": "MIT",
1739 |       "dependencies": {
1740 |         "ansi-styles": "^4.1.0",
1741 |         "supports-color": "^7.1.0"
1742 |       },
1743 |       "engines": {
1744 |         "node": ">=10"
1745 |       },
1746 |       "funding": {
1747 |         "url": "https://github.com/chalk/chalk?sponsor=1"
1748 |       }
1749 |     },
1750 |     "node_modules/@expo/devtools/node_modules/color-convert": {
1751 |       "version": "2.0.1",
1752 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
1753 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
1754 |       "license": "MIT",
1755 |       "dependencies": {
1756 |         "color-name": "~1.1.4"
1757 |       },
1758 |       "engines": {
1759 |         "node": ">=7.0.0"
1760 |       }
1761 |     },
1762 |     "node_modules/@expo/devtools/node_modules/color-name": {
1763 |       "version": "1.1.4",
1764 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
1765 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
1766 |       "license": "MIT"
1767 |     },
1768 |     "node_modules/@expo/devtools/node_modules/has-flag": {
1769 |       "version": "4.0.0",
1770 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
1771 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
1772 |       "license": "MIT",
1773 |       "engines": {
1774 |         "node": ">=8"
1775 |       }
1776 |     },
1777 |     "node_modules/@expo/devtools/node_modules/supports-color": {
1778 |       "version": "7.2.0",
1779 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
1780 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
1781 |       "license": "MIT",
1782 |       "dependencies": {
1783 |         "has-flag": "^4.0.0"
1784 |       },
1785 |       "engines": {
1786 |         "node": ">=8"
1787 |       }
1788 |     },
1789 |     "node_modules/@expo/env": {
1790 |       "version": "2.0.7",
1791 |       "resolved": "https://registry.npmjs.org/@expo/env/-/env-2.0.7.tgz",
1792 |       "integrity": "sha512-BNETbLEohk3HQ2LxwwezpG8pq+h7Fs7/vAMP3eAtFT1BCpprLYoBBFZH7gW4aqGfqOcVP4Lc91j014verrYNGg==",
1793 |       "license": "MIT",
1794 |       "dependencies": {
1795 |         "chalk": "^4.0.0",
1796 |         "debug": "^4.3.4",
1797 |         "dotenv": "~16.4.5",
1798 |         "dotenv-expand": "~11.0.6",
1799 |         "getenv": "^2.0.0"
1800 |       }
1801 |     },
1802 |     "node_modules/@expo/env/node_modules/ansi-styles": {
1803 |       "version": "4.3.0",
1804 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
1805 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
1806 |       "license": "MIT",
1807 |       "dependencies": {
1808 |         "color-convert": "^2.0.1"
1809 |       },
1810 |       "engines": {
1811 |         "node": ">=8"
1812 |       },
1813 |       "funding": {
1814 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
1815 |       }
1816 |     },
1817 |     "node_modules/@expo/env/node_modules/chalk": {
1818 |       "version": "4.1.2",
1819 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
1820 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
1821 |       "license": "MIT",
1822 |       "dependencies": {
1823 |         "ansi-styles": "^4.1.0",
1824 |         "supports-color": "^7.1.0"
1825 |       },
1826 |       "engines": {
1827 |         "node": ">=10"
1828 |       },
1829 |       "funding": {
1830 |         "url": "https://github.com/chalk/chalk?sponsor=1"
1831 |       }
1832 |     },
1833 |     "node_modules/@expo/env/node_modules/color-convert": {
1834 |       "version": "2.0.1",
1835 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
1836 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
1837 |       "license": "MIT",
1838 |       "dependencies": {
1839 |         "color-name": "~1.1.4"
1840 |       },
1841 |       "engines": {
1842 |         "node": ">=7.0.0"
1843 |       }
1844 |     },
1845 |     "node_modules/@expo/env/node_modules/color-name": {
1846 |       "version": "1.1.4",
1847 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
1848 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
1849 |       "license": "MIT"
1850 |     },
1851 |     "node_modules/@expo/env/node_modules/has-flag": {
1852 |       "version": "4.0.0",
1853 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
1854 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
1855 |       "license": "MIT",
1856 |       "engines": {
1857 |         "node": ">=8"
1858 |       }
1859 |     },
1860 |     "node_modules/@expo/env/node_modules/supports-color": {
1861 |       "version": "7.2.0",
1862 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
1863 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
1864 |       "license": "MIT",
1865 |       "dependencies": {
1866 |         "has-flag": "^4.0.0"
1867 |       },
1868 |       "engines": {
1869 |         "node": ">=8"
1870 |       }
1871 |     },
1872 |     "node_modules/@expo/fingerprint": {
1873 |       "version": "0.15.0",
1874 |       "resolved": "https://registry.npmjs.org/@expo/fingerprint/-/fingerprint-0.15.0.tgz",
1875 |       "integrity": "sha512-PrLA6fxScZfnLy7OHZ2GHXsDG9YbE7L5DbNhion6j/U/O+FQgz4VbxJarW5C00kMg1ll2u6EghB7ENAvL1T4qg==",
1876 |       "license": "MIT",
1877 |       "dependencies": {
1878 |         "@expo/spawn-async": "^1.7.2",
1879 |         "arg": "^5.0.2",
1880 |         "chalk": "^4.1.2",
1881 |         "debug": "^4.3.4",
1882 |         "getenv": "^2.0.0",
1883 |         "glob": "^10.4.2",
1884 |         "ignore": "^5.3.1",
1885 |         "minimatch": "^9.0.0",
1886 |         "p-limit": "^3.1.0",
1887 |         "resolve-from": "^5.0.0",
1888 |         "semver": "^7.6.0"
1889 |       },
1890 |       "bin": {
1891 |         "fingerprint": "bin/cli.js"
1892 |       }
1893 |     },
1894 |     "node_modules/@expo/fingerprint/node_modules/ansi-styles": {
1895 |       "version": "4.3.0",
1896 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
1897 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
1898 |       "license": "MIT",
1899 |       "dependencies": {
1900 |         "color-convert": "^2.0.1"
1901 |       },
1902 |       "engines": {
1903 |         "node": ">=8"
1904 |       },
1905 |       "funding": {
1906 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
1907 |       }
1908 |     },
1909 |     "node_modules/@expo/fingerprint/node_modules/chalk": {
1910 |       "version": "4.1.2",
1911 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
1912 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
1913 |       "license": "MIT",
1914 |       "dependencies": {
1915 |         "ansi-styles": "^4.1.0",
1916 |         "supports-color": "^7.1.0"
1917 |       },
1918 |       "engines": {
1919 |         "node": ">=10"
1920 |       },
1921 |       "funding": {
1922 |         "url": "https://github.com/chalk/chalk?sponsor=1"
1923 |       }
1924 |     },
1925 |     "node_modules/@expo/fingerprint/node_modules/color-convert": {
1926 |       "version": "2.0.1",
1927 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
1928 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
1929 |       "license": "MIT",
1930 |       "dependencies": {
1931 |         "color-name": "~1.1.4"
1932 |       },
1933 |       "engines": {
1934 |         "node": ">=7.0.0"
1935 |       }
1936 |     },
1937 |     "node_modules/@expo/fingerprint/node_modules/color-name": {
1938 |       "version": "1.1.4",
1939 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
1940 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
1941 |       "license": "MIT"
1942 |     },
1943 |     "node_modules/@expo/fingerprint/node_modules/has-flag": {
1944 |       "version": "4.0.0",
1945 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
1946 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
1947 |       "license": "MIT",
1948 |       "engines": {
1949 |         "node": ">=8"
1950 |       }
1951 |     },
1952 |     "node_modules/@expo/fingerprint/node_modules/supports-color": {
1953 |       "version": "7.2.0",
1954 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
1955 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
1956 |       "license": "MIT",
1957 |       "dependencies": {
1958 |         "has-flag": "^4.0.0"
1959 |       },
1960 |       "engines": {
1961 |         "node": ">=8"
1962 |       }
1963 |     },
1964 |     "node_modules/@expo/image-utils": {
1965 |       "version": "0.8.7",
1966 |       "resolved": "https://registry.npmjs.org/@expo/image-utils/-/image-utils-0.8.7.tgz",
1967 |       "integrity": "sha512-SXOww4Wq3RVXLyOaXiCCuQFguCDh8mmaHBv54h/R29wGl4jRY8GEyQEx8SypV/iHt1FbzsU/X3Qbcd9afm2W2w==",
1968 |       "license": "MIT",
1969 |       "dependencies": {
1970 |         "@expo/spawn-async": "^1.7.2",
1971 |         "chalk": "^4.0.0",
1972 |         "getenv": "^2.0.0",
1973 |         "jimp-compact": "0.16.1",
1974 |         "parse-png": "^2.1.0",
1975 |         "resolve-from": "^5.0.0",
1976 |         "resolve-global": "^1.0.0",
1977 |         "semver": "^7.6.0",
1978 |         "temp-dir": "~2.0.0",
1979 |         "unique-string": "~2.0.0"
1980 |       }
1981 |     },
1982 |     "node_modules/@expo/image-utils/node_modules/ansi-styles": {
1983 |       "version": "4.3.0",
1984 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
1985 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
1986 |       "license": "MIT",
1987 |       "dependencies": {
1988 |         "color-convert": "^2.0.1"
1989 |       },
1990 |       "engines": {
1991 |         "node": ">=8"
1992 |       },
1993 |       "funding": {
1994 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
1995 |       }
1996 |     },
1997 |     "node_modules/@expo/image-utils/node_modules/chalk": {
1998 |       "version": "4.1.2",
1999 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
2000 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
2001 |       "license": "MIT",
2002 |       "dependencies": {
2003 |         "ansi-styles": "^4.1.0",
2004 |         "supports-color": "^7.1.0"
2005 |       },
2006 |       "engines": {
2007 |         "node": ">=10"
2008 |       },
2009 |       "funding": {
2010 |         "url": "https://github.com/chalk/chalk?sponsor=1"
2011 |       }
2012 |     },
2013 |     "node_modules/@expo/image-utils/node_modules/color-convert": {
2014 |       "version": "2.0.1",
2015 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
2016 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
2017 |       "license": "MIT",
2018 |       "dependencies": {
2019 |         "color-name": "~1.1.4"
2020 |       },
2021 |       "engines": {
2022 |         "node": ">=7.0.0"
2023 |       }
2024 |     },
2025 |     "node_modules/@expo/image-utils/node_modules/color-name": {
2026 |       "version": "1.1.4",
2027 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
2028 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
2029 |       "license": "MIT"
2030 |     },
2031 |     "node_modules/@expo/image-utils/node_modules/has-flag": {
2032 |       "version": "4.0.0",
2033 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
2034 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
2035 |       "license": "MIT",
2036 |       "engines": {
2037 |         "node": ">=8"
2038 |       }
2039 |     },
2040 |     "node_modules/@expo/image-utils/node_modules/supports-color": {
2041 |       "version": "7.2.0",
2042 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
2043 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
2044 |       "license": "MIT",
2045 |       "dependencies": {
2046 |         "has-flag": "^4.0.0"
2047 |       },
2048 |       "engines": {
2049 |         "node": ">=8"
2050 |       }
2051 |     },
2052 |     "node_modules/@expo/json-file": {
2053 |       "version": "10.0.7",
2054 |       "resolved": "https://registry.npmjs.org/@expo/json-file/-/json-file-10.0.7.tgz",
2055 |       "integrity": "sha512-z2OTC0XNO6riZu98EjdNHC05l51ySeTto6GP7oSQrCvQgG9ARBwD1YvMQaVZ9wU7p/4LzSf1O7tckL3B45fPpw==",
2056 |       "license": "MIT",
2057 |       "dependencies": {
2058 |         "@babel/code-frame": "~7.10.4",
2059 |         "json5": "^2.2.3"
2060 |       }
2061 |     },
2062 |     "node_modules/@expo/metro": {
2063 |       "version": "0.1.1",
2064 |       "resolved": "https://registry.npmjs.org/@expo/metro/-/metro-0.1.1.tgz",
2065 |       "integrity": "sha512-zvA9BE6myFoCxeiw/q3uE/kVkIwLTy27a+fDoEl7WQ7EvKfFeiXnRVhUplDMLGZIHH8VC38Gay6RBtVhnmOm5w==",
2066 |       "license": "MIT",
2067 |       "dependencies": {
2068 |         "metro": "0.83.1",
2069 |         "metro-babel-transformer": "0.83.1",
2070 |         "metro-cache": "0.83.1",
2071 |         "metro-cache-key": "0.83.1",
2072 |         "metro-config": "0.83.1",
2073 |         "metro-core": "0.83.1",
2074 |         "metro-file-map": "0.83.1",
2075 |         "metro-resolver": "0.83.1",
2076 |         "metro-runtime": "0.83.1",
2077 |         "metro-source-map": "0.83.1",
2078 |         "metro-transform-plugins": "0.83.1",
2079 |         "metro-transform-worker": "0.83.1"
2080 |       }
2081 |     },
2082 |     "node_modules/@expo/metro-config": {
2083 |       "version": "54.0.3",
2084 |       "resolved": "https://registry.npmjs.org/@expo/metro-config/-/metro-config-54.0.3.tgz",
2085 |       "integrity": "sha512-TQ5MKSGFB6zJxi+Yr8VYXQFHzRXgvSJzNsHX1otTqnxjXbptwYiXhljAqGSjr3pByq4+sHX/GifMk6fGgAANmA==",
2086 |       "license": "MIT",
2087 |       "dependencies": {
2088 |         "@babel/code-frame": "^7.20.0",
2089 |         "@babel/core": "^7.20.0",
2090 |         "@babel/generator": "^7.20.5",
2091 |         "@expo/config": "~12.0.9",
2092 |         "@expo/env": "~2.0.7",
2093 |         "@expo/json-file": "~10.0.7",
2094 |         "@expo/metro": "~0.1.1",
2095 |         "@expo/spawn-async": "^1.7.2",
2096 |         "browserslist": "^4.25.0",
2097 |         "chalk": "^4.1.0",
2098 |         "debug": "^4.3.2",
2099 |         "dotenv": "~16.4.5",
2100 |         "dotenv-expand": "~11.0.6",
2101 |         "getenv": "^2.0.0",
2102 |         "glob": "^10.4.2",
2103 |         "hermes-parser": "^0.29.1",
2104 |         "jsc-safe-url": "^0.2.4",
2105 |         "lightningcss": "^1.30.1",
2106 |         "minimatch": "^9.0.0",
2107 |         "postcss": "~8.4.32",
2108 |         "resolve-from": "^5.0.0"
2109 |       },
2110 |       "peerDependencies": {
2111 |         "expo": "*"
2112 |       },
2113 |       "peerDependenciesMeta": {
2114 |         "expo": {
2115 |           "optional": true
2116 |         }
2117 |       }
2118 |     },
2119 |     "node_modules/@expo/metro-config/node_modules/@babel/code-frame": {
2120 |       "version": "7.27.1",
2121 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
2122 |       "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
2123 |       "license": "MIT",
2124 |       "dependencies": {
2125 |         "@babel/helper-validator-identifier": "^7.27.1",
2126 |         "js-tokens": "^4.0.0",
2127 |         "picocolors": "^1.1.1"
2128 |       },
2129 |       "engines": {
2130 |         "node": ">=6.9.0"
2131 |       }
2132 |     },
2133 |     "node_modules/@expo/metro-config/node_modules/ansi-styles": {
2134 |       "version": "4.3.0",
2135 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
2136 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
2137 |       "license": "MIT",
2138 |       "dependencies": {
2139 |         "color-convert": "^2.0.1"
2140 |       },
2141 |       "engines": {
2142 |         "node": ">=8"
2143 |       },
2144 |       "funding": {
2145 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
2146 |       }
2147 |     },
2148 |     "node_modules/@expo/metro-config/node_modules/chalk": {
2149 |       "version": "4.1.2",
2150 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
2151 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
2152 |       "license": "MIT",
2153 |       "dependencies": {
2154 |         "ansi-styles": "^4.1.0",
2155 |         "supports-color": "^7.1.0"
2156 |       },
2157 |       "engines": {
2158 |         "node": ">=10"
2159 |       },
2160 |       "funding": {
2161 |         "url": "https://github.com/chalk/chalk?sponsor=1"
2162 |       }
2163 |     },
2164 |     "node_modules/@expo/metro-config/node_modules/color-convert": {
2165 |       "version": "2.0.1",
2166 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
2167 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
2168 |       "license": "MIT",
2169 |       "dependencies": {
2170 |         "color-name": "~1.1.4"
2171 |       },
2172 |       "engines": {
2173 |         "node": ">=7.0.0"
2174 |       }
2175 |     },
2176 |     "node_modules/@expo/metro-config/node_modules/color-name": {
2177 |       "version": "1.1.4",
2178 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
2179 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
2180 |       "license": "MIT"
2181 |     },
2182 |     "node_modules/@expo/metro-config/node_modules/has-flag": {
2183 |       "version": "4.0.0",
2184 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
2185 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
2186 |       "license": "MIT",
2187 |       "engines": {
2188 |         "node": ">=8"
2189 |       }
2190 |     },
2191 |     "node_modules/@expo/metro-config/node_modules/supports-color": {
2192 |       "version": "7.2.0",
2193 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
2194 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
2195 |       "license": "MIT",
2196 |       "dependencies": {
2197 |         "has-flag": "^4.0.0"
2198 |       },
2199 |       "engines": {
2200 |         "node": ">=8"
2201 |       }
2202 |     },
2203 |     "node_modules/@expo/osascript": {
2204 |       "version": "2.3.7",
2205 |       "resolved": "https://registry.npmjs.org/@expo/osascript/-/osascript-2.3.7.tgz",
2206 |       "integrity": "sha512-IClSOXxR0YUFxIriUJVqyYki7lLMIHrrzOaP01yxAL1G8pj2DWV5eW1y5jSzIcIfSCNhtGsshGd1tU/AYup5iQ==",
2207 |       "license": "MIT",
2208 |       "dependencies": {
2209 |         "@expo/spawn-async": "^1.7.2",
2210 |         "exec-async": "^2.2.0"
2211 |       },
2212 |       "engines": {
2213 |         "node": ">=12"
2214 |       }
2215 |     },
2216 |     "node_modules/@expo/package-manager": {
2217 |       "version": "1.9.7",
2218 |       "resolved": "https://registry.npmjs.org/@expo/package-manager/-/package-manager-1.9.7.tgz",
2219 |       "integrity": "sha512-k3uky8Qzlv21rxuPvP2KUTAy8NI0b/LP7BSXcwJpS/rH7RmiAqUXgzPar3I1OmKGgxpod78Y9Mae//F8d3aiOQ==",
2220 |       "license": "MIT",
2221 |       "dependencies": {
2222 |         "@expo/json-file": "^10.0.7",
2223 |         "@expo/spawn-async": "^1.7.2",
2224 |         "chalk": "^4.0.0",
2225 |         "npm-package-arg": "^11.0.0",
2226 |         "ora": "^3.4.0",
2227 |         "resolve-workspace-root": "^2.0.0"
2228 |       }
2229 |     },
2230 |     "node_modules/@expo/package-manager/node_modules/ansi-styles": {
2231 |       "version": "4.3.0",
2232 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
2233 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
2234 |       "license": "MIT",
2235 |       "dependencies": {
2236 |         "color-convert": "^2.0.1"
2237 |       },
2238 |       "engines": {
2239 |         "node": ">=8"
2240 |       },
2241 |       "funding": {
2242 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
2243 |       }
2244 |     },
2245 |     "node_modules/@expo/package-manager/node_modules/chalk": {
2246 |       "version": "4.1.2",
2247 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
2248 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
2249 |       "license": "MIT",
2250 |       "dependencies": {
2251 |         "ansi-styles": "^4.1.0",
2252 |         "supports-color": "^7.1.0"
2253 |       },
2254 |       "engines": {
2255 |         "node": ">=10"
2256 |       },
2257 |       "funding": {
2258 |         "url": "https://github.com/chalk/chalk?sponsor=1"
2259 |       }
2260 |     },
2261 |     "node_modules/@expo/package-manager/node_modules/color-convert": {
2262 |       "version": "2.0.1",
2263 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
2264 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
2265 |       "license": "MIT",
2266 |       "dependencies": {
2267 |         "color-name": "~1.1.4"
2268 |       },
2269 |       "engines": {
2270 |         "node": ">=7.0.0"
2271 |       }
2272 |     },
2273 |     "node_modules/@expo/package-manager/node_modules/color-name": {
2274 |       "version": "1.1.4",
2275 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
2276 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
2277 |       "license": "MIT"
2278 |     },
2279 |     "node_modules/@expo/package-manager/node_modules/has-flag": {
2280 |       "version": "4.0.0",
2281 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
2282 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
2283 |       "license": "MIT",
2284 |       "engines": {
2285 |         "node": ">=8"
2286 |       }
2287 |     },
2288 |     "node_modules/@expo/package-manager/node_modules/supports-color": {
2289 |       "version": "7.2.0",
2290 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
2291 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
2292 |       "license": "MIT",
2293 |       "dependencies": {
2294 |         "has-flag": "^4.0.0"
2295 |       },
2296 |       "engines": {
2297 |         "node": ">=8"
2298 |       }
2299 |     },
2300 |     "node_modules/@expo/plist": {
2301 |       "version": "0.4.7",
2302 |       "resolved": "https://registry.npmjs.org/@expo/plist/-/plist-0.4.7.tgz",
2303 |       "integrity": "sha512-dGxqHPvCZKeRKDU1sJZMmuyVtcASuSYh1LPFVaM1DuffqPL36n6FMEL0iUqq2Tx3xhWk8wCnWl34IKplUjJDdA==",
2304 |       "license": "MIT",
2305 |       "dependencies": {
2306 |         "@xmldom/xmldom": "^0.8.8",
2307 |         "base64-js": "^1.2.3",
2308 |         "xmlbuilder": "^15.1.1"
2309 |       }
2310 |     },
2311 |     "node_modules/@expo/schema-utils": {
2312 |       "version": "0.1.7",
2313 |       "resolved": "https://registry.npmjs.org/@expo/schema-utils/-/schema-utils-0.1.7.tgz",
2314 |       "integrity": "sha512-jWHoSuwRb5ZczjahrychMJ3GWZu54jK9ulNdh1d4OzAEq672K9E5yOlnlBsfIHWHGzUAT+0CL7Yt1INiXTz68g==",
2315 |       "license": "MIT"
2316 |     },
2317 |     "node_modules/@expo/sdk-runtime-versions": {
2318 |       "version": "1.0.0",
2319 |       "resolved": "https://registry.npmjs.org/@expo/sdk-runtime-versions/-/sdk-runtime-versions-1.0.0.tgz",
2320 |       "integrity": "sha512-Doz2bfiPndXYFPMRwPyGa1k5QaKDVpY806UJj570epIiMzWaYyCtobasyfC++qfIXVb5Ocy7r3tP9d62hAQ7IQ==",
2321 |       "license": "MIT"
2322 |     },
2323 |     "node_modules/@expo/server": {
2324 |       "version": "0.7.4",
2325 |       "resolved": "https://registry.npmjs.org/@expo/server/-/server-0.7.4.tgz",
2326 |       "integrity": "sha512-8bfRzL7h1Qgrmf3auR71sPAcAuxnmNkRJs+8enL8vZi2+hihevLhrayDu7P0A/XGEq7wySAGvBBFfIB00Et/AA==",
2327 |       "license": "MIT",
2328 |       "dependencies": {
2329 |         "abort-controller": "^3.0.0",
2330 |         "debug": "^4.3.4"
2331 |       },
2332 |       "engines": {
2333 |         "node": ">=20.16.0"
2334 |       }
2335 |     },
2336 |     "node_modules/@expo/spawn-async": {
2337 |       "version": "1.7.2",
2338 |       "resolved": "https://registry.npmjs.org/@expo/spawn-async/-/spawn-async-1.7.2.tgz",
2339 |       "integrity": "sha512-QdWi16+CHB9JYP7gma19OVVg0BFkvU8zNj9GjWorYI8Iv8FUxjOCcYRuAmX4s/h91e4e7BPsskc8cSrZYho9Ew==",
2340 |       "license": "MIT",
2341 |       "dependencies": {
2342 |         "cross-spawn": "^7.0.3"
2343 |       },
2344 |       "engines": {
2345 |         "node": ">=12"
2346 |       }
2347 |     },
2348 |     "node_modules/@expo/sudo-prompt": {
2349 |       "version": "9.3.2",
2350 |       "resolved": "https://registry.npmjs.org/@expo/sudo-prompt/-/sudo-prompt-9.3.2.tgz",
2351 |       "integrity": "sha512-HHQigo3rQWKMDzYDLkubN5WQOYXJJE2eNqIQC2axC2iO3mHdwnIR7FgZVvHWtBwAdzBgAP0ECp8KqS8TiMKvgw==",
2352 |       "license": "MIT"
2353 |     },
2354 |     "node_modules/@expo/ws-tunnel": {
2355 |       "version": "1.0.6",
2356 |       "resolved": "https://registry.npmjs.org/@expo/ws-tunnel/-/ws-tunnel-1.0.6.tgz",
2357 |       "integrity": "sha512-nDRbLmSrJar7abvUjp3smDwH8HcbZcoOEa5jVPUv9/9CajgmWw20JNRwTuBRzWIWIkEJDkz20GoNA+tSwUqk0Q==",
2358 |       "license": "MIT"
2359 |     },
2360 |     "node_modules/@expo/xcpretty": {
2361 |       "version": "4.3.2",
2362 |       "resolved": "https://registry.npmjs.org/@expo/xcpretty/-/xcpretty-4.3.2.tgz",
2363 |       "integrity": "sha512-ReZxZ8pdnoI3tP/dNnJdnmAk7uLT4FjsKDGW7YeDdvdOMz2XCQSmSCM9IWlrXuWtMF9zeSB6WJtEhCQ41gQOfw==",
2364 |       "license": "BSD-3-Clause",
2365 |       "dependencies": {
2366 |         "@babel/code-frame": "7.10.4",
2367 |         "chalk": "^4.1.0",
2368 |         "find-up": "^5.0.0",
2369 |         "js-yaml": "^4.1.0"
2370 |       },
2371 |       "bin": {
2372 |         "excpretty": "build/cli.js"
2373 |       }
2374 |     },
2375 |     "node_modules/@expo/xcpretty/node_modules/ansi-styles": {
2376 |       "version": "4.3.0",
2377 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
2378 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
2379 |       "license": "MIT",
2380 |       "dependencies": {
2381 |         "color-convert": "^2.0.1"
2382 |       },
2383 |       "engines": {
2384 |         "node": ">=8"
2385 |       },
2386 |       "funding": {
2387 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
2388 |       }
2389 |     },
2390 |     "node_modules/@expo/xcpretty/node_modules/argparse": {
2391 |       "version": "2.0.1",
2392 |       "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
2393 |       "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
2394 |       "license": "Python-2.0"
2395 |     },
2396 |     "node_modules/@expo/xcpretty/node_modules/chalk": {
2397 |       "version": "4.1.2",
2398 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
2399 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
2400 |       "license": "MIT",
2401 |       "dependencies": {
2402 |         "ansi-styles": "^4.1.0",
2403 |         "supports-color": "^7.1.0"
2404 |       },
2405 |       "engines": {
2406 |         "node": ">=10"
2407 |       },
2408 |       "funding": {
2409 |         "url": "https://github.com/chalk/chalk?sponsor=1"
2410 |       }
2411 |     },
2412 |     "node_modules/@expo/xcpretty/node_modules/color-convert": {
2413 |       "version": "2.0.1",
2414 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
2415 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
2416 |       "license": "MIT",
2417 |       "dependencies": {
2418 |         "color-name": "~1.1.4"
2419 |       },
2420 |       "engines": {
2421 |         "node": ">=7.0.0"
2422 |       }
2423 |     },
2424 |     "node_modules/@expo/xcpretty/node_modules/color-name": {
2425 |       "version": "1.1.4",
2426 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
2427 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
2428 |       "license": "MIT"
2429 |     },
2430 |     "node_modules/@expo/xcpretty/node_modules/find-up": {
2431 |       "version": "5.0.0",
2432 |       "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
2433 |       "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
2434 |       "license": "MIT",
2435 |       "dependencies": {
2436 |         "locate-path": "^6.0.0",
2437 |         "path-exists": "^4.0.0"
2438 |       },
2439 |       "engines": {
2440 |         "node": ">=10"
2441 |       },
2442 |       "funding": {
2443 |         "url": "https://github.com/sponsors/sindresorhus"
2444 |       }
2445 |     },
2446 |     "node_modules/@expo/xcpretty/node_modules/has-flag": {
2447 |       "version": "4.0.0",
2448 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
2449 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
2450 |       "license": "MIT",
2451 |       "engines": {
2452 |         "node": ">=8"
2453 |       }
2454 |     },
2455 |     "node_modules/@expo/xcpretty/node_modules/js-yaml": {
2456 |       "version": "4.1.0",
2457 |       "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
2458 |       "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
2459 |       "license": "MIT",
2460 |       "dependencies": {
2461 |         "argparse": "^2.0.1"
2462 |       },
2463 |       "bin": {
2464 |         "js-yaml": "bin/js-yaml.js"
2465 |       }
2466 |     },
2467 |     "node_modules/@expo/xcpretty/node_modules/locate-path": {
2468 |       "version": "6.0.0",
2469 |       "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
2470 |       "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
2471 |       "license": "MIT",
2472 |       "dependencies": {
2473 |         "p-locate": "^5.0.0"
2474 |       },
2475 |       "engines": {
2476 |         "node": ">=10"
2477 |       },
2478 |       "funding": {
2479 |         "url": "https://github.com/sponsors/sindresorhus"
2480 |       }
2481 |     },
2482 |     "node_modules/@expo/xcpretty/node_modules/p-locate": {
2483 |       "version": "5.0.0",
2484 |       "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
2485 |       "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
2486 |       "license": "MIT",
2487 |       "dependencies": {
2488 |         "p-limit": "^3.0.2"
2489 |       },
2490 |       "engines": {
2491 |         "node": ">=10"
2492 |       },
2493 |       "funding": {
2494 |         "url": "https://github.com/sponsors/sindresorhus"
2495 |       }
2496 |     },
2497 |     "node_modules/@expo/xcpretty/node_modules/supports-color": {
2498 |       "version": "7.2.0",
2499 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
2500 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
2501 |       "license": "MIT",
2502 |       "dependencies": {
2503 |         "has-flag": "^4.0.0"
2504 |       },
2505 |       "engines": {
2506 |         "node": ">=8"
2507 |       }
2508 |     },
2509 |     "node_modules/@isaacs/cliui": {
2510 |       "version": "8.0.2",
2511 |       "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
2512 |       "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
2513 |       "license": "ISC",
2514 |       "dependencies": {
2515 |         "string-width": "^5.1.2",
2516 |         "string-width-cjs": "npm:string-width@^4.2.0",
2517 |         "strip-ansi": "^7.0.1",
2518 |         "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
2519 |         "wrap-ansi": "^8.1.0",
2520 |         "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
2521 |       },
2522 |       "engines": {
2523 |         "node": ">=12"
2524 |       }
2525 |     },
2526 |     "node_modules/@isaacs/fs-minipass": {
2527 |       "version": "4.0.1",
2528 |       "resolved": "https://registry.npmjs.org/@isaacs/fs-minipass/-/fs-minipass-4.0.1.tgz",
2529 |       "integrity": "sha512-wgm9Ehl2jpeqP3zw/7mo3kRHFp5MEDhqAdwy1fTGkHAwnkGOVsgpvQhL8B5n1qlb01jV3n/bI0ZfZp5lWA1k4w==",
2530 |       "license": "ISC",
2531 |       "dependencies": {
2532 |         "minipass": "^7.0.4"
2533 |       },
2534 |       "engines": {
2535 |         "node": ">=18.0.0"
2536 |       }
2537 |     },
2538 |     "node_modules/@isaacs/ttlcache": {
2539 |       "version": "1.4.1",
2540 |       "resolved": "https://registry.npmjs.org/@isaacs/ttlcache/-/ttlcache-1.4.1.tgz",
2541 |       "integrity": "sha512-RQgQ4uQ+pLbqXfOmieB91ejmLwvSgv9nLx6sT6sD83s7umBypgg+OIBOBbEUiJXrfpnp9j0mRhYYdzp9uqq3lA==",
2542 |       "license": "ISC",
2543 |       "engines": {
2544 |         "node": ">=12"
2545 |       }
2546 |     },
2547 |     "node_modules/@istanbuljs/load-nyc-config": {
2548 |       "version": "1.1.0",
2549 |       "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
2550 |       "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
2551 |       "license": "ISC",
2552 |       "dependencies": {
2553 |         "camelcase": "^5.3.1",
2554 |         "find-up": "^4.1.0",
2555 |         "get-package-type": "^0.1.0",
2556 |         "js-yaml": "^3.13.1",
2557 |         "resolve-from": "^5.0.0"
2558 |       },
2559 |       "engines": {
2560 |         "node": ">=8"
2561 |       }
2562 |     },
2563 |     "node_modules/@istanbuljs/load-nyc-config/node_modules/camelcase": {
2564 |       "version": "5.3.1",
2565 |       "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
2566 |       "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
2567 |       "license": "MIT",
2568 |       "engines": {
2569 |         "node": ">=6"
2570 |       }
2571 |     },
2572 |     "node_modules/@istanbuljs/schema": {
2573 |       "version": "0.1.3",
2574 |       "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
2575 |       "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
2576 |       "license": "MIT",
2577 |       "engines": {
2578 |         "node": ">=8"
2579 |       }
2580 |     },
2581 |     "node_modules/@jest/create-cache-key-function": {
2582 |       "version": "29.7.0",
2583 |       "resolved": "https://registry.npmjs.org/@jest/create-cache-key-function/-/create-cache-key-function-29.7.0.tgz",
2584 |       "integrity": "sha512-4QqS3LY5PBmTRHj9sAg1HLoPzqAI0uOX6wI/TRqHIcOxlFidy6YEmCQJk6FSZjNLGCeubDMfmkWL+qaLKhSGQA==",
2585 |       "license": "MIT",
2586 |       "dependencies": {
2587 |         "@jest/types": "^29.6.3"
2588 |       },
2589 |       "engines": {
2590 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
2591 |       }
2592 |     },
2593 |     "node_modules/@jest/environment": {
2594 |       "version": "29.7.0",
2595 |       "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-29.7.0.tgz",
2596 |       "integrity": "sha512-aQIfHDq33ExsN4jP1NWGXhxgQ/wixs60gDiKO+XVMd8Mn0NWPWgc34ZQDTb2jKaUWQ7MuwoitXAsN2XVXNMpAw==",
2597 |       "license": "MIT",
2598 |       "dependencies": {
2599 |         "@jest/fake-timers": "^29.7.0",
2600 |         "@jest/types": "^29.6.3",
2601 |         "@types/node": "*",
2602 |         "jest-mock": "^29.7.0"
2603 |       },
2604 |       "engines": {
2605 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
2606 |       }
2607 |     },
2608 |     "node_modules/@jest/fake-timers": {
2609 |       "version": "29.7.0",
2610 |       "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-29.7.0.tgz",
2611 |       "integrity": "sha512-q4DH1Ha4TTFPdxLsqDXK1d3+ioSL7yL5oCMJZgDYm6i+6CygW5E5xVr/D1HdsGxjt1ZWSfUAs9OxSB/BNelWrQ==",
2612 |       "license": "MIT",
2613 |       "dependencies": {
2614 |         "@jest/types": "^29.6.3",
2615 |         "@sinonjs/fake-timers": "^10.0.2",
2616 |         "@types/node": "*",
2617 |         "jest-message-util": "^29.7.0",
2618 |         "jest-mock": "^29.7.0",
2619 |         "jest-util": "^29.7.0"
2620 |       },
2621 |       "engines": {
2622 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
2623 |       }
2624 |     },
2625 |     "node_modules/@jest/schemas": {
2626 |       "version": "29.6.3",
2627 |       "resolved": "https://registry.npmjs.org/@jest/schemas/-/schemas-29.6.3.tgz",
2628 |       "integrity": "sha512-mo5j5X+jIZmJQveBKeS/clAueipV7KgiX1vMgCxam1RNYiqE1w62n0/tJJnHtjW8ZHcQco5gY85jA3mi0L+nSA==",
2629 |       "license": "MIT",
2630 |       "dependencies": {
2631 |         "@sinclair/typebox": "^0.27.8"
2632 |       },
2633 |       "engines": {
2634 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
2635 |       }
2636 |     },
2637 |     "node_modules/@jest/transform": {
2638 |       "version": "29.7.0",
2639 |       "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-29.7.0.tgz",
2640 |       "integrity": "sha512-ok/BTPFzFKVMwO5eOHRrvnBVHdRy9IrsrW1GpMaQ9MCnilNLXQKmAX8s1YXDFaai9xJpac2ySzV0YeRRECr2Vw==",
2641 |       "license": "MIT",
2642 |       "dependencies": {
2643 |         "@babel/core": "^7.11.6",
2644 |         "@jest/types": "^29.6.3",
2645 |         "@jridgewell/trace-mapping": "^0.3.18",
2646 |         "babel-plugin-istanbul": "^6.1.1",
2647 |         "chalk": "^4.0.0",
2648 |         "convert-source-map": "^2.0.0",
2649 |         "fast-json-stable-stringify": "^2.1.0",
2650 |         "graceful-fs": "^4.2.9",
2651 |         "jest-haste-map": "^29.7.0",
2652 |         "jest-regex-util": "^29.6.3",
2653 |         "jest-util": "^29.7.0",
2654 |         "micromatch": "^4.0.4",
2655 |         "pirates": "^4.0.4",
2656 |         "slash": "^3.0.0",
2657 |         "write-file-atomic": "^4.0.2"
2658 |       },
2659 |       "engines": {
2660 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
2661 |       }
2662 |     },
2663 |     "node_modules/@jest/transform/node_modules/ansi-styles": {
2664 |       "version": "4.3.0",
2665 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
2666 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
2667 |       "license": "MIT",
2668 |       "dependencies": {
2669 |         "color-convert": "^2.0.1"
2670 |       },
2671 |       "engines": {
2672 |         "node": ">=8"
2673 |       },
2674 |       "funding": {
2675 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
2676 |       }
2677 |     },
2678 |     "node_modules/@jest/transform/node_modules/chalk": {
2679 |       "version": "4.1.2",
2680 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
2681 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
2682 |       "license": "MIT",
2683 |       "dependencies": {
2684 |         "ansi-styles": "^4.1.0",
2685 |         "supports-color": "^7.1.0"
2686 |       },
2687 |       "engines": {
2688 |         "node": ">=10"
2689 |       },
2690 |       "funding": {
2691 |         "url": "https://github.com/chalk/chalk?sponsor=1"
2692 |       }
2693 |     },
2694 |     "node_modules/@jest/transform/node_modules/color-convert": {
2695 |       "version": "2.0.1",
2696 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
2697 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
2698 |       "license": "MIT",
2699 |       "dependencies": {
2700 |         "color-name": "~1.1.4"
2701 |       },
2702 |       "engines": {
2703 |         "node": ">=7.0.0"
2704 |       }
2705 |     },
2706 |     "node_modules/@jest/transform/node_modules/color-name": {
2707 |       "version": "1.1.4",
2708 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
2709 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
2710 |       "license": "MIT"
2711 |     },
2712 |     "node_modules/@jest/transform/node_modules/has-flag": {
2713 |       "version": "4.0.0",
2714 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
2715 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
2716 |       "license": "MIT",
2717 |       "engines": {
2718 |         "node": ">=8"
2719 |       }
2720 |     },
2721 |     "node_modules/@jest/transform/node_modules/supports-color": {
2722 |       "version": "7.2.0",
2723 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
2724 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
2725 |       "license": "MIT",
2726 |       "dependencies": {
2727 |         "has-flag": "^4.0.0"
2728 |       },
2729 |       "engines": {
2730 |         "node": ">=8"
2731 |       }
2732 |     },
2733 |     "node_modules/@jest/types": {
2734 |       "version": "29.6.3",
2735 |       "resolved": "https://registry.npmjs.org/@jest/types/-/types-29.6.3.tgz",
2736 |       "integrity": "sha512-u3UPsIilWKOM3F9CXtrG8LEJmNxwoCQC/XVj4IKYXvvpx7QIi/Kg1LI5uDmDpKlac62NUtX7eLjRh+jVZcLOzw==",
2737 |       "license": "MIT",
2738 |       "dependencies": {
2739 |         "@jest/schemas": "^29.6.3",
2740 |         "@types/istanbul-lib-coverage": "^2.0.0",
2741 |         "@types/istanbul-reports": "^3.0.0",
2742 |         "@types/node": "*",
2743 |         "@types/yargs": "^17.0.8",
2744 |         "chalk": "^4.0.0"
2745 |       },
2746 |       "engines": {
2747 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
2748 |       }
2749 |     },
2750 |     "node_modules/@jest/types/node_modules/ansi-styles": {
2751 |       "version": "4.3.0",
2752 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
2753 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
2754 |       "license": "MIT",
2755 |       "dependencies": {
2756 |         "color-convert": "^2.0.1"
2757 |       },
2758 |       "engines": {
2759 |         "node": ">=8"
2760 |       },
2761 |       "funding": {
2762 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
2763 |       }
2764 |     },
2765 |     "node_modules/@jest/types/node_modules/chalk": {
2766 |       "version": "4.1.2",
2767 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
2768 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
2769 |       "license": "MIT",
2770 |       "dependencies": {
2771 |         "ansi-styles": "^4.1.0",
2772 |         "supports-color": "^7.1.0"
2773 |       },
2774 |       "engines": {
2775 |         "node": ">=10"
2776 |       },
2777 |       "funding": {
2778 |         "url": "https://github.com/chalk/chalk?sponsor=1"
2779 |       }
2780 |     },
2781 |     "node_modules/@jest/types/node_modules/color-convert": {
2782 |       "version": "2.0.1",
2783 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
2784 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
2785 |       "license": "MIT",
2786 |       "dependencies": {
2787 |         "color-name": "~1.1.4"
2788 |       },
2789 |       "engines": {
2790 |         "node": ">=7.0.0"
2791 |       }
2792 |     },
2793 |     "node_modules/@jest/types/node_modules/color-name": {
2794 |       "version": "1.1.4",
2795 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
2796 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
2797 |       "license": "MIT"
2798 |     },
2799 |     "node_modules/@jest/types/node_modules/has-flag": {
2800 |       "version": "4.0.0",
2801 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
2802 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
2803 |       "license": "MIT",
2804 |       "engines": {
2805 |         "node": ">=8"
2806 |       }
2807 |     },
2808 |     "node_modules/@jest/types/node_modules/supports-color": {
2809 |       "version": "7.2.0",
2810 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
2811 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
2812 |       "license": "MIT",
2813 |       "dependencies": {
2814 |         "has-flag": "^4.0.0"
2815 |       },
2816 |       "engines": {
2817 |         "node": ">=8"
2818 |       }
2819 |     },
2820 |     "node_modules/@jridgewell/gen-mapping": {
2821 |       "version": "0.3.13",
2822 |       "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
2823 |       "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
2824 |       "license": "MIT",
2825 |       "dependencies": {
2826 |         "@jridgewell/sourcemap-codec": "^1.5.0",
2827 |         "@jridgewell/trace-mapping": "^0.3.24"
2828 |       }
2829 |     },
2830 |     "node_modules/@jridgewell/remapping": {
2831 |       "version": "2.3.5",
2832 |       "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
2833 |       "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
2834 |       "license": "MIT",
2835 |       "dependencies": {
2836 |         "@jridgewell/gen-mapping": "^0.3.5",
2837 |         "@jridgewell/trace-mapping": "^0.3.24"
2838 |       }
2839 |     },
2840 |     "node_modules/@jridgewell/resolve-uri": {
2841 |       "version": "3.1.2",
2842 |       "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
2843 |       "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
2844 |       "license": "MIT",
2845 |       "engines": {
2846 |         "node": ">=6.0.0"
2847 |       }
2848 |     },
2849 |     "node_modules/@jridgewell/source-map": {
2850 |       "version": "0.3.11",
2851 |       "resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.11.tgz",
2852 |       "integrity": "sha512-ZMp1V8ZFcPG5dIWnQLr3NSI1MiCU7UETdS/A0G8V/XWHvJv3ZsFqutJn1Y5RPmAPX6F3BiE397OqveU/9NCuIA==",
2853 |       "license": "MIT",
2854 |       "dependencies": {
2855 |         "@jridgewell/gen-mapping": "^0.3.5",
2856 |         "@jridgewell/trace-mapping": "^0.3.25"
2857 |       }
2858 |     },
2859 |     "node_modules/@jridgewell/sourcemap-codec": {
2860 |       "version": "1.5.5",
2861 |       "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
2862 |       "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
2863 |       "license": "MIT"
2864 |     },
2865 |     "node_modules/@jridgewell/trace-mapping": {
2866 |       "version": "0.3.31",
2867 |       "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
2868 |       "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
2869 |       "license": "MIT",
2870 |       "dependencies": {
2871 |         "@jridgewell/resolve-uri": "^3.1.0",
2872 |         "@jridgewell/sourcemap-codec": "^1.4.14"
2873 |       }
2874 |     },
2875 |     "node_modules/@pkgjs/parseargs": {
2876 |       "version": "0.11.0",
2877 |       "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
2878 |       "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
2879 |       "license": "MIT",
2880 |       "optional": true,
2881 |       "engines": {
2882 |         "node": ">=14"
2883 |       }
2884 |     },
2885 |     "node_modules/@react-native-async-storage/async-storage": {
2886 |       "version": "2.2.0",
2887 |       "resolved": "https://registry.npmjs.org/@react-native-async-storage/async-storage/-/async-storage-2.2.0.tgz",
2888 |       "integrity": "sha512-gvRvjR5JAaUZF8tv2Kcq/Gbt3JHwbKFYfmb445rhOj6NUMx3qPLixmDx5pZAyb9at1bYvJ4/eTUipU5aki45xw==",
2889 |       "license": "MIT",
2890 |       "dependencies": {
2891 |         "merge-options": "^3.0.4"
2892 |       },
2893 |       "peerDependencies": {
2894 |         "react-native": "^0.0.0-0 || >=0.65 <1.0"
2895 |       }
2896 |     },
2897 |     "node_modules/@react-native-community/datetimepicker": {
2898 |       "version": "8.4.4",
2899 |       "resolved": "https://registry.npmjs.org/@react-native-community/datetimepicker/-/datetimepicker-8.4.4.tgz",
2900 |       "integrity": "sha512-bc4ZixEHxZC9/qf5gbdYvIJiLZ5CLmEsC3j+Yhe1D1KC/3QhaIfGDVdUcid0PdlSoGOSEq4VlB93AWyetEyBSQ==",
2901 |       "license": "MIT",
2902 |       "dependencies": {
2903 |         "invariant": "^2.2.4"
2904 |       },
2905 |       "peerDependencies": {
2906 |         "expo": ">=52.0.0",
2907 |         "react": "*",
2908 |         "react-native": "*",
2909 |         "react-native-windows": "*"
2910 |       },
2911 |       "peerDependenciesMeta": {
2912 |         "expo": {
2913 |           "optional": true
2914 |         },
2915 |         "react-native-windows": {
2916 |           "optional": true
2917 |         }
2918 |       }
2919 |     },
2920 |     "node_modules/@react-native/assets-registry": {
2921 |       "version": "0.81.4",
2922 |       "resolved": "https://registry.npmjs.org/@react-native/assets-registry/-/assets-registry-0.81.4.tgz",
2923 |       "integrity": "sha512-AMcDadefBIjD10BRqkWw+W/VdvXEomR6aEZ0fhQRAv7igrBzb4PTn4vHKYg+sUK0e3wa74kcMy2DLc/HtnGcMA==",
2924 |       "license": "MIT",
2925 |       "engines": {
2926 |         "node": ">= 20.19.4"
2927 |       }
2928 |     },
2929 |     "node_modules/@react-native/babel-plugin-codegen": {
2930 |       "version": "0.81.4",
2931 |       "resolved": "https://registry.npmjs.org/@react-native/babel-plugin-codegen/-/babel-plugin-codegen-0.81.4.tgz",
2932 |       "integrity": "sha512-6ztXf2Tl2iWznyI/Da/N2Eqymt0Mnn69GCLnEFxFbNdk0HxHPZBNWU9shTXhsLWOL7HATSqwg/bB1+3kY1q+mA==",
2933 |       "license": "MIT",
2934 |       "dependencies": {
2935 |         "@babel/traverse": "^7.25.3",
2936 |         "@react-native/codegen": "0.81.4"
2937 |       },
2938 |       "engines": {
2939 |         "node": ">= 20.19.4"
2940 |       }
2941 |     },
2942 |     "node_modules/@react-native/babel-preset": {
2943 |       "version": "0.81.4",
2944 |       "resolved": "https://registry.npmjs.org/@react-native/babel-preset/-/babel-preset-0.81.4.tgz",
2945 |       "integrity": "sha512-VYj0c/cTjQJn/RJ5G6P0L9wuYSbU9yGbPYDHCKstlQZQWkk+L9V8ZDbxdJBTIei9Xl3KPQ1odQ4QaeW+4v+AZg==",
2946 |       "license": "MIT",
2947 |       "dependencies": {
2948 |         "@babel/core": "^7.25.2",
2949 |         "@babel/plugin-proposal-export-default-from": "^7.24.7",
2950 |         "@babel/plugin-syntax-dynamic-import": "^7.8.3",
2951 |         "@babel/plugin-syntax-export-default-from": "^7.24.7",
2952 |         "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
2953 |         "@babel/plugin-syntax-optional-chaining": "^7.8.3",
2954 |         "@babel/plugin-transform-arrow-functions": "^7.24.7",
2955 |         "@babel/plugin-transform-async-generator-functions": "^7.25.4",
2956 |         "@babel/plugin-transform-async-to-generator": "^7.24.7",
2957 |         "@babel/plugin-transform-block-scoping": "^7.25.0",
2958 |         "@babel/plugin-transform-class-properties": "^7.25.4",
2959 |         "@babel/plugin-transform-classes": "^7.25.4",
2960 |         "@babel/plugin-transform-computed-properties": "^7.24.7",
2961 |         "@babel/plugin-transform-destructuring": "^7.24.8",
2962 |         "@babel/plugin-transform-flow-strip-types": "^7.25.2",
2963 |         "@babel/plugin-transform-for-of": "^7.24.7",
2964 |         "@babel/plugin-transform-function-name": "^7.25.1",
2965 |         "@babel/plugin-transform-literals": "^7.25.2",
2966 |         "@babel/plugin-transform-logical-assignment-operators": "^7.24.7",
2967 |         "@babel/plugin-transform-modules-commonjs": "^7.24.8",
2968 |         "@babel/plugin-transform-named-capturing-groups-regex": "^7.24.7",
2969 |         "@babel/plugin-transform-nullish-coalescing-operator": "^7.24.7",
2970 |         "@babel/plugin-transform-numeric-separator": "^7.24.7",
2971 |         "@babel/plugin-transform-object-rest-spread": "^7.24.7",
2972 |         "@babel/plugin-transform-optional-catch-binding": "^7.24.7",
2973 |         "@babel/plugin-transform-optional-chaining": "^7.24.8",
2974 |         "@babel/plugin-transform-parameters": "^7.24.7",
2975 |         "@babel/plugin-transform-private-methods": "^7.24.7",
2976 |         "@babel/plugin-transform-private-property-in-object": "^7.24.7",
2977 |         "@babel/plugin-transform-react-display-name": "^7.24.7",
2978 |         "@babel/plugin-transform-react-jsx": "^7.25.2",
2979 |         "@babel/plugin-transform-react-jsx-self": "^7.24.7",
2980 |         "@babel/plugin-transform-react-jsx-source": "^7.24.7",
2981 |         "@babel/plugin-transform-regenerator": "^7.24.7",
2982 |         "@babel/plugin-transform-runtime": "^7.24.7",
2983 |         "@babel/plugin-transform-shorthand-properties": "^7.24.7",
2984 |         "@babel/plugin-transform-spread": "^7.24.7",
2985 |         "@babel/plugin-transform-sticky-regex": "^7.24.7",
2986 |         "@babel/plugin-transform-typescript": "^7.25.2",
2987 |         "@babel/plugin-transform-unicode-regex": "^7.24.7",
2988 |         "@babel/template": "^7.25.0",
2989 |         "@react-native/babel-plugin-codegen": "0.81.4",
2990 |         "babel-plugin-syntax-hermes-parser": "0.29.1",
2991 |         "babel-plugin-transform-flow-enums": "^0.0.2",
2992 |         "react-refresh": "^0.14.0"
2993 |       },
2994 |       "engines": {
2995 |         "node": ">= 20.19.4"
2996 |       },
2997 |       "peerDependencies": {
2998 |         "@babel/core": "*"
2999 |       }
3000 |     },
3001 |     "node_modules/@react-native/codegen": {
3002 |       "version": "0.81.4",
3003 |       "resolved": "https://registry.npmjs.org/@react-native/codegen/-/codegen-0.81.4.tgz",
3004 |       "integrity": "sha512-LWTGUTzFu+qOQnvkzBP52B90Ym3stZT8IFCzzUrppz8Iwglg83FCtDZAR4yLHI29VY/x/+pkcWAMCl3739XHdw==",
3005 |       "license": "MIT",
3006 |       "dependencies": {
3007 |         "@babel/core": "^7.25.2",
3008 |         "@babel/parser": "^7.25.3",
3009 |         "glob": "^7.1.1",
3010 |         "hermes-parser": "0.29.1",
3011 |         "invariant": "^2.2.4",
3012 |         "nullthrows": "^1.1.1",
3013 |         "yargs": "^17.6.2"
3014 |       },
3015 |       "engines": {
3016 |         "node": ">= 20.19.4"
3017 |       },
3018 |       "peerDependencies": {
3019 |         "@babel/core": "*"
3020 |       }
3021 |     },
3022 |     "node_modules/@react-native/codegen/node_modules/brace-expansion": {
3023 |       "version": "1.1.12",
3024 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
3025 |       "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
3026 |       "license": "MIT",
3027 |       "dependencies": {
3028 |         "balanced-match": "^1.0.0",
3029 |         "concat-map": "0.0.1"
3030 |       }
3031 |     },
3032 |     "node_modules/@react-native/codegen/node_modules/glob": {
3033 |       "version": "7.2.3",
3034 |       "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
3035 |       "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
3036 |       "deprecated": "Glob versions prior to v9 are no longer supported",
3037 |       "license": "ISC",
3038 |       "dependencies": {
3039 |         "fs.realpath": "^1.0.0",
3040 |         "inflight": "^1.0.4",
3041 |         "inherits": "2",
3042 |         "minimatch": "^3.1.1",
3043 |         "once": "^1.3.0",
3044 |         "path-is-absolute": "^1.0.0"
3045 |       },
3046 |       "engines": {
3047 |         "node": "*"
3048 |       },
3049 |       "funding": {
3050 |         "url": "https://github.com/sponsors/isaacs"
3051 |       }
3052 |     },
3053 |     "node_modules/@react-native/codegen/node_modules/minimatch": {
3054 |       "version": "3.1.2",
3055 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
3056 |       "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
3057 |       "license": "ISC",
3058 |       "dependencies": {
3059 |         "brace-expansion": "^1.1.7"
3060 |       },
3061 |       "engines": {
3062 |         "node": "*"
3063 |       }
3064 |     },
3065 |     "node_modules/@react-native/community-cli-plugin": {
3066 |       "version": "0.81.4",
3067 |       "resolved": "https://registry.npmjs.org/@react-native/community-cli-plugin/-/community-cli-plugin-0.81.4.tgz",
3068 |       "integrity": "sha512-8mpnvfcLcnVh+t1ok6V9eozWo8Ut+TZhz8ylJ6gF9d6q9EGDQX6s8jenan5Yv/pzN4vQEKI4ib2pTf/FELw+SA==",
3069 |       "license": "MIT",
3070 |       "dependencies": {
3071 |         "@react-native/dev-middleware": "0.81.4",
3072 |         "debug": "^4.4.0",
3073 |         "invariant": "^2.2.4",
3074 |         "metro": "^0.83.1",
3075 |         "metro-config": "^0.83.1",
3076 |         "metro-core": "^0.83.1",
3077 |         "semver": "^7.1.3"
3078 |       },
3079 |       "engines": {
3080 |         "node": ">= 20.19.4"
3081 |       },
3082 |       "peerDependencies": {
3083 |         "@react-native-community/cli": "*",
3084 |         "@react-native/metro-config": "*"
3085 |       },
3086 |       "peerDependenciesMeta": {
3087 |         "@react-native-community/cli": {
3088 |           "optional": true
3089 |         },
3090 |         "@react-native/metro-config": {
3091 |           "optional": true
3092 |         }
3093 |       }
3094 |     },
3095 |     "node_modules/@react-native/debugger-frontend": {
3096 |       "version": "0.81.4",
3097 |       "resolved": "https://registry.npmjs.org/@react-native/debugger-frontend/-/debugger-frontend-0.81.4.tgz",
3098 |       "integrity": "sha512-SU05w1wD0nKdQFcuNC9D6De0ITnINCi8MEnx9RsTD2e4wN83ukoC7FpXaPCYyP6+VjFt5tUKDPgP1O7iaNXCqg==",
3099 |       "license": "BSD-3-Clause",
3100 |       "engines": {
3101 |         "node": ">= 20.19.4"
3102 |       }
3103 |     },
3104 |     "node_modules/@react-native/dev-middleware": {
3105 |       "version": "0.81.4",
3106 |       "resolved": "https://registry.npmjs.org/@react-native/dev-middleware/-/dev-middleware-0.81.4.tgz",
3107 |       "integrity": "sha512-hu1Wu5R28FT7nHXs2wWXvQ++7W7zq5GPY83llajgPlYKznyPLAY/7bArc5rAzNB7b0kwnlaoPQKlvD/VP9LZug==",
3108 |       "license": "MIT",
3109 |       "dependencies": {
3110 |         "@isaacs/ttlcache": "^1.4.1",
3111 |         "@react-native/debugger-frontend": "0.81.4",
3112 |         "chrome-launcher": "^0.15.2",
3113 |         "chromium-edge-launcher": "^0.2.0",
3114 |         "connect": "^3.6.5",
3115 |         "debug": "^4.4.0",
3116 |         "invariant": "^2.2.4",
3117 |         "nullthrows": "^1.1.1",
3118 |         "open": "^7.0.3",
3119 |         "serve-static": "^1.16.2",
3120 |         "ws": "^6.2.3"
3121 |       },
3122 |       "engines": {
3123 |         "node": ">= 20.19.4"
3124 |       }
3125 |     },
3126 |     "node_modules/@react-native/dev-middleware/node_modules/ws": {
3127 |       "version": "6.2.3",
3128 |       "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.3.tgz",
3129 |       "integrity": "sha512-jmTjYU0j60B+vHey6TfR3Z7RD61z/hmxBS3VMSGIrroOWXQEneK1zNuotOUrGyBHQj0yrpsLHPWtigEFd13ndA==",
3130 |       "license": "MIT",
3131 |       "dependencies": {
3132 |         "async-limiter": "~1.0.0"
3133 |       }
3134 |     },
3135 |     "node_modules/@react-native/gradle-plugin": {
3136 |       "version": "0.81.4",
3137 |       "resolved": "https://registry.npmjs.org/@react-native/gradle-plugin/-/gradle-plugin-0.81.4.tgz",
3138 |       "integrity": "sha512-T7fPcQvDDCSusZFVSg6H1oVDKb/NnVYLnsqkcHsAF2C2KGXyo3J7slH/tJAwNfj/7EOA2OgcWxfC1frgn9TQvw==",
3139 |       "license": "MIT",
3140 |       "engines": {
3141 |         "node": ">= 20.19.4"
3142 |       }
3143 |     },
3144 |     "node_modules/@react-native/js-polyfills": {
3145 |       "version": "0.81.4",
3146 |       "resolved": "https://registry.npmjs.org/@react-native/js-polyfills/-/js-polyfills-0.81.4.tgz",
3147 |       "integrity": "sha512-sr42FaypKXJHMVHhgSbu2f/ZJfrLzgaoQ+HdpRvKEiEh2mhFf6XzZwecyLBvWqf2pMPZa+CpPfNPiejXjKEy8w==",
3148 |       "license": "MIT",
3149 |       "engines": {
3150 |         "node": ">= 20.19.4"
3151 |       }
3152 |     },
3153 |     "node_modules/@react-native/normalize-colors": {
3154 |       "version": "0.81.4",
3155 |       "resolved": "https://registry.npmjs.org/@react-native/normalize-colors/-/normalize-colors-0.81.4.tgz",
3156 |       "integrity": "sha512-9nRRHO1H+tcFqjb9gAM105Urtgcanbta2tuqCVY0NATHeFPDEAB7gPyiLxCHKMi1NbhP6TH0kxgSWXKZl1cyRg==",
3157 |       "license": "MIT"
3158 |     },
3159 |     "node_modules/@react-native/virtualized-lists": {
3160 |       "version": "0.81.4",
3161 |       "resolved": "https://registry.npmjs.org/@react-native/virtualized-lists/-/virtualized-lists-0.81.4.tgz",
3162 |       "integrity": "sha512-hBM+rMyL6Wm1Q4f/WpqGsaCojKSNUBqAXLABNGoWm1vabZ7cSnARMxBvA/2vo3hLcoR4v7zDK8tkKm9+O0LjVA==",
3163 |       "license": "MIT",
3164 |       "dependencies": {
3165 |         "invariant": "^2.2.4",
3166 |         "nullthrows": "^1.1.1"
3167 |       },
3168 |       "engines": {
3169 |         "node": ">= 20.19.4"
3170 |       },
3171 |       "peerDependencies": {
3172 |         "@types/react": "^19.1.0",
3173 |         "react": "*",
3174 |         "react-native": "*"
3175 |       },
3176 |       "peerDependenciesMeta": {
3177 |         "@types/react": {
3178 |           "optional": true
3179 |         }
3180 |       }
3181 |     },
3182 |     "node_modules/@react-navigation/bottom-tabs": {
3183 |       "version": "7.4.7",
3184 |       "resolved": "https://registry.npmjs.org/@react-navigation/bottom-tabs/-/bottom-tabs-7.4.7.tgz",
3185 |       "integrity": "sha512-SQ4KuYV9yr3SV/thefpLWhAD0CU2CrBMG1l0w/QKl3GYuGWdN5OQmdQdmaPZGtsjjVOb+N9Qo7Tf6210P4TlpA==",
3186 |       "license": "MIT",
3187 |       "dependencies": {
3188 |         "@react-navigation/elements": "^2.6.4",
3189 |         "color": "^4.2.3"
3190 |       },
3191 |       "peerDependencies": {
3192 |         "@react-navigation/native": "^7.1.17",
3193 |         "react": ">= 18.2.0",
3194 |         "react-native": "*",
3195 |         "react-native-safe-area-context": ">= 4.0.0",
3196 |         "react-native-screens": ">= 4.0.0"
3197 |       }
3198 |     },
3199 |     "node_modules/@react-navigation/core": {
3200 |       "version": "7.12.4",
3201 |       "resolved": "https://registry.npmjs.org/@react-navigation/core/-/core-7.12.4.tgz",
3202 |       "integrity": "sha512-xLFho76FA7v500XID5z/8YfGTvjQPw7/fXsq4BIrVSqetNe/o/v+KAocEw4ots6kyv3XvSTyiWKh2g3pN6xZ9Q==",
3203 |       "license": "MIT",
3204 |       "dependencies": {
3205 |         "@react-navigation/routers": "^7.5.1",
3206 |         "escape-string-regexp": "^4.0.0",
3207 |         "nanoid": "^3.3.11",
3208 |         "query-string": "^7.1.3",
3209 |         "react-is": "^19.1.0",
3210 |         "use-latest-callback": "^0.2.4",
3211 |         "use-sync-external-store": "^1.5.0"
3212 |       },
3213 |       "peerDependencies": {
3214 |         "react": ">= 18.2.0"
3215 |       }
3216 |     },
3217 |     "node_modules/@react-navigation/core/node_modules/escape-string-regexp": {
3218 |       "version": "4.0.0",
3219 |       "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
3220 |       "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
3221 |       "license": "MIT",
3222 |       "engines": {
3223 |         "node": ">=10"
3224 |       },
3225 |       "funding": {
3226 |         "url": "https://github.com/sponsors/sindresorhus"
3227 |       }
3228 |     },
3229 |     "node_modules/@react-navigation/core/node_modules/react-is": {
3230 |       "version": "19.1.1",
3231 |       "resolved": "https://registry.npmjs.org/react-is/-/react-is-19.1.1.tgz",
3232 |       "integrity": "sha512-tr41fA15Vn8p4X9ntI+yCyeGSf1TlYaY5vlTZfQmeLBrFo3psOPX6HhTDnFNL9uj3EhP0KAQ80cugCl4b4BERA==",
3233 |       "license": "MIT"
3234 |     },
3235 |     "node_modules/@react-navigation/elements": {
3236 |       "version": "2.6.4",
3237 |       "resolved": "https://registry.npmjs.org/@react-navigation/elements/-/elements-2.6.4.tgz",
3238 |       "integrity": "sha512-O3X9vWXOEhAO56zkQS7KaDzL8BvjlwZ0LGSteKpt1/k6w6HONG+2Wkblrb057iKmehTkEkQMzMLkXiuLmN5x9Q==",
3239 |       "license": "MIT",
3240 |       "dependencies": {
3241 |         "color": "^4.2.3",
3242 |         "use-latest-callback": "^0.2.4",
3243 |         "use-sync-external-store": "^1.5.0"
3244 |       },
3245 |       "peerDependencies": {
3246 |         "@react-native-masked-view/masked-view": ">= 0.2.0",
3247 |         "@react-navigation/native": "^7.1.17",
3248 |         "react": ">= 18.2.0",
3249 |         "react-native": "*",
3250 |         "react-native-safe-area-context": ">= 4.0.0"
3251 |       },
3252 |       "peerDependenciesMeta": {
3253 |         "@react-native-masked-view/masked-view": {
3254 |           "optional": true
3255 |         }
3256 |       }
3257 |     },
3258 |     "node_modules/@react-navigation/native": {
3259 |       "version": "7.1.17",
3260 |       "resolved": "https://registry.npmjs.org/@react-navigation/native/-/native-7.1.17.tgz",
3261 |       "integrity": "sha512-uEcYWi1NV+2Qe1oELfp9b5hTYekqWATv2cuwcOAg5EvsIsUPtzFrKIasgUXLBRGb9P7yR5ifoJ+ug4u6jdqSTQ==",
3262 |       "license": "MIT",
3263 |       "dependencies": {
3264 |         "@react-navigation/core": "^7.12.4",
3265 |         "escape-string-regexp": "^4.0.0",
3266 |         "fast-deep-equal": "^3.1.3",
3267 |         "nanoid": "^3.3.11",
3268 |         "use-latest-callback": "^0.2.4"
3269 |       },
3270 |       "peerDependencies": {
3271 |         "react": ">= 18.2.0",
3272 |         "react-native": "*"
3273 |       }
3274 |     },
3275 |     "node_modules/@react-navigation/native/node_modules/escape-string-regexp": {
3276 |       "version": "4.0.0",
3277 |       "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
3278 |       "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
3279 |       "license": "MIT",
3280 |       "engines": {
3281 |         "node": ">=10"
3282 |       },
3283 |       "funding": {
3284 |         "url": "https://github.com/sponsors/sindresorhus"
3285 |       }
3286 |     },
3287 |     "node_modules/@react-navigation/routers": {
3288 |       "version": "7.5.1",
3289 |       "resolved": "https://registry.npmjs.org/@react-navigation/routers/-/routers-7.5.1.tgz",
3290 |       "integrity": "sha512-pxipMW/iEBSUrjxz2cDD7fNwkqR4xoi0E/PcfTQGCcdJwLoaxzab5kSadBLj1MTJyT0YRrOXL9umHpXtp+Dv4w==",
3291 |       "license": "MIT",
3292 |       "dependencies": {
3293 |         "nanoid": "^3.3.11"
3294 |       }
3295 |     },
3296 |     "node_modules/@react-navigation/stack": {
3297 |       "version": "7.4.8",
3298 |       "resolved": "https://registry.npmjs.org/@react-navigation/stack/-/stack-7.4.8.tgz",
3299 |       "integrity": "sha512-zZsX52Nw1gsq33Hx4aNgGV2RmDJgVJM71udomCi3OdlntqXDguav3J2t5oe/Acf/9uU8JiJE9W8JGtoRZ6nXIg==",
3300 |       "license": "MIT",
3301 |       "dependencies": {
3302 |         "@react-navigation/elements": "^2.6.4",
3303 |         "color": "^4.2.3"
3304 |       },
3305 |       "peerDependencies": {
3306 |         "@react-navigation/native": "^7.1.17",
3307 |         "react": ">= 18.2.0",
3308 |         "react-native": "*",
3309 |         "react-native-gesture-handler": ">= 2.0.0",
3310 |         "react-native-safe-area-context": ">= 4.0.0",
3311 |         "react-native-screens": ">= 4.0.0"
3312 |       }
3313 |     },
3314 |     "node_modules/@sinclair/typebox": {
3315 |       "version": "0.27.8",
3316 |       "resolved": "https://registry.npmjs.org/@sinclair/typebox/-/typebox-0.27.8.tgz",
3317 |       "integrity": "sha512-+Fj43pSMwJs4KRrH/938Uf+uAELIgVBmQzg/q1YG10djyfA3TnrU8N8XzqCh/okZdszqBQTZf96idMfE5lnwTA==",
3318 |       "license": "MIT"
3319 |     },
3320 |     "node_modules/@sinonjs/commons": {
3321 |       "version": "3.0.1",
3322 |       "resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-3.0.1.tgz",
3323 |       "integrity": "sha512-K3mCHKQ9sVh8o1C9cxkwxaOmXoAMlDxC1mYyHrjqOWEcBjYr76t96zL2zlj5dUGZ3HSw240X1qgH3Mjf1yJWpQ==",
3324 |       "license": "BSD-3-Clause",
3325 |       "dependencies": {
3326 |         "type-detect": "4.0.8"
3327 |       }
3328 |     },
3329 |     "node_modules/@sinonjs/fake-timers": {
3330 |       "version": "10.3.0",
3331 |       "resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-10.3.0.tgz",
3332 |       "integrity": "sha512-V4BG07kuYSUkTCSBHG8G8TNhM+F19jXFWnQtzj+we8DrkpSBCee9Z3Ms8yiGer/dlmhe35/Xdgyo3/0rQKg7YA==",
3333 |       "license": "BSD-3-Clause",
3334 |       "dependencies": {
3335 |         "@sinonjs/commons": "^3.0.0"
3336 |       }
3337 |     },
3338 |     "node_modules/@types/babel__core": {
3339 |       "version": "7.20.5",
3340 |       "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
3341 |       "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
3342 |       "license": "MIT",
3343 |       "dependencies": {
3344 |         "@babel/parser": "^7.20.7",
3345 |         "@babel/types": "^7.20.7",
3346 |         "@types/babel__generator": "*",
3347 |         "@types/babel__template": "*",
3348 |         "@types/babel__traverse": "*"
3349 |       }
3350 |     },
3351 |     "node_modules/@types/babel__generator": {
3352 |       "version": "7.27.0",
3353 |       "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
3354 |       "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
3355 |       "license": "MIT",
3356 |       "dependencies": {
3357 |         "@babel/types": "^7.0.0"
3358 |       }
3359 |     },
3360 |     "node_modules/@types/babel__template": {
3361 |       "version": "7.4.4",
3362 |       "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
3363 |       "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
3364 |       "license": "MIT",
3365 |       "dependencies": {
3366 |         "@babel/parser": "^7.1.0",
3367 |         "@babel/types": "^7.0.0"
3368 |       }
3369 |     },
3370 |     "node_modules/@types/babel__traverse": {
3371 |       "version": "7.28.0",
3372 |       "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
3373 |       "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
3374 |       "license": "MIT",
3375 |       "dependencies": {
3376 |         "@babel/types": "^7.28.2"
3377 |       }
3378 |     },
3379 |     "node_modules/@types/graceful-fs": {
3380 |       "version": "4.1.9",
3381 |       "resolved": "https://registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.9.tgz",
3382 |       "integrity": "sha512-olP3sd1qOEe5dXTSaFvQG+02VdRXcdytWLAZsAq1PecU8uqQAhkrnbli7DagjtXKW/Bl7YJbUsa8MPcuc8LHEQ==",
3383 |       "license": "MIT",
3384 |       "dependencies": {
3385 |         "@types/node": "*"
3386 |       }
3387 |     },
3388 |     "node_modules/@types/hammerjs": {
3389 |       "version": "2.0.46",
3390 |       "resolved": "https://registry.npmjs.org/@types/hammerjs/-/hammerjs-2.0.46.tgz",
3391 |       "integrity": "sha512-ynRvcq6wvqexJ9brDMS4BnBLzmr0e14d6ZJTEShTBWKymQiHwlAyGu0ZPEFI2Fh1U53F7tN9ufClWM5KvqkKOw==",
3392 |       "license": "MIT",
3393 |       "peer": true
3394 |     },
3395 |     "node_modules/@types/istanbul-lib-coverage": {
3396 |       "version": "2.0.6",
3397 |       "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.6.tgz",
3398 |       "integrity": "sha512-2QF/t/auWm0lsy8XtKVPG19v3sSOQlJe/YHZgfjb/KBBHOGSV+J2q/S671rcq9uTBrLAXmZpqJiaQbMT+zNU1w==",
3399 |       "license": "MIT"
3400 |     },
3401 |     "node_modules/@types/istanbul-lib-report": {
3402 |       "version": "3.0.3",
3403 |       "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.3.tgz",
3404 |       "integrity": "sha512-NQn7AHQnk/RSLOxrBbGyJM/aVQ+pjj5HCgasFxc0K/KhoATfQ/47AyUl15I2yBUpihjmas+a+VJBOqecrFH+uA==",
3405 |       "license": "MIT",
3406 |       "dependencies": {
3407 |         "@types/istanbul-lib-coverage": "*"
3408 |       }
3409 |     },
3410 |     "node_modules/@types/istanbul-reports": {
3411 |       "version": "3.0.4",
3412 |       "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.4.tgz",
3413 |       "integrity": "sha512-pk2B1NWalF9toCRu6gjBzR69syFjP4Od8WRAX+0mmf9lAjCRicLOWc+ZrxZHx/0XRjotgkF9t6iaMJ+aXcOdZQ==",
3414 |       "license": "MIT",
3415 |       "dependencies": {
3416 |         "@types/istanbul-lib-report": "*"
3417 |       }
3418 |     },
3419 |     "node_modules/@types/node": {
3420 |       "version": "24.5.0",
3421 |       "resolved": "https://registry.npmjs.org/@types/node/-/node-24.5.0.tgz",
3422 |       "integrity": "sha512-y1dMvuvJspJiPSDZUQ+WMBvF7dpnEqN4x9DDC9ie5Fs/HUZJA3wFp7EhHoVaKX/iI0cRoECV8X2jL8zi0xrHCg==",
3423 |       "license": "MIT",
3424 |       "dependencies": {
3425 |         "undici-types": "~7.12.0"
3426 |       }
3427 |     },
3428 |     "node_modules/@types/stack-utils": {
3429 |       "version": "2.0.3",
3430 |       "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.3.tgz",
3431 |       "integrity": "sha512-9aEbYZ3TbYMznPdcdr3SmIrLXwC/AKZXQeCf9Pgao5CKb8CyHuEX5jzWPTkvregvhRJHcpRO6BFoGW9ycaOkYw==",
3432 |       "license": "MIT"
3433 |     },
3434 |     "node_modules/@types/yargs": {
3435 |       "version": "17.0.33",
3436 |       "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-17.0.33.tgz",
3437 |       "integrity": "sha512-WpxBCKWPLr4xSsHgz511rFJAM+wS28w2zEO1QDNY5zM/S8ok70NNfztH0xwhqKyaK0OHCbN98LDAZuy1ctxDkA==",
3438 |       "license": "MIT",
3439 |       "dependencies": {
3440 |         "@types/yargs-parser": "*"
3441 |       }
3442 |     },
3443 |     "node_modules/@types/yargs-parser": {
3444 |       "version": "21.0.3",
3445 |       "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-21.0.3.tgz",
3446 |       "integrity": "sha512-I4q9QU9MQv4oEOz4tAHJtNz1cwuLxn2F3xcc2iV5WdqLPpUnj30aUuxt1mAxYTG+oe8CZMV/+6rU4S4gRDzqtQ==",
3447 |       "license": "MIT"
3448 |     },
3449 |     "node_modules/@ungap/structured-clone": {
3450 |       "version": "1.3.0",
3451 |       "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
3452 |       "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
3453 |       "license": "ISC"
3454 |     },
3455 |     "node_modules/@urql/core": {
3456 |       "version": "5.2.0",
3457 |       "resolved": "https://registry.npmjs.org/@urql/core/-/core-5.2.0.tgz",
3458 |       "integrity": "sha512-/n0ieD0mvvDnVAXEQgX/7qJiVcvYvNkOHeBvkwtylfjydar123caCXcl58PXFY11oU1oquJocVXHxLAbtv4x1A==",
3459 |       "license": "MIT",
3460 |       "dependencies": {
3461 |         "@0no-co/graphql.web": "^1.0.13",
3462 |         "wonka": "^6.3.2"
3463 |       }
3464 |     },
3465 |     "node_modules/@urql/exchange-retry": {
3466 |       "version": "1.3.2",
3467 |       "resolved": "https://registry.npmjs.org/@urql/exchange-retry/-/exchange-retry-1.3.2.tgz",
3468 |       "integrity": "sha512-TQMCz2pFJMfpNxmSfX1VSfTjwUIFx/mL+p1bnfM1xjjdla7Z+KnGMW/EhFbpckp3LyWAH4PgOsMwOMnIN+MBFg==",
3469 |       "license": "MIT",
3470 |       "dependencies": {
3471 |         "@urql/core": "^5.1.2",
3472 |         "wonka": "^6.3.2"
3473 |       },
3474 |       "peerDependencies": {
3475 |         "@urql/core": "^5.0.0"
3476 |       }
3477 |     },
3478 |     "node_modules/@xmldom/xmldom": {
3479 |       "version": "0.8.11",
3480 |       "resolved": "https://registry.npmjs.org/@xmldom/xmldom/-/xmldom-0.8.11.tgz",
3481 |       "integrity": "sha512-cQzWCtO6C8TQiYl1ruKNn2U6Ao4o4WBBcbL61yJl84x+j5sOWWFU9X7DpND8XZG3daDppSsigMdfAIl2upQBRw==",
3482 |       "license": "MIT",
3483 |       "engines": {
3484 |         "node": ">=10.0.0"
3485 |       }
3486 |     },
3487 |     "node_modules/abort-controller": {
3488 |       "version": "3.0.0",
3489 |       "resolved": "https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz",
3490 |       "integrity": "sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==",
3491 |       "license": "MIT",
3492 |       "dependencies": {
3493 |         "event-target-shim": "^5.0.0"
3494 |       },
3495 |       "engines": {
3496 |         "node": ">=6.5"
3497 |       }
3498 |     },
3499 |     "node_modules/accepts": {
3500 |       "version": "1.3.8",
3501 |       "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
3502 |       "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
3503 |       "license": "MIT",
3504 |       "dependencies": {
3505 |         "mime-types": "~2.1.34",
3506 |         "negotiator": "0.6.3"
3507 |       },
3508 |       "engines": {
3509 |         "node": ">= 0.6"
3510 |       }
3511 |     },
3512 |     "node_modules/acorn": {
3513 |       "version": "8.15.0",
3514 |       "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
3515 |       "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
3516 |       "license": "MIT",
3517 |       "bin": {
3518 |         "acorn": "bin/acorn"
3519 |       },
3520 |       "engines": {
3521 |         "node": ">=0.4.0"
3522 |       }
3523 |     },
3524 |     "node_modules/agent-base": {
3525 |       "version": "7.1.4",
3526 |       "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
3527 |       "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
3528 |       "license": "MIT",
3529 |       "engines": {
3530 |         "node": ">= 14"
3531 |       }
3532 |     },
3533 |     "node_modules/ajv": {
3534 |       "version": "8.17.1",
3535 |       "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
3536 |       "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
3537 |       "license": "MIT",
3538 |       "dependencies": {
3539 |         "fast-deep-equal": "^3.1.3",
3540 |         "fast-uri": "^3.0.1",
3541 |         "json-schema-traverse": "^1.0.0",
3542 |         "require-from-string": "^2.0.2"
3543 |       },
3544 |       "funding": {
3545 |         "type": "github",
3546 |         "url": "https://github.com/sponsors/epoberezkin"
3547 |       }
3548 |     },
3549 |     "node_modules/anser": {
3550 |       "version": "1.4.10",
3551 |       "resolved": "https://registry.npmjs.org/anser/-/anser-1.4.10.tgz",
3552 |       "integrity": "sha512-hCv9AqTQ8ycjpSd3upOJd7vFwW1JaoYQ7tpham03GJ1ca8/65rqn0RpaWpItOAd6ylW9wAw6luXYPJIyPFVOww==",
3553 |       "license": "MIT"
3554 |     },
3555 |     "node_modules/ansi-escapes": {
3556 |       "version": "4.3.2",
3557 |       "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
3558 |       "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
3559 |       "license": "MIT",
3560 |       "dependencies": {
3561 |         "type-fest": "^0.21.3"
3562 |       },
3563 |       "engines": {
3564 |         "node": ">=8"
3565 |       },
3566 |       "funding": {
3567 |         "url": "https://github.com/sponsors/sindresorhus"
3568 |       }
3569 |     },
3570 |     "node_modules/ansi-escapes/node_modules/type-fest": {
3571 |       "version": "0.21.3",
3572 |       "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
3573 |       "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
3574 |       "license": "(MIT OR CC0-1.0)",
3575 |       "engines": {
3576 |         "node": ">=10"
3577 |       },
3578 |       "funding": {
3579 |         "url": "https://github.com/sponsors/sindresorhus"
3580 |       }
3581 |     },
3582 |     "node_modules/ansi-regex": {
3583 |       "version": "5.0.1",
3584 |       "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
3585 |       "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
3586 |       "license": "MIT",
3587 |       "engines": {
3588 |         "node": ">=8"
3589 |       }
3590 |     },
3591 |     "node_modules/ansi-styles": {
3592 |       "version": "3.2.1",
3593 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
3594 |       "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
3595 |       "license": "MIT",
3596 |       "dependencies": {
3597 |         "color-convert": "^1.9.0"
3598 |       },
3599 |       "engines": {
3600 |         "node": ">=4"
3601 |       }
3602 |     },
3603 |     "node_modules/any-promise": {
3604 |       "version": "1.3.0",
3605 |       "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
3606 |       "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
3607 |       "license": "MIT"
3608 |     },
3609 |     "node_modules/anymatch": {
3610 |       "version": "3.1.3",
3611 |       "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
3612 |       "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
3613 |       "license": "ISC",
3614 |       "dependencies": {
3615 |         "normalize-path": "^3.0.0",
3616 |         "picomatch": "^2.0.4"
3617 |       },
3618 |       "engines": {
3619 |         "node": ">= 8"
3620 |       }
3621 |     },
3622 |     "node_modules/arg": {
3623 |       "version": "5.0.2",
3624 |       "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
3625 |       "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
3626 |       "license": "MIT"
3627 |     },
3628 |     "node_modules/argparse": {
3629 |       "version": "1.0.10",
3630 |       "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
3631 |       "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
3632 |       "license": "MIT",
3633 |       "dependencies": {
3634 |         "sprintf-js": "~1.0.2"
3635 |       }
3636 |     },
3637 |     "node_modules/asap": {
3638 |       "version": "2.0.6",
3639 |       "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
3640 |       "integrity": "sha512-BSHWgDSAiKs50o2Re8ppvp3seVHXSRM44cdSsT9FfNEUUZLOGWVCsiWaRPWM1Znn+mqZ1OfVZ3z3DWEzSp7hRA==",
3641 |       "license": "MIT"
3642 |     },
3643 |     "node_modules/async-limiter": {
3644 |       "version": "1.0.1",
3645 |       "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
3646 |       "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
3647 |       "license": "MIT"
3648 |     },
3649 |     "node_modules/babel-jest": {
3650 |       "version": "29.7.0",
3651 |       "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-29.7.0.tgz",
3652 |       "integrity": "sha512-BrvGY3xZSwEcCzKvKsCi2GgHqDqsYkOP4/by5xCgIwGXQxIEh+8ew3gmrE1y7XRR6LHZIj6yLYnUi/mm2KXKBg==",
3653 |       "license": "MIT",
3654 |       "dependencies": {
3655 |         "@jest/transform": "^29.7.0",
3656 |         "@types/babel__core": "^7.1.14",
3657 |         "babel-plugin-istanbul": "^6.1.1",
3658 |         "babel-preset-jest": "^29.6.3",
3659 |         "chalk": "^4.0.0",
3660 |         "graceful-fs": "^4.2.9",
3661 |         "slash": "^3.0.0"
3662 |       },
3663 |       "engines": {
3664 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
3665 |       },
3666 |       "peerDependencies": {
3667 |         "@babel/core": "^7.8.0"
3668 |       }
3669 |     },
3670 |     "node_modules/babel-jest/node_modules/ansi-styles": {
3671 |       "version": "4.3.0",
3672 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
3673 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
3674 |       "license": "MIT",
3675 |       "dependencies": {
3676 |         "color-convert": "^2.0.1"
3677 |       },
3678 |       "engines": {
3679 |         "node": ">=8"
3680 |       },
3681 |       "funding": {
3682 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
3683 |       }
3684 |     },
3685 |     "node_modules/babel-jest/node_modules/chalk": {
3686 |       "version": "4.1.2",
3687 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
3688 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
3689 |       "license": "MIT",
3690 |       "dependencies": {
3691 |         "ansi-styles": "^4.1.0",
3692 |         "supports-color": "^7.1.0"
3693 |       },
3694 |       "engines": {
3695 |         "node": ">=10"
3696 |       },
3697 |       "funding": {
3698 |         "url": "https://github.com/chalk/chalk?sponsor=1"
3699 |       }
3700 |     },
3701 |     "node_modules/babel-jest/node_modules/color-convert": {
3702 |       "version": "2.0.1",
3703 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
3704 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
3705 |       "license": "MIT",
3706 |       "dependencies": {
3707 |         "color-name": "~1.1.4"
3708 |       },
3709 |       "engines": {
3710 |         "node": ">=7.0.0"
3711 |       }
3712 |     },
3713 |     "node_modules/babel-jest/node_modules/color-name": {
3714 |       "version": "1.1.4",
3715 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
3716 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
3717 |       "license": "MIT"
3718 |     },
3719 |     "node_modules/babel-jest/node_modules/has-flag": {
3720 |       "version": "4.0.0",
3721 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
3722 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
3723 |       "license": "MIT",
3724 |       "engines": {
3725 |         "node": ">=8"
3726 |       }
3727 |     },
3728 |     "node_modules/babel-jest/node_modules/supports-color": {
3729 |       "version": "7.2.0",
3730 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
3731 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
3732 |       "license": "MIT",
3733 |       "dependencies": {
3734 |         "has-flag": "^4.0.0"
3735 |       },
3736 |       "engines": {
3737 |         "node": ">=8"
3738 |       }
3739 |     },
3740 |     "node_modules/babel-plugin-istanbul": {
3741 |       "version": "6.1.1",
3742 |       "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.1.1.tgz",
3743 |       "integrity": "sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==",
3744 |       "license": "BSD-3-Clause",
3745 |       "dependencies": {
3746 |         "@babel/helper-plugin-utils": "^7.0.0",
3747 |         "@istanbuljs/load-nyc-config": "^1.0.0",
3748 |         "@istanbuljs/schema": "^0.1.2",
3749 |         "istanbul-lib-instrument": "^5.0.4",
3750 |         "test-exclude": "^6.0.0"
3751 |       },
3752 |       "engines": {
3753 |         "node": ">=8"
3754 |       }
3755 |     },
3756 |     "node_modules/babel-plugin-jest-hoist": {
3757 |       "version": "29.6.3",
3758 |       "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-29.6.3.tgz",
3759 |       "integrity": "sha512-ESAc/RJvGTFEzRwOTT4+lNDk/GNHMkKbNzsvT0qKRfDyyYTskxB5rnU2njIDYVxXCBHHEI1c0YwHob3WaYujOg==",
3760 |       "license": "MIT",
3761 |       "dependencies": {
3762 |         "@babel/template": "^7.3.3",
3763 |         "@babel/types": "^7.3.3",
3764 |         "@types/babel__core": "^7.1.14",
3765 |         "@types/babel__traverse": "^7.0.6"
3766 |       },
3767 |       "engines": {
3768 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
3769 |       }
3770 |     },
3771 |     "node_modules/babel-plugin-polyfill-corejs2": {
3772 |       "version": "0.4.14",
3773 |       "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.4.14.tgz",
3774 |       "integrity": "sha512-Co2Y9wX854ts6U8gAAPXfn0GmAyctHuK8n0Yhfjd6t30g7yvKjspvvOo9yG+z52PZRgFErt7Ka2pYnXCjLKEpg==",
3775 |       "license": "MIT",
3776 |       "dependencies": {
3777 |         "@babel/compat-data": "^7.27.7",
3778 |         "@babel/helper-define-polyfill-provider": "^0.6.5",
3779 |         "semver": "^6.3.1"
3780 |       },
3781 |       "peerDependencies": {
3782 |         "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
3783 |       }
3784 |     },
3785 |     "node_modules/babel-plugin-polyfill-corejs2/node_modules/semver": {
3786 |       "version": "6.3.1",
3787 |       "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
3788 |       "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
3789 |       "license": "ISC",
3790 |       "bin": {
3791 |         "semver": "bin/semver.js"
3792 |       }
3793 |     },
3794 |     "node_modules/babel-plugin-polyfill-corejs3": {
3795 |       "version": "0.13.0",
3796 |       "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.13.0.tgz",
3797 |       "integrity": "sha512-U+GNwMdSFgzVmfhNm8GJUX88AadB3uo9KpJqS3FaqNIPKgySuvMb+bHPsOmmuWyIcuqZj/pzt1RUIUZns4y2+A==",
3798 |       "license": "MIT",
3799 |       "dependencies": {
3800 |         "@babel/helper-define-polyfill-provider": "^0.6.5",
3801 |         "core-js-compat": "^3.43.0"
3802 |       },
3803 |       "peerDependencies": {
3804 |         "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
3805 |       }
3806 |     },
3807 |     "node_modules/babel-plugin-polyfill-regenerator": {
3808 |       "version": "0.6.5",
3809 |       "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.6.5.tgz",
3810 |       "integrity": "sha512-ISqQ2frbiNU9vIJkzg7dlPpznPZ4jOiUQ1uSmB0fEHeowtN3COYRsXr/xexn64NpU13P06jc/L5TgiJXOgrbEg==",
3811 |       "license": "MIT",
3812 |       "dependencies": {
3813 |         "@babel/helper-define-polyfill-provider": "^0.6.5"
3814 |       },
3815 |       "peerDependencies": {
3816 |         "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
3817 |       }
3818 |     },
3819 |     "node_modules/babel-plugin-react-compiler": {
3820 |       "version": "19.1.0-rc.3",
3821 |       "resolved": "https://registry.npmjs.org/babel-plugin-react-compiler/-/babel-plugin-react-compiler-19.1.0-rc.3.tgz",
3822 |       "integrity": "sha512-mjRn69WuTz4adL0bXGx8Rsyk1086zFJeKmes6aK0xPuK3aaXmDJdLHqwKKMrpm6KAI1MCoUK72d2VeqQbu8YIA==",
3823 |       "license": "MIT",
3824 |       "dependencies": {
3825 |         "@babel/types": "^7.26.0"
3826 |       }
3827 |     },
3828 |     "node_modules/babel-plugin-react-native-web": {
3829 |       "version": "0.21.1",
3830 |       "resolved": "https://registry.npmjs.org/babel-plugin-react-native-web/-/babel-plugin-react-native-web-0.21.1.tgz",
3831 |       "integrity": "sha512-7XywfJ5QIRMwjOL+pwJt2w47Jmi5fFLvK7/So4fV4jIN6PcRbylCp9/l3cJY4VJbSz3lnWTeHDTD1LKIc1C09Q==",
3832 |       "license": "MIT"
3833 |     },
3834 |     "node_modules/babel-plugin-syntax-hermes-parser": {
3835 |       "version": "0.29.1",
3836 |       "resolved": "https://registry.npmjs.org/babel-plugin-syntax-hermes-parser/-/babel-plugin-syntax-hermes-parser-0.29.1.tgz",
3837 |       "integrity": "sha512-2WFYnoWGdmih1I1J5eIqxATOeycOqRwYxAQBu3cUu/rhwInwHUg7k60AFNbuGjSDL8tje5GDrAnxzRLcu2pYcA==",
3838 |       "license": "MIT",
3839 |       "dependencies": {
3840 |         "hermes-parser": "0.29.1"
3841 |       }
3842 |     },
3843 |     "node_modules/babel-plugin-transform-flow-enums": {
3844 |       "version": "0.0.2",
3845 |       "resolved": "https://registry.npmjs.org/babel-plugin-transform-flow-enums/-/babel-plugin-transform-flow-enums-0.0.2.tgz",
3846 |       "integrity": "sha512-g4aaCrDDOsWjbm0PUUeVnkcVd6AKJsVc/MbnPhEotEpkeJQP6b8nzewohQi7+QS8UyPehOhGWn0nOwjvWpmMvQ==",
3847 |       "license": "MIT",
3848 |       "dependencies": {
3849 |         "@babel/plugin-syntax-flow": "^7.12.1"
3850 |       }
3851 |     },
3852 |     "node_modules/babel-preset-current-node-syntax": {
3853 |       "version": "1.2.0",
3854 |       "resolved": "https://registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.2.0.tgz",
3855 |       "integrity": "sha512-E/VlAEzRrsLEb2+dv8yp3bo4scof3l9nR4lrld+Iy5NyVqgVYUJnDAmunkhPMisRI32Qc4iRiz425d8vM++2fg==",
3856 |       "license": "MIT",
3857 |       "dependencies": {
3858 |         "@babel/plugin-syntax-async-generators": "^7.8.4",
3859 |         "@babel/plugin-syntax-bigint": "^7.8.3",
3860 |         "@babel/plugin-syntax-class-properties": "^7.12.13",
3861 |         "@babel/plugin-syntax-class-static-block": "^7.14.5",
3862 |         "@babel/plugin-syntax-import-attributes": "^7.24.7",
3863 |         "@babel/plugin-syntax-import-meta": "^7.10.4",
3864 |         "@babel/plugin-syntax-json-strings": "^7.8.3",
3865 |         "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
3866 |         "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
3867 |         "@babel/plugin-syntax-numeric-separator": "^7.10.4",
3868 |         "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
3869 |         "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
3870 |         "@babel/plugin-syntax-optional-chaining": "^7.8.3",
3871 |         "@babel/plugin-syntax-private-property-in-object": "^7.14.5",
3872 |         "@babel/plugin-syntax-top-level-await": "^7.14.5"
3873 |       },
3874 |       "peerDependencies": {
3875 |         "@babel/core": "^7.0.0 || ^8.0.0-0"
3876 |       }
3877 |     },
3878 |     "node_modules/babel-preset-jest": {
3879 |       "version": "29.6.3",
3880 |       "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-29.6.3.tgz",
3881 |       "integrity": "sha512-0B3bhxR6snWXJZtR/RliHTDPRgn1sNHOR0yVtq/IiQFyuOVjFS+wuio/R4gSNkyYmKmJB4wGZv2NZanmKmTnNA==",
3882 |       "license": "MIT",
3883 |       "dependencies": {
3884 |         "babel-plugin-jest-hoist": "^29.6.3",
3885 |         "babel-preset-current-node-syntax": "^1.0.0"
3886 |       },
3887 |       "engines": {
3888 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
3889 |       },
3890 |       "peerDependencies": {
3891 |         "@babel/core": "^7.0.0"
3892 |       }
3893 |     },
3894 |     "node_modules/balanced-match": {
3895 |       "version": "1.0.2",
3896 |       "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
3897 |       "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
3898 |       "license": "MIT"
3899 |     },
3900 |     "node_modules/base64-js": {
3901 |       "version": "1.5.1",
3902 |       "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
3903 |       "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
3904 |       "funding": [
3905 |         {
3906 |           "type": "github",
3907 |           "url": "https://github.com/sponsors/feross"
3908 |         },
3909 |         {
3910 |           "type": "patreon",
3911 |           "url": "https://www.patreon.com/feross"
3912 |         },
3913 |         {
3914 |           "type": "consulting",
3915 |           "url": "https://feross.org/support"
3916 |         }
3917 |       ],
3918 |       "license": "MIT"
3919 |     },
3920 |     "node_modules/baseline-browser-mapping": {
3921 |       "version": "2.8.4",
3922 |       "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.8.4.tgz",
3923 |       "integrity": "sha512-L+YvJwGAgwJBV1p6ffpSTa2KRc69EeeYGYjRVWKs0GKrK+LON0GC0gV+rKSNtALEDvMDqkvCFq9r1r94/Gjwxw==",
3924 |       "license": "Apache-2.0",
3925 |       "bin": {
3926 |         "baseline-browser-mapping": "dist/cli.js"
3927 |       }
3928 |     },
3929 |     "node_modules/better-opn": {
3930 |       "version": "3.0.2",
3931 |       "resolved": "https://registry.npmjs.org/better-opn/-/better-opn-3.0.2.tgz",
3932 |       "integrity": "sha512-aVNobHnJqLiUelTaHat9DZ1qM2w0C0Eym4LPI/3JxOnSokGVdsl1T1kN7TFvsEAD8G47A6VKQ0TVHqbBnYMJlQ==",
3933 |       "license": "MIT",
3934 |       "dependencies": {
3935 |         "open": "^8.0.4"
3936 |       },
3937 |       "engines": {
3938 |         "node": ">=12.0.0"
3939 |       }
3940 |     },
3941 |     "node_modules/better-opn/node_modules/open": {
3942 |       "version": "8.4.2",
3943 |       "resolved": "https://registry.npmjs.org/open/-/open-8.4.2.tgz",
3944 |       "integrity": "sha512-7x81NCL719oNbsq/3mh+hVrAWmFuEYUqrq/Iw3kUzH8ReypT9QQ0BLoJS7/G9k6N81XjW4qHWtjWwe/9eLy1EQ==",
3945 |       "license": "MIT",
3946 |       "dependencies": {
3947 |         "define-lazy-prop": "^2.0.0",
3948 |         "is-docker": "^2.1.1",
3949 |         "is-wsl": "^2.2.0"
3950 |       },
3951 |       "engines": {
3952 |         "node": ">=12"
3953 |       },
3954 |       "funding": {
3955 |         "url": "https://github.com/sponsors/sindresorhus"
3956 |       }
3957 |     },
3958 |     "node_modules/big-integer": {
3959 |       "version": "1.6.52",
3960 |       "resolved": "https://registry.npmjs.org/big-integer/-/big-integer-1.6.52.tgz",
3961 |       "integrity": "sha512-QxD8cf2eVqJOOz63z6JIN9BzvVs/dlySa5HGSBH5xtR8dPteIRQnBxxKqkNTiT6jbDTF6jAfrd4oMcND9RGbQg==",
3962 |       "license": "Unlicense",
3963 |       "engines": {
3964 |         "node": ">=0.6"
3965 |       }
3966 |     },
3967 |     "node_modules/bplist-creator": {
3968 |       "version": "0.1.0",
3969 |       "resolved": "https://registry.npmjs.org/bplist-creator/-/bplist-creator-0.1.0.tgz",
3970 |       "integrity": "sha512-sXaHZicyEEmY86WyueLTQesbeoH/mquvarJaQNbjuOQO+7gbFcDEWqKmcWA4cOTLzFlfgvkiVxolk1k5bBIpmg==",
3971 |       "license": "MIT",
3972 |       "dependencies": {
3973 |         "stream-buffers": "2.2.x"
3974 |       }
3975 |     },
3976 |     "node_modules/bplist-parser": {
3977 |       "version": "0.3.1",
3978 |       "resolved": "https://registry.npmjs.org/bplist-parser/-/bplist-parser-0.3.1.tgz",
3979 |       "integrity": "sha512-PyJxiNtA5T2PlLIeBot4lbp7rj4OadzjnMZD/G5zuBNt8ei/yCU7+wW0h2bag9vr8c+/WuRWmSxbqAl9hL1rBA==",
3980 |       "license": "MIT",
3981 |       "dependencies": {
3982 |         "big-integer": "1.6.x"
3983 |       },
3984 |       "engines": {
3985 |         "node": ">= 5.10.0"
3986 |       }
3987 |     },
3988 |     "node_modules/brace-expansion": {
3989 |       "version": "2.0.2",
3990 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
3991 |       "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
3992 |       "license": "MIT",
3993 |       "dependencies": {
3994 |         "balanced-match": "^1.0.0"
3995 |       }
3996 |     },
3997 |     "node_modules/braces": {
3998 |       "version": "3.0.3",
3999 |       "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
4000 |       "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
4001 |       "license": "MIT",
4002 |       "dependencies": {
4003 |         "fill-range": "^7.1.1"
4004 |       },
4005 |       "engines": {
4006 |         "node": ">=8"
4007 |       }
4008 |     },
4009 |     "node_modules/browserslist": {
4010 |       "version": "4.26.2",
4011 |       "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.26.2.tgz",
4012 |       "integrity": "sha512-ECFzp6uFOSB+dcZ5BK/IBaGWssbSYBHvuMeMt3MMFyhI0Z8SqGgEkBLARgpRH3hutIgPVsALcMwbDrJqPxQ65A==",
4013 |       "funding": [
4014 |         {
4015 |           "type": "opencollective",
4016 |           "url": "https://opencollective.com/browserslist"
4017 |         },
4018 |         {
4019 |           "type": "tidelift",
4020 |           "url": "https://tidelift.com/funding/github/npm/browserslist"
4021 |         },
4022 |         {
4023 |           "type": "github",
4024 |           "url": "https://github.com/sponsors/ai"
4025 |         }
4026 |       ],
4027 |       "license": "MIT",
4028 |       "dependencies": {
4029 |         "baseline-browser-mapping": "^2.8.3",
4030 |         "caniuse-lite": "^1.0.30001741",
4031 |         "electron-to-chromium": "^1.5.218",
4032 |         "node-releases": "^2.0.21",
4033 |         "update-browserslist-db": "^1.1.3"
4034 |       },
4035 |       "bin": {
4036 |         "browserslist": "cli.js"
4037 |       },
4038 |       "engines": {
4039 |         "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
4040 |       }
4041 |     },
4042 |     "node_modules/bser": {
4043 |       "version": "2.1.1",
4044 |       "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
4045 |       "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
4046 |       "license": "Apache-2.0",
4047 |       "dependencies": {
4048 |         "node-int64": "^0.4.0"
4049 |       }
4050 |     },
4051 |     "node_modules/buffer": {
4052 |       "version": "5.7.1",
4053 |       "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
4054 |       "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
4055 |       "funding": [
4056 |         {
4057 |           "type": "github",
4058 |           "url": "https://github.com/sponsors/feross"
4059 |         },
4060 |         {
4061 |           "type": "patreon",
4062 |           "url": "https://www.patreon.com/feross"
4063 |         },
4064 |         {
4065 |           "type": "consulting",
4066 |           "url": "https://feross.org/support"
4067 |         }
4068 |       ],
4069 |       "license": "MIT",
4070 |       "dependencies": {
4071 |         "base64-js": "^1.3.1",
4072 |         "ieee754": "^1.1.13"
4073 |       }
4074 |     },
4075 |     "node_modules/buffer-from": {
4076 |       "version": "1.1.2",
4077 |       "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
4078 |       "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
4079 |       "license": "MIT"
4080 |     },
4081 |     "node_modules/bytes": {
4082 |       "version": "3.1.2",
4083 |       "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
4084 |       "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
4085 |       "license": "MIT",
4086 |       "engines": {
4087 |         "node": ">= 0.8"
4088 |       }
4089 |     },
4090 |     "node_modules/caller-callsite": {
4091 |       "version": "2.0.0",
4092 |       "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
4093 |       "integrity": "sha512-JuG3qI4QOftFsZyOn1qq87fq5grLIyk1JYd5lJmdA+fG7aQ9pA/i3JIJGcO3q0MrRcHlOt1U+ZeHW8Dq9axALQ==",
4094 |       "license": "MIT",
4095 |       "dependencies": {
4096 |         "callsites": "^2.0.0"
4097 |       },
4098 |       "engines": {
4099 |         "node": ">=4"
4100 |       }
4101 |     },
4102 |     "node_modules/caller-path": {
4103 |       "version": "2.0.0",
4104 |       "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
4105 |       "integrity": "sha512-MCL3sf6nCSXOwCTzvPKhN18TU7AHTvdtam8DAogxcrJ8Rjfbbg7Lgng64H9Iy+vUV6VGFClN/TyxBkAebLRR4A==",
4106 |       "license": "MIT",
4107 |       "dependencies": {
4108 |         "caller-callsite": "^2.0.0"
4109 |       },
4110 |       "engines": {
4111 |         "node": ">=4"
4112 |       }
4113 |     },
4114 |     "node_modules/callsites": {
4115 |       "version": "2.0.0",
4116 |       "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
4117 |       "integrity": "sha512-ksWePWBloaWPxJYQ8TL0JHvtci6G5QTKwQ95RcWAa/lzoAKuAOflGdAK92hpHXjkwb8zLxoLNUoNYZgVsaJzvQ==",
4118 |       "license": "MIT",
4119 |       "engines": {
4120 |         "node": ">=4"
4121 |       }
4122 |     },
4123 |     "node_modules/camelcase": {
4124 |       "version": "6.3.0",
4125 |       "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
4126 |       "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
4127 |       "license": "MIT",
4128 |       "engines": {
4129 |         "node": ">=10"
4130 |       },
4131 |       "funding": {
4132 |         "url": "https://github.com/sponsors/sindresorhus"
4133 |       }
4134 |     },
4135 |     "node_modules/caniuse-lite": {
4136 |       "version": "1.0.30001743",
4137 |       "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001743.tgz",
4138 |       "integrity": "sha512-e6Ojr7RV14Un7dz6ASD0aZDmQPT/A+eZU+nuTNfjqmRrmkmQlnTNWH0SKmqagx9PeW87UVqapSurtAXifmtdmw==",
4139 |       "funding": [
4140 |         {
4141 |           "type": "opencollective",
4142 |           "url": "https://opencollective.com/browserslist"
4143 |         },
4144 |         {
4145 |           "type": "tidelift",
4146 |           "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
4147 |         },
4148 |         {
4149 |           "type": "github",
4150 |           "url": "https://github.com/sponsors/ai"
4151 |         }
4152 |       ],
4153 |       "license": "CC-BY-4.0"
4154 |     },
4155 |     "node_modules/chalk": {
4156 |       "version": "2.4.2",
4157 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
4158 |       "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
4159 |       "license": "MIT",
4160 |       "dependencies": {
4161 |         "ansi-styles": "^3.2.1",
4162 |         "escape-string-regexp": "^1.0.5",
4163 |         "supports-color": "^5.3.0"
4164 |       },
4165 |       "engines": {
4166 |         "node": ">=4"
4167 |       }
4168 |     },
4169 |     "node_modules/chownr": {
4170 |       "version": "3.0.0",
4171 |       "resolved": "https://registry.npmjs.org/chownr/-/chownr-3.0.0.tgz",
4172 |       "integrity": "sha512-+IxzY9BZOQd/XuYPRmrvEVjF/nqj5kgT4kEq7VofrDoM1MxoRjEWkrCC3EtLi59TVawxTAn+orJwFQcrqEN1+g==",
4173 |       "license": "BlueOak-1.0.0",
4174 |       "engines": {
4175 |         "node": ">=18"
4176 |       }
4177 |     },
4178 |     "node_modules/chrome-launcher": {
4179 |       "version": "0.15.2",
4180 |       "resolved": "https://registry.npmjs.org/chrome-launcher/-/chrome-launcher-0.15.2.tgz",
4181 |       "integrity": "sha512-zdLEwNo3aUVzIhKhTtXfxhdvZhUghrnmkvcAq2NoDd+LeOHKf03H5jwZ8T/STsAlzyALkBVK552iaG1fGf1xVQ==",
4182 |       "license": "Apache-2.0",
4183 |       "dependencies": {
4184 |         "@types/node": "*",
4185 |         "escape-string-regexp": "^4.0.0",
4186 |         "is-wsl": "^2.2.0",
4187 |         "lighthouse-logger": "^1.0.0"
4188 |       },
4189 |       "bin": {
4190 |         "print-chrome-path": "bin/print-chrome-path.js"
4191 |       },
4192 |       "engines": {
4193 |         "node": ">=12.13.0"
4194 |       }
4195 |     },
4196 |     "node_modules/chrome-launcher/node_modules/escape-string-regexp": {
4197 |       "version": "4.0.0",
4198 |       "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
4199 |       "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
4200 |       "license": "MIT",
4201 |       "engines": {
4202 |         "node": ">=10"
4203 |       },
4204 |       "funding": {
4205 |         "url": "https://github.com/sponsors/sindresorhus"
4206 |       }
4207 |     },
4208 |     "node_modules/chromium-edge-launcher": {
4209 |       "version": "0.2.0",
4210 |       "resolved": "https://registry.npmjs.org/chromium-edge-launcher/-/chromium-edge-launcher-0.2.0.tgz",
4211 |       "integrity": "sha512-JfJjUnq25y9yg4FABRRVPmBGWPZZi+AQXT4mxupb67766/0UlhG8PAZCz6xzEMXTbW3CsSoE8PcCWA49n35mKg==",
4212 |       "license": "Apache-2.0",
4213 |       "dependencies": {
4214 |         "@types/node": "*",
4215 |         "escape-string-regexp": "^4.0.0",
4216 |         "is-wsl": "^2.2.0",
4217 |         "lighthouse-logger": "^1.0.0",
4218 |         "mkdirp": "^1.0.4",
4219 |         "rimraf": "^3.0.2"
4220 |       }
4221 |     },
4222 |     "node_modules/chromium-edge-launcher/node_modules/escape-string-regexp": {
4223 |       "version": "4.0.0",
4224 |       "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
4225 |       "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
4226 |       "license": "MIT",
4227 |       "engines": {
4228 |         "node": ">=10"
4229 |       },
4230 |       "funding": {
4231 |         "url": "https://github.com/sponsors/sindresorhus"
4232 |       }
4233 |     },
4234 |     "node_modules/ci-info": {
4235 |       "version": "2.0.0",
4236 |       "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
4237 |       "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
4238 |       "license": "MIT"
4239 |     },
4240 |     "node_modules/cli-cursor": {
4241 |       "version": "2.1.0",
4242 |       "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
4243 |       "integrity": "sha512-8lgKz8LmCRYZZQDpRyT2m5rKJ08TnU4tR9FFFW2rxpxR1FzWi4PQ/NfyODchAatHaUgnSPVcx/R5w6NuTBzFiw==",
4244 |       "license": "MIT",
4245 |       "dependencies": {
4246 |         "restore-cursor": "^2.0.0"
4247 |       },
4248 |       "engines": {
4249 |         "node": ">=4"
4250 |       }
4251 |     },
4252 |     "node_modules/cli-spinners": {
4253 |       "version": "2.9.2",
4254 |       "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.9.2.tgz",
4255 |       "integrity": "sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==",
4256 |       "license": "MIT",
4257 |       "engines": {
4258 |         "node": ">=6"
4259 |       },
4260 |       "funding": {
4261 |         "url": "https://github.com/sponsors/sindresorhus"
4262 |       }
4263 |     },
4264 |     "node_modules/cliui": {
4265 |       "version": "8.0.1",
4266 |       "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
4267 |       "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
4268 |       "license": "ISC",
4269 |       "dependencies": {
4270 |         "string-width": "^4.2.0",
4271 |         "strip-ansi": "^6.0.1",
4272 |         "wrap-ansi": "^7.0.0"
4273 |       },
4274 |       "engines": {
4275 |         "node": ">=12"
4276 |       }
4277 |     },
4278 |     "node_modules/cliui/node_modules/ansi-styles": {
4279 |       "version": "4.3.0",
4280 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
4281 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
4282 |       "license": "MIT",
4283 |       "dependencies": {
4284 |         "color-convert": "^2.0.1"
4285 |       },
4286 |       "engines": {
4287 |         "node": ">=8"
4288 |       },
4289 |       "funding": {
4290 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
4291 |       }
4292 |     },
4293 |     "node_modules/cliui/node_modules/color-convert": {
4294 |       "version": "2.0.1",
4295 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
4296 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
4297 |       "license": "MIT",
4298 |       "dependencies": {
4299 |         "color-name": "~1.1.4"
4300 |       },
4301 |       "engines": {
4302 |         "node": ">=7.0.0"
4303 |       }
4304 |     },
4305 |     "node_modules/cliui/node_modules/color-name": {
4306 |       "version": "1.1.4",
4307 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
4308 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
4309 |       "license": "MIT"
4310 |     },
4311 |     "node_modules/cliui/node_modules/emoji-regex": {
4312 |       "version": "8.0.0",
4313 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
4314 |       "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
4315 |       "license": "MIT"
4316 |     },
4317 |     "node_modules/cliui/node_modules/string-width": {
4318 |       "version": "4.2.3",
4319 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
4320 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
4321 |       "license": "MIT",
4322 |       "dependencies": {
4323 |         "emoji-regex": "^8.0.0",
4324 |         "is-fullwidth-code-point": "^3.0.0",
4325 |         "strip-ansi": "^6.0.1"
4326 |       },
4327 |       "engines": {
4328 |         "node": ">=8"
4329 |       }
4330 |     },
4331 |     "node_modules/cliui/node_modules/strip-ansi": {
4332 |       "version": "6.0.1",
4333 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
4334 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
4335 |       "license": "MIT",
4336 |       "dependencies": {
4337 |         "ansi-regex": "^5.0.1"
4338 |       },
4339 |       "engines": {
4340 |         "node": ">=8"
4341 |       }
4342 |     },
4343 |     "node_modules/cliui/node_modules/wrap-ansi": {
4344 |       "version": "7.0.0",
4345 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
4346 |       "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
4347 |       "license": "MIT",
4348 |       "dependencies": {
4349 |         "ansi-styles": "^4.0.0",
4350 |         "string-width": "^4.1.0",
4351 |         "strip-ansi": "^6.0.0"
4352 |       },
4353 |       "engines": {
4354 |         "node": ">=10"
4355 |       },
4356 |       "funding": {
4357 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
4358 |       }
4359 |     },
4360 |     "node_modules/clone": {
4361 |       "version": "1.0.4",
4362 |       "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
4363 |       "integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==",
4364 |       "license": "MIT",
4365 |       "engines": {
4366 |         "node": ">=0.8"
4367 |       }
4368 |     },
4369 |     "node_modules/color": {
4370 |       "version": "4.2.3",
4371 |       "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
4372 |       "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==",
4373 |       "license": "MIT",
4374 |       "dependencies": {
4375 |         "color-convert": "^2.0.1",
4376 |         "color-string": "^1.9.0"
4377 |       },
4378 |       "engines": {
4379 |         "node": ">=12.5.0"
4380 |       }
4381 |     },
4382 |     "node_modules/color-convert": {
4383 |       "version": "1.9.3",
4384 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
4385 |       "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
4386 |       "license": "MIT",
4387 |       "dependencies": {
4388 |         "color-name": "1.1.3"
4389 |       }
4390 |     },
4391 |     "node_modules/color-name": {
4392 |       "version": "1.1.3",
4393 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
4394 |       "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
4395 |       "license": "MIT"
4396 |     },
4397 |     "node_modules/color-string": {
4398 |       "version": "1.9.1",
4399 |       "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
4400 |       "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
4401 |       "license": "MIT",
4402 |       "dependencies": {
4403 |         "color-name": "^1.0.0",
4404 |         "simple-swizzle": "^0.2.2"
4405 |       }
4406 |     },
4407 |     "node_modules/color/node_modules/color-convert": {
4408 |       "version": "2.0.1",
4409 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
4410 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
4411 |       "license": "MIT",
4412 |       "dependencies": {
4413 |         "color-name": "~1.1.4"
4414 |       },
4415 |       "engines": {
4416 |         "node": ">=7.0.0"
4417 |       }
4418 |     },
4419 |     "node_modules/color/node_modules/color-name": {
4420 |       "version": "1.1.4",
4421 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
4422 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
4423 |       "license": "MIT"
4424 |     },
4425 |     "node_modules/commander": {
4426 |       "version": "7.2.0",
4427 |       "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
4428 |       "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==",
4429 |       "license": "MIT",
4430 |       "engines": {
4431 |         "node": ">= 10"
4432 |       }
4433 |     },
4434 |     "node_modules/compressible": {
4435 |       "version": "2.0.18",
4436 |       "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
4437 |       "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
4438 |       "license": "MIT",
4439 |       "dependencies": {
4440 |         "mime-db": ">= 1.43.0 < 2"
4441 |       },
4442 |       "engines": {
4443 |         "node": ">= 0.6"
4444 |       }
4445 |     },
4446 |     "node_modules/compression": {
4447 |       "version": "1.8.1",
4448 |       "resolved": "https://registry.npmjs.org/compression/-/compression-1.8.1.tgz",
4449 |       "integrity": "sha512-9mAqGPHLakhCLeNyxPkK4xVo746zQ/czLH1Ky+vkitMnWfWZps8r0qXuwhwizagCRttsL4lfG4pIOvaWLpAP0w==",
4450 |       "license": "MIT",
4451 |       "dependencies": {
4452 |         "bytes": "3.1.2",
4453 |         "compressible": "~2.0.18",
4454 |         "debug": "2.6.9",
4455 |         "negotiator": "~0.6.4",
4456 |         "on-headers": "~1.1.0",
4457 |         "safe-buffer": "5.2.1",
4458 |         "vary": "~1.1.2"
4459 |       },
4460 |       "engines": {
4461 |         "node": ">= 0.8.0"
4462 |       }
4463 |     },
4464 |     "node_modules/compression/node_modules/debug": {
4465 |       "version": "2.6.9",
4466 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
4467 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
4468 |       "license": "MIT",
4469 |       "dependencies": {
4470 |         "ms": "2.0.0"
4471 |       }
4472 |     },
4473 |     "node_modules/compression/node_modules/ms": {
4474 |       "version": "2.0.0",
4475 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
4476 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
4477 |       "license": "MIT"
4478 |     },
4479 |     "node_modules/compression/node_modules/negotiator": {
4480 |       "version": "0.6.4",
4481 |       "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.4.tgz",
4482 |       "integrity": "sha512-myRT3DiWPHqho5PrJaIRyaMv2kgYf0mUVgBNOYMuCH5Ki1yEiQaf/ZJuQ62nvpc44wL5WDbTX7yGJi1Neevw8w==",
4483 |       "license": "MIT",
4484 |       "engines": {
4485 |         "node": ">= 0.6"
4486 |       }
4487 |     },
4488 |     "node_modules/concat-map": {
4489 |       "version": "0.0.1",
4490 |       "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
4491 |       "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
4492 |       "license": "MIT"
4493 |     },
4494 |     "node_modules/connect": {
4495 |       "version": "3.7.0",
4496 |       "resolved": "https://registry.npmjs.org/connect/-/connect-3.7.0.tgz",
4497 |       "integrity": "sha512-ZqRXc+tZukToSNmh5C2iWMSoV3X1YUcPbqEM4DkEG5tNQXrQUZCNVGGv3IuicnkMtPfGf3Xtp8WCXs295iQ1pQ==",
4498 |       "license": "MIT",
4499 |       "dependencies": {
4500 |         "debug": "2.6.9",
4501 |         "finalhandler": "1.1.2",
4502 |         "parseurl": "~1.3.3",
4503 |         "utils-merge": "1.0.1"
4504 |       },
4505 |       "engines": {
4506 |         "node": ">= 0.10.0"
4507 |       }
4508 |     },
4509 |     "node_modules/connect/node_modules/debug": {
4510 |       "version": "2.6.9",
4511 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
4512 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
4513 |       "license": "MIT",
4514 |       "dependencies": {
4515 |         "ms": "2.0.0"
4516 |       }
4517 |     },
4518 |     "node_modules/connect/node_modules/ms": {
4519 |       "version": "2.0.0",
4520 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
4521 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
4522 |       "license": "MIT"
4523 |     },
4524 |     "node_modules/convert-source-map": {
4525 |       "version": "2.0.0",
4526 |       "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
4527 |       "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
4528 |       "license": "MIT"
4529 |     },
4530 |     "node_modules/core-js-compat": {
4531 |       "version": "3.45.1",
4532 |       "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.45.1.tgz",
4533 |       "integrity": "sha512-tqTt5T4PzsMIZ430XGviK4vzYSoeNJ6CXODi6c/voxOT6IZqBht5/EKaSNnYiEjjRYxjVz7DQIsOsY0XNi8PIA==",
4534 |       "license": "MIT",
4535 |       "dependencies": {
4536 |         "browserslist": "^4.25.3"
4537 |       },
4538 |       "funding": {
4539 |         "type": "opencollective",
4540 |         "url": "https://opencollective.com/core-js"
4541 |       }
4542 |     },
4543 |     "node_modules/cosmiconfig": {
4544 |       "version": "5.2.1",
4545 |       "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
4546 |       "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
4547 |       "license": "MIT",
4548 |       "dependencies": {
4549 |         "import-fresh": "^2.0.0",
4550 |         "is-directory": "^0.3.1",
4551 |         "js-yaml": "^3.13.1",
4552 |         "parse-json": "^4.0.0"
4553 |       },
4554 |       "engines": {
4555 |         "node": ">=4"
4556 |       }
4557 |     },
4558 |     "node_modules/cross-fetch": {
4559 |       "version": "3.2.0",
4560 |       "resolved": "https://registry.npmjs.org/cross-fetch/-/cross-fetch-3.2.0.tgz",
4561 |       "integrity": "sha512-Q+xVJLoGOeIMXZmbUK4HYk+69cQH6LudR0Vu/pRm2YlU/hDV9CiS0gKUMaWY5f2NeUH9C1nV3bsTlCo0FsTV1Q==",
4562 |       "license": "MIT",
4563 |       "dependencies": {
4564 |         "node-fetch": "^2.7.0"
4565 |       }
4566 |     },
4567 |     "node_modules/cross-spawn": {
4568 |       "version": "7.0.6",
4569 |       "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
4570 |       "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
4571 |       "license": "MIT",
4572 |       "dependencies": {
4573 |         "path-key": "^3.1.0",
4574 |         "shebang-command": "^2.0.0",
4575 |         "which": "^2.0.1"
4576 |       },
4577 |       "engines": {
4578 |         "node": ">= 8"
4579 |       }
4580 |     },
4581 |     "node_modules/crypto-random-string": {
4582 |       "version": "2.0.0",
4583 |       "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
4584 |       "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==",
4585 |       "license": "MIT",
4586 |       "engines": {
4587 |         "node": ">=8"
4588 |       }
4589 |     },
4590 |     "node_modules/css-in-js-utils": {
4591 |       "version": "3.1.0",
4592 |       "resolved": "https://registry.npmjs.org/css-in-js-utils/-/css-in-js-utils-3.1.0.tgz",
4593 |       "integrity": "sha512-fJAcud6B3rRu+KHYk+Bwf+WFL2MDCJJ1XG9x137tJQ0xYxor7XziQtuGFbWNdqrvF4Tk26O3H73nfVqXt/fW1A==",
4594 |       "license": "MIT",
4595 |       "dependencies": {
4596 |         "hyphenate-style-name": "^1.0.3"
4597 |       }
4598 |     },
4599 |     "node_modules/debug": {
4600 |       "version": "4.4.3",
4601 |       "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
4602 |       "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
4603 |       "license": "MIT",
4604 |       "dependencies": {
4605 |         "ms": "^2.1.3"
4606 |       },
4607 |       "engines": {
4608 |         "node": ">=6.0"
4609 |       },
4610 |       "peerDependenciesMeta": {
4611 |         "supports-color": {
4612 |           "optional": true
4613 |         }
4614 |       }
4615 |     },
4616 |     "node_modules/decode-uri-component": {
4617 |       "version": "0.2.2",
4618 |       "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.2.tgz",
4619 |       "integrity": "sha512-FqUYQ+8o158GyGTrMFJms9qh3CqTKvAqgqsTnkLI8sKu0028orqBhxNMFkFen0zGyg6epACD32pjVk58ngIErQ==",
4620 |       "license": "MIT",
4621 |       "engines": {
4622 |         "node": ">=0.10"
4623 |       }
4624 |     },
4625 |     "node_modules/deep-extend": {
4626 |       "version": "0.6.0",
4627 |       "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
4628 |       "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
4629 |       "license": "MIT",
4630 |       "engines": {
4631 |         "node": ">=4.0.0"
4632 |       }
4633 |     },
4634 |     "node_modules/deepmerge": {
4635 |       "version": "4.3.1",
4636 |       "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz",
4637 |       "integrity": "sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==",
4638 |       "license": "MIT",
4639 |       "engines": {
4640 |         "node": ">=0.10.0"
4641 |       }
4642 |     },
4643 |     "node_modules/defaults": {
4644 |       "version": "1.0.4",
4645 |       "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.4.tgz",
4646 |       "integrity": "sha512-eFuaLoy/Rxalv2kr+lqMlUnrDWV+3j4pljOIJgLIhI058IQfWJ7vXhyEIHu+HtC738klGALYxOKDO0bQP3tg8A==",
4647 |       "license": "MIT",
4648 |       "dependencies": {
4649 |         "clone": "^1.0.2"
4650 |       },
4651 |       "funding": {
4652 |         "url": "https://github.com/sponsors/sindresorhus"
4653 |       }
4654 |     },
4655 |     "node_modules/define-lazy-prop": {
4656 |       "version": "2.0.0",
4657 |       "resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-2.0.0.tgz",
4658 |       "integrity": "sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==",
4659 |       "license": "MIT",
4660 |       "engines": {
4661 |         "node": ">=8"
4662 |       }
4663 |     },
4664 |     "node_modules/depd": {
4665 |       "version": "2.0.0",
4666 |       "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
4667 |       "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
4668 |       "license": "MIT",
4669 |       "engines": {
4670 |         "node": ">= 0.8"
4671 |       }
4672 |     },
4673 |     "node_modules/destroy": {
4674 |       "version": "1.2.0",
4675 |       "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
4676 |       "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
4677 |       "license": "MIT",
4678 |       "engines": {
4679 |         "node": ">= 0.8",
4680 |         "npm": "1.2.8000 || >= 1.4.16"
4681 |       }
4682 |     },
4683 |     "node_modules/detect-libc": {
4684 |       "version": "2.1.0",
4685 |       "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.0.tgz",
4686 |       "integrity": "sha512-vEtk+OcP7VBRtQZ1EJ3bdgzSfBjgnEalLTp5zjJrS+2Z1w2KZly4SBdac/WDU3hhsNAZ9E8SC96ME4Ey8MZ7cg==",
4687 |       "license": "Apache-2.0",
4688 |       "engines": {
4689 |         "node": ">=8"
4690 |       }
4691 |     },
4692 |     "node_modules/dotenv": {
4693 |       "version": "16.4.7",
4694 |       "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.7.tgz",
4695 |       "integrity": "sha512-47qPchRCykZC03FhkYAhrvwU4xDBFIj1QPqaarj6mdM/hgUzfPHcpkHJOn3mJAufFeeAxAzeGsr5X0M4k6fLZQ==",
4696 |       "license": "BSD-2-Clause",
4697 |       "engines": {
4698 |         "node": ">=12"
4699 |       },
4700 |       "funding": {
4701 |         "url": "https://dotenvx.com"
4702 |       }
4703 |     },
4704 |     "node_modules/dotenv-expand": {
4705 |       "version": "11.0.7",
4706 |       "resolved": "https://registry.npmjs.org/dotenv-expand/-/dotenv-expand-11.0.7.tgz",
4707 |       "integrity": "sha512-zIHwmZPRshsCdpMDyVsqGmgyP0yT8GAgXUnkdAoJisxvf33k7yO6OuoKmcTGuXPWSsm8Oh88nZicRLA9Y0rUeA==",
4708 |       "license": "BSD-2-Clause",
4709 |       "dependencies": {
4710 |         "dotenv": "^16.4.5"
4711 |       },
4712 |       "engines": {
4713 |         "node": ">=12"
4714 |       },
4715 |       "funding": {
4716 |         "url": "https://dotenvx.com"
4717 |       }
4718 |     },
4719 |     "node_modules/eastasianwidth": {
4720 |       "version": "0.2.0",
4721 |       "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
4722 |       "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
4723 |       "license": "MIT"
4724 |     },
4725 |     "node_modules/ee-first": {
4726 |       "version": "1.1.1",
4727 |       "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
4728 |       "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
4729 |       "license": "MIT"
4730 |     },
4731 |     "node_modules/electron-to-chromium": {
4732 |       "version": "1.5.218",
4733 |       "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.218.tgz",
4734 |       "integrity": "sha512-uwwdN0TUHs8u6iRgN8vKeWZMRll4gBkz+QMqdS7DDe49uiK68/UX92lFb61oiFPrpYZNeZIqa4bA7O6Aiasnzg==",
4735 |       "license": "ISC"
4736 |     },
4737 |     "node_modules/emoji-regex": {
4738 |       "version": "9.2.2",
4739 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
4740 |       "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
4741 |       "license": "MIT"
4742 |     },
4743 |     "node_modules/encodeurl": {
4744 |       "version": "1.0.2",
4745 |       "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
4746 |       "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
4747 |       "license": "MIT",
4748 |       "engines": {
4749 |         "node": ">= 0.8"
4750 |       }
4751 |     },
4752 |     "node_modules/env-editor": {
4753 |       "version": "0.4.2",
4754 |       "resolved": "https://registry.npmjs.org/env-editor/-/env-editor-0.4.2.tgz",
4755 |       "integrity": "sha512-ObFo8v4rQJAE59M69QzwloxPZtd33TpYEIjtKD1rrFDcM1Gd7IkDxEBU+HriziN6HSHQnBJi8Dmy+JWkav5HKA==",
4756 |       "license": "MIT",
4757 |       "engines": {
4758 |         "node": ">=8"
4759 |       }
4760 |     },
4761 |     "node_modules/error-ex": {
4762 |       "version": "1.3.4",
4763 |       "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.4.tgz",
4764 |       "integrity": "sha512-sqQamAnR14VgCr1A618A3sGrygcpK+HEbenA/HiEAkkUwcZIIB/tgWqHFxWgOyDh4nB4JCRimh79dR5Ywc9MDQ==",
4765 |       "license": "MIT",
4766 |       "dependencies": {
4767 |         "is-arrayish": "^0.2.1"
4768 |       }
4769 |     },
4770 |     "node_modules/error-stack-parser": {
4771 |       "version": "2.1.4",
4772 |       "resolved": "https://registry.npmjs.org/error-stack-parser/-/error-stack-parser-2.1.4.tgz",
4773 |       "integrity": "sha512-Sk5V6wVazPhq5MhpO+AUxJn5x7XSXGl1R93Vn7i+zS15KDVxQijejNCrz8340/2bgLBjR9GtEG8ZVKONDjcqGQ==",
4774 |       "license": "MIT",
4775 |       "dependencies": {
4776 |         "stackframe": "^1.3.4"
4777 |       }
4778 |     },
4779 |     "node_modules/escalade": {
4780 |       "version": "3.2.0",
4781 |       "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
4782 |       "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
4783 |       "license": "MIT",
4784 |       "engines": {
4785 |         "node": ">=6"
4786 |       }
4787 |     },
4788 |     "node_modules/escape-html": {
4789 |       "version": "1.0.3",
4790 |       "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
4791 |       "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
4792 |       "license": "MIT"
4793 |     },
4794 |     "node_modules/escape-string-regexp": {
4795 |       "version": "1.0.5",
4796 |       "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
4797 |       "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
4798 |       "license": "MIT",
4799 |       "engines": {
4800 |         "node": ">=0.8.0"
4801 |       }
4802 |     },
4803 |     "node_modules/esprima": {
4804 |       "version": "4.0.1",
4805 |       "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
4806 |       "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
4807 |       "license": "BSD-2-Clause",
4808 |       "bin": {
4809 |         "esparse": "bin/esparse.js",
4810 |         "esvalidate": "bin/esvalidate.js"
4811 |       },
4812 |       "engines": {
4813 |         "node": ">=4"
4814 |       }
4815 |     },
4816 |     "node_modules/etag": {
4817 |       "version": "1.8.1",
4818 |       "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
4819 |       "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
4820 |       "license": "MIT",
4821 |       "engines": {
4822 |         "node": ">= 0.6"
4823 |       }
4824 |     },
4825 |     "node_modules/event-target-shim": {
4826 |       "version": "5.0.1",
4827 |       "resolved": "https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz",
4828 |       "integrity": "sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ==",
4829 |       "license": "MIT",
4830 |       "engines": {
4831 |         "node": ">=6"
4832 |       }
4833 |     },
4834 |     "node_modules/exec-async": {
4835 |       "version": "2.2.0",
4836 |       "resolved": "https://registry.npmjs.org/exec-async/-/exec-async-2.2.0.tgz",
4837 |       "integrity": "sha512-87OpwcEiMia/DeiKFzaQNBNFeN3XkkpYIh9FyOqq5mS2oKv3CBE67PXoEKcr6nodWdXNogTiQ0jE2NGuoffXPw==",
4838 |       "license": "MIT"
4839 |     },
4840 |     "node_modules/expo": {
4841 |       "version": "54.0.7",
4842 |       "resolved": "https://registry.npmjs.org/expo/-/expo-54.0.7.tgz",
4843 |       "integrity": "sha512-DftN6nMdpHYUCw5Xnh7+h7wnusjtly4JzQknvuD7MzIvqoyJL9uffQyMQrmZkXrUbgm+cKBm47vtooIz4qj0Qg==",
4844 |       "license": "MIT",
4845 |       "dependencies": {
4846 |         "@babel/runtime": "^7.20.0",
4847 |         "@expo/cli": "54.0.5",
4848 |         "@expo/config": "~12.0.9",
4849 |         "@expo/config-plugins": "~54.0.1",
4850 |         "@expo/devtools": "0.1.7",
4851 |         "@expo/fingerprint": "0.15.0",
4852 |         "@expo/metro": "~0.1.1",
4853 |         "@expo/metro-config": "54.0.3",
4854 |         "@expo/vector-icons": "^15.0.2",
4855 |         "@ungap/structured-clone": "^1.3.0",
4856 |         "babel-preset-expo": "~54.0.1",
4857 |         "expo-asset": "~12.0.8",
4858 |         "expo-constants": "~18.0.8",
4859 |         "expo-file-system": "~19.0.14",
4860 |         "expo-font": "~14.0.8",
4861 |         "expo-keep-awake": "~15.0.7",
4862 |         "expo-modules-autolinking": "3.0.10",
4863 |         "expo-modules-core": "3.0.15",
4864 |         "pretty-format": "^29.7.0",
4865 |         "react-refresh": "^0.14.2",
4866 |         "whatwg-url-without-unicode": "8.0.0-3"
4867 |       },
4868 |       "bin": {
4869 |         "expo": "bin/cli",
4870 |         "expo-modules-autolinking": "bin/autolinking",
4871 |         "fingerprint": "bin/fingerprint"
4872 |       },
4873 |       "peerDependencies": {
4874 |         "@expo/dom-webview": "*",
4875 |         "@expo/metro-runtime": "*",
4876 |         "react": "*",
4877 |         "react-native": "*",
4878 |         "react-native-webview": "*"
4879 |       },
4880 |       "peerDependenciesMeta": {
4881 |         "@expo/dom-webview": {
4882 |           "optional": true
4883 |         },
4884 |         "@expo/metro-runtime": {
4885 |           "optional": true
4886 |         },
4887 |         "react-native-webview": {
4888 |           "optional": true
4889 |         }
4890 |       }
4891 |     },
4892 |     "node_modules/expo-build-properties": {
4893 |       "version": "1.0.8",
4894 |       "resolved": "https://registry.npmjs.org/expo-build-properties/-/expo-build-properties-1.0.8.tgz",
4895 |       "integrity": "sha512-Ram9Jcg2WkbE7bRopWacMnXIhqUP6P13cQoj4rSfXLpJVOyGGvuMiw3rs1vzMbWSHxhvvsX2NvYXXIrZatexuw==",
4896 |       "license": "MIT",
4897 |       "dependencies": {
4898 |         "ajv": "^8.11.0",
4899 |         "semver": "^7.6.0"
4900 |       },
4901 |       "peerDependencies": {
4902 |         "expo": "*"
4903 |       }
4904 |     },
4905 |     "node_modules/expo-constants": {
4906 |       "version": "18.0.8",
4907 |       "resolved": "https://registry.npmjs.org/expo-constants/-/expo-constants-18.0.8.tgz",
4908 |       "integrity": "sha512-Tetphsx6RVImCTZeBAclRQMy0WOODY3y6qrUoc88YGUBVm8fAKkErCSWxLTCc6nFcJxdoOMYi62LgNIUFjZCLA==",
4909 |       "license": "MIT",
4910 |       "dependencies": {
4911 |         "@expo/config": "~12.0.8",
4912 |         "@expo/env": "~2.0.7"
4913 |       },
4914 |       "peerDependencies": {
4915 |         "expo": "*",
4916 |         "react-native": "*"
4917 |       }
4918 |     },
4919 |     "node_modules/expo-crypto": {
4920 |       "version": "15.0.7",
4921 |       "resolved": "https://registry.npmjs.org/expo-crypto/-/expo-crypto-15.0.7.tgz",
4922 |       "integrity": "sha512-FUo41TwwGT2e5rA45PsjezI868Ch3M6wbCZsmqTWdF/hr+HyPcrp1L//dsh/hsrsyrQdpY/U96Lu71/wXePJeg==",
4923 |       "license": "MIT",
4924 |       "dependencies": {
4925 |         "base64-js": "^1.3.0"
4926 |       },
4927 |       "peerDependencies": {
4928 |         "expo": "*"
4929 |       }
4930 |     },
4931 |     "node_modules/expo-device": {
4932 |       "version": "8.0.7",
4933 |       "resolved": "https://registry.npmjs.org/expo-device/-/expo-device-8.0.7.tgz",
4934 |       "integrity": "sha512-4psIFiFQbkcr2VAaOgCBsC0q7FPLtqsd0gjJmpCccxstvHMd9dmh7A+jSIwkFkEAcrkz+t1KxTp7McJAL+8sYA==",
4935 |       "license": "MIT",
4936 |       "dependencies": {
4937 |         "ua-parser-js": "^0.7.33"
4938 |       },
4939 |       "peerDependencies": {
4940 |         "expo": "*"
4941 |       }
4942 |     },
4943 |     "node_modules/expo-file-system": {
4944 |       "version": "19.0.14",
4945 |       "resolved": "https://registry.npmjs.org/expo-file-system/-/expo-file-system-19.0.14.tgz",
4946 |       "integrity": "sha512-0CA7O5IYhab11TlxQlJAx0Xm9pdkk/zEHNiW+Hh/T4atWi9U/J38CIp7iNYSrBvy9dC3rJbze5D1ANcKKr4mSQ==",
4947 |       "license": "MIT",
4948 |       "peerDependencies": {
4949 |         "expo": "*",
4950 |         "react-native": "*"
4951 |       }
4952 |     },
4953 |     "node_modules/expo-local-authentication": {
4954 |       "version": "17.0.7",
4955 |       "resolved": "https://registry.npmjs.org/expo-local-authentication/-/expo-local-authentication-17.0.7.tgz",
4956 |       "integrity": "sha512-yRWcgYn/OIwxEDEk7cM7tRjQSHaTp5hpKwzq+g9NmSMJ1etzUzt0yGzkDiOjObj3YqFo0ucyDJ8WfanLhZDtMw==",
4957 |       "license": "MIT",
4958 |       "dependencies": {
4959 |         "invariant": "^2.2.4"
4960 |       },
4961 |       "peerDependencies": {
4962 |         "expo": "*"
4963 |       }
4964 |     },
4965 |     "node_modules/expo-modules-autolinking": {
4966 |       "version": "3.0.10",
4967 |       "resolved": "https://registry.npmjs.org/expo-modules-autolinking/-/expo-modules-autolinking-3.0.10.tgz",
4968 |       "integrity": "sha512-6pwaz9H7aK/iYraHbX7zjg8QFTUuMfGEs8Vyc6bAoBd8Rovtb91WX955Kq5sazwNrQjs3WePwQ23LEAmls3u5g==",
4969 |       "license": "MIT",
4970 |       "dependencies": {
4971 |         "@expo/spawn-async": "^1.7.2",
4972 |         "chalk": "^4.1.0",
4973 |         "commander": "^7.2.0",
4974 |         "glob": "^10.4.2",
4975 |         "require-from-string": "^2.0.2",
4976 |         "resolve-from": "^5.0.0"
4977 |       },
4978 |       "bin": {
4979 |         "expo-modules-autolinking": "bin/expo-modules-autolinking.js"
4980 |       }
4981 |     },
4982 |     "node_modules/expo-modules-autolinking/node_modules/ansi-styles": {
4983 |       "version": "4.3.0",
4984 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
4985 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
4986 |       "license": "MIT",
4987 |       "dependencies": {
4988 |         "color-convert": "^2.0.1"
4989 |       },
4990 |       "engines": {
4991 |         "node": ">=8"
4992 |       },
4993 |       "funding": {
4994 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
4995 |       }
4996 |     },
4997 |     "node_modules/expo-modules-autolinking/node_modules/chalk": {
4998 |       "version": "4.1.2",
4999 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
5000 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
5001 |       "license": "MIT",
5002 |       "dependencies": {
5003 |         "ansi-styles": "^4.1.0",
5004 |         "supports-color": "^7.1.0"
5005 |       },
5006 |       "engines": {
5007 |         "node": ">=10"
5008 |       },
5009 |       "funding": {
5010 |         "url": "https://github.com/chalk/chalk?sponsor=1"
5011 |       }
5012 |     },
5013 |     "node_modules/expo-modules-autolinking/node_modules/color-convert": {
5014 |       "version": "2.0.1",
5015 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
5016 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
5017 |       "license": "MIT",
5018 |       "dependencies": {
5019 |         "color-name": "~1.1.4"
5020 |       },
5021 |       "engines": {
5022 |         "node": ">=7.0.0"
5023 |       }
5024 |     },
5025 |     "node_modules/expo-modules-autolinking/node_modules/color-name": {
5026 |       "version": "1.1.4",
5027 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
5028 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
5029 |       "license": "MIT"
5030 |     },
5031 |     "node_modules/expo-modules-autolinking/node_modules/has-flag": {
5032 |       "version": "4.0.0",
5033 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
5034 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
5035 |       "license": "MIT",
5036 |       "engines": {
5037 |         "node": ">=8"
5038 |       }
5039 |     },
5040 |     "node_modules/expo-modules-autolinking/node_modules/supports-color": {
5041 |       "version": "7.2.0",
5042 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
5043 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
5044 |       "license": "MIT",
5045 |       "dependencies": {
5046 |         "has-flag": "^4.0.0"
5047 |       },
5048 |       "engines": {
5049 |         "node": ">=8"
5050 |       }
5051 |     },
5052 |     "node_modules/expo-modules-core": {
5053 |       "version": "3.0.15",
5054 |       "resolved": "https://registry.npmjs.org/expo-modules-core/-/expo-modules-core-3.0.15.tgz",
5055 |       "integrity": "sha512-vGI7osd0/IjprldD08k4bckWSu7ID4HhZNP68l/UtilONQ8XZig8mWJd/Fm7i7KGvE3HyuF+HOXE9l671no42Q==",
5056 |       "license": "MIT",
5057 |       "dependencies": {
5058 |         "invariant": "^2.2.4"
5059 |       },
5060 |       "peerDependencies": {
5061 |         "react": "*",
5062 |         "react-native": "*"
5063 |       }
5064 |     },
5065 |     "node_modules/expo-sharing": {
5066 |       "version": "14.0.7",
5067 |       "resolved": "https://registry.npmjs.org/expo-sharing/-/expo-sharing-14.0.7.tgz",
5068 |       "integrity": "sha512-t/5tR8ZJNH6tMkHXlF7453UafNIfrpfTG+THN9EMLC4Wsi4bJuESPm3NdmWDg2D4LDALJI/LQo0iEnLAd5Sp4g==",
5069 |       "license": "MIT",
5070 |       "peerDependencies": {
5071 |         "expo": "*"
5072 |       }
5073 |     },
5074 |     "node_modules/expo-status-bar": {
5075 |       "version": "3.0.8",
5076 |       "resolved": "https://registry.npmjs.org/expo-status-bar/-/expo-status-bar-3.0.8.tgz",
5077 |       "integrity": "sha512-L248XKPhum7tvREoS1VfE0H6dPCaGtoUWzRsUv7hGKdiB4cus33Rc0sxkWkoQ77wE8stlnUlL5lvmT0oqZ3ZBw==",
5078 |       "license": "MIT",
5079 |       "dependencies": {
5080 |         "react-native-is-edge-to-edge": "^1.2.1"
5081 |       },
5082 |       "peerDependencies": {
5083 |         "react": "*",
5084 |         "react-native": "*"
5085 |       }
5086 |     },
5087 |     "node_modules/expo/node_modules/@expo/cli": {
5088 |       "version": "54.0.5",
5089 |       "resolved": "https://registry.npmjs.org/@expo/cli/-/cli-54.0.5.tgz",
5090 |       "integrity": "sha512-8MZOZKHfHRHTBQu2/PXBi7eCKc2aF1i1JsZweL/P7aX8nivhrP6KV6An5PtO1/rrdnS9z7pmX2KwMygvvaFNhg==",
5091 |       "license": "MIT",
5092 |       "dependencies": {
5093 |         "@0no-co/graphql.web": "^1.0.8",
5094 |         "@expo/code-signing-certificates": "^0.0.5",
5095 |         "@expo/config": "~12.0.9",
5096 |         "@expo/config-plugins": "~54.0.1",
5097 |         "@expo/devcert": "^1.1.2",
5098 |         "@expo/env": "~2.0.7",
5099 |         "@expo/image-utils": "^0.8.7",
5100 |         "@expo/json-file": "^10.0.7",
5101 |         "@expo/metro": "~0.1.1",
5102 |         "@expo/metro-config": "~54.0.3",
5103 |         "@expo/osascript": "^2.3.7",
5104 |         "@expo/package-manager": "^1.9.7",
5105 |         "@expo/plist": "^0.4.7",
5106 |         "@expo/prebuild-config": "^54.0.3",
5107 |         "@expo/schema-utils": "^0.1.7",
5108 |         "@expo/server": "^0.7.4",
5109 |         "@expo/spawn-async": "^1.7.2",
5110 |         "@expo/ws-tunnel": "^1.0.1",
5111 |         "@expo/xcpretty": "^4.3.0",
5112 |         "@react-native/dev-middleware": "0.81.4",
5113 |         "@urql/core": "^5.0.6",
5114 |         "@urql/exchange-retry": "^1.3.0",
5115 |         "accepts": "^1.3.8",
5116 |         "arg": "^5.0.2",
5117 |         "better-opn": "~3.0.2",
5118 |         "bplist-creator": "0.1.0",
5119 |         "bplist-parser": "^0.3.1",
5120 |         "chalk": "^4.0.0",
5121 |         "ci-info": "^3.3.0",
5122 |         "compression": "^1.7.4",
5123 |         "connect": "^3.7.0",
5124 |         "debug": "^4.3.4",
5125 |         "env-editor": "^0.4.1",
5126 |         "freeport-async": "^2.0.0",
5127 |         "getenv": "^2.0.0",
5128 |         "glob": "^10.4.2",
5129 |         "lan-network": "^0.1.6",
5130 |         "minimatch": "^9.0.0",
5131 |         "node-forge": "^1.3.1",
5132 |         "npm-package-arg": "^11.0.0",
5133 |         "ora": "^3.4.0",
5134 |         "picomatch": "^3.0.1",
5135 |         "pretty-bytes": "^5.6.0",
5136 |         "pretty-format": "^29.7.0",
5137 |         "progress": "^2.0.3",
5138 |         "prompts": "^2.3.2",
5139 |         "qrcode-terminal": "0.11.0",
5140 |         "require-from-string": "^2.0.2",
5141 |         "requireg": "^0.2.2",
5142 |         "resolve": "^1.22.2",
5143 |         "resolve-from": "^5.0.0",
5144 |         "resolve.exports": "^2.0.3",
5145 |         "semver": "^7.6.0",
5146 |         "send": "^0.19.0",
5147 |         "slugify": "^1.3.4",
5148 |         "source-map-support": "~0.5.21",
5149 |         "stacktrace-parser": "^0.1.10",
5150 |         "structured-headers": "^0.4.1",
5151 |         "tar": "^7.4.3",
5152 |         "terminal-link": "^2.1.1",
5153 |         "undici": "^6.18.2",
5154 |         "wrap-ansi": "^7.0.0",
5155 |         "ws": "^8.12.1"
5156 |       },
5157 |       "bin": {
5158 |         "expo-internal": "build/bin/cli"
5159 |       },
5160 |       "peerDependencies": {
5161 |         "expo": "*",
5162 |         "expo-router": "*",
5163 |         "react-native": "*"
5164 |       },
5165 |       "peerDependenciesMeta": {
5166 |         "expo-router": {
5167 |           "optional": true
5168 |         },
5169 |         "react-native": {
5170 |           "optional": true
5171 |         }
5172 |       }
5173 |     },
5174 |     "node_modules/expo/node_modules/@expo/cli/node_modules/@expo/prebuild-config": {
5175 |       "version": "54.0.3",
5176 |       "resolved": "https://registry.npmjs.org/@expo/prebuild-config/-/prebuild-config-54.0.3.tgz",
5177 |       "integrity": "sha512-okf6Umaz1VniKmm+pA37QHBzB9XlRHvO1Qh3VbUezy07LTkz87kXUW7uLMmrA319WLavWSVORTXeR0jBRihObA==",
5178 |       "license": "MIT",
5179 |       "dependencies": {
5180 |         "@expo/config": "~12.0.9",
5181 |         "@expo/config-plugins": "~54.0.1",
5182 |         "@expo/config-types": "^54.0.8",
5183 |         "@expo/image-utils": "^0.8.7",
5184 |         "@expo/json-file": "^10.0.7",
5185 |         "@react-native/normalize-colors": "0.81.4",
5186 |         "debug": "^4.3.1",
5187 |         "resolve-from": "^5.0.0",
5188 |         "semver": "^7.6.0",
5189 |         "xml2js": "0.6.0"
5190 |       },
5191 |       "peerDependencies": {
5192 |         "expo": "*"
5193 |       }
5194 |     },
5195 |     "node_modules/expo/node_modules/@expo/vector-icons": {
5196 |       "version": "15.0.2",
5197 |       "resolved": "https://registry.npmjs.org/@expo/vector-icons/-/vector-icons-15.0.2.tgz",
5198 |       "integrity": "sha512-IiBjg7ZikueuHNf40wSGCf0zS73a3guJLdZzKnDUxsauB8VWPLMeWnRIupc+7cFhLUkqyvyo0jLNlcxG5xPOuQ==",
5199 |       "license": "MIT",
5200 |       "peerDependencies": {
5201 |         "expo-font": ">=14.0.4",
5202 |         "react": "*",
5203 |         "react-native": "*"
5204 |       }
5205 |     },
5206 |     "node_modules/expo/node_modules/ansi-styles": {
5207 |       "version": "4.3.0",
5208 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
5209 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
5210 |       "license": "MIT",
5211 |       "dependencies": {
5212 |         "color-convert": "^2.0.1"
5213 |       },
5214 |       "engines": {
5215 |         "node": ">=8"
5216 |       },
5217 |       "funding": {
5218 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
5219 |       }
5220 |     },
5221 |     "node_modules/expo/node_modules/babel-preset-expo": {
5222 |       "version": "54.0.1",
5223 |       "resolved": "https://registry.npmjs.org/babel-preset-expo/-/babel-preset-expo-54.0.1.tgz",
5224 |       "integrity": "sha512-ziLpj+I/IxQdblHCpuzcyukTpzunq6h/QFsbWhk5DTd4suqB+Vl0Neacd+e38YeKXBabmxCOv8VJN3qk39Md4w==",
5225 |       "license": "MIT",
5226 |       "dependencies": {
5227 |         "@babel/helper-module-imports": "^7.25.9",
5228 |         "@babel/plugin-proposal-decorators": "^7.12.9",
5229 |         "@babel/plugin-proposal-export-default-from": "^7.24.7",
5230 |         "@babel/plugin-syntax-export-default-from": "^7.24.7",
5231 |         "@babel/plugin-transform-class-static-block": "^7.27.1",
5232 |         "@babel/plugin-transform-export-namespace-from": "^7.25.9",
5233 |         "@babel/plugin-transform-flow-strip-types": "^7.25.2",
5234 |         "@babel/plugin-transform-modules-commonjs": "^7.24.8",
5235 |         "@babel/plugin-transform-object-rest-spread": "^7.24.7",
5236 |         "@babel/plugin-transform-parameters": "^7.24.7",
5237 |         "@babel/plugin-transform-private-methods": "^7.24.7",
5238 |         "@babel/plugin-transform-private-property-in-object": "^7.24.7",
5239 |         "@babel/plugin-transform-runtime": "^7.24.7",
5240 |         "@babel/preset-react": "^7.22.15",
5241 |         "@babel/preset-typescript": "^7.23.0",
5242 |         "@react-native/babel-preset": "0.81.4",
5243 |         "babel-plugin-react-compiler": "^19.1.0-rc.2",
5244 |         "babel-plugin-react-native-web": "~0.21.0",
5245 |         "babel-plugin-syntax-hermes-parser": "^0.29.1",
5246 |         "babel-plugin-transform-flow-enums": "^0.0.2",
5247 |         "debug": "^4.3.4",
5248 |         "resolve-from": "^5.0.0"
5249 |       },
5250 |       "peerDependencies": {
5251 |         "@babel/runtime": "^7.20.0",
5252 |         "expo": "*",
5253 |         "react-refresh": ">=0.14.0 <1.0.0"
5254 |       },
5255 |       "peerDependenciesMeta": {
5256 |         "@babel/runtime": {
5257 |           "optional": true
5258 |         },
5259 |         "expo": {
5260 |           "optional": true
5261 |         }
5262 |       }
5263 |     },
5264 |     "node_modules/expo/node_modules/chalk": {
5265 |       "version": "4.1.2",
5266 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
5267 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
5268 |       "license": "MIT",
5269 |       "dependencies": {
5270 |         "ansi-styles": "^4.1.0",
5271 |         "supports-color": "^7.1.0"
5272 |       },
5273 |       "engines": {
5274 |         "node": ">=10"
5275 |       },
5276 |       "funding": {
5277 |         "url": "https://github.com/chalk/chalk?sponsor=1"
5278 |       }
5279 |     },
5280 |     "node_modules/expo/node_modules/ci-info": {
5281 |       "version": "3.9.0",
5282 |       "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-3.9.0.tgz",
5283 |       "integrity": "sha512-NIxF55hv4nSqQswkAeiOi1r83xy8JldOFDTWiug55KBu9Jnblncd2U6ViHmYgHf01TPZS77NJBhBMKdWj9HQMQ==",
5284 |       "funding": [
5285 |         {
5286 |           "type": "github",
5287 |           "url": "https://github.com/sponsors/sibiraj-s"
5288 |         }
5289 |       ],
5290 |       "license": "MIT",
5291 |       "engines": {
5292 |         "node": ">=8"
5293 |       }
5294 |     },
5295 |     "node_modules/expo/node_modules/color-convert": {
5296 |       "version": "2.0.1",
5297 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
5298 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
5299 |       "license": "MIT",
5300 |       "dependencies": {
5301 |         "color-name": "~1.1.4"
5302 |       },
5303 |       "engines": {
5304 |         "node": ">=7.0.0"
5305 |       }
5306 |     },
5307 |     "node_modules/expo/node_modules/color-name": {
5308 |       "version": "1.1.4",
5309 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
5310 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
5311 |       "license": "MIT"
5312 |     },
5313 |     "node_modules/expo/node_modules/emoji-regex": {
5314 |       "version": "8.0.0",
5315 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
5316 |       "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
5317 |       "license": "MIT"
5318 |     },
5319 |     "node_modules/expo/node_modules/expo-asset": {
5320 |       "version": "12.0.8",
5321 |       "resolved": "https://registry.npmjs.org/expo-asset/-/expo-asset-12.0.8.tgz",
5322 |       "integrity": "sha512-jj2U8zw9+7orST2rlQGULYiqPoECOuUyffs2NguGrq84bYbkM041T7TOMXH2raPVJnM9lEAP54ezI6XL+GVYqw==",
5323 |       "license": "MIT",
5324 |       "dependencies": {
5325 |         "@expo/image-utils": "^0.8.7",
5326 |         "expo-constants": "~18.0.8"
5327 |       },
5328 |       "peerDependencies": {
5329 |         "expo": "*",
5330 |         "react": "*",
5331 |         "react-native": "*"
5332 |       }
5333 |     },
5334 |     "node_modules/expo/node_modules/expo-font": {
5335 |       "version": "14.0.8",
5336 |       "resolved": "https://registry.npmjs.org/expo-font/-/expo-font-14.0.8.tgz",
5337 |       "integrity": "sha512-bTUHaJWRZ7ywP8dg3f+wfOwv6RwMV3mWT2CDUIhsK70GjNGlCtiWOCoHsA5Od/esPaVxqc37cCBvQGQRFStRlA==",
5338 |       "license": "MIT",
5339 |       "dependencies": {
5340 |         "fontfaceobserver": "^2.1.0"
5341 |       },
5342 |       "peerDependencies": {
5343 |         "expo": "*",
5344 |         "react": "*",
5345 |         "react-native": "*"
5346 |       }
5347 |     },
5348 |     "node_modules/expo/node_modules/expo-keep-awake": {
5349 |       "version": "15.0.7",
5350 |       "resolved": "https://registry.npmjs.org/expo-keep-awake/-/expo-keep-awake-15.0.7.tgz",
5351 |       "integrity": "sha512-CgBNcWVPnrIVII5G54QDqoE125l+zmqR4HR8q+MQaCfHet+dYpS5vX5zii/RMayzGN4jPgA4XYIQ28ePKFjHoA==",
5352 |       "license": "MIT",
5353 |       "peerDependencies": {
5354 |         "expo": "*",
5355 |         "react": "*"
5356 |       }
5357 |     },
5358 |     "node_modules/expo/node_modules/has-flag": {
5359 |       "version": "4.0.0",
5360 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
5361 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
5362 |       "license": "MIT",
5363 |       "engines": {
5364 |         "node": ">=8"
5365 |       }
5366 |     },
5367 |     "node_modules/expo/node_modules/picomatch": {
5368 |       "version": "3.0.1",
5369 |       "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-3.0.1.tgz",
5370 |       "integrity": "sha512-I3EurrIQMlRc9IaAZnqRR044Phh2DXY+55o7uJ0V+hYZAcQYSuFWsc9q5PvyDHUSCe1Qxn/iBz+78s86zWnGag==",
5371 |       "license": "MIT",
5372 |       "engines": {
5373 |         "node": ">=10"
5374 |       },
5375 |       "funding": {
5376 |         "url": "https://github.com/sponsors/jonschlinkert"
5377 |       }
5378 |     },
5379 |     "node_modules/expo/node_modules/string-width": {
5380 |       "version": "4.2.3",
5381 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
5382 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
5383 |       "license": "MIT",
5384 |       "dependencies": {
5385 |         "emoji-regex": "^8.0.0",
5386 |         "is-fullwidth-code-point": "^3.0.0",
5387 |         "strip-ansi": "^6.0.1"
5388 |       },
5389 |       "engines": {
5390 |         "node": ">=8"
5391 |       }
5392 |     },
5393 |     "node_modules/expo/node_modules/strip-ansi": {
5394 |       "version": "6.0.1",
5395 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
5396 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
5397 |       "license": "MIT",
5398 |       "dependencies": {
5399 |         "ansi-regex": "^5.0.1"
5400 |       },
5401 |       "engines": {
5402 |         "node": ">=8"
5403 |       }
5404 |     },
5405 |     "node_modules/expo/node_modules/supports-color": {
5406 |       "version": "7.2.0",
5407 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
5408 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
5409 |       "license": "MIT",
5410 |       "dependencies": {
5411 |         "has-flag": "^4.0.0"
5412 |       },
5413 |       "engines": {
5414 |         "node": ">=8"
5415 |       }
5416 |     },
5417 |     "node_modules/expo/node_modules/wrap-ansi": {
5418 |       "version": "7.0.0",
5419 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
5420 |       "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
5421 |       "license": "MIT",
5422 |       "dependencies": {
5423 |         "ansi-styles": "^4.0.0",
5424 |         "string-width": "^4.1.0",
5425 |         "strip-ansi": "^6.0.0"
5426 |       },
5427 |       "engines": {
5428 |         "node": ">=10"
5429 |       },
5430 |       "funding": {
5431 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
5432 |       }
5433 |     },
5434 |     "node_modules/expo/node_modules/ws": {
5435 |       "version": "8.18.3",
5436 |       "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.3.tgz",
5437 |       "integrity": "sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==",
5438 |       "license": "MIT",
5439 |       "engines": {
5440 |         "node": ">=10.0.0"
5441 |       },
5442 |       "peerDependencies": {
5443 |         "bufferutil": "^4.0.1",
5444 |         "utf-8-validate": ">=5.0.2"
5445 |       },
5446 |       "peerDependenciesMeta": {
5447 |         "bufferutil": {
5448 |           "optional": true
5449 |         },
5450 |         "utf-8-validate": {
5451 |           "optional": true
5452 |         }
5453 |       }
5454 |     },
5455 |     "node_modules/exponential-backoff": {
5456 |       "version": "3.1.2",
5457 |       "resolved": "https://registry.npmjs.org/exponential-backoff/-/exponential-backoff-3.1.2.tgz",
5458 |       "integrity": "sha512-8QxYTVXUkuy7fIIoitQkPwGonB8F3Zj8eEO8Sqg9Zv/bkI7RJAzowee4gr81Hak/dUTpA2Z7VfQgoijjPNlUZA==",
5459 |       "license": "Apache-2.0"
5460 |     },
5461 |     "node_modules/fast-deep-equal": {
5462 |       "version": "3.1.3",
5463 |       "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
5464 |       "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
5465 |       "license": "MIT"
5466 |     },
5467 |     "node_modules/fast-json-stable-stringify": {
5468 |       "version": "2.1.0",
5469 |       "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
5470 |       "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
5471 |       "license": "MIT"
5472 |     },
5473 |     "node_modules/fast-uri": {
5474 |       "version": "3.1.0",
5475 |       "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.1.0.tgz",
5476 |       "integrity": "sha512-iPeeDKJSWf4IEOasVVrknXpaBV0IApz/gp7S2bb7Z4Lljbl2MGJRqInZiUrQwV16cpzw/D3S5j5Julj/gT52AA==",
5477 |       "funding": [
5478 |         {
5479 |           "type": "github",
5480 |           "url": "https://github.com/sponsors/fastify"
5481 |         },
5482 |         {
5483 |           "type": "opencollective",
5484 |           "url": "https://opencollective.com/fastify"
5485 |         }
5486 |       ],
5487 |       "license": "BSD-3-Clause"
5488 |     },
5489 |     "node_modules/fb-watchman": {
5490 |       "version": "2.0.2",
5491 |       "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.2.tgz",
5492 |       "integrity": "sha512-p5161BqbuCaSnB8jIbzQHOlpgsPmK5rJVDfDKO91Axs5NC1uu3HRQm6wt9cd9/+GtQQIO53JdGXXoyDpTAsgYA==",
5493 |       "license": "Apache-2.0",
5494 |       "dependencies": {
5495 |         "bser": "2.1.1"
5496 |       }
5497 |     },
5498 |     "node_modules/fbjs": {
5499 |       "version": "3.0.5",
5500 |       "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-3.0.5.tgz",
5501 |       "integrity": "sha512-ztsSx77JBtkuMrEypfhgc3cI0+0h+svqeie7xHbh1k/IKdcydnvadp/mUaGgjAOXQmQSxsqgaRhS3q9fy+1kxg==",
5502 |       "license": "MIT",
5503 |       "dependencies": {
5504 |         "cross-fetch": "^3.1.5",
5505 |         "fbjs-css-vars": "^1.0.0",
5506 |         "loose-envify": "^1.0.0",
5507 |         "object-assign": "^4.1.0",
5508 |         "promise": "^7.1.1",
5509 |         "setimmediate": "^1.0.5",
5510 |         "ua-parser-js": "^1.0.35"
5511 |       }
5512 |     },
5513 |     "node_modules/fbjs-css-vars": {
5514 |       "version": "1.0.2",
5515 |       "resolved": "https://registry.npmjs.org/fbjs-css-vars/-/fbjs-css-vars-1.0.2.tgz",
5516 |       "integrity": "sha512-b2XGFAFdWZWg0phtAWLHCk836A1Xann+I+Dgd3Gk64MHKZO44FfoD1KxyvbSh0qZsIoXQGGlVztIY+oitJPpRQ==",
5517 |       "license": "MIT"
5518 |     },
5519 |     "node_modules/fbjs/node_modules/promise": {
5520 |       "version": "7.3.1",
5521 |       "resolved": "https://registry.npmjs.org/promise/-/promise-7.3.1.tgz",
5522 |       "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
5523 |       "license": "MIT",
5524 |       "dependencies": {
5525 |         "asap": "~2.0.3"
5526 |       }
5527 |     },
5528 |     "node_modules/fbjs/node_modules/ua-parser-js": {
5529 |       "version": "1.0.41",
5530 |       "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-1.0.41.tgz",
5531 |       "integrity": "sha512-LbBDqdIC5s8iROCUjMbW1f5dJQTEFB1+KO9ogbvlb3nm9n4YHa5p4KTvFPWvh2Hs8gZMBuiB1/8+pdfe/tDPug==",
5532 |       "funding": [
5533 |         {
5534 |           "type": "opencollective",
5535 |           "url": "https://opencollective.com/ua-parser-js"
5536 |         },
5537 |         {
5538 |           "type": "paypal",
5539 |           "url": "https://paypal.me/faisalman"
5540 |         },
5541 |         {
5542 |           "type": "github",
5543 |           "url": "https://github.com/sponsors/faisalman"
5544 |         }
5545 |       ],
5546 |       "license": "MIT",
5547 |       "bin": {
5548 |         "ua-parser-js": "script/cli.js"
5549 |       },
5550 |       "engines": {
5551 |         "node": "*"
5552 |       }
5553 |     },
5554 |     "node_modules/fill-range": {
5555 |       "version": "7.1.1",
5556 |       "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
5557 |       "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
5558 |       "license": "MIT",
5559 |       "dependencies": {
5560 |         "to-regex-range": "^5.0.1"
5561 |       },
5562 |       "engines": {
5563 |         "node": ">=8"
5564 |       }
5565 |     },
5566 |     "node_modules/filter-obj": {
5567 |       "version": "1.1.0",
5568 |       "resolved": "https://registry.npmjs.org/filter-obj/-/filter-obj-1.1.0.tgz",
5569 |       "integrity": "sha512-8rXg1ZnX7xzy2NGDVkBVaAy+lSlPNwad13BtgSlLuxfIslyt5Vg64U7tFcCt4WS1R0hvtnQybT/IyCkGZ3DpXQ==",
5570 |       "license": "MIT",
5571 |       "engines": {
5572 |         "node": ">=0.10.0"
5573 |       }
5574 |     },
5575 |     "node_modules/finalhandler": {
5576 |       "version": "1.1.2",
5577 |       "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
5578 |       "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
5579 |       "license": "MIT",
5580 |       "dependencies": {
5581 |         "debug": "2.6.9",
5582 |         "encodeurl": "~1.0.2",
5583 |         "escape-html": "~1.0.3",
5584 |         "on-finished": "~2.3.0",
5585 |         "parseurl": "~1.3.3",
5586 |         "statuses": "~1.5.0",
5587 |         "unpipe": "~1.0.0"
5588 |       },
5589 |       "engines": {
5590 |         "node": ">= 0.8"
5591 |       }
5592 |     },
5593 |     "node_modules/finalhandler/node_modules/debug": {
5594 |       "version": "2.6.9",
5595 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
5596 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
5597 |       "license": "MIT",
5598 |       "dependencies": {
5599 |         "ms": "2.0.0"
5600 |       }
5601 |     },
5602 |     "node_modules/finalhandler/node_modules/ms": {
5603 |       "version": "2.0.0",
5604 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
5605 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
5606 |       "license": "MIT"
5607 |     },
5608 |     "node_modules/find-up": {
5609 |       "version": "4.1.0",
5610 |       "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
5611 |       "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
5612 |       "license": "MIT",
5613 |       "dependencies": {
5614 |         "locate-path": "^5.0.0",
5615 |         "path-exists": "^4.0.0"
5616 |       },
5617 |       "engines": {
5618 |         "node": ">=8"
5619 |       }
5620 |     },
5621 |     "node_modules/flow-enums-runtime": {
5622 |       "version": "0.0.6",
5623 |       "resolved": "https://registry.npmjs.org/flow-enums-runtime/-/flow-enums-runtime-0.0.6.tgz",
5624 |       "integrity": "sha512-3PYnM29RFXwvAN6Pc/scUfkI7RwhQ/xqyLUyPNlXUp9S40zI8nup9tUSrTLSVnWGBN38FNiGWbwZOB6uR4OGdw==",
5625 |       "license": "MIT"
5626 |     },
5627 |     "node_modules/fontfaceobserver": {
5628 |       "version": "2.3.0",
5629 |       "resolved": "https://registry.npmjs.org/fontfaceobserver/-/fontfaceobserver-2.3.0.tgz",
5630 |       "integrity": "sha512-6FPvD/IVyT4ZlNe7Wcn5Fb/4ChigpucKYSvD6a+0iMoLn2inpo711eyIcKjmDtE5XNcgAkSH9uN/nfAeZzHEfg==",
5631 |       "license": "BSD-2-Clause"
5632 |     },
5633 |     "node_modules/foreground-child": {
5634 |       "version": "3.3.1",
5635 |       "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
5636 |       "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
5637 |       "license": "ISC",
5638 |       "dependencies": {
5639 |         "cross-spawn": "^7.0.6",
5640 |         "signal-exit": "^4.0.1"
5641 |       },
5642 |       "engines": {
5643 |         "node": ">=14"
5644 |       },
5645 |       "funding": {
5646 |         "url": "https://github.com/sponsors/isaacs"
5647 |       }
5648 |     },
5649 |     "node_modules/freeport-async": {
5650 |       "version": "2.0.0",
5651 |       "resolved": "https://registry.npmjs.org/freeport-async/-/freeport-async-2.0.0.tgz",
5652 |       "integrity": "sha512-K7od3Uw45AJg00XUmy15+Hae2hOcgKcmN3/EF6Y7i01O0gaqiRx8sUSpsb9+BRNL8RPBrhzPsVfy8q9ADlJuWQ==",
5653 |       "license": "MIT",
5654 |       "engines": {
5655 |         "node": ">=8"
5656 |       }
5657 |     },
5658 |     "node_modules/fresh": {
5659 |       "version": "0.5.2",
5660 |       "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
5661 |       "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
5662 |       "license": "MIT",
5663 |       "engines": {
5664 |         "node": ">= 0.6"
5665 |       }
5666 |     },
5667 |     "node_modules/fs.realpath": {
5668 |       "version": "1.0.0",
5669 |       "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
5670 |       "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
5671 |       "license": "ISC"
5672 |     },
5673 |     "node_modules/fsevents": {
5674 |       "version": "2.3.3",
5675 |       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
5676 |       "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
5677 |       "hasInstallScript": true,
5678 |       "license": "MIT",
5679 |       "optional": true,
5680 |       "os": [
5681 |         "darwin"
5682 |       ],
5683 |       "engines": {
5684 |         "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
5685 |       }
5686 |     },
5687 |     "node_modules/function-bind": {
5688 |       "version": "1.1.2",
5689 |       "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
5690 |       "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
5691 |       "license": "MIT",
5692 |       "funding": {
5693 |         "url": "https://github.com/sponsors/ljharb"
5694 |       }
5695 |     },
5696 |     "node_modules/gensync": {
5697 |       "version": "1.0.0-beta.2",
5698 |       "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
5699 |       "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
5700 |       "license": "MIT",
5701 |       "engines": {
5702 |         "node": ">=6.9.0"
5703 |       }
5704 |     },
5705 |     "node_modules/get-caller-file": {
5706 |       "version": "2.0.5",
5707 |       "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
5708 |       "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
5709 |       "license": "ISC",
5710 |       "engines": {
5711 |         "node": "6.* || 8.* || >= 10.*"
5712 |       }
5713 |     },
5714 |     "node_modules/get-package-type": {
5715 |       "version": "0.1.0",
5716 |       "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
5717 |       "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
5718 |       "license": "MIT",
5719 |       "engines": {
5720 |         "node": ">=8.0.0"
5721 |       }
5722 |     },
5723 |     "node_modules/getenv": {
5724 |       "version": "2.0.0",
5725 |       "resolved": "https://registry.npmjs.org/getenv/-/getenv-2.0.0.tgz",
5726 |       "integrity": "sha512-VilgtJj/ALgGY77fiLam5iD336eSWi96Q15JSAG1zi8NRBysm3LXKdGnHb4m5cuyxvOLQQKWpBZAT6ni4FI2iQ==",
5727 |       "license": "MIT",
5728 |       "engines": {
5729 |         "node": ">=6"
5730 |       }
5731 |     },
5732 |     "node_modules/glob": {
5733 |       "version": "10.4.5",
5734 |       "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
5735 |       "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
5736 |       "license": "ISC",
5737 |       "dependencies": {
5738 |         "foreground-child": "^3.1.0",
5739 |         "jackspeak": "^3.1.2",
5740 |         "minimatch": "^9.0.4",
5741 |         "minipass": "^7.1.2",
5742 |         "package-json-from-dist": "^1.0.0",
5743 |         "path-scurry": "^1.11.1"
5744 |       },
5745 |       "bin": {
5746 |         "glob": "dist/esm/bin.mjs"
5747 |       },
5748 |       "funding": {
5749 |         "url": "https://github.com/sponsors/isaacs"
5750 |       }
5751 |     },
5752 |     "node_modules/global-dirs": {
5753 |       "version": "0.1.1",
5754 |       "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-0.1.1.tgz",
5755 |       "integrity": "sha512-NknMLn7F2J7aflwFOlGdNIuCDpN3VGoSoB+aap3KABFWbHVn1TCgFC+np23J8W2BiZbjfEw3BFBycSMv1AFblg==",
5756 |       "license": "MIT",
5757 |       "dependencies": {
5758 |         "ini": "^1.3.4"
5759 |       },
5760 |       "engines": {
5761 |         "node": ">=4"
5762 |       }
5763 |     },
5764 |     "node_modules/graceful-fs": {
5765 |       "version": "4.2.11",
5766 |       "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
5767 |       "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
5768 |       "license": "ISC"
5769 |     },
5770 |     "node_modules/has-flag": {
5771 |       "version": "3.0.0",
5772 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
5773 |       "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
5774 |       "license": "MIT",
5775 |       "engines": {
5776 |         "node": ">=4"
5777 |       }
5778 |     },
5779 |     "node_modules/hasown": {
5780 |       "version": "2.0.2",
5781 |       "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
5782 |       "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
5783 |       "license": "MIT",
5784 |       "dependencies": {
5785 |         "function-bind": "^1.1.2"
5786 |       },
5787 |       "engines": {
5788 |         "node": ">= 0.4"
5789 |       }
5790 |     },
5791 |     "node_modules/hermes-estree": {
5792 |       "version": "0.29.1",
5793 |       "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.29.1.tgz",
5794 |       "integrity": "sha512-jl+x31n4/w+wEqm0I2r4CMimukLbLQEYpisys5oCre611CI5fc9TxhqkBBCJ1edDG4Kza0f7CgNz8xVMLZQOmQ==",
5795 |       "license": "MIT"
5796 |     },
5797 |     "node_modules/hermes-parser": {
5798 |       "version": "0.29.1",
5799 |       "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.29.1.tgz",
5800 |       "integrity": "sha512-xBHWmUtRC5e/UL0tI7Ivt2riA/YBq9+SiYFU7C1oBa/j2jYGlIF9043oak1F47ihuDIxQ5nbsKueYJDRY02UgA==",
5801 |       "license": "MIT",
5802 |       "dependencies": {
5803 |         "hermes-estree": "0.29.1"
5804 |       }
5805 |     },
5806 |     "node_modules/hoist-non-react-statics": {
5807 |       "version": "3.3.2",
5808 |       "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-3.3.2.tgz",
5809 |       "integrity": "sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==",
5810 |       "license": "BSD-3-Clause",
5811 |       "peer": true,
5812 |       "dependencies": {
5813 |         "react-is": "^16.7.0"
5814 |       }
5815 |     },
5816 |     "node_modules/hoist-non-react-statics/node_modules/react-is": {
5817 |       "version": "16.13.1",
5818 |       "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
5819 |       "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
5820 |       "license": "MIT",
5821 |       "peer": true
5822 |     },
5823 |     "node_modules/hosted-git-info": {
5824 |       "version": "7.0.2",
5825 |       "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-7.0.2.tgz",
5826 |       "integrity": "sha512-puUZAUKT5m8Zzvs72XWy3HtvVbTWljRE66cP60bxJzAqf2DgICo7lYTY2IHUmLnNpjYvw5bvmoHvPc0QO2a62w==",
5827 |       "license": "ISC",
5828 |       "dependencies": {
5829 |         "lru-cache": "^10.0.1"
5830 |       },
5831 |       "engines": {
5832 |         "node": "^16.14.0 || >=18.0.0"
5833 |       }
5834 |     },
5835 |     "node_modules/hosted-git-info/node_modules/lru-cache": {
5836 |       "version": "10.4.3",
5837 |       "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
5838 |       "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
5839 |       "license": "ISC"
5840 |     },
5841 |     "node_modules/http-errors": {
5842 |       "version": "2.0.0",
5843 |       "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
5844 |       "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
5845 |       "license": "MIT",
5846 |       "dependencies": {
5847 |         "depd": "2.0.0",
5848 |         "inherits": "2.0.4",
5849 |         "setprototypeof": "1.2.0",
5850 |         "statuses": "2.0.1",
5851 |         "toidentifier": "1.0.1"
5852 |       },
5853 |       "engines": {
5854 |         "node": ">= 0.8"
5855 |       }
5856 |     },
5857 |     "node_modules/http-errors/node_modules/statuses": {
5858 |       "version": "2.0.1",
5859 |       "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
5860 |       "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
5861 |       "license": "MIT",
5862 |       "engines": {
5863 |         "node": ">= 0.8"
5864 |       }
5865 |     },
5866 |     "node_modules/https-proxy-agent": {
5867 |       "version": "7.0.6",
5868 |       "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
5869 |       "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
5870 |       "license": "MIT",
5871 |       "dependencies": {
5872 |         "agent-base": "^7.1.2",
5873 |         "debug": "4"
5874 |       },
5875 |       "engines": {
5876 |         "node": ">= 14"
5877 |       }
5878 |     },
5879 |     "node_modules/hyphenate-style-name": {
5880 |       "version": "1.1.0",
5881 |       "resolved": "https://registry.npmjs.org/hyphenate-style-name/-/hyphenate-style-name-1.1.0.tgz",
5882 |       "integrity": "sha512-WDC/ui2VVRrz3jOVi+XtjqkDjiVjTtFaAGiW37k6b+ohyQ5wYDOGkvCZa8+H0nx3gyvv0+BST9xuOgIyGQ00gw==",
5883 |       "license": "BSD-3-Clause"
5884 |     },
5885 |     "node_modules/ieee754": {
5886 |       "version": "1.2.1",
5887 |       "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
5888 |       "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
5889 |       "funding": [
5890 |         {
5891 |           "type": "github",
5892 |           "url": "https://github.com/sponsors/feross"
5893 |         },
5894 |         {
5895 |           "type": "patreon",
5896 |           "url": "https://www.patreon.com/feross"
5897 |         },
5898 |         {
5899 |           "type": "consulting",
5900 |           "url": "https://feross.org/support"
5901 |         }
5902 |       ],
5903 |       "license": "BSD-3-Clause"
5904 |     },
5905 |     "node_modules/ignore": {
5906 |       "version": "5.3.2",
5907 |       "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
5908 |       "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
5909 |       "license": "MIT",
5910 |       "engines": {
5911 |         "node": ">= 4"
5912 |       }
5913 |     },
5914 |     "node_modules/image-size": {
5915 |       "version": "1.2.1",
5916 |       "resolved": "https://registry.npmjs.org/image-size/-/image-size-1.2.1.tgz",
5917 |       "integrity": "sha512-rH+46sQJ2dlwfjfhCyNx5thzrv+dtmBIhPHk0zgRUukHzZ/kRueTJXoYYsclBaKcSMBWuGbOFXtioLpzTb5euw==",
5918 |       "license": "MIT",
5919 |       "dependencies": {
5920 |         "queue": "6.0.2"
5921 |       },
5922 |       "bin": {
5923 |         "image-size": "bin/image-size.js"
5924 |       },
5925 |       "engines": {
5926 |         "node": ">=16.x"
5927 |       }
5928 |     },
5929 |     "node_modules/import-fresh": {
5930 |       "version": "2.0.0",
5931 |       "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
5932 |       "integrity": "sha512-eZ5H8rcgYazHbKC3PG4ClHNykCSxtAhxSSEM+2mb+7evD2CKF5V7c0dNum7AdpDh0ZdICwZY9sRSn8f+KH96sg==",
5933 |       "license": "MIT",
5934 |       "dependencies": {
5935 |         "caller-path": "^2.0.0",
5936 |         "resolve-from": "^3.0.0"
5937 |       },
5938 |       "engines": {
5939 |         "node": ">=4"
5940 |       }
5941 |     },
5942 |     "node_modules/import-fresh/node_modules/resolve-from": {
5943 |       "version": "3.0.0",
5944 |       "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
5945 |       "integrity": "sha512-GnlH6vxLymXJNMBo7XP1fJIzBFbdYt49CuTwmB/6N53t+kMPRMFKz783LlQ4tv28XoQfMWinAJX6WCGf2IlaIw==",
5946 |       "license": "MIT",
5947 |       "engines": {
5948 |         "node": ">=4"
5949 |       }
5950 |     },
5951 |     "node_modules/imurmurhash": {
5952 |       "version": "0.1.4",
5953 |       "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
5954 |       "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
5955 |       "license": "MIT",
5956 |       "engines": {
5957 |         "node": ">=0.8.19"
5958 |       }
5959 |     },
5960 |     "node_modules/inflight": {
5961 |       "version": "1.0.6",
5962 |       "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
5963 |       "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
5964 |       "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
5965 |       "license": "ISC",
5966 |       "dependencies": {
5967 |         "once": "^1.3.0",
5968 |         "wrappy": "1"
5969 |       }
5970 |     },
5971 |     "node_modules/inherits": {
5972 |       "version": "2.0.4",
5973 |       "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
5974 |       "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
5975 |       "license": "ISC"
5976 |     },
5977 |     "node_modules/ini": {
5978 |       "version": "1.3.8",
5979 |       "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
5980 |       "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
5981 |       "license": "ISC"
5982 |     },
5983 |     "node_modules/inline-style-prefixer": {
5984 |       "version": "7.0.1",
5985 |       "resolved": "https://registry.npmjs.org/inline-style-prefixer/-/inline-style-prefixer-7.0.1.tgz",
5986 |       "integrity": "sha512-lhYo5qNTQp3EvSSp3sRvXMbVQTLrvGV6DycRMJ5dm2BLMiJ30wpXKdDdgX+GmJZ5uQMucwRKHamXSst3Sj/Giw==",
5987 |       "license": "MIT",
5988 |       "dependencies": {
5989 |         "css-in-js-utils": "^3.1.0"
5990 |       }
5991 |     },
5992 |     "node_modules/invariant": {
5993 |       "version": "2.2.4",
5994 |       "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
5995 |       "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
5996 |       "license": "MIT",
5997 |       "dependencies": {
5998 |         "loose-envify": "^1.0.0"
5999 |       }
6000 |     },
6001 |     "node_modules/is-arrayish": {
6002 |       "version": "0.2.1",
6003 |       "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
6004 |       "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
6005 |       "license": "MIT"
6006 |     },
6007 |     "node_modules/is-core-module": {
6008 |       "version": "2.16.1",
6009 |       "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
6010 |       "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
6011 |       "license": "MIT",
6012 |       "dependencies": {
6013 |         "hasown": "^2.0.2"
6014 |       },
6015 |       "engines": {
6016 |         "node": ">= 0.4"
6017 |       },
6018 |       "funding": {
6019 |         "url": "https://github.com/sponsors/ljharb"
6020 |       }
6021 |     },
6022 |     "node_modules/is-directory": {
6023 |       "version": "0.3.1",
6024 |       "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
6025 |       "integrity": "sha512-yVChGzahRFvbkscn2MlwGismPO12i9+znNruC5gVEntG3qu0xQMzsGg/JFbrsqDOHtHFPci+V5aP5T9I+yeKqw==",
6026 |       "license": "MIT",
6027 |       "engines": {
6028 |         "node": ">=0.10.0"
6029 |       }
6030 |     },
6031 |     "node_modules/is-docker": {
6032 |       "version": "2.2.1",
6033 |       "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
6034 |       "integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==",
6035 |       "license": "MIT",
6036 |       "bin": {
6037 |         "is-docker": "cli.js"
6038 |       },
6039 |       "engines": {
6040 |         "node": ">=8"
6041 |       },
6042 |       "funding": {
6043 |         "url": "https://github.com/sponsors/sindresorhus"
6044 |       }
6045 |     },
6046 |     "node_modules/is-fullwidth-code-point": {
6047 |       "version": "3.0.0",
6048 |       "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
6049 |       "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
6050 |       "license": "MIT",
6051 |       "engines": {
6052 |         "node": ">=8"
6053 |       }
6054 |     },
6055 |     "node_modules/is-number": {
6056 |       "version": "7.0.0",
6057 |       "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
6058 |       "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
6059 |       "license": "MIT",
6060 |       "engines": {
6061 |         "node": ">=0.12.0"
6062 |       }
6063 |     },
6064 |     "node_modules/is-plain-obj": {
6065 |       "version": "2.1.0",
6066 |       "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
6067 |       "integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
6068 |       "license": "MIT",
6069 |       "engines": {
6070 |         "node": ">=8"
6071 |       }
6072 |     },
6073 |     "node_modules/is-wsl": {
6074 |       "version": "2.2.0",
6075 |       "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
6076 |       "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
6077 |       "license": "MIT",
6078 |       "dependencies": {
6079 |         "is-docker": "^2.0.0"
6080 |       },
6081 |       "engines": {
6082 |         "node": ">=8"
6083 |       }
6084 |     },
6085 |     "node_modules/isexe": {
6086 |       "version": "2.0.0",
6087 |       "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
6088 |       "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
6089 |       "license": "ISC"
6090 |     },
6091 |     "node_modules/istanbul-lib-coverage": {
6092 |       "version": "3.2.2",
6093 |       "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.2.tgz",
6094 |       "integrity": "sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==",
6095 |       "license": "BSD-3-Clause",
6096 |       "engines": {
6097 |         "node": ">=8"
6098 |       }
6099 |     },
6100 |     "node_modules/istanbul-lib-instrument": {
6101 |       "version": "5.2.1",
6102 |       "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-5.2.1.tgz",
6103 |       "integrity": "sha512-pzqtp31nLv/XFOzXGuvhCb8qhjmTVo5vjVk19XE4CRlSWz0KoeJ3bw9XsA7nOp9YBf4qHjwBxkDzKcME/J29Yg==",
6104 |       "license": "BSD-3-Clause",
6105 |       "dependencies": {
6106 |         "@babel/core": "^7.12.3",
6107 |         "@babel/parser": "^7.14.7",
6108 |         "@istanbuljs/schema": "^0.1.2",
6109 |         "istanbul-lib-coverage": "^3.2.0",
6110 |         "semver": "^6.3.0"
6111 |       },
6112 |       "engines": {
6113 |         "node": ">=8"
6114 |       }
6115 |     },
6116 |     "node_modules/istanbul-lib-instrument/node_modules/semver": {
6117 |       "version": "6.3.1",
6118 |       "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
6119 |       "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
6120 |       "license": "ISC",
6121 |       "bin": {
6122 |         "semver": "bin/semver.js"
6123 |       }
6124 |     },
6125 |     "node_modules/jackspeak": {
6126 |       "version": "3.4.3",
6127 |       "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
6128 |       "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
6129 |       "license": "BlueOak-1.0.0",
6130 |       "dependencies": {
6131 |         "@isaacs/cliui": "^8.0.2"
6132 |       },
6133 |       "funding": {
6134 |         "url": "https://github.com/sponsors/isaacs"
6135 |       },
6136 |       "optionalDependencies": {
6137 |         "@pkgjs/parseargs": "^0.11.0"
6138 |       }
6139 |     },
6140 |     "node_modules/jest-environment-node": {
6141 |       "version": "29.7.0",
6142 |       "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-29.7.0.tgz",
6143 |       "integrity": "sha512-DOSwCRqXirTOyheM+4d5YZOrWcdu0LNZ87ewUoywbcb2XR4wKgqiG8vNeYwhjFMbEkfju7wx2GYH0P2gevGvFw==",
6144 |       "license": "MIT",
6145 |       "dependencies": {
6146 |         "@jest/environment": "^29.7.0",
6147 |         "@jest/fake-timers": "^29.7.0",
6148 |         "@jest/types": "^29.6.3",
6149 |         "@types/node": "*",
6150 |         "jest-mock": "^29.7.0",
6151 |         "jest-util": "^29.7.0"
6152 |       },
6153 |       "engines": {
6154 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6155 |       }
6156 |     },
6157 |     "node_modules/jest-get-type": {
6158 |       "version": "29.6.3",
6159 |       "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-29.6.3.tgz",
6160 |       "integrity": "sha512-zrteXnqYxfQh7l5FHyL38jL39di8H8rHoecLH3JNxH3BwOrBsNeabdap5e0I23lD4HHI8W5VFBZqG4Eaq5LNcw==",
6161 |       "license": "MIT",
6162 |       "engines": {
6163 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6164 |       }
6165 |     },
6166 |     "node_modules/jest-haste-map": {
6167 |       "version": "29.7.0",
6168 |       "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-29.7.0.tgz",
6169 |       "integrity": "sha512-fP8u2pyfqx0K1rGn1R9pyE0/KTn+G7PxktWidOBTqFPLYX0b9ksaMFkhK5vrS3DVun09pckLdlx90QthlW7AmA==",
6170 |       "license": "MIT",
6171 |       "dependencies": {
6172 |         "@jest/types": "^29.6.3",
6173 |         "@types/graceful-fs": "^4.1.3",
6174 |         "@types/node": "*",
6175 |         "anymatch": "^3.0.3",
6176 |         "fb-watchman": "^2.0.0",
6177 |         "graceful-fs": "^4.2.9",
6178 |         "jest-regex-util": "^29.6.3",
6179 |         "jest-util": "^29.7.0",
6180 |         "jest-worker": "^29.7.0",
6181 |         "micromatch": "^4.0.4",
6182 |         "walker": "^1.0.8"
6183 |       },
6184 |       "engines": {
6185 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6186 |       },
6187 |       "optionalDependencies": {
6188 |         "fsevents": "^2.3.2"
6189 |       }
6190 |     },
6191 |     "node_modules/jest-message-util": {
6192 |       "version": "29.7.0",
6193 |       "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-29.7.0.tgz",
6194 |       "integrity": "sha512-GBEV4GRADeP+qtB2+6u61stea8mGcOT4mCtrYISZwfu9/ISHFJ/5zOMXYbpBE9RsS5+Gb63DW4FgmnKJ79Kf6w==",
6195 |       "license": "MIT",
6196 |       "dependencies": {
6197 |         "@babel/code-frame": "^7.12.13",
6198 |         "@jest/types": "^29.6.3",
6199 |         "@types/stack-utils": "^2.0.0",
6200 |         "chalk": "^4.0.0",
6201 |         "graceful-fs": "^4.2.9",
6202 |         "micromatch": "^4.0.4",
6203 |         "pretty-format": "^29.7.0",
6204 |         "slash": "^3.0.0",
6205 |         "stack-utils": "^2.0.3"
6206 |       },
6207 |       "engines": {
6208 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6209 |       }
6210 |     },
6211 |     "node_modules/jest-message-util/node_modules/@babel/code-frame": {
6212 |       "version": "7.27.1",
6213 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
6214 |       "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
6215 |       "license": "MIT",
6216 |       "dependencies": {
6217 |         "@babel/helper-validator-identifier": "^7.27.1",
6218 |         "js-tokens": "^4.0.0",
6219 |         "picocolors": "^1.1.1"
6220 |       },
6221 |       "engines": {
6222 |         "node": ">=6.9.0"
6223 |       }
6224 |     },
6225 |     "node_modules/jest-message-util/node_modules/ansi-styles": {
6226 |       "version": "4.3.0",
6227 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
6228 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
6229 |       "license": "MIT",
6230 |       "dependencies": {
6231 |         "color-convert": "^2.0.1"
6232 |       },
6233 |       "engines": {
6234 |         "node": ">=8"
6235 |       },
6236 |       "funding": {
6237 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
6238 |       }
6239 |     },
6240 |     "node_modules/jest-message-util/node_modules/chalk": {
6241 |       "version": "4.1.2",
6242 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
6243 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
6244 |       "license": "MIT",
6245 |       "dependencies": {
6246 |         "ansi-styles": "^4.1.0",
6247 |         "supports-color": "^7.1.0"
6248 |       },
6249 |       "engines": {
6250 |         "node": ">=10"
6251 |       },
6252 |       "funding": {
6253 |         "url": "https://github.com/chalk/chalk?sponsor=1"
6254 |       }
6255 |     },
6256 |     "node_modules/jest-message-util/node_modules/color-convert": {
6257 |       "version": "2.0.1",
6258 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
6259 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
6260 |       "license": "MIT",
6261 |       "dependencies": {
6262 |         "color-name": "~1.1.4"
6263 |       },
6264 |       "engines": {
6265 |         "node": ">=7.0.0"
6266 |       }
6267 |     },
6268 |     "node_modules/jest-message-util/node_modules/color-name": {
6269 |       "version": "1.1.4",
6270 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
6271 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
6272 |       "license": "MIT"
6273 |     },
6274 |     "node_modules/jest-message-util/node_modules/has-flag": {
6275 |       "version": "4.0.0",
6276 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
6277 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
6278 |       "license": "MIT",
6279 |       "engines": {
6280 |         "node": ">=8"
6281 |       }
6282 |     },
6283 |     "node_modules/jest-message-util/node_modules/supports-color": {
6284 |       "version": "7.2.0",
6285 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
6286 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
6287 |       "license": "MIT",
6288 |       "dependencies": {
6289 |         "has-flag": "^4.0.0"
6290 |       },
6291 |       "engines": {
6292 |         "node": ">=8"
6293 |       }
6294 |     },
6295 |     "node_modules/jest-mock": {
6296 |       "version": "29.7.0",
6297 |       "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-29.7.0.tgz",
6298 |       "integrity": "sha512-ITOMZn+UkYS4ZFh83xYAOzWStloNzJFO2s8DWrE4lhtGD+AorgnbkiKERe4wQVBydIGPx059g6riW5Btp6Llnw==",
6299 |       "license": "MIT",
6300 |       "dependencies": {
6301 |         "@jest/types": "^29.6.3",
6302 |         "@types/node": "*",
6303 |         "jest-util": "^29.7.0"
6304 |       },
6305 |       "engines": {
6306 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6307 |       }
6308 |     },
6309 |     "node_modules/jest-regex-util": {
6310 |       "version": "29.6.3",
6311 |       "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-29.6.3.tgz",
6312 |       "integrity": "sha512-KJJBsRCyyLNWCNBOvZyRDnAIfUiRJ8v+hOBQYGn8gDyF3UegwiP4gwRR3/SDa42g1YbVycTidUF3rKjyLFDWbg==",
6313 |       "license": "MIT",
6314 |       "engines": {
6315 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6316 |       }
6317 |     },
6318 |     "node_modules/jest-util": {
6319 |       "version": "29.7.0",
6320 |       "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-29.7.0.tgz",
6321 |       "integrity": "sha512-z6EbKajIpqGKU56y5KBUgy1dt1ihhQJgWzUlZHArA/+X2ad7Cb5iF+AK1EWVL/Bo7Rz9uurpqw6SiBCefUbCGA==",
6322 |       "license": "MIT",
6323 |       "dependencies": {
6324 |         "@jest/types": "^29.6.3",
6325 |         "@types/node": "*",
6326 |         "chalk": "^4.0.0",
6327 |         "ci-info": "^3.2.0",
6328 |         "graceful-fs": "^4.2.9",
6329 |         "picomatch": "^2.2.3"
6330 |       },
6331 |       "engines": {
6332 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6333 |       }
6334 |     },
6335 |     "node_modules/jest-util/node_modules/ansi-styles": {
6336 |       "version": "4.3.0",
6337 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
6338 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
6339 |       "license": "MIT",
6340 |       "dependencies": {
6341 |         "color-convert": "^2.0.1"
6342 |       },
6343 |       "engines": {
6344 |         "node": ">=8"
6345 |       },
6346 |       "funding": {
6347 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
6348 |       }
6349 |     },
6350 |     "node_modules/jest-util/node_modules/chalk": {
6351 |       "version": "4.1.2",
6352 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
6353 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
6354 |       "license": "MIT",
6355 |       "dependencies": {
6356 |         "ansi-styles": "^4.1.0",
6357 |         "supports-color": "^7.1.0"
6358 |       },
6359 |       "engines": {
6360 |         "node": ">=10"
6361 |       },
6362 |       "funding": {
6363 |         "url": "https://github.com/chalk/chalk?sponsor=1"
6364 |       }
6365 |     },
6366 |     "node_modules/jest-util/node_modules/ci-info": {
6367 |       "version": "3.9.0",
6368 |       "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-3.9.0.tgz",
6369 |       "integrity": "sha512-NIxF55hv4nSqQswkAeiOi1r83xy8JldOFDTWiug55KBu9Jnblncd2U6ViHmYgHf01TPZS77NJBhBMKdWj9HQMQ==",
6370 |       "funding": [
6371 |         {
6372 |           "type": "github",
6373 |           "url": "https://github.com/sponsors/sibiraj-s"
6374 |         }
6375 |       ],
6376 |       "license": "MIT",
6377 |       "engines": {
6378 |         "node": ">=8"
6379 |       }
6380 |     },
6381 |     "node_modules/jest-util/node_modules/color-convert": {
6382 |       "version": "2.0.1",
6383 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
6384 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
6385 |       "license": "MIT",
6386 |       "dependencies": {
6387 |         "color-name": "~1.1.4"
6388 |       },
6389 |       "engines": {
6390 |         "node": ">=7.0.0"
6391 |       }
6392 |     },
6393 |     "node_modules/jest-util/node_modules/color-name": {
6394 |       "version": "1.1.4",
6395 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
6396 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
6397 |       "license": "MIT"
6398 |     },
6399 |     "node_modules/jest-util/node_modules/has-flag": {
6400 |       "version": "4.0.0",
6401 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
6402 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
6403 |       "license": "MIT",
6404 |       "engines": {
6405 |         "node": ">=8"
6406 |       }
6407 |     },
6408 |     "node_modules/jest-util/node_modules/supports-color": {
6409 |       "version": "7.2.0",
6410 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
6411 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
6412 |       "license": "MIT",
6413 |       "dependencies": {
6414 |         "has-flag": "^4.0.0"
6415 |       },
6416 |       "engines": {
6417 |         "node": ">=8"
6418 |       }
6419 |     },
6420 |     "node_modules/jest-validate": {
6421 |       "version": "29.7.0",
6422 |       "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-29.7.0.tgz",
6423 |       "integrity": "sha512-ZB7wHqaRGVw/9hST/OuFUReG7M8vKeq0/J2egIGLdvjHCmYqGARhzXmtgi+gVeZ5uXFF219aOc3Ls2yLg27tkw==",
6424 |       "license": "MIT",
6425 |       "dependencies": {
6426 |         "@jest/types": "^29.6.3",
6427 |         "camelcase": "^6.2.0",
6428 |         "chalk": "^4.0.0",
6429 |         "jest-get-type": "^29.6.3",
6430 |         "leven": "^3.1.0",
6431 |         "pretty-format": "^29.7.0"
6432 |       },
6433 |       "engines": {
6434 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6435 |       }
6436 |     },
6437 |     "node_modules/jest-validate/node_modules/ansi-styles": {
6438 |       "version": "4.3.0",
6439 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
6440 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
6441 |       "license": "MIT",
6442 |       "dependencies": {
6443 |         "color-convert": "^2.0.1"
6444 |       },
6445 |       "engines": {
6446 |         "node": ">=8"
6447 |       },
6448 |       "funding": {
6449 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
6450 |       }
6451 |     },
6452 |     "node_modules/jest-validate/node_modules/chalk": {
6453 |       "version": "4.1.2",
6454 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
6455 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
6456 |       "license": "MIT",
6457 |       "dependencies": {
6458 |         "ansi-styles": "^4.1.0",
6459 |         "supports-color": "^7.1.0"
6460 |       },
6461 |       "engines": {
6462 |         "node": ">=10"
6463 |       },
6464 |       "funding": {
6465 |         "url": "https://github.com/chalk/chalk?sponsor=1"
6466 |       }
6467 |     },
6468 |     "node_modules/jest-validate/node_modules/color-convert": {
6469 |       "version": "2.0.1",
6470 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
6471 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
6472 |       "license": "MIT",
6473 |       "dependencies": {
6474 |         "color-name": "~1.1.4"
6475 |       },
6476 |       "engines": {
6477 |         "node": ">=7.0.0"
6478 |       }
6479 |     },
6480 |     "node_modules/jest-validate/node_modules/color-name": {
6481 |       "version": "1.1.4",
6482 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
6483 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
6484 |       "license": "MIT"
6485 |     },
6486 |     "node_modules/jest-validate/node_modules/has-flag": {
6487 |       "version": "4.0.0",
6488 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
6489 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
6490 |       "license": "MIT",
6491 |       "engines": {
6492 |         "node": ">=8"
6493 |       }
6494 |     },
6495 |     "node_modules/jest-validate/node_modules/supports-color": {
6496 |       "version": "7.2.0",
6497 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
6498 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
6499 |       "license": "MIT",
6500 |       "dependencies": {
6501 |         "has-flag": "^4.0.0"
6502 |       },
6503 |       "engines": {
6504 |         "node": ">=8"
6505 |       }
6506 |     },
6507 |     "node_modules/jest-worker": {
6508 |       "version": "29.7.0",
6509 |       "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-29.7.0.tgz",
6510 |       "integrity": "sha512-eIz2msL/EzL9UFTFFx7jBTkeZfku0yUAyZZZmJ93H2TYEiroIx2PQjEXcwYtYl8zXCxb+PAmA2hLIt/6ZEkPHw==",
6511 |       "license": "MIT",
6512 |       "dependencies": {
6513 |         "@types/node": "*",
6514 |         "jest-util": "^29.7.0",
6515 |         "merge-stream": "^2.0.0",
6516 |         "supports-color": "^8.0.0"
6517 |       },
6518 |       "engines": {
6519 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
6520 |       }
6521 |     },
6522 |     "node_modules/jest-worker/node_modules/has-flag": {
6523 |       "version": "4.0.0",
6524 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
6525 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
6526 |       "license": "MIT",
6527 |       "engines": {
6528 |         "node": ">=8"
6529 |       }
6530 |     },
6531 |     "node_modules/jest-worker/node_modules/supports-color": {
6532 |       "version": "8.1.1",
6533 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
6534 |       "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
6535 |       "license": "MIT",
6536 |       "dependencies": {
6537 |         "has-flag": "^4.0.0"
6538 |       },
6539 |       "engines": {
6540 |         "node": ">=10"
6541 |       },
6542 |       "funding": {
6543 |         "url": "https://github.com/chalk/supports-color?sponsor=1"
6544 |       }
6545 |     },
6546 |     "node_modules/jimp-compact": {
6547 |       "version": "0.16.1",
6548 |       "resolved": "https://registry.npmjs.org/jimp-compact/-/jimp-compact-0.16.1.tgz",
6549 |       "integrity": "sha512-dZ6Ra7u1G8c4Letq/B5EzAxj4tLFHL+cGtdpR+PVm4yzPDj+lCk+AbivWt1eOM+ikzkowtyV7qSqX6qr3t71Ww==",
6550 |       "license": "MIT"
6551 |     },
6552 |     "node_modules/js-tokens": {
6553 |       "version": "4.0.0",
6554 |       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
6555 |       "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
6556 |       "license": "MIT"
6557 |     },
6558 |     "node_modules/js-yaml": {
6559 |       "version": "3.14.1",
6560 |       "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
6561 |       "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
6562 |       "license": "MIT",
6563 |       "dependencies": {
6564 |         "argparse": "^1.0.7",
6565 |         "esprima": "^4.0.0"
6566 |       },
6567 |       "bin": {
6568 |         "js-yaml": "bin/js-yaml.js"
6569 |       }
6570 |     },
6571 |     "node_modules/jsc-safe-url": {
6572 |       "version": "0.2.4",
6573 |       "resolved": "https://registry.npmjs.org/jsc-safe-url/-/jsc-safe-url-0.2.4.tgz",
6574 |       "integrity": "sha512-0wM3YBWtYePOjfyXQH5MWQ8H7sdk5EXSwZvmSLKk2RboVQ2Bu239jycHDz5J/8Blf3K0Qnoy2b6xD+z10MFB+Q==",
6575 |       "license": "0BSD"
6576 |     },
6577 |     "node_modules/jsesc": {
6578 |       "version": "3.1.0",
6579 |       "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
6580 |       "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
6581 |       "license": "MIT",
6582 |       "bin": {
6583 |         "jsesc": "bin/jsesc"
6584 |       },
6585 |       "engines": {
6586 |         "node": ">=6"
6587 |       }
6588 |     },
6589 |     "node_modules/json-parse-better-errors": {
6590 |       "version": "1.0.2",
6591 |       "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
6592 |       "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
6593 |       "license": "MIT"
6594 |     },
6595 |     "node_modules/json-schema-traverse": {
6596 |       "version": "1.0.0",
6597 |       "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
6598 |       "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
6599 |       "license": "MIT"
6600 |     },
6601 |     "node_modules/json5": {
6602 |       "version": "2.2.3",
6603 |       "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
6604 |       "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
6605 |       "license": "MIT",
6606 |       "bin": {
6607 |         "json5": "lib/cli.js"
6608 |       },
6609 |       "engines": {
6610 |         "node": ">=6"
6611 |       }
6612 |     },
6613 |     "node_modules/kleur": {
6614 |       "version": "3.0.3",
6615 |       "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
6616 |       "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
6617 |       "license": "MIT",
6618 |       "engines": {
6619 |         "node": ">=6"
6620 |       }
6621 |     },
6622 |     "node_modules/lan-network": {
6623 |       "version": "0.1.7",
6624 |       "resolved": "https://registry.npmjs.org/lan-network/-/lan-network-0.1.7.tgz",
6625 |       "integrity": "sha512-mnIlAEMu4OyEvUNdzco9xpuB9YVcPkQec+QsgycBCtPZvEqWPCDPfbAE4OJMdBBWpZWtpCn1xw9jJYlwjWI5zQ==",
6626 |       "license": "MIT",
6627 |       "bin": {
6628 |         "lan-network": "dist/lan-network-cli.js"
6629 |       }
6630 |     },
6631 |     "node_modules/leven": {
6632 |       "version": "3.1.0",
6633 |       "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
6634 |       "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==",
6635 |       "license": "MIT",
6636 |       "engines": {
6637 |         "node": ">=6"
6638 |       }
6639 |     },
6640 |     "node_modules/lighthouse-logger": {
6641 |       "version": "1.4.2",
6642 |       "resolved": "https://registry.npmjs.org/lighthouse-logger/-/lighthouse-logger-1.4.2.tgz",
6643 |       "integrity": "sha512-gPWxznF6TKmUHrOQjlVo2UbaL2EJ71mb2CCeRs/2qBpi4L/g4LUVc9+3lKQ6DTUZwJswfM7ainGrLO1+fOqa2g==",
6644 |       "license": "Apache-2.0",
6645 |       "dependencies": {
6646 |         "debug": "^2.6.9",
6647 |         "marky": "^1.2.2"
6648 |       }
6649 |     },
6650 |     "node_modules/lighthouse-logger/node_modules/debug": {
6651 |       "version": "2.6.9",
6652 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
6653 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
6654 |       "license": "MIT",
6655 |       "dependencies": {
6656 |         "ms": "2.0.0"
6657 |       }
6658 |     },
6659 |     "node_modules/lighthouse-logger/node_modules/ms": {
6660 |       "version": "2.0.0",
6661 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
6662 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
6663 |       "license": "MIT"
6664 |     },
6665 |     "node_modules/lightningcss": {
6666 |       "version": "1.30.1",
6667 |       "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.1.tgz",
6668 |       "integrity": "sha512-xi6IyHML+c9+Q3W0S4fCQJOym42pyurFiJUHEcEyHS0CeKzia4yZDEsLlqOFykxOdHpNy0NmvVO31vcSqAxJCg==",
6669 |       "license": "MPL-2.0",
6670 |       "dependencies": {
6671 |         "detect-libc": "^2.0.3"
6672 |       },
6673 |       "engines": {
6674 |         "node": ">= 12.0.0"
6675 |       },
6676 |       "funding": {
6677 |         "type": "opencollective",
6678 |         "url": "https://opencollective.com/parcel"
6679 |       },
6680 |       "optionalDependencies": {
6681 |         "lightningcss-darwin-arm64": "1.30.1",
6682 |         "lightningcss-darwin-x64": "1.30.1",
6683 |         "lightningcss-freebsd-x64": "1.30.1",
6684 |         "lightningcss-linux-arm-gnueabihf": "1.30.1",
6685 |         "lightningcss-linux-arm64-gnu": "1.30.1",
6686 |         "lightningcss-linux-arm64-musl": "1.30.1",
6687 |         "lightningcss-linux-x64-gnu": "1.30.1",
6688 |         "lightningcss-linux-x64-musl": "1.30.1",
6689 |         "lightningcss-win32-arm64-msvc": "1.30.1",
6690 |         "lightningcss-win32-x64-msvc": "1.30.1"
6691 |       }
6692 |     },
6693 |     "node_modules/lightningcss-darwin-arm64": {
6694 |       "version": "1.30.1",
6695 |       "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.1.tgz",
6696 |       "integrity": "sha512-c8JK7hyE65X1MHMN+Viq9n11RRC7hgin3HhYKhrMyaXflk5GVplZ60IxyoVtzILeKr+xAJwg6zK6sjTBJ0FKYQ==",
6697 |       "cpu": [
6698 |         "arm64"
6699 |       ],
6700 |       "license": "MPL-2.0",
6701 |       "optional": true,
6702 |       "os": [
6703 |         "darwin"
6704 |       ],
6705 |       "engines": {
6706 |         "node": ">= 12.0.0"
6707 |       },
6708 |       "funding": {
6709 |         "type": "opencollective",
6710 |         "url": "https://opencollective.com/parcel"
6711 |       }
6712 |     },
6713 |     "node_modules/lightningcss-darwin-x64": {
6714 |       "version": "1.30.1",
6715 |       "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.1.tgz",
6716 |       "integrity": "sha512-k1EvjakfumAQoTfcXUcHQZhSpLlkAuEkdMBsI/ivWw9hL+7FtilQc0Cy3hrx0AAQrVtQAbMI7YjCgYgvn37PzA==",
6717 |       "cpu": [
6718 |         "x64"
6719 |       ],
6720 |       "license": "MPL-2.0",
6721 |       "optional": true,
6722 |       "os": [
6723 |         "darwin"
6724 |       ],
6725 |       "engines": {
6726 |         "node": ">= 12.0.0"
6727 |       },
6728 |       "funding": {
6729 |         "type": "opencollective",
6730 |         "url": "https://opencollective.com/parcel"
6731 |       }
6732 |     },
6733 |     "node_modules/lightningcss-freebsd-x64": {
6734 |       "version": "1.30.1",
6735 |       "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.1.tgz",
6736 |       "integrity": "sha512-kmW6UGCGg2PcyUE59K5r0kWfKPAVy4SltVeut+umLCFoJ53RdCUWxcRDzO1eTaxf/7Q2H7LTquFHPL5R+Gjyig==",
6737 |       "cpu": [
6738 |         "x64"
6739 |       ],
6740 |       "license": "MPL-2.0",
6741 |       "optional": true,
6742 |       "os": [
6743 |         "freebsd"
6744 |       ],
6745 |       "engines": {
6746 |         "node": ">= 12.0.0"
6747 |       },
6748 |       "funding": {
6749 |         "type": "opencollective",
6750 |         "url": "https://opencollective.com/parcel"
6751 |       }
6752 |     },
6753 |     "node_modules/lightningcss-linux-arm-gnueabihf": {
6754 |       "version": "1.30.1",
6755 |       "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.1.tgz",
6756 |       "integrity": "sha512-MjxUShl1v8pit+6D/zSPq9S9dQ2NPFSQwGvxBCYaBYLPlCWuPh9/t1MRS8iUaR8i+a6w7aps+B4N0S1TYP/R+Q==",
6757 |       "cpu": [
6758 |         "arm"
6759 |       ],
6760 |       "license": "MPL-2.0",
6761 |       "optional": true,
6762 |       "os": [
6763 |         "linux"
6764 |       ],
6765 |       "engines": {
6766 |         "node": ">= 12.0.0"
6767 |       },
6768 |       "funding": {
6769 |         "type": "opencollective",
6770 |         "url": "https://opencollective.com/parcel"
6771 |       }
6772 |     },
6773 |     "node_modules/lightningcss-linux-arm64-gnu": {
6774 |       "version": "1.30.1",
6775 |       "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.1.tgz",
6776 |       "integrity": "sha512-gB72maP8rmrKsnKYy8XUuXi/4OctJiuQjcuqWNlJQ6jZiWqtPvqFziskH3hnajfvKB27ynbVCucKSm2rkQp4Bw==",
6777 |       "cpu": [
6778 |         "arm64"
6779 |       ],
6780 |       "license": "MPL-2.0",
6781 |       "optional": true,
6782 |       "os": [
6783 |         "linux"
6784 |       ],
6785 |       "engines": {
6786 |         "node": ">= 12.0.0"
6787 |       },
6788 |       "funding": {
6789 |         "type": "opencollective",
6790 |         "url": "https://opencollective.com/parcel"
6791 |       }
6792 |     },
6793 |     "node_modules/lightningcss-linux-arm64-musl": {
6794 |       "version": "1.30.1",
6795 |       "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.1.tgz",
6796 |       "integrity": "sha512-jmUQVx4331m6LIX+0wUhBbmMX7TCfjF5FoOH6SD1CttzuYlGNVpA7QnrmLxrsub43ClTINfGSYyHe2HWeLl5CQ==",
6797 |       "cpu": [
6798 |         "arm64"
6799 |       ],
6800 |       "license": "MPL-2.0",
6801 |       "optional": true,
6802 |       "os": [
6803 |         "linux"
6804 |       ],
6805 |       "engines": {
6806 |         "node": ">= 12.0.0"
6807 |       },
6808 |       "funding": {
6809 |         "type": "opencollective",
6810 |         "url": "https://opencollective.com/parcel"
6811 |       }
6812 |     },
6813 |     "node_modules/lightningcss-linux-x64-gnu": {
6814 |       "version": "1.30.1",
6815 |       "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.1.tgz",
6816 |       "integrity": "sha512-piWx3z4wN8J8z3+O5kO74+yr6ze/dKmPnI7vLqfSqI8bccaTGY5xiSGVIJBDd5K5BHlvVLpUB3S2YCfelyJ1bw==",
6817 |       "cpu": [
6818 |         "x64"
6819 |       ],
6820 |       "license": "MPL-2.0",
6821 |       "optional": true,
6822 |       "os": [
6823 |         "linux"
6824 |       ],
6825 |       "engines": {
6826 |         "node": ">= 12.0.0"
6827 |       },
6828 |       "funding": {
6829 |         "type": "opencollective",
6830 |         "url": "https://opencollective.com/parcel"
6831 |       }
6832 |     },
6833 |     "node_modules/lightningcss-linux-x64-musl": {
6834 |       "version": "1.30.1",
6835 |       "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.1.tgz",
6836 |       "integrity": "sha512-rRomAK7eIkL+tHY0YPxbc5Dra2gXlI63HL+v1Pdi1a3sC+tJTcFrHX+E86sulgAXeI7rSzDYhPSeHHjqFhqfeQ==",
6837 |       "cpu": [
6838 |         "x64"
6839 |       ],
6840 |       "license": "MPL-2.0",
6841 |       "optional": true,
6842 |       "os": [
6843 |         "linux"
6844 |       ],
6845 |       "engines": {
6846 |         "node": ">= 12.0.0"
6847 |       },
6848 |       "funding": {
6849 |         "type": "opencollective",
6850 |         "url": "https://opencollective.com/parcel"
6851 |       }
6852 |     },
6853 |     "node_modules/lightningcss-win32-arm64-msvc": {
6854 |       "version": "1.30.1",
6855 |       "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.1.tgz",
6856 |       "integrity": "sha512-mSL4rqPi4iXq5YVqzSsJgMVFENoa4nGTT/GjO2c0Yl9OuQfPsIfncvLrEW6RbbB24WtZ3xP/2CCmI3tNkNV4oA==",
6857 |       "cpu": [
6858 |         "arm64"
6859 |       ],
6860 |       "license": "MPL-2.0",
6861 |       "optional": true,
6862 |       "os": [
6863 |         "win32"
6864 |       ],
6865 |       "engines": {
6866 |         "node": ">= 12.0.0"
6867 |       },
6868 |       "funding": {
6869 |         "type": "opencollective",
6870 |         "url": "https://opencollective.com/parcel"
6871 |       }
6872 |     },
6873 |     "node_modules/lightningcss-win32-x64-msvc": {
6874 |       "version": "1.30.1",
6875 |       "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.1.tgz",
6876 |       "integrity": "sha512-PVqXh48wh4T53F/1CCu8PIPCxLzWyCnn/9T5W1Jpmdy5h9Cwd+0YQS6/LwhHXSafuc61/xg9Lv5OrCby6a++jg==",
6877 |       "cpu": [
6878 |         "x64"
6879 |       ],
6880 |       "license": "MPL-2.0",
6881 |       "optional": true,
6882 |       "os": [
6883 |         "win32"
6884 |       ],
6885 |       "engines": {
6886 |         "node": ">= 12.0.0"
6887 |       },
6888 |       "funding": {
6889 |         "type": "opencollective",
6890 |         "url": "https://opencollective.com/parcel"
6891 |       }
6892 |     },
6893 |     "node_modules/lines-and-columns": {
6894 |       "version": "1.2.4",
6895 |       "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
6896 |       "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
6897 |       "license": "MIT"
6898 |     },
6899 |     "node_modules/locate-path": {
6900 |       "version": "5.0.0",
6901 |       "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
6902 |       "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
6903 |       "license": "MIT",
6904 |       "dependencies": {
6905 |         "p-locate": "^4.1.0"
6906 |       },
6907 |       "engines": {
6908 |         "node": ">=8"
6909 |       }
6910 |     },
6911 |     "node_modules/lodash.debounce": {
6912 |       "version": "4.0.8",
6913 |       "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
6914 |       "integrity": "sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow==",
6915 |       "license": "MIT"
6916 |     },
6917 |     "node_modules/lodash.throttle": {
6918 |       "version": "4.1.1",
6919 |       "resolved": "https://registry.npmjs.org/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
6920 |       "integrity": "sha512-wIkUCfVKpVsWo3JSZlc+8MB5it+2AN5W8J7YVMST30UrvcQNZ1Okbj+rbVniijTWE6FGYy4XJq/rHkas8qJMLQ==",
6921 |       "license": "MIT"
6922 |     },
6923 |     "node_modules/log-symbols": {
6924 |       "version": "2.2.0",
6925 |       "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
6926 |       "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
6927 |       "license": "MIT",
6928 |       "dependencies": {
6929 |         "chalk": "^2.0.1"
6930 |       },
6931 |       "engines": {
6932 |         "node": ">=4"
6933 |       }
6934 |     },
6935 |     "node_modules/loose-envify": {
6936 |       "version": "1.4.0",
6937 |       "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
6938 |       "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
6939 |       "license": "MIT",
6940 |       "dependencies": {
6941 |         "js-tokens": "^3.0.0 || ^4.0.0"
6942 |       },
6943 |       "bin": {
6944 |         "loose-envify": "cli.js"
6945 |       }
6946 |     },
6947 |     "node_modules/lru-cache": {
6948 |       "version": "5.1.1",
6949 |       "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
6950 |       "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
6951 |       "license": "ISC",
6952 |       "dependencies": {
6953 |         "yallist": "^3.0.2"
6954 |       }
6955 |     },
6956 |     "node_modules/makeerror": {
6957 |       "version": "1.0.12",
6958 |       "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.12.tgz",
6959 |       "integrity": "sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==",
6960 |       "license": "BSD-3-Clause",
6961 |       "dependencies": {
6962 |         "tmpl": "1.0.5"
6963 |       }
6964 |     },
6965 |     "node_modules/marky": {
6966 |       "version": "1.3.0",
6967 |       "resolved": "https://registry.npmjs.org/marky/-/marky-1.3.0.tgz",
6968 |       "integrity": "sha512-ocnPZQLNpvbedwTy9kNrQEsknEfgvcLMvOtz3sFeWApDq1MXH1TqkCIx58xlpESsfwQOnuBO9beyQuNGzVvuhQ==",
6969 |       "license": "Apache-2.0"
6970 |     },
6971 |     "node_modules/memoize-one": {
6972 |       "version": "5.2.1",
6973 |       "resolved": "https://registry.npmjs.org/memoize-one/-/memoize-one-5.2.1.tgz",
6974 |       "integrity": "sha512-zYiwtZUcYyXKo/np96AGZAckk+FWWsUdJ3cHGGmld7+AhvcWmQyGCYUh1hc4Q/pkOhb65dQR/pqCyK0cOaHz4Q==",
6975 |       "license": "MIT"
6976 |     },
6977 |     "node_modules/merge-options": {
6978 |       "version": "3.0.4",
6979 |       "resolved": "https://registry.npmjs.org/merge-options/-/merge-options-3.0.4.tgz",
6980 |       "integrity": "sha512-2Sug1+knBjkaMsMgf1ctR1Ujx+Ayku4EdJN4Z+C2+JzoeF7A3OZ9KM2GY0CpQS51NR61LTurMJrRKPhSs3ZRTQ==",
6981 |       "license": "MIT",
6982 |       "dependencies": {
6983 |         "is-plain-obj": "^2.1.0"
6984 |       },
6985 |       "engines": {
6986 |         "node": ">=10"
6987 |       }
6988 |     },
6989 |     "node_modules/merge-stream": {
6990 |       "version": "2.0.0",
6991 |       "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
6992 |       "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
6993 |       "license": "MIT"
6994 |     },
6995 |     "node_modules/metro": {
6996 |       "version": "0.83.1",
6997 |       "resolved": "https://registry.npmjs.org/metro/-/metro-0.83.1.tgz",
6998 |       "integrity": "sha512-UGKepmTxoGD4HkQV8YWvpvwef7fUujNtTgG4Ygf7m/M0qjvb9VuDmAsEU+UdriRX7F61pnVK/opz89hjKlYTXA==",
6999 |       "license": "MIT",
7000 |       "dependencies": {
7001 |         "@babel/code-frame": "^7.24.7",
7002 |         "@babel/core": "^7.25.2",
7003 |         "@babel/generator": "^7.25.0",
7004 |         "@babel/parser": "^7.25.3",
7005 |         "@babel/template": "^7.25.0",
7006 |         "@babel/traverse": "^7.25.3",
7007 |         "@babel/types": "^7.25.2",
7008 |         "accepts": "^1.3.7",
7009 |         "chalk": "^4.0.0",
7010 |         "ci-info": "^2.0.0",
7011 |         "connect": "^3.6.5",
7012 |         "debug": "^4.4.0",
7013 |         "error-stack-parser": "^2.0.6",
7014 |         "flow-enums-runtime": "^0.0.6",
7015 |         "graceful-fs": "^4.2.4",
7016 |         "hermes-parser": "0.29.1",
7017 |         "image-size": "^1.0.2",
7018 |         "invariant": "^2.2.4",
7019 |         "jest-worker": "^29.7.0",
7020 |         "jsc-safe-url": "^0.2.2",
7021 |         "lodash.throttle": "^4.1.1",
7022 |         "metro-babel-transformer": "0.83.1",
7023 |         "metro-cache": "0.83.1",
7024 |         "metro-cache-key": "0.83.1",
7025 |         "metro-config": "0.83.1",
7026 |         "metro-core": "0.83.1",
7027 |         "metro-file-map": "0.83.1",
7028 |         "metro-resolver": "0.83.1",
7029 |         "metro-runtime": "0.83.1",
7030 |         "metro-source-map": "0.83.1",
7031 |         "metro-symbolicate": "0.83.1",
7032 |         "metro-transform-plugins": "0.83.1",
7033 |         "metro-transform-worker": "0.83.1",
7034 |         "mime-types": "^2.1.27",
7035 |         "nullthrows": "^1.1.1",
7036 |         "serialize-error": "^2.1.0",
7037 |         "source-map": "^0.5.6",
7038 |         "throat": "^5.0.0",
7039 |         "ws": "^7.5.10",
7040 |         "yargs": "^17.6.2"
7041 |       },
7042 |       "bin": {
7043 |         "metro": "src/cli.js"
7044 |       },
7045 |       "engines": {
7046 |         "node": ">=20.19.4"
7047 |       }
7048 |     },
7049 |     "node_modules/metro-babel-transformer": {
7050 |       "version": "0.83.1",
7051 |       "resolved": "https://registry.npmjs.org/metro-babel-transformer/-/metro-babel-transformer-0.83.1.tgz",
7052 |       "integrity": "sha512-r3xAD3964E8dwDBaZNSO2aIIvWXjIK80uO2xo0/pi3WI8XWT9h5SCjtGWtMtE5PRWw+t20TN0q1WMRsjvhC1rQ==",
7053 |       "license": "MIT",
7054 |       "dependencies": {
7055 |         "@babel/core": "^7.25.2",
7056 |         "flow-enums-runtime": "^0.0.6",
7057 |         "hermes-parser": "0.29.1",
7058 |         "nullthrows": "^1.1.1"
7059 |       },
7060 |       "engines": {
7061 |         "node": ">=20.19.4"
7062 |       }
7063 |     },
7064 |     "node_modules/metro-cache": {
7065 |       "version": "0.83.1",
7066 |       "resolved": "https://registry.npmjs.org/metro-cache/-/metro-cache-0.83.1.tgz",
7067 |       "integrity": "sha512-7N/Ad1PHa1YMWDNiyynTPq34Op2qIE68NWryGEQ4TSE3Zy6a8GpsYnEEZE4Qi6aHgsE+yZHKkRczeBgxhnFIxQ==",
7068 |       "license": "MIT",
7069 |       "dependencies": {
7070 |         "exponential-backoff": "^3.1.1",
7071 |         "flow-enums-runtime": "^0.0.6",
7072 |         "https-proxy-agent": "^7.0.5",
7073 |         "metro-core": "0.83.1"
7074 |       },
7075 |       "engines": {
7076 |         "node": ">=20.19.4"
7077 |       }
7078 |     },
7079 |     "node_modules/metro-cache-key": {
7080 |       "version": "0.83.1",
7081 |       "resolved": "https://registry.npmjs.org/metro-cache-key/-/metro-cache-key-0.83.1.tgz",
7082 |       "integrity": "sha512-ZUs+GD5CNeDLxx5UUWmfg26IL+Dnbryd+TLqTlZnDEgehkIa11kUSvgF92OFfJhONeXzV4rZDRGNXoo6JT+8Gg==",
7083 |       "license": "MIT",
7084 |       "dependencies": {
7085 |         "flow-enums-runtime": "^0.0.6"
7086 |       },
7087 |       "engines": {
7088 |         "node": ">=20.19.4"
7089 |       }
7090 |     },
7091 |     "node_modules/metro-config": {
7092 |       "version": "0.83.1",
7093 |       "resolved": "https://registry.npmjs.org/metro-config/-/metro-config-0.83.1.tgz",
7094 |       "integrity": "sha512-HJhpZx3wyOkux/jeF1o7akFJzZFdbn6Zf7UQqWrvp7gqFqNulQ8Mju09raBgPmmSxKDl4LbbNeigkX0/nKY1QA==",
7095 |       "license": "MIT",
7096 |       "dependencies": {
7097 |         "connect": "^3.6.5",
7098 |         "cosmiconfig": "^5.0.5",
7099 |         "flow-enums-runtime": "^0.0.6",
7100 |         "jest-validate": "^29.7.0",
7101 |         "metro": "0.83.1",
7102 |         "metro-cache": "0.83.1",
7103 |         "metro-core": "0.83.1",
7104 |         "metro-runtime": "0.83.1"
7105 |       },
7106 |       "engines": {
7107 |         "node": ">=20.19.4"
7108 |       }
7109 |     },
7110 |     "node_modules/metro-core": {
7111 |       "version": "0.83.1",
7112 |       "resolved": "https://registry.npmjs.org/metro-core/-/metro-core-0.83.1.tgz",
7113 |       "integrity": "sha512-uVL1eAJcMFd2o2Q7dsbpg8COaxjZBBGaXqO2OHnivpCdfanraVL8dPmY6It9ZeqWLOihUKZ2yHW4b6soVCzH/Q==",
7114 |       "license": "MIT",
7115 |       "dependencies": {
7116 |         "flow-enums-runtime": "^0.0.6",
7117 |         "lodash.throttle": "^4.1.1",
7118 |         "metro-resolver": "0.83.1"
7119 |       },
7120 |       "engines": {
7121 |         "node": ">=20.19.4"
7122 |       }
7123 |     },
7124 |     "node_modules/metro-file-map": {
7125 |       "version": "0.83.1",
7126 |       "resolved": "https://registry.npmjs.org/metro-file-map/-/metro-file-map-0.83.1.tgz",
7127 |       "integrity": "sha512-Yu429lnexKl44PttKw3nhqgmpBR+6UQ/tRaYcxPeEShtcza9DWakCn7cjqDTQZtWR2A8xSNv139izJMyQ4CG+w==",
7128 |       "license": "MIT",
7129 |       "dependencies": {
7130 |         "debug": "^4.4.0",
7131 |         "fb-watchman": "^2.0.0",
7132 |         "flow-enums-runtime": "^0.0.6",
7133 |         "graceful-fs": "^4.2.4",
7134 |         "invariant": "^2.2.4",
7135 |         "jest-worker": "^29.7.0",
7136 |         "micromatch": "^4.0.4",
7137 |         "nullthrows": "^1.1.1",
7138 |         "walker": "^1.0.7"
7139 |       },
7140 |       "engines": {
7141 |         "node": ">=20.19.4"
7142 |       }
7143 |     },
7144 |     "node_modules/metro-minify-terser": {
7145 |       "version": "0.83.1",
7146 |       "resolved": "https://registry.npmjs.org/metro-minify-terser/-/metro-minify-terser-0.83.1.tgz",
7147 |       "integrity": "sha512-kmooOxXLvKVxkh80IVSYO4weBdJDhCpg5NSPkjzzAnPJP43u6+usGXobkTWxxrAlq900bhzqKek4pBsUchlX6A==",
7148 |       "license": "MIT",
7149 |       "dependencies": {
7150 |         "flow-enums-runtime": "^0.0.6",
7151 |         "terser": "^5.15.0"
7152 |       },
7153 |       "engines": {
7154 |         "node": ">=20.19.4"
7155 |       }
7156 |     },
7157 |     "node_modules/metro-resolver": {
7158 |       "version": "0.83.1",
7159 |       "resolved": "https://registry.npmjs.org/metro-resolver/-/metro-resolver-0.83.1.tgz",
7160 |       "integrity": "sha512-t8j46kiILAqqFS5RNa+xpQyVjULxRxlvMidqUswPEk5nQVNdlJslqizDm/Et3v/JKwOtQGkYAQCHxP1zGStR/g==",
7161 |       "license": "MIT",
7162 |       "dependencies": {
7163 |         "flow-enums-runtime": "^0.0.6"
7164 |       },
7165 |       "engines": {
7166 |         "node": ">=20.19.4"
7167 |       }
7168 |     },
7169 |     "node_modules/metro-runtime": {
7170 |       "version": "0.83.1",
7171 |       "resolved": "https://registry.npmjs.org/metro-runtime/-/metro-runtime-0.83.1.tgz",
7172 |       "integrity": "sha512-3Ag8ZS4IwafL/JUKlaeM6/CbkooY+WcVeqdNlBG0m4S0Qz0om3rdFdy1y6fYBpl6AwXJwWeMuXrvZdMuByTcRA==",
7173 |       "license": "MIT",
7174 |       "dependencies": {
7175 |         "@babel/runtime": "^7.25.0",
7176 |         "flow-enums-runtime": "^0.0.6"
7177 |       },
7178 |       "engines": {
7179 |         "node": ">=20.19.4"
7180 |       }
7181 |     },
7182 |     "node_modules/metro-source-map": {
7183 |       "version": "0.83.1",
7184 |       "resolved": "https://registry.npmjs.org/metro-source-map/-/metro-source-map-0.83.1.tgz",
7185 |       "integrity": "sha512-De7Vbeo96fFZ2cqmI0fWwVJbtHIwPZv++LYlWSwzTiCzxBDJORncN0LcT48Vi2UlQLzXJg+/CuTAcy7NBVh69A==",
7186 |       "license": "MIT",
7187 |       "dependencies": {
7188 |         "@babel/traverse": "^7.25.3",
7189 |         "@babel/traverse--for-generate-function-map": "npm:@babel/traverse@^7.25.3",
7190 |         "@babel/types": "^7.25.2",
7191 |         "flow-enums-runtime": "^0.0.6",
7192 |         "invariant": "^2.2.4",
7193 |         "metro-symbolicate": "0.83.1",
7194 |         "nullthrows": "^1.1.1",
7195 |         "ob1": "0.83.1",
7196 |         "source-map": "^0.5.6",
7197 |         "vlq": "^1.0.0"
7198 |       },
7199 |       "engines": {
7200 |         "node": ">=20.19.4"
7201 |       }
7202 |     },
7203 |     "node_modules/metro-symbolicate": {
7204 |       "version": "0.83.1",
7205 |       "resolved": "https://registry.npmjs.org/metro-symbolicate/-/metro-symbolicate-0.83.1.tgz",
7206 |       "integrity": "sha512-wPxYkONlq/Sv8Ji7vHEx5OzFouXAMQJjpcPW41ySKMLP/Ir18SsiJK2h4YkdKpYrTS1+0xf8oqF6nxCsT3uWtg==",
7207 |       "license": "MIT",
7208 |       "dependencies": {
7209 |         "flow-enums-runtime": "^0.0.6",
7210 |         "invariant": "^2.2.4",
7211 |         "metro-source-map": "0.83.1",
7212 |         "nullthrows": "^1.1.1",
7213 |         "source-map": "^0.5.6",
7214 |         "vlq": "^1.0.0"
7215 |       },
7216 |       "bin": {
7217 |         "metro-symbolicate": "src/index.js"
7218 |       },
7219 |       "engines": {
7220 |         "node": ">=20.19.4"
7221 |       }
7222 |     },
7223 |     "node_modules/metro-transform-plugins": {
7224 |       "version": "0.83.1",
7225 |       "resolved": "https://registry.npmjs.org/metro-transform-plugins/-/metro-transform-plugins-0.83.1.tgz",
7226 |       "integrity": "sha512-1Y+I8oozXwhuS0qwC+ezaHXBf0jXW4oeYn4X39XWbZt9X2HfjodqY9bH9r6RUTsoiK7S4j8Ni2C91bUC+sktJQ==",
7227 |       "license": "MIT",
7228 |       "dependencies": {
7229 |         "@babel/core": "^7.25.2",
7230 |         "@babel/generator": "^7.25.0",
7231 |         "@babel/template": "^7.25.0",
7232 |         "@babel/traverse": "^7.25.3",
7233 |         "flow-enums-runtime": "^0.0.6",
7234 |         "nullthrows": "^1.1.1"
7235 |       },
7236 |       "engines": {
7237 |         "node": ">=20.19.4"
7238 |       }
7239 |     },
7240 |     "node_modules/metro-transform-worker": {
7241 |       "version": "0.83.1",
7242 |       "resolved": "https://registry.npmjs.org/metro-transform-worker/-/metro-transform-worker-0.83.1.tgz",
7243 |       "integrity": "sha512-owCrhPyUxdLgXEEEAL2b14GWTPZ2zYuab1VQXcfEy0sJE71iciD7fuMcrngoufh7e7UHDZ56q4ktXg8wgiYA1Q==",
7244 |       "license": "MIT",
7245 |       "dependencies": {
7246 |         "@babel/core": "^7.25.2",
7247 |         "@babel/generator": "^7.25.0",
7248 |         "@babel/parser": "^7.25.3",
7249 |         "@babel/types": "^7.25.2",
7250 |         "flow-enums-runtime": "^0.0.6",
7251 |         "metro": "0.83.1",
7252 |         "metro-babel-transformer": "0.83.1",
7253 |         "metro-cache": "0.83.1",
7254 |         "metro-cache-key": "0.83.1",
7255 |         "metro-minify-terser": "0.83.1",
7256 |         "metro-source-map": "0.83.1",
7257 |         "metro-transform-plugins": "0.83.1",
7258 |         "nullthrows": "^1.1.1"
7259 |       },
7260 |       "engines": {
7261 |         "node": ">=20.19.4"
7262 |       }
7263 |     },
7264 |     "node_modules/metro/node_modules/@babel/code-frame": {
7265 |       "version": "7.27.1",
7266 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
7267 |       "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
7268 |       "license": "MIT",
7269 |       "dependencies": {
7270 |         "@babel/helper-validator-identifier": "^7.27.1",
7271 |         "js-tokens": "^4.0.0",
7272 |         "picocolors": "^1.1.1"
7273 |       },
7274 |       "engines": {
7275 |         "node": ">=6.9.0"
7276 |       }
7277 |     },
7278 |     "node_modules/metro/node_modules/ansi-styles": {
7279 |       "version": "4.3.0",
7280 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
7281 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
7282 |       "license": "MIT",
7283 |       "dependencies": {
7284 |         "color-convert": "^2.0.1"
7285 |       },
7286 |       "engines": {
7287 |         "node": ">=8"
7288 |       },
7289 |       "funding": {
7290 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
7291 |       }
7292 |     },
7293 |     "node_modules/metro/node_modules/chalk": {
7294 |       "version": "4.1.2",
7295 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
7296 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
7297 |       "license": "MIT",
7298 |       "dependencies": {
7299 |         "ansi-styles": "^4.1.0",
7300 |         "supports-color": "^7.1.0"
7301 |       },
7302 |       "engines": {
7303 |         "node": ">=10"
7304 |       },
7305 |       "funding": {
7306 |         "url": "https://github.com/chalk/chalk?sponsor=1"
7307 |       }
7308 |     },
7309 |     "node_modules/metro/node_modules/color-convert": {
7310 |       "version": "2.0.1",
7311 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
7312 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
7313 |       "license": "MIT",
7314 |       "dependencies": {
7315 |         "color-name": "~1.1.4"
7316 |       },
7317 |       "engines": {
7318 |         "node": ">=7.0.0"
7319 |       }
7320 |     },
7321 |     "node_modules/metro/node_modules/color-name": {
7322 |       "version": "1.1.4",
7323 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
7324 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
7325 |       "license": "MIT"
7326 |     },
7327 |     "node_modules/metro/node_modules/has-flag": {
7328 |       "version": "4.0.0",
7329 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
7330 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
7331 |       "license": "MIT",
7332 |       "engines": {
7333 |         "node": ">=8"
7334 |       }
7335 |     },
7336 |     "node_modules/metro/node_modules/supports-color": {
7337 |       "version": "7.2.0",
7338 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
7339 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
7340 |       "license": "MIT",
7341 |       "dependencies": {
7342 |         "has-flag": "^4.0.0"
7343 |       },
7344 |       "engines": {
7345 |         "node": ">=8"
7346 |       }
7347 |     },
7348 |     "node_modules/micromatch": {
7349 |       "version": "4.0.8",
7350 |       "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
7351 |       "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
7352 |       "license": "MIT",
7353 |       "dependencies": {
7354 |         "braces": "^3.0.3",
7355 |         "picomatch": "^2.3.1"
7356 |       },
7357 |       "engines": {
7358 |         "node": ">=8.6"
7359 |       }
7360 |     },
7361 |     "node_modules/mime": {
7362 |       "version": "1.6.0",
7363 |       "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
7364 |       "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
7365 |       "license": "MIT",
7366 |       "bin": {
7367 |         "mime": "cli.js"
7368 |       },
7369 |       "engines": {
7370 |         "node": ">=4"
7371 |       }
7372 |     },
7373 |     "node_modules/mime-db": {
7374 |       "version": "1.52.0",
7375 |       "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
7376 |       "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
7377 |       "license": "MIT",
7378 |       "engines": {
7379 |         "node": ">= 0.6"
7380 |       }
7381 |     },
7382 |     "node_modules/mime-types": {
7383 |       "version": "2.1.35",
7384 |       "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
7385 |       "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
7386 |       "license": "MIT",
7387 |       "dependencies": {
7388 |         "mime-db": "1.52.0"
7389 |       },
7390 |       "engines": {
7391 |         "node": ">= 0.6"
7392 |       }
7393 |     },
7394 |     "node_modules/mimic-fn": {
7395 |       "version": "1.2.0",
7396 |       "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
7397 |       "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
7398 |       "license": "MIT",
7399 |       "engines": {
7400 |         "node": ">=4"
7401 |       }
7402 |     },
7403 |     "node_modules/minimatch": {
7404 |       "version": "9.0.5",
7405 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
7406 |       "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
7407 |       "license": "ISC",
7408 |       "dependencies": {
7409 |         "brace-expansion": "^2.0.1"
7410 |       },
7411 |       "engines": {
7412 |         "node": ">=16 || 14 >=14.17"
7413 |       },
7414 |       "funding": {
7415 |         "url": "https://github.com/sponsors/isaacs"
7416 |       }
7417 |     },
7418 |     "node_modules/minimist": {
7419 |       "version": "1.2.8",
7420 |       "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
7421 |       "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
7422 |       "license": "MIT",
7423 |       "funding": {
7424 |         "url": "https://github.com/sponsors/ljharb"
7425 |       }
7426 |     },
7427 |     "node_modules/minipass": {
7428 |       "version": "7.1.2",
7429 |       "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
7430 |       "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
7431 |       "license": "ISC",
7432 |       "engines": {
7433 |         "node": ">=16 || 14 >=14.17"
7434 |       }
7435 |     },
7436 |     "node_modules/minizlib": {
7437 |       "version": "3.0.2",
7438 |       "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-3.0.2.tgz",
7439 |       "integrity": "sha512-oG62iEk+CYt5Xj2YqI5Xi9xWUeZhDI8jjQmC5oThVH5JGCTgIjr7ciJDzC7MBzYd//WvR1OTmP5Q38Q8ShQtVA==",
7440 |       "license": "MIT",
7441 |       "dependencies": {
7442 |         "minipass": "^7.1.2"
7443 |       },
7444 |       "engines": {
7445 |         "node": ">= 18"
7446 |       }
7447 |     },
7448 |     "node_modules/mkdirp": {
7449 |       "version": "1.0.4",
7450 |       "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
7451 |       "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
7452 |       "license": "MIT",
7453 |       "bin": {
7454 |         "mkdirp": "bin/cmd.js"
7455 |       },
7456 |       "engines": {
7457 |         "node": ">=10"
7458 |       }
7459 |     },
7460 |     "node_modules/ms": {
7461 |       "version": "2.1.3",
7462 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
7463 |       "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
7464 |       "license": "MIT"
7465 |     },
7466 |     "node_modules/mz": {
7467 |       "version": "2.7.0",
7468 |       "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
7469 |       "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
7470 |       "license": "MIT",
7471 |       "dependencies": {
7472 |         "any-promise": "^1.0.0",
7473 |         "object-assign": "^4.0.1",
7474 |         "thenify-all": "^1.0.0"
7475 |       }
7476 |     },
7477 |     "node_modules/nanoid": {
7478 |       "version": "3.3.11",
7479 |       "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
7480 |       "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
7481 |       "funding": [
7482 |         {
7483 |           "type": "github",
7484 |           "url": "https://github.com/sponsors/ai"
7485 |         }
7486 |       ],
7487 |       "license": "MIT",
7488 |       "bin": {
7489 |         "nanoid": "bin/nanoid.cjs"
7490 |       },
7491 |       "engines": {
7492 |         "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
7493 |       }
7494 |     },
7495 |     "node_modules/negotiator": {
7496 |       "version": "0.6.3",
7497 |       "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
7498 |       "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
7499 |       "license": "MIT",
7500 |       "engines": {
7501 |         "node": ">= 0.6"
7502 |       }
7503 |     },
7504 |     "node_modules/nested-error-stacks": {
7505 |       "version": "2.0.1",
7506 |       "resolved": "https://registry.npmjs.org/nested-error-stacks/-/nested-error-stacks-2.0.1.tgz",
7507 |       "integrity": "sha512-SrQrok4CATudVzBS7coSz26QRSmlK9TzzoFbeKfcPBUFPjcQM9Rqvr/DlJkOrwI/0KcgvMub1n1g5Jt9EgRn4A==",
7508 |       "license": "MIT"
7509 |     },
7510 |     "node_modules/node-fetch": {
7511 |       "version": "2.7.0",
7512 |       "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
7513 |       "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
7514 |       "license": "MIT",
7515 |       "dependencies": {
7516 |         "whatwg-url": "^5.0.0"
7517 |       },
7518 |       "engines": {
7519 |         "node": "4.x || >=6.0.0"
7520 |       },
7521 |       "peerDependencies": {
7522 |         "encoding": "^0.1.0"
7523 |       },
7524 |       "peerDependenciesMeta": {
7525 |         "encoding": {
7526 |           "optional": true
7527 |         }
7528 |       }
7529 |     },
7530 |     "node_modules/node-forge": {
7531 |       "version": "1.3.1",
7532 |       "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-1.3.1.tgz",
7533 |       "integrity": "sha512-dPEtOeMvF9VMcYV/1Wb8CPoVAXtp6MKMlcbAt4ddqmGqUJ6fQZFXkNZNkNlfevtNkGtaSoXf/vNNNSvgrdXwtA==",
7534 |       "license": "(BSD-3-Clause OR GPL-2.0)",
7535 |       "engines": {
7536 |         "node": ">= 6.13.0"
7537 |       }
7538 |     },
7539 |     "node_modules/node-int64": {
7540 |       "version": "0.4.0",
7541 |       "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
7542 |       "integrity": "sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw==",
7543 |       "license": "MIT"
7544 |     },
7545 |     "node_modules/node-releases": {
7546 |       "version": "2.0.21",
7547 |       "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.21.tgz",
7548 |       "integrity": "sha512-5b0pgg78U3hwXkCM8Z9b2FJdPZlr9Psr9V2gQPESdGHqbntyFJKFW4r5TeWGFzafGY3hzs1JC62VEQMbl1JFkw==",
7549 |       "license": "MIT"
7550 |     },
7551 |     "node_modules/normalize-path": {
7552 |       "version": "3.0.0",
7553 |       "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
7554 |       "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
7555 |       "license": "MIT",
7556 |       "engines": {
7557 |         "node": ">=0.10.0"
7558 |       }
7559 |     },
7560 |     "node_modules/npm-package-arg": {
7561 |       "version": "11.0.3",
7562 |       "resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-11.0.3.tgz",
7563 |       "integrity": "sha512-sHGJy8sOC1YraBywpzQlIKBE4pBbGbiF95U6Auspzyem956E0+FtDtsx1ZxlOJkQCZ1AFXAY/yuvtFYrOxF+Bw==",
7564 |       "license": "ISC",
7565 |       "dependencies": {
7566 |         "hosted-git-info": "^7.0.0",
7567 |         "proc-log": "^4.0.0",
7568 |         "semver": "^7.3.5",
7569 |         "validate-npm-package-name": "^5.0.0"
7570 |       },
7571 |       "engines": {
7572 |         "node": "^16.14.0 || >=18.0.0"
7573 |       }
7574 |     },
7575 |     "node_modules/nullthrows": {
7576 |       "version": "1.1.1",
7577 |       "resolved": "https://registry.npmjs.org/nullthrows/-/nullthrows-1.1.1.tgz",
7578 |       "integrity": "sha512-2vPPEi+Z7WqML2jZYddDIfy5Dqb0r2fze2zTxNNknZaFpVHU3mFB3R+DWeJWGVx0ecvttSGlJTI+WG+8Z4cDWw==",
7579 |       "license": "MIT"
7580 |     },
7581 |     "node_modules/ob1": {
7582 |       "version": "0.83.1",
7583 |       "resolved": "https://registry.npmjs.org/ob1/-/ob1-0.83.1.tgz",
7584 |       "integrity": "sha512-ngwqewtdUzFyycomdbdIhFLjePPSOt1awKMUXQ0L7iLHgWEPF3DsCerblzjzfAUHaXuvE9ccJymWQ/4PNNqvnQ==",
7585 |       "license": "MIT",
7586 |       "dependencies": {
7587 |         "flow-enums-runtime": "^0.0.6"
7588 |       },
7589 |       "engines": {
7590 |         "node": ">=20.19.4"
7591 |       }
7592 |     },
7593 |     "node_modules/object-assign": {
7594 |       "version": "4.1.1",
7595 |       "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
7596 |       "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
7597 |       "license": "MIT",
7598 |       "engines": {
7599 |         "node": ">=0.10.0"
7600 |       }
7601 |     },
7602 |     "node_modules/on-finished": {
7603 |       "version": "2.3.0",
7604 |       "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
7605 |       "integrity": "sha512-ikqdkGAAyf/X/gPhXGvfgAytDZtDbr+bkNUJ0N9h5MI/dmdgCs3l6hoHrcUv41sRKew3jIwrp4qQDXiK99Utww==",
7606 |       "license": "MIT",
7607 |       "dependencies": {
7608 |         "ee-first": "1.1.1"
7609 |       },
7610 |       "engines": {
7611 |         "node": ">= 0.8"
7612 |       }
7613 |     },
7614 |     "node_modules/on-headers": {
7615 |       "version": "1.1.0",
7616 |       "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.1.0.tgz",
7617 |       "integrity": "sha512-737ZY3yNnXy37FHkQxPzt4UZ2UWPWiCZWLvFZ4fu5cueciegX0zGPnrlY6bwRg4FdQOe9YU8MkmJwGhoMybl8A==",
7618 |       "license": "MIT",
7619 |       "engines": {
7620 |         "node": ">= 0.8"
7621 |       }
7622 |     },
7623 |     "node_modules/once": {
7624 |       "version": "1.4.0",
7625 |       "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
7626 |       "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
7627 |       "license": "ISC",
7628 |       "dependencies": {
7629 |         "wrappy": "1"
7630 |       }
7631 |     },
7632 |     "node_modules/onetime": {
7633 |       "version": "2.0.1",
7634 |       "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
7635 |       "integrity": "sha512-oyyPpiMaKARvvcgip+JV+7zci5L8D1W9RZIz2l1o08AM3pfspitVWnPt3mzHcBPp12oYMTy0pqrFs/C+m3EwsQ==",
7636 |       "license": "MIT",
7637 |       "dependencies": {
7638 |         "mimic-fn": "^1.0.0"
7639 |       },
7640 |       "engines": {
7641 |         "node": ">=4"
7642 |       }
7643 |     },
7644 |     "node_modules/open": {
7645 |       "version": "7.4.2",
7646 |       "resolved": "https://registry.npmjs.org/open/-/open-7.4.2.tgz",
7647 |       "integrity": "sha512-MVHddDVweXZF3awtlAS+6pgKLlm/JgxZ90+/NBurBoQctVOOB/zDdVjcyPzQ+0laDGbsWgrRkflI65sQeOgT9Q==",
7648 |       "license": "MIT",
7649 |       "dependencies": {
7650 |         "is-docker": "^2.0.0",
7651 |         "is-wsl": "^2.1.1"
7652 |       },
7653 |       "engines": {
7654 |         "node": ">=8"
7655 |       },
7656 |       "funding": {
7657 |         "url": "https://github.com/sponsors/sindresorhus"
7658 |       }
7659 |     },
7660 |     "node_modules/ora": {
7661 |       "version": "3.4.0",
7662 |       "resolved": "https://registry.npmjs.org/ora/-/ora-3.4.0.tgz",
7663 |       "integrity": "sha512-eNwHudNbO1folBP3JsZ19v9azXWtQZjICdr3Q0TDPIaeBQ3mXLrh54wM+er0+hSp+dWKf+Z8KM58CYzEyIYxYg==",
7664 |       "license": "MIT",
7665 |       "dependencies": {
7666 |         "chalk": "^2.4.2",
7667 |         "cli-cursor": "^2.1.0",
7668 |         "cli-spinners": "^2.0.0",
7669 |         "log-symbols": "^2.2.0",
7670 |         "strip-ansi": "^5.2.0",
7671 |         "wcwidth": "^1.0.1"
7672 |       },
7673 |       "engines": {
7674 |         "node": ">=6"
7675 |       }
7676 |     },
7677 |     "node_modules/ora/node_modules/ansi-regex": {
7678 |       "version": "4.1.1",
7679 |       "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.1.tgz",
7680 |       "integrity": "sha512-ILlv4k/3f6vfQ4OoP2AGvirOktlQ98ZEL1k9FaQjxa3L1abBgbuTDAdPOpvbGncC0BTVQrl+OM8xZGK6tWXt7g==",
7681 |       "license": "MIT",
7682 |       "engines": {
7683 |         "node": ">=6"
7684 |       }
7685 |     },
7686 |     "node_modules/ora/node_modules/strip-ansi": {
7687 |       "version": "5.2.0",
7688 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
7689 |       "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
7690 |       "license": "MIT",
7691 |       "dependencies": {
7692 |         "ansi-regex": "^4.1.0"
7693 |       },
7694 |       "engines": {
7695 |         "node": ">=6"
7696 |       }
7697 |     },
7698 |     "node_modules/p-limit": {
7699 |       "version": "3.1.0",
7700 |       "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
7701 |       "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
7702 |       "license": "MIT",
7703 |       "dependencies": {
7704 |         "yocto-queue": "^0.1.0"
7705 |       },
7706 |       "engines": {
7707 |         "node": ">=10"
7708 |       },
7709 |       "funding": {
7710 |         "url": "https://github.com/sponsors/sindresorhus"
7711 |       }
7712 |     },
7713 |     "node_modules/p-locate": {
7714 |       "version": "4.1.0",
7715 |       "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
7716 |       "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
7717 |       "license": "MIT",
7718 |       "dependencies": {
7719 |         "p-limit": "^2.2.0"
7720 |       },
7721 |       "engines": {
7722 |         "node": ">=8"
7723 |       }
7724 |     },
7725 |     "node_modules/p-locate/node_modules/p-limit": {
7726 |       "version": "2.3.0",
7727 |       "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
7728 |       "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
7729 |       "license": "MIT",
7730 |       "dependencies": {
7731 |         "p-try": "^2.0.0"
7732 |       },
7733 |       "engines": {
7734 |         "node": ">=6"
7735 |       },
7736 |       "funding": {
7737 |         "url": "https://github.com/sponsors/sindresorhus"
7738 |       }
7739 |     },
7740 |     "node_modules/p-try": {
7741 |       "version": "2.2.0",
7742 |       "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
7743 |       "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
7744 |       "license": "MIT",
7745 |       "engines": {
7746 |         "node": ">=6"
7747 |       }
7748 |     },
7749 |     "node_modules/package-json-from-dist": {
7750 |       "version": "1.0.1",
7751 |       "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
7752 |       "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
7753 |       "license": "BlueOak-1.0.0"
7754 |     },
7755 |     "node_modules/parse-json": {
7756 |       "version": "4.0.0",
7757 |       "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
7758 |       "integrity": "sha512-aOIos8bujGN93/8Ox/jPLh7RwVnPEysynVFE+fQZyg6jKELEHwzgKdLRFHUgXJL6kylijVSBC4BvN9OmsB48Rw==",
7759 |       "license": "MIT",
7760 |       "dependencies": {
7761 |         "error-ex": "^1.3.1",
7762 |         "json-parse-better-errors": "^1.0.1"
7763 |       },
7764 |       "engines": {
7765 |         "node": ">=4"
7766 |       }
7767 |     },
7768 |     "node_modules/parse-png": {
7769 |       "version": "2.1.0",
7770 |       "resolved": "https://registry.npmjs.org/parse-png/-/parse-png-2.1.0.tgz",
7771 |       "integrity": "sha512-Nt/a5SfCLiTnQAjx3fHlqp8hRgTL3z7kTQZzvIMS9uCAepnCyjpdEc6M/sz69WqMBdaDBw9sF1F1UaHROYzGkQ==",
7772 |       "license": "MIT",
7773 |       "dependencies": {
7774 |         "pngjs": "^3.3.0"
7775 |       },
7776 |       "engines": {
7777 |         "node": ">=10"
7778 |       }
7779 |     },
7780 |     "node_modules/parseurl": {
7781 |       "version": "1.3.3",
7782 |       "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
7783 |       "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
7784 |       "license": "MIT",
7785 |       "engines": {
7786 |         "node": ">= 0.8"
7787 |       }
7788 |     },
7789 |     "node_modules/path-exists": {
7790 |       "version": "4.0.0",
7791 |       "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
7792 |       "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
7793 |       "license": "MIT",
7794 |       "engines": {
7795 |         "node": ">=8"
7796 |       }
7797 |     },
7798 |     "node_modules/path-is-absolute": {
7799 |       "version": "1.0.1",
7800 |       "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
7801 |       "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
7802 |       "license": "MIT",
7803 |       "engines": {
7804 |         "node": ">=0.10.0"
7805 |       }
7806 |     },
7807 |     "node_modules/path-key": {
7808 |       "version": "3.1.1",
7809 |       "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
7810 |       "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
7811 |       "license": "MIT",
7812 |       "engines": {
7813 |         "node": ">=8"
7814 |       }
7815 |     },
7816 |     "node_modules/path-parse": {
7817 |       "version": "1.0.7",
7818 |       "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
7819 |       "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
7820 |       "license": "MIT"
7821 |     },
7822 |     "node_modules/path-scurry": {
7823 |       "version": "1.11.1",
7824 |       "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
7825 |       "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
7826 |       "license": "BlueOak-1.0.0",
7827 |       "dependencies": {
7828 |         "lru-cache": "^10.2.0",
7829 |         "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
7830 |       },
7831 |       "engines": {
7832 |         "node": ">=16 || 14 >=14.18"
7833 |       },
7834 |       "funding": {
7835 |         "url": "https://github.com/sponsors/isaacs"
7836 |       }
7837 |     },
7838 |     "node_modules/path-scurry/node_modules/lru-cache": {
7839 |       "version": "10.4.3",
7840 |       "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
7841 |       "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
7842 |       "license": "ISC"
7843 |     },
7844 |     "node_modules/picocolors": {
7845 |       "version": "1.1.1",
7846 |       "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
7847 |       "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
7848 |       "license": "ISC"
7849 |     },
7850 |     "node_modules/picomatch": {
7851 |       "version": "2.3.1",
7852 |       "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
7853 |       "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
7854 |       "license": "MIT",
7855 |       "engines": {
7856 |         "node": ">=8.6"
7857 |       },
7858 |       "funding": {
7859 |         "url": "https://github.com/sponsors/jonschlinkert"
7860 |       }
7861 |     },
7862 |     "node_modules/pirates": {
7863 |       "version": "4.0.7",
7864 |       "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
7865 |       "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
7866 |       "license": "MIT",
7867 |       "engines": {
7868 |         "node": ">= 6"
7869 |       }
7870 |     },
7871 |     "node_modules/plist": {
7872 |       "version": "3.1.0",
7873 |       "resolved": "https://registry.npmjs.org/plist/-/plist-3.1.0.tgz",
7874 |       "integrity": "sha512-uysumyrvkUX0rX/dEVqt8gC3sTBzd4zoWfLeS29nb53imdaXVvLINYXTI2GNqzaMuvacNx4uJQ8+b3zXR0pkgQ==",
7875 |       "license": "MIT",
7876 |       "dependencies": {
7877 |         "@xmldom/xmldom": "^0.8.8",
7878 |         "base64-js": "^1.5.1",
7879 |         "xmlbuilder": "^15.1.1"
7880 |       },
7881 |       "engines": {
7882 |         "node": ">=10.4.0"
7883 |       }
7884 |     },
7885 |     "node_modules/pngjs": {
7886 |       "version": "3.4.0",
7887 |       "resolved": "https://registry.npmjs.org/pngjs/-/pngjs-3.4.0.tgz",
7888 |       "integrity": "sha512-NCrCHhWmnQklfH4MtJMRjZ2a8c80qXeMlQMv2uVp9ISJMTt562SbGd6n2oq0PaPgKm7Z6pL9E2UlLIhC+SHL3w==",
7889 |       "license": "MIT",
7890 |       "engines": {
7891 |         "node": ">=4.0.0"
7892 |       }
7893 |     },
7894 |     "node_modules/postcss": {
7895 |       "version": "8.4.49",
7896 |       "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.49.tgz",
7897 |       "integrity": "sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==",
7898 |       "funding": [
7899 |         {
7900 |           "type": "opencollective",
7901 |           "url": "https://opencollective.com/postcss/"
7902 |         },
7903 |         {
7904 |           "type": "tidelift",
7905 |           "url": "https://tidelift.com/funding/github/npm/postcss"
7906 |         },
7907 |         {
7908 |           "type": "github",
7909 |           "url": "https://github.com/sponsors/ai"
7910 |         }
7911 |       ],
7912 |       "license": "MIT",
7913 |       "dependencies": {
7914 |         "nanoid": "^3.3.7",
7915 |         "picocolors": "^1.1.1",
7916 |         "source-map-js": "^1.2.1"
7917 |       },
7918 |       "engines": {
7919 |         "node": "^10 || ^12 || >=14"
7920 |       }
7921 |     },
7922 |     "node_modules/postcss-value-parser": {
7923 |       "version": "4.2.0",
7924 |       "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
7925 |       "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
7926 |       "license": "MIT"
7927 |     },
7928 |     "node_modules/pretty-bytes": {
7929 |       "version": "5.6.0",
7930 |       "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-5.6.0.tgz",
7931 |       "integrity": "sha512-FFw039TmrBqFK8ma/7OL3sDz/VytdtJr044/QUJtH0wK9lb9jLq9tJyIxUwtQJHwar2BqtiA4iCWSwo9JLkzFg==",
7932 |       "license": "MIT",
7933 |       "engines": {
7934 |         "node": ">=6"
7935 |       },
7936 |       "funding": {
7937 |         "url": "https://github.com/sponsors/sindresorhus"
7938 |       }
7939 |     },
7940 |     "node_modules/pretty-format": {
7941 |       "version": "29.7.0",
7942 |       "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-29.7.0.tgz",
7943 |       "integrity": "sha512-Pdlw/oPxN+aXdmM9R00JVC9WVFoCLTKJvDVLgmJ+qAffBMxsV85l/Lu7sNx4zSzPyoL2euImuEwHhOXdEgNFZQ==",
7944 |       "license": "MIT",
7945 |       "dependencies": {
7946 |         "@jest/schemas": "^29.6.3",
7947 |         "ansi-styles": "^5.0.0",
7948 |         "react-is": "^18.0.0"
7949 |       },
7950 |       "engines": {
7951 |         "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
7952 |       }
7953 |     },
7954 |     "node_modules/pretty-format/node_modules/ansi-styles": {
7955 |       "version": "5.2.0",
7956 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
7957 |       "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==",
7958 |       "license": "MIT",
7959 |       "engines": {
7960 |         "node": ">=10"
7961 |       },
7962 |       "funding": {
7963 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
7964 |       }
7965 |     },
7966 |     "node_modules/proc-log": {
7967 |       "version": "4.2.0",
7968 |       "resolved": "https://registry.npmjs.org/proc-log/-/proc-log-4.2.0.tgz",
7969 |       "integrity": "sha512-g8+OnU/L2v+wyiVK+D5fA34J7EH8jZ8DDlvwhRCMxmMj7UCBvxiO1mGeN+36JXIKF4zevU4kRBd8lVgG9vLelA==",
7970 |       "license": "ISC",
7971 |       "engines": {
7972 |         "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
7973 |       }
7974 |     },
7975 |     "node_modules/progress": {
7976 |       "version": "2.0.3",
7977 |       "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
7978 |       "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
7979 |       "license": "MIT",
7980 |       "engines": {
7981 |         "node": ">=0.4.0"
7982 |       }
7983 |     },
7984 |     "node_modules/promise": {
7985 |       "version": "8.3.0",
7986 |       "resolved": "https://registry.npmjs.org/promise/-/promise-8.3.0.tgz",
7987 |       "integrity": "sha512-rZPNPKTOYVNEEKFaq1HqTgOwZD+4/YHS5ukLzQCypkj+OkYx7iv0mA91lJlpPPZ8vMau3IIGj5Qlwrx+8iiSmg==",
7988 |       "license": "MIT",
7989 |       "dependencies": {
7990 |         "asap": "~2.0.6"
7991 |       }
7992 |     },
7993 |     "node_modules/prompts": {
7994 |       "version": "2.4.2",
7995 |       "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
7996 |       "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
7997 |       "license": "MIT",
7998 |       "dependencies": {
7999 |         "kleur": "^3.0.3",
8000 |         "sisteransi": "^1.0.5"
8001 |       },
8002 |       "engines": {
8003 |         "node": ">= 6"
8004 |       }
8005 |     },
8006 |     "node_modules/punycode": {
8007 |       "version": "2.3.1",
8008 |       "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
8009 |       "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
8010 |       "license": "MIT",
8011 |       "engines": {
8012 |         "node": ">=6"
8013 |       }
8014 |     },
8015 |     "node_modules/qrcode-terminal": {
8016 |       "version": "0.11.0",
8017 |       "resolved": "https://registry.npmjs.org/qrcode-terminal/-/qrcode-terminal-0.11.0.tgz",
8018 |       "integrity": "sha512-Uu7ii+FQy4Qf82G4xu7ShHhjhGahEpCWc3x8UavY3CTcWV+ufmmCtwkr7ZKsX42jdL0kr1B5FKUeqJvAn51jzQ==",
8019 |       "bin": {
8020 |         "qrcode-terminal": "bin/qrcode-terminal.js"
8021 |       }
8022 |     },
8023 |     "node_modules/query-string": {
8024 |       "version": "7.1.3",
8025 |       "resolved": "https://registry.npmjs.org/query-string/-/query-string-7.1.3.tgz",
8026 |       "integrity": "sha512-hh2WYhq4fi8+b+/2Kg9CEge4fDPvHS534aOOvOZeQ3+Vf2mCFsaFBYj0i+iXcAq6I9Vzp5fjMFBlONvayDC1qg==",
8027 |       "license": "MIT",
8028 |       "dependencies": {
8029 |         "decode-uri-component": "^0.2.2",
8030 |         "filter-obj": "^1.1.0",
8031 |         "split-on-first": "^1.0.0",
8032 |         "strict-uri-encode": "^2.0.0"
8033 |       },
8034 |       "engines": {
8035 |         "node": ">=6"
8036 |       },
8037 |       "funding": {
8038 |         "url": "https://github.com/sponsors/sindresorhus"
8039 |       }
8040 |     },
8041 |     "node_modules/queue": {
8042 |       "version": "6.0.2",
8043 |       "resolved": "https://registry.npmjs.org/queue/-/queue-6.0.2.tgz",
8044 |       "integrity": "sha512-iHZWu+q3IdFZFX36ro/lKBkSvfkztY5Y7HMiPlOUjhupPcG2JMfst2KKEpu5XndviX/3UhFbRngUPNKtgvtZiA==",
8045 |       "license": "MIT",
8046 |       "dependencies": {
8047 |         "inherits": "~2.0.3"
8048 |       }
8049 |     },
8050 |     "node_modules/range-parser": {
8051 |       "version": "1.2.1",
8052 |       "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
8053 |       "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
8054 |       "license": "MIT",
8055 |       "engines": {
8056 |         "node": ">= 0.6"
8057 |       }
8058 |     },
8059 |     "node_modules/rc": {
8060 |       "version": "1.2.8",
8061 |       "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
8062 |       "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
8063 |       "license": "(BSD-2-Clause OR MIT OR Apache-2.0)",
8064 |       "dependencies": {
8065 |         "deep-extend": "^0.6.0",
8066 |         "ini": "~1.3.0",
8067 |         "minimist": "^1.2.0",
8068 |         "strip-json-comments": "~2.0.1"
8069 |       },
8070 |       "bin": {
8071 |         "rc": "cli.js"
8072 |       }
8073 |     },
8074 |     "node_modules/react": {
8075 |       "version": "19.1.0",
8076 |       "resolved": "https://registry.npmjs.org/react/-/react-19.1.0.tgz",
8077 |       "integrity": "sha512-FS+XFBNvn3GTAWq26joslQgWNoFu08F4kl0J4CgdNKADkdSGXQyTCnKteIAJy96Br6YbpEU1LSzV5dYtjMkMDg==",
8078 |       "license": "MIT",
8079 |       "engines": {
8080 |         "node": ">=0.10.0"
8081 |       }
8082 |     },
8083 |     "node_modules/react-devtools-core": {
8084 |       "version": "6.1.5",
8085 |       "resolved": "https://registry.npmjs.org/react-devtools-core/-/react-devtools-core-6.1.5.tgz",
8086 |       "integrity": "sha512-ePrwPfxAnB+7hgnEr8vpKxL9cmnp7F322t8oqcPshbIQQhDKgFDW4tjhF2wjVbdXF9O/nyuy3sQWd9JGpiLPvA==",
8087 |       "license": "MIT",
8088 |       "dependencies": {
8089 |         "shell-quote": "^1.6.1",
8090 |         "ws": "^7"
8091 |       }
8092 |     },
8093 |     "node_modules/react-dom": {
8094 |       "version": "19.1.0",
8095 |       "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.1.0.tgz",
8096 |       "integrity": "sha512-Xs1hdnE+DyKgeHJeJznQmYMIBG3TKIHJJT95Q58nHLSrElKlGQqDTR2HQ9fx5CN/Gk6Vh/kupBTDLU11/nDk/g==",
8097 |       "license": "MIT",
8098 |       "dependencies": {
8099 |         "scheduler": "^0.26.0"
8100 |       },
8101 |       "peerDependencies": {
8102 |         "react": "^19.1.0"
8103 |       }
8104 |     },
8105 |     "node_modules/react-freeze": {
8106 |       "version": "1.0.4",
8107 |       "resolved": "https://registry.npmjs.org/react-freeze/-/react-freeze-1.0.4.tgz",
8108 |       "integrity": "sha512-r4F0Sec0BLxWicc7HEyo2x3/2icUTrRmDjaaRyzzn+7aDyFZliszMDOgLVwSnQnYENOlL1o569Ze2HZefk8clA==",
8109 |       "license": "MIT",
8110 |       "engines": {
8111 |         "node": ">=10"
8112 |       },
8113 |       "peerDependencies": {
8114 |         "react": ">=17.0.0"
8115 |       }
8116 |     },
8117 |     "node_modules/react-is": {
8118 |       "version": "18.3.1",
8119 |       "resolved": "https://registry.npmjs.org/react-is/-/react-is-18.3.1.tgz",
8120 |       "integrity": "sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==",
8121 |       "license": "MIT"
8122 |     },
8123 |     "node_modules/react-native": {
8124 |       "version": "0.81.4",
8125 |       "resolved": "https://registry.npmjs.org/react-native/-/react-native-0.81.4.tgz",
8126 |       "integrity": "sha512-bt5bz3A/+Cv46KcjV0VQa+fo7MKxs17RCcpzjftINlen4ZDUl0I6Ut+brQ2FToa5oD0IB0xvQHfmsg2EDqsZdQ==",
8127 |       "license": "MIT",
8128 |       "dependencies": {
8129 |         "@jest/create-cache-key-function": "^29.7.0",
8130 |         "@react-native/assets-registry": "0.81.4",
8131 |         "@react-native/codegen": "0.81.4",
8132 |         "@react-native/community-cli-plugin": "0.81.4",
8133 |         "@react-native/gradle-plugin": "0.81.4",
8134 |         "@react-native/js-polyfills": "0.81.4",
8135 |         "@react-native/normalize-colors": "0.81.4",
8136 |         "@react-native/virtualized-lists": "0.81.4",
8137 |         "abort-controller": "^3.0.0",
8138 |         "anser": "^1.4.9",
8139 |         "ansi-regex": "^5.0.0",
8140 |         "babel-jest": "^29.7.0",
8141 |         "babel-plugin-syntax-hermes-parser": "0.29.1",
8142 |         "base64-js": "^1.5.1",
8143 |         "commander": "^12.0.0",
8144 |         "flow-enums-runtime": "^0.0.6",
8145 |         "glob": "^7.1.1",
8146 |         "invariant": "^2.2.4",
8147 |         "jest-environment-node": "^29.7.0",
8148 |         "memoize-one": "^5.0.0",
8149 |         "metro-runtime": "^0.83.1",
8150 |         "metro-source-map": "^0.83.1",
8151 |         "nullthrows": "^1.1.1",
8152 |         "pretty-format": "^29.7.0",
8153 |         "promise": "^8.3.0",
8154 |         "react-devtools-core": "^6.1.5",
8155 |         "react-refresh": "^0.14.0",
8156 |         "regenerator-runtime": "^0.13.2",
8157 |         "scheduler": "0.26.0",
8158 |         "semver": "^7.1.3",
8159 |         "stacktrace-parser": "^0.1.10",
8160 |         "whatwg-fetch": "^3.0.0",
8161 |         "ws": "^6.2.3",
8162 |         "yargs": "^17.6.2"
8163 |       },
8164 |       "bin": {
8165 |         "react-native": "cli.js"
8166 |       },
8167 |       "engines": {
8168 |         "node": ">= 20.19.4"
8169 |       },
8170 |       "peerDependencies": {
8171 |         "@types/react": "^19.1.0",
8172 |         "react": "^19.1.0"
8173 |       },
8174 |       "peerDependenciesMeta": {
8175 |         "@types/react": {
8176 |           "optional": true
8177 |         }
8178 |       }
8179 |     },
8180 |     "node_modules/react-native-gesture-handler": {
8181 |       "version": "2.28.0",
8182 |       "resolved": "https://registry.npmjs.org/react-native-gesture-handler/-/react-native-gesture-handler-2.28.0.tgz",
8183 |       "integrity": "sha512-0msfJ1vRxXKVgTgvL+1ZOoYw3/0z1R+Ked0+udoJhyplC2jbVKIJ8Z1bzWdpQRCV3QcQ87Op0zJVE5DhKK2A0A==",
8184 |       "license": "MIT",
8185 |       "peer": true,
8186 |       "dependencies": {
8187 |         "@egjs/hammerjs": "^2.0.17",
8188 |         "hoist-non-react-statics": "^3.3.0",
8189 |         "invariant": "^2.2.4"
8190 |       },
8191 |       "peerDependencies": {
8192 |         "react": "*",
8193 |         "react-native": "*"
8194 |       }
8195 |     },
8196 |     "node_modules/react-native-is-edge-to-edge": {
8197 |       "version": "1.2.1",
8198 |       "resolved": "https://registry.npmjs.org/react-native-is-edge-to-edge/-/react-native-is-edge-to-edge-1.2.1.tgz",
8199 |       "integrity": "sha512-FLbPWl/MyYQWz+KwqOZsSyj2JmLKglHatd3xLZWskXOpRaio4LfEDEz8E/A6uD8QoTHW6Aobw1jbEwK7KMgR7Q==",
8200 |       "license": "MIT",
8201 |       "peerDependencies": {
8202 |         "react": "*",
8203 |         "react-native": "*"
8204 |       }
8205 |     },
8206 |     "node_modules/react-native-safe-area-context": {
8207 |       "version": "5.6.1",
8208 |       "resolved": "https://registry.npmjs.org/react-native-safe-area-context/-/react-native-safe-area-context-5.6.1.tgz",
8209 |       "integrity": "sha512-/wJE58HLEAkATzhhX1xSr+fostLsK8Q97EfpfMDKo8jlOc1QKESSX/FQrhk7HhQH/2uSaox4Y86sNaI02kteiA==",
8210 |       "license": "MIT",
8211 |       "peerDependencies": {
8212 |         "react": "*",
8213 |         "react-native": "*"
8214 |       }
8215 |     },
8216 |     "node_modules/react-native-screens": {
8217 |       "version": "4.16.0",
8218 |       "resolved": "https://registry.npmjs.org/react-native-screens/-/react-native-screens-4.16.0.tgz",
8219 |       "integrity": "sha512-yIAyh7F/9uWkOzCi1/2FqvNvK6Wb9Y1+Kzn16SuGfN9YFJDTbwlzGRvePCNTOX0recpLQF3kc2FmvMUhyTCH1Q==",
8220 |       "license": "MIT",
8221 |       "dependencies": {
8222 |         "react-freeze": "^1.0.0",
8223 |         "react-native-is-edge-to-edge": "^1.2.1",
8224 |         "warn-once": "^0.1.0"
8225 |       },
8226 |       "peerDependencies": {
8227 |         "react": "*",
8228 |         "react-native": "*"
8229 |       }
8230 |     },
8231 |     "node_modules/react-native-uuid": {
8232 |       "version": "2.0.3",
8233 |       "resolved": "https://registry.npmjs.org/react-native-uuid/-/react-native-uuid-2.0.3.tgz",
8234 |       "integrity": "sha512-f/YfIS2f5UB+gut7t/9BKGSCYbRA9/74A5R1MDp+FLYsuS+OSWoiM/D8Jko6OJB6Jcu3v6ONuddvZKHdIGpeiw==",
8235 |       "license": "MIT",
8236 |       "engines": {
8237 |         "node": ">=10.0.0",
8238 |         "npm": ">=6.0.0"
8239 |       }
8240 |     },
8241 |     "node_modules/react-native-web": {
8242 |       "version": "0.21.1",
8243 |       "resolved": "https://registry.npmjs.org/react-native-web/-/react-native-web-0.21.1.tgz",
8244 |       "integrity": "sha512-BeNsgwwe4AXUFPAoFU+DKjJ+CVQa3h54zYX77p7GVZrXiiNo3vl03WYDYVEy5R2J2HOPInXtQZB5gmj3vuzrKg==",
8245 |       "license": "MIT",
8246 |       "dependencies": {
8247 |         "@babel/runtime": "^7.18.6",
8248 |         "@react-native/normalize-colors": "^0.74.1",
8249 |         "fbjs": "^3.0.4",
8250 |         "inline-style-prefixer": "^7.0.1",
8251 |         "memoize-one": "^6.0.0",
8252 |         "nullthrows": "^1.1.1",
8253 |         "postcss-value-parser": "^4.2.0",
8254 |         "styleq": "^0.1.3"
8255 |       },
8256 |       "peerDependencies": {
8257 |         "react": "^18.0.0 || ^19.0.0",
8258 |         "react-dom": "^18.0.0 || ^19.0.0"
8259 |       }
8260 |     },
8261 |     "node_modules/react-native-web/node_modules/@react-native/normalize-colors": {
8262 |       "version": "0.74.89",
8263 |       "resolved": "https://registry.npmjs.org/@react-native/normalize-colors/-/normalize-colors-0.74.89.tgz",
8264 |       "integrity": "sha512-qoMMXddVKVhZ8PA1AbUCk83trpd6N+1nF2A6k1i6LsQObyS92fELuk8kU/lQs6M7BsMHwqyLCpQJ1uFgNvIQXg==",
8265 |       "license": "MIT"
8266 |     },
8267 |     "node_modules/react-native-web/node_modules/memoize-one": {
8268 |       "version": "6.0.0",
8269 |       "resolved": "https://registry.npmjs.org/memoize-one/-/memoize-one-6.0.0.tgz",
8270 |       "integrity": "sha512-rkpe71W0N0c0Xz6QD0eJETuWAJGnJ9afsl1srmwPrI+yBCkge5EycXXbYRyvL29zZVUWQCY7InPRCv3GDXuZNw==",
8271 |       "license": "MIT"
8272 |     },
8273 |     "node_modules/react-native/node_modules/brace-expansion": {
8274 |       "version": "1.1.12",
8275 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
8276 |       "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
8277 |       "license": "MIT",
8278 |       "dependencies": {
8279 |         "balanced-match": "^1.0.0",
8280 |         "concat-map": "0.0.1"
8281 |       }
8282 |     },
8283 |     "node_modules/react-native/node_modules/commander": {
8284 |       "version": "12.1.0",
8285 |       "resolved": "https://registry.npmjs.org/commander/-/commander-12.1.0.tgz",
8286 |       "integrity": "sha512-Vw8qHK3bZM9y/P10u3Vib8o/DdkvA2OtPtZvD871QKjy74Wj1WSKFILMPRPSdUSx5RFK1arlJzEtA4PkFgnbuA==",
8287 |       "license": "MIT",
8288 |       "engines": {
8289 |         "node": ">=18"
8290 |       }
8291 |     },
8292 |     "node_modules/react-native/node_modules/glob": {
8293 |       "version": "7.2.3",
8294 |       "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
8295 |       "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
8296 |       "deprecated": "Glob versions prior to v9 are no longer supported",
8297 |       "license": "ISC",
8298 |       "dependencies": {
8299 |         "fs.realpath": "^1.0.0",
8300 |         "inflight": "^1.0.4",
8301 |         "inherits": "2",
8302 |         "minimatch": "^3.1.1",
8303 |         "once": "^1.3.0",
8304 |         "path-is-absolute": "^1.0.0"
8305 |       },
8306 |       "engines": {
8307 |         "node": "*"
8308 |       },
8309 |       "funding": {
8310 |         "url": "https://github.com/sponsors/isaacs"
8311 |       }
8312 |     },
8313 |     "node_modules/react-native/node_modules/minimatch": {
8314 |       "version": "3.1.2",
8315 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
8316 |       "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
8317 |       "license": "ISC",
8318 |       "dependencies": {
8319 |         "brace-expansion": "^1.1.7"
8320 |       },
8321 |       "engines": {
8322 |         "node": "*"
8323 |       }
8324 |     },
8325 |     "node_modules/react-native/node_modules/ws": {
8326 |       "version": "6.2.3",
8327 |       "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.3.tgz",
8328 |       "integrity": "sha512-jmTjYU0j60B+vHey6TfR3Z7RD61z/hmxBS3VMSGIrroOWXQEneK1zNuotOUrGyBHQj0yrpsLHPWtigEFd13ndA==",
8329 |       "license": "MIT",
8330 |       "dependencies": {
8331 |         "async-limiter": "~1.0.0"
8332 |       }
8333 |     },
8334 |     "node_modules/react-refresh": {
8335 |       "version": "0.14.2",
8336 |       "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
8337 |       "integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
8338 |       "license": "MIT",
8339 |       "engines": {
8340 |         "node": ">=0.10.0"
8341 |       }
8342 |     },
8343 |     "node_modules/regenerate": {
8344 |       "version": "1.4.2",
8345 |       "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
8346 |       "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
8347 |       "license": "MIT"
8348 |     },
8349 |     "node_modules/regenerate-unicode-properties": {
8350 |       "version": "10.2.2",
8351 |       "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-10.2.2.tgz",
8352 |       "integrity": "sha512-m03P+zhBeQd1RGnYxrGyDAPpWX/epKirLrp8e3qevZdVkKtnCrjjWczIbYc8+xd6vcTStVlqfycTx1KR4LOr0g==",
8353 |       "license": "MIT",
8354 |       "dependencies": {
8355 |         "regenerate": "^1.4.2"
8356 |       },
8357 |       "engines": {
8358 |         "node": ">=4"
8359 |       }
8360 |     },
8361 |     "node_modules/regenerator-runtime": {
8362 |       "version": "0.13.11",
8363 |       "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.11.tgz",
8364 |       "integrity": "sha512-kY1AZVr2Ra+t+piVaJ4gxaFaReZVH40AKNo7UCX6W+dEwBo/2oZJzqfuN1qLq1oL45o56cPaTXELwrTh8Fpggg==",
8365 |       "license": "MIT"
8366 |     },
8367 |     "node_modules/regexpu-core": {
8368 |       "version": "6.3.1",
8369 |       "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-6.3.1.tgz",
8370 |       "integrity": "sha512-DzcswPr252wEr7Qz8AyAVbfyBDKLoYp6eRA1We2Fa9qirRFSdtkP5sHr3yglDKy2BbA0fd2T+j/CUSKes3FeVQ==",
8371 |       "license": "MIT",
8372 |       "dependencies": {
8373 |         "regenerate": "^1.4.2",
8374 |         "regenerate-unicode-properties": "^10.2.2",
8375 |         "regjsgen": "^0.8.0",
8376 |         "regjsparser": "^0.12.0",
8377 |         "unicode-match-property-ecmascript": "^2.0.0",
8378 |         "unicode-match-property-value-ecmascript": "^2.2.1"
8379 |       },
8380 |       "engines": {
8381 |         "node": ">=4"
8382 |       }
8383 |     },
8384 |     "node_modules/regjsgen": {
8385 |       "version": "0.8.0",
8386 |       "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.8.0.tgz",
8387 |       "integrity": "sha512-RvwtGe3d7LvWiDQXeQw8p5asZUmfU1G/l6WbUXeHta7Y2PEIvBTwH6E2EfmYUK8pxcxEdEmaomqyp0vZZ7C+3Q==",
8388 |       "license": "MIT"
8389 |     },
8390 |     "node_modules/regjsparser": {
8391 |       "version": "0.12.0",
8392 |       "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.12.0.tgz",
8393 |       "integrity": "sha512-cnE+y8bz4NhMjISKbgeVJtqNbtf5QpjZP+Bslo+UqkIt9QPnX9q095eiRRASJG1/tz6dlNr6Z5NsBiWYokp6EQ==",
8394 |       "license": "BSD-2-Clause",
8395 |       "dependencies": {
8396 |         "jsesc": "~3.0.2"
8397 |       },
8398 |       "bin": {
8399 |         "regjsparser": "bin/parser"
8400 |       }
8401 |     },
8402 |     "node_modules/regjsparser/node_modules/jsesc": {
8403 |       "version": "3.0.2",
8404 |       "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.0.2.tgz",
8405 |       "integrity": "sha512-xKqzzWXDttJuOcawBt4KnKHHIf5oQ/Cxax+0PWFG+DFDgHNAdi+TXECADI+RYiFUMmx8792xsMbbgXj4CwnP4g==",
8406 |       "license": "MIT",
8407 |       "bin": {
8408 |         "jsesc": "bin/jsesc"
8409 |       },
8410 |       "engines": {
8411 |         "node": ">=6"
8412 |       }
8413 |     },
8414 |     "node_modules/require-directory": {
8415 |       "version": "2.1.1",
8416 |       "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
8417 |       "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
8418 |       "license": "MIT",
8419 |       "engines": {
8420 |         "node": ">=0.10.0"
8421 |       }
8422 |     },
8423 |     "node_modules/require-from-string": {
8424 |       "version": "2.0.2",
8425 |       "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
8426 |       "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
8427 |       "license": "MIT",
8428 |       "engines": {
8429 |         "node": ">=0.10.0"
8430 |       }
8431 |     },
8432 |     "node_modules/requireg": {
8433 |       "version": "0.2.2",
8434 |       "resolved": "https://registry.npmjs.org/requireg/-/requireg-0.2.2.tgz",
8435 |       "integrity": "sha512-nYzyjnFcPNGR3lx9lwPPPnuQxv6JWEZd2Ci0u9opN7N5zUEPIhY/GbL3vMGOr2UXwEg9WwSyV9X9Y/kLFgPsOg==",
8436 |       "dependencies": {
8437 |         "nested-error-stacks": "~2.0.1",
8438 |         "rc": "~1.2.7",
8439 |         "resolve": "~1.7.1"
8440 |       },
8441 |       "engines": {
8442 |         "node": ">= 4.0.0"
8443 |       }
8444 |     },
8445 |     "node_modules/requireg/node_modules/resolve": {
8446 |       "version": "1.7.1",
8447 |       "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.7.1.tgz",
8448 |       "integrity": "sha512-c7rwLofp8g1U+h1KNyHL/jicrKg1Ek4q+Lr33AL65uZTinUZHe30D5HlyN5V9NW0JX1D5dXQ4jqW5l7Sy/kGfw==",
8449 |       "license": "MIT",
8450 |       "dependencies": {
8451 |         "path-parse": "^1.0.5"
8452 |       }
8453 |     },
8454 |     "node_modules/resolve": {
8455 |       "version": "1.22.10",
8456 |       "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.10.tgz",
8457 |       "integrity": "sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==",
8458 |       "license": "MIT",
8459 |       "dependencies": {
8460 |         "is-core-module": "^2.16.0",
8461 |         "path-parse": "^1.0.7",
8462 |         "supports-preserve-symlinks-flag": "^1.0.0"
8463 |       },
8464 |       "bin": {
8465 |         "resolve": "bin/resolve"
8466 |       },
8467 |       "engines": {
8468 |         "node": ">= 0.4"
8469 |       },
8470 |       "funding": {
8471 |         "url": "https://github.com/sponsors/ljharb"
8472 |       }
8473 |     },
8474 |     "node_modules/resolve-from": {
8475 |       "version": "5.0.0",
8476 |       "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
8477 |       "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
8478 |       "license": "MIT",
8479 |       "engines": {
8480 |         "node": ">=8"
8481 |       }
8482 |     },
8483 |     "node_modules/resolve-global": {
8484 |       "version": "1.0.0",
8485 |       "resolved": "https://registry.npmjs.org/resolve-global/-/resolve-global-1.0.0.tgz",
8486 |       "integrity": "sha512-zFa12V4OLtT5XUX/Q4VLvTfBf+Ok0SPc1FNGM/z9ctUdiU618qwKpWnd0CHs3+RqROfyEg/DhuHbMWYqcgljEw==",
8487 |       "license": "MIT",
8488 |       "dependencies": {
8489 |         "global-dirs": "^0.1.1"
8490 |       },
8491 |       "engines": {
8492 |         "node": ">=8"
8493 |       }
8494 |     },
8495 |     "node_modules/resolve-workspace-root": {
8496 |       "version": "2.0.0",
8497 |       "resolved": "https://registry.npmjs.org/resolve-workspace-root/-/resolve-workspace-root-2.0.0.tgz",
8498 |       "integrity": "sha512-IsaBUZETJD5WsI11Wt8PKHwaIe45or6pwNc8yflvLJ4DWtImK9kuLoH5kUva/2Mmx/RdIyr4aONNSa2v9LTJsw==",
8499 |       "license": "MIT"
8500 |     },
8501 |     "node_modules/resolve.exports": {
8502 |       "version": "2.0.3",
8503 |       "resolved": "https://registry.npmjs.org/resolve.exports/-/resolve.exports-2.0.3.tgz",
8504 |       "integrity": "sha512-OcXjMsGdhL4XnbShKpAcSqPMzQoYkYyhbEaeSko47MjRP9NfEQMhZkXL1DoFlt9LWQn4YttrdnV6X2OiyzBi+A==",
8505 |       "license": "MIT",
8506 |       "engines": {
8507 |         "node": ">=10"
8508 |       }
8509 |     },
8510 |     "node_modules/restore-cursor": {
8511 |       "version": "2.0.0",
8512 |       "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
8513 |       "integrity": "sha512-6IzJLuGi4+R14vwagDHX+JrXmPVtPpn4mffDJ1UdR7/Edm87fl6yi8mMBIVvFtJaNTUvjughmW4hwLhRG7gC1Q==",
8514 |       "license": "MIT",
8515 |       "dependencies": {
8516 |         "onetime": "^2.0.0",
8517 |         "signal-exit": "^3.0.2"
8518 |       },
8519 |       "engines": {
8520 |         "node": ">=4"
8521 |       }
8522 |     },
8523 |     "node_modules/restore-cursor/node_modules/signal-exit": {
8524 |       "version": "3.0.7",
8525 |       "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
8526 |       "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
8527 |       "license": "ISC"
8528 |     },
8529 |     "node_modules/rimraf": {
8530 |       "version": "3.0.2",
8531 |       "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
8532 |       "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
8533 |       "deprecated": "Rimraf versions prior to v4 are no longer supported",
8534 |       "license": "ISC",
8535 |       "dependencies": {
8536 |         "glob": "^7.1.3"
8537 |       },
8538 |       "bin": {
8539 |         "rimraf": "bin.js"
8540 |       },
8541 |       "funding": {
8542 |         "url": "https://github.com/sponsors/isaacs"
8543 |       }
8544 |     },
8545 |     "node_modules/rimraf/node_modules/brace-expansion": {
8546 |       "version": "1.1.12",
8547 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
8548 |       "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
8549 |       "license": "MIT",
8550 |       "dependencies": {
8551 |         "balanced-match": "^1.0.0",
8552 |         "concat-map": "0.0.1"
8553 |       }
8554 |     },
8555 |     "node_modules/rimraf/node_modules/glob": {
8556 |       "version": "7.2.3",
8557 |       "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
8558 |       "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
8559 |       "deprecated": "Glob versions prior to v9 are no longer supported",
8560 |       "license": "ISC",
8561 |       "dependencies": {
8562 |         "fs.realpath": "^1.0.0",
8563 |         "inflight": "^1.0.4",
8564 |         "inherits": "2",
8565 |         "minimatch": "^3.1.1",
8566 |         "once": "^1.3.0",
8567 |         "path-is-absolute": "^1.0.0"
8568 |       },
8569 |       "engines": {
8570 |         "node": "*"
8571 |       },
8572 |       "funding": {
8573 |         "url": "https://github.com/sponsors/isaacs"
8574 |       }
8575 |     },
8576 |     "node_modules/rimraf/node_modules/minimatch": {
8577 |       "version": "3.1.2",
8578 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
8579 |       "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
8580 |       "license": "ISC",
8581 |       "dependencies": {
8582 |         "brace-expansion": "^1.1.7"
8583 |       },
8584 |       "engines": {
8585 |         "node": "*"
8586 |       }
8587 |     },
8588 |     "node_modules/safe-buffer": {
8589 |       "version": "5.2.1",
8590 |       "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
8591 |       "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
8592 |       "funding": [
8593 |         {
8594 |           "type": "github",
8595 |           "url": "https://github.com/sponsors/feross"
8596 |         },
8597 |         {
8598 |           "type": "patreon",
8599 |           "url": "https://www.patreon.com/feross"
8600 |         },
8601 |         {
8602 |           "type": "consulting",
8603 |           "url": "https://feross.org/support"
8604 |         }
8605 |       ],
8606 |       "license": "MIT"
8607 |     },
8608 |     "node_modules/sax": {
8609 |       "version": "1.4.1",
8610 |       "resolved": "https://registry.npmjs.org/sax/-/sax-1.4.1.tgz",
8611 |       "integrity": "sha512-+aWOz7yVScEGoKNd4PA10LZ8sk0A/z5+nXQG5giUO5rprX9jgYsTdov9qCchZiPIZezbZH+jRut8nPodFAX4Jg==",
8612 |       "license": "ISC"
8613 |     },
8614 |     "node_modules/scheduler": {
8615 |       "version": "0.26.0",
8616 |       "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.26.0.tgz",
8617 |       "integrity": "sha512-NlHwttCI/l5gCPR3D1nNXtWABUmBwvZpEQiD4IXSbIDq8BzLIK/7Ir5gTFSGZDUu37K5cMNp0hFtzO38sC7gWA==",
8618 |       "license": "MIT"
8619 |     },
8620 |     "node_modules/semver": {
8621 |       "version": "7.7.2",
8622 |       "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
8623 |       "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
8624 |       "license": "ISC",
8625 |       "bin": {
8626 |         "semver": "bin/semver.js"
8627 |       },
8628 |       "engines": {
8629 |         "node": ">=10"
8630 |       }
8631 |     },
8632 |     "node_modules/send": {
8633 |       "version": "0.19.0",
8634 |       "resolved": "https://registry.npmjs.org/send/-/send-0.19.0.tgz",
8635 |       "integrity": "sha512-dW41u5VfLXu8SJh5bwRmyYUbAoSB3c9uQh6L8h/KtsFREPWpbX1lrljJo186Jc4nmci/sGUZ9a0a0J2zgfq2hw==",
8636 |       "license": "MIT",
8637 |       "dependencies": {
8638 |         "debug": "2.6.9",
8639 |         "depd": "2.0.0",
8640 |         "destroy": "1.2.0",
8641 |         "encodeurl": "~1.0.2",
8642 |         "escape-html": "~1.0.3",
8643 |         "etag": "~1.8.1",
8644 |         "fresh": "0.5.2",
8645 |         "http-errors": "2.0.0",
8646 |         "mime": "1.6.0",
8647 |         "ms": "2.1.3",
8648 |         "on-finished": "2.4.1",
8649 |         "range-parser": "~1.2.1",
8650 |         "statuses": "2.0.1"
8651 |       },
8652 |       "engines": {
8653 |         "node": ">= 0.8.0"
8654 |       }
8655 |     },
8656 |     "node_modules/send/node_modules/debug": {
8657 |       "version": "2.6.9",
8658 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
8659 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
8660 |       "license": "MIT",
8661 |       "dependencies": {
8662 |         "ms": "2.0.0"
8663 |       }
8664 |     },
8665 |     "node_modules/send/node_modules/debug/node_modules/ms": {
8666 |       "version": "2.0.0",
8667 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
8668 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
8669 |       "license": "MIT"
8670 |     },
8671 |     "node_modules/send/node_modules/on-finished": {
8672 |       "version": "2.4.1",
8673 |       "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
8674 |       "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
8675 |       "license": "MIT",
8676 |       "dependencies": {
8677 |         "ee-first": "1.1.1"
8678 |       },
8679 |       "engines": {
8680 |         "node": ">= 0.8"
8681 |       }
8682 |     },
8683 |     "node_modules/send/node_modules/statuses": {
8684 |       "version": "2.0.1",
8685 |       "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
8686 |       "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
8687 |       "license": "MIT",
8688 |       "engines": {
8689 |         "node": ">= 0.8"
8690 |       }
8691 |     },
8692 |     "node_modules/serialize-error": {
8693 |       "version": "2.1.0",
8694 |       "resolved": "https://registry.npmjs.org/serialize-error/-/serialize-error-2.1.0.tgz",
8695 |       "integrity": "sha512-ghgmKt5o4Tly5yEG/UJp8qTd0AN7Xalw4XBtDEKP655B699qMEtra1WlXeE6WIvdEG481JvRxULKsInq/iNysw==",
8696 |       "license": "MIT",
8697 |       "engines": {
8698 |         "node": ">=0.10.0"
8699 |       }
8700 |     },
8701 |     "node_modules/serve-static": {
8702 |       "version": "1.16.2",
8703 |       "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.2.tgz",
8704 |       "integrity": "sha512-VqpjJZKadQB/PEbEwvFdO43Ax5dFBZ2UECszz8bQ7pi7wt//PWe1P6MN7eCnjsatYtBT6EuiClbjSWP2WrIoTw==",
8705 |       "license": "MIT",
8706 |       "dependencies": {
8707 |         "encodeurl": "~2.0.0",
8708 |         "escape-html": "~1.0.3",
8709 |         "parseurl": "~1.3.3",
8710 |         "send": "0.19.0"
8711 |       },
8712 |       "engines": {
8713 |         "node": ">= 0.8.0"
8714 |       }
8715 |     },
8716 |     "node_modules/serve-static/node_modules/encodeurl": {
8717 |       "version": "2.0.0",
8718 |       "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
8719 |       "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
8720 |       "license": "MIT",
8721 |       "engines": {
8722 |         "node": ">= 0.8"
8723 |       }
8724 |     },
8725 |     "node_modules/setimmediate": {
8726 |       "version": "1.0.5",
8727 |       "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
8728 |       "integrity": "sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==",
8729 |       "license": "MIT"
8730 |     },
8731 |     "node_modules/setprototypeof": {
8732 |       "version": "1.2.0",
8733 |       "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
8734 |       "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
8735 |       "license": "ISC"
8736 |     },
8737 |     "node_modules/shebang-command": {
8738 |       "version": "2.0.0",
8739 |       "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
8740 |       "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
8741 |       "license": "MIT",
8742 |       "dependencies": {
8743 |         "shebang-regex": "^3.0.0"
8744 |       },
8745 |       "engines": {
8746 |         "node": ">=8"
8747 |       }
8748 |     },
8749 |     "node_modules/shebang-regex": {
8750 |       "version": "3.0.0",
8751 |       "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
8752 |       "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
8753 |       "license": "MIT",
8754 |       "engines": {
8755 |         "node": ">=8"
8756 |       }
8757 |     },
8758 |     "node_modules/shell-quote": {
8759 |       "version": "1.8.3",
8760 |       "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.3.tgz",
8761 |       "integrity": "sha512-ObmnIF4hXNg1BqhnHmgbDETF8dLPCggZWBjkQfhZpbszZnYur5DUljTcCHii5LC3J5E0yeO/1LIMyH+UvHQgyw==",
8762 |       "license": "MIT",
8763 |       "engines": {
8764 |         "node": ">= 0.4"
8765 |       },
8766 |       "funding": {
8767 |         "url": "https://github.com/sponsors/ljharb"
8768 |       }
8769 |     },
8770 |     "node_modules/signal-exit": {
8771 |       "version": "4.1.0",
8772 |       "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
8773 |       "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
8774 |       "license": "ISC",
8775 |       "engines": {
8776 |         "node": ">=14"
8777 |       },
8778 |       "funding": {
8779 |         "url": "https://github.com/sponsors/isaacs"
8780 |       }
8781 |     },
8782 |     "node_modules/simple-plist": {
8783 |       "version": "1.3.1",
8784 |       "resolved": "https://registry.npmjs.org/simple-plist/-/simple-plist-1.3.1.tgz",
8785 |       "integrity": "sha512-iMSw5i0XseMnrhtIzRb7XpQEXepa9xhWxGUojHBL43SIpQuDQkh3Wpy67ZbDzZVr6EKxvwVChnVpdl8hEVLDiw==",
8786 |       "license": "MIT",
8787 |       "dependencies": {
8788 |         "bplist-creator": "0.1.0",
8789 |         "bplist-parser": "0.3.1",
8790 |         "plist": "^3.0.5"
8791 |       }
8792 |     },
8793 |     "node_modules/simple-swizzle": {
8794 |       "version": "0.2.4",
8795 |       "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.4.tgz",
8796 |       "integrity": "sha512-nAu1WFPQSMNr2Zn9PGSZK9AGn4t/y97lEm+MXTtUDwfP0ksAIX4nO+6ruD9Jwut4C49SB1Ws+fbXsm/yScWOHw==",
8797 |       "license": "MIT",
8798 |       "dependencies": {
8799 |         "is-arrayish": "^0.3.1"
8800 |       }
8801 |     },
8802 |     "node_modules/simple-swizzle/node_modules/is-arrayish": {
8803 |       "version": "0.3.4",
8804 |       "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.4.tgz",
8805 |       "integrity": "sha512-m6UrgzFVUYawGBh1dUsWR5M2Clqic9RVXC/9f8ceNlv2IcO9j9J/z8UoCLPqtsPBFNzEpfR3xftohbfqDx8EQA==",
8806 |       "license": "MIT"
8807 |     },
8808 |     "node_modules/sisteransi": {
8809 |       "version": "1.0.5",
8810 |       "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
8811 |       "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==",
8812 |       "license": "MIT"
8813 |     },
8814 |     "node_modules/slash": {
8815 |       "version": "3.0.0",
8816 |       "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
8817 |       "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
8818 |       "license": "MIT",
8819 |       "engines": {
8820 |         "node": ">=8"
8821 |       }
8822 |     },
8823 |     "node_modules/slugify": {
8824 |       "version": "1.6.6",
8825 |       "resolved": "https://registry.npmjs.org/slugify/-/slugify-1.6.6.tgz",
8826 |       "integrity": "sha512-h+z7HKHYXj6wJU+AnS/+IH8Uh9fdcX1Lrhg1/VMdf9PwoBQXFcXiAdsy2tSK0P6gKwJLXp02r90ahUCqHk9rrw==",
8827 |       "license": "MIT",
8828 |       "engines": {
8829 |         "node": ">=8.0.0"
8830 |       }
8831 |     },
8832 |     "node_modules/source-map": {
8833 |       "version": "0.5.7",
8834 |       "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
8835 |       "integrity": "sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==",
8836 |       "license": "BSD-3-Clause",
8837 |       "engines": {
8838 |         "node": ">=0.10.0"
8839 |       }
8840 |     },
8841 |     "node_modules/source-map-js": {
8842 |       "version": "1.2.1",
8843 |       "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
8844 |       "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
8845 |       "license": "BSD-3-Clause",
8846 |       "engines": {
8847 |         "node": ">=0.10.0"
8848 |       }
8849 |     },
8850 |     "node_modules/source-map-support": {
8851 |       "version": "0.5.21",
8852 |       "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
8853 |       "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
8854 |       "license": "MIT",
8855 |       "dependencies": {
8856 |         "buffer-from": "^1.0.0",
8857 |         "source-map": "^0.6.0"
8858 |       }
8859 |     },
8860 |     "node_modules/source-map-support/node_modules/source-map": {
8861 |       "version": "0.6.1",
8862 |       "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
8863 |       "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
8864 |       "license": "BSD-3-Clause",
8865 |       "engines": {
8866 |         "node": ">=0.10.0"
8867 |       }
8868 |     },
8869 |     "node_modules/split-on-first": {
8870 |       "version": "1.1.0",
8871 |       "resolved": "https://registry.npmjs.org/split-on-first/-/split-on-first-1.1.0.tgz",
8872 |       "integrity": "sha512-43ZssAJaMusuKWL8sKUBQXHWOpq8d6CfN/u1p4gUzfJkM05C8rxTmYrkIPTXapZpORA6LkkzcUulJ8FqA7Uudw==",
8873 |       "license": "MIT",
8874 |       "engines": {
8875 |         "node": ">=6"
8876 |       }
8877 |     },
8878 |     "node_modules/sprintf-js": {
8879 |       "version": "1.0.3",
8880 |       "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
8881 |       "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==",
8882 |       "license": "BSD-3-Clause"
8883 |     },
8884 |     "node_modules/stack-utils": {
8885 |       "version": "2.0.6",
8886 |       "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.6.tgz",
8887 |       "integrity": "sha512-XlkWvfIm6RmsWtNJx+uqtKLS8eqFbxUg0ZzLXqY0caEy9l7hruX8IpiDnjsLavoBgqCCR71TqWO8MaXYheJ3RQ==",
8888 |       "license": "MIT",
8889 |       "dependencies": {
8890 |         "escape-string-regexp": "^2.0.0"
8891 |       },
8892 |       "engines": {
8893 |         "node": ">=10"
8894 |       }
8895 |     },
8896 |     "node_modules/stack-utils/node_modules/escape-string-regexp": {
8897 |       "version": "2.0.0",
8898 |       "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
8899 |       "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
8900 |       "license": "MIT",
8901 |       "engines": {
8902 |         "node": ">=8"
8903 |       }
8904 |     },
8905 |     "node_modules/stackframe": {
8906 |       "version": "1.3.4",
8907 |       "resolved": "https://registry.npmjs.org/stackframe/-/stackframe-1.3.4.tgz",
8908 |       "integrity": "sha512-oeVtt7eWQS+Na6F//S4kJ2K2VbRlS9D43mAlMyVpVWovy9o+jfgH8O9agzANzaiLjclA0oYzUXEM4PurhSUChw==",
8909 |       "license": "MIT"
8910 |     },
8911 |     "node_modules/stacktrace-parser": {
8912 |       "version": "0.1.11",
8913 |       "resolved": "https://registry.npmjs.org/stacktrace-parser/-/stacktrace-parser-0.1.11.tgz",
8914 |       "integrity": "sha512-WjlahMgHmCJpqzU8bIBy4qtsZdU9lRlcZE3Lvyej6t4tuOuv1vk57OW3MBrj6hXBFx/nNoC9MPMTcr5YA7NQbg==",
8915 |       "license": "MIT",
8916 |       "dependencies": {
8917 |         "type-fest": "^0.7.1"
8918 |       },
8919 |       "engines": {
8920 |         "node": ">=6"
8921 |       }
8922 |     },
8923 |     "node_modules/statuses": {
8924 |       "version": "1.5.0",
8925 |       "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
8926 |       "integrity": "sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA==",
8927 |       "license": "MIT",
8928 |       "engines": {
8929 |         "node": ">= 0.6"
8930 |       }
8931 |     },
8932 |     "node_modules/stream-buffers": {
8933 |       "version": "2.2.0",
8934 |       "resolved": "https://registry.npmjs.org/stream-buffers/-/stream-buffers-2.2.0.tgz",
8935 |       "integrity": "sha512-uyQK/mx5QjHun80FLJTfaWE7JtwfRMKBLkMne6udYOmvH0CawotVa7TfgYHzAnpphn4+TweIx1QKMnRIbipmUg==",
8936 |       "license": "Unlicense",
8937 |       "engines": {
8938 |         "node": ">= 0.10.0"
8939 |       }
8940 |     },
8941 |     "node_modules/strict-uri-encode": {
8942 |       "version": "2.0.0",
8943 |       "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-2.0.0.tgz",
8944 |       "integrity": "sha512-QwiXZgpRcKkhTj2Scnn++4PKtWsH0kpzZ62L2R6c/LUVYv7hVnZqcg2+sMuT6R7Jusu1vviK/MFsu6kNJfWlEQ==",
8945 |       "license": "MIT",
8946 |       "engines": {
8947 |         "node": ">=4"
8948 |       }
8949 |     },
8950 |     "node_modules/string-width": {
8951 |       "version": "5.1.2",
8952 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
8953 |       "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
8954 |       "license": "MIT",
8955 |       "dependencies": {
8956 |         "eastasianwidth": "^0.2.0",
8957 |         "emoji-regex": "^9.2.2",
8958 |         "strip-ansi": "^7.0.1"
8959 |       },
8960 |       "engines": {
8961 |         "node": ">=12"
8962 |       },
8963 |       "funding": {
8964 |         "url": "https://github.com/sponsors/sindresorhus"
8965 |       }
8966 |     },
8967 |     "node_modules/string-width-cjs": {
8968 |       "name": "string-width",
8969 |       "version": "4.2.3",
8970 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
8971 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
8972 |       "license": "MIT",
8973 |       "dependencies": {
8974 |         "emoji-regex": "^8.0.0",
8975 |         "is-fullwidth-code-point": "^3.0.0",
8976 |         "strip-ansi": "^6.0.1"
8977 |       },
8978 |       "engines": {
8979 |         "node": ">=8"
8980 |       }
8981 |     },
8982 |     "node_modules/string-width-cjs/node_modules/emoji-regex": {
8983 |       "version": "8.0.0",
8984 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
8985 |       "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
8986 |       "license": "MIT"
8987 |     },
8988 |     "node_modules/string-width-cjs/node_modules/strip-ansi": {
8989 |       "version": "6.0.1",
8990 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
8991 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
8992 |       "license": "MIT",
8993 |       "dependencies": {
8994 |         "ansi-regex": "^5.0.1"
8995 |       },
8996 |       "engines": {
8997 |         "node": ">=8"
8998 |       }
8999 |     },
9000 |     "node_modules/strip-ansi": {
9001 |       "version": "7.1.2",
9002 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz",
9003 |       "integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
9004 |       "license": "MIT",
9005 |       "dependencies": {
9006 |         "ansi-regex": "^6.0.1"
9007 |       },
9008 |       "engines": {
9009 |         "node": ">=12"
9010 |       },
9011 |       "funding": {
9012 |         "url": "https://github.com/chalk/strip-ansi?sponsor=1"
9013 |       }
9014 |     },
9015 |     "node_modules/strip-ansi-cjs": {
9016 |       "name": "strip-ansi",
9017 |       "version": "6.0.1",
9018 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
9019 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
9020 |       "license": "MIT",
9021 |       "dependencies": {
9022 |         "ansi-regex": "^5.0.1"
9023 |       },
9024 |       "engines": {
9025 |         "node": ">=8"
9026 |       }
9027 |     },
9028 |     "node_modules/strip-ansi/node_modules/ansi-regex": {
9029 |       "version": "6.2.2",
9030 |       "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
9031 |       "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
9032 |       "license": "MIT",
9033 |       "engines": {
9034 |         "node": ">=12"
9035 |       },
9036 |       "funding": {
9037 |         "url": "https://github.com/chalk/ansi-regex?sponsor=1"
9038 |       }
9039 |     },
9040 |     "node_modules/strip-json-comments": {
9041 |       "version": "2.0.1",
9042 |       "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
9043 |       "integrity": "sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==",
9044 |       "license": "MIT",
9045 |       "engines": {
9046 |         "node": ">=0.10.0"
9047 |       }
9048 |     },
9049 |     "node_modules/structured-headers": {
9050 |       "version": "0.4.1",
9051 |       "resolved": "https://registry.npmjs.org/structured-headers/-/structured-headers-0.4.1.tgz",
9052 |       "integrity": "sha512-0MP/Cxx5SzeeZ10p/bZI0S6MpgD+yxAhi1BOQ34jgnMXsCq3j1t6tQnZu+KdlL7dvJTLT3g9xN8tl10TqgFMcg==",
9053 |       "license": "MIT"
9054 |     },
9055 |     "node_modules/styleq": {
9056 |       "version": "0.1.3",
9057 |       "resolved": "https://registry.npmjs.org/styleq/-/styleq-0.1.3.tgz",
9058 |       "integrity": "sha512-3ZUifmCDCQanjeej1f6kyl/BeP/Vae5EYkQ9iJfUm/QwZvlgnZzyflqAsAWYURdtea8Vkvswu2GrC57h3qffcA==",
9059 |       "license": "MIT"
9060 |     },
9061 |     "node_modules/sucrase": {
9062 |       "version": "3.35.0",
9063 |       "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
9064 |       "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
9065 |       "license": "MIT",
9066 |       "dependencies": {
9067 |         "@jridgewell/gen-mapping": "^0.3.2",
9068 |         "commander": "^4.0.0",
9069 |         "glob": "^10.3.10",
9070 |         "lines-and-columns": "^1.1.6",
9071 |         "mz": "^2.7.0",
9072 |         "pirates": "^4.0.1",
9073 |         "ts-interface-checker": "^0.1.9"
9074 |       },
9075 |       "bin": {
9076 |         "sucrase": "bin/sucrase",
9077 |         "sucrase-node": "bin/sucrase-node"
9078 |       },
9079 |       "engines": {
9080 |         "node": ">=16 || 14 >=14.17"
9081 |       }
9082 |     },
9083 |     "node_modules/sucrase/node_modules/commander": {
9084 |       "version": "4.1.1",
9085 |       "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
9086 |       "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
9087 |       "license": "MIT",
9088 |       "engines": {
9089 |         "node": ">= 6"
9090 |       }
9091 |     },
9092 |     "node_modules/supports-color": {
9093 |       "version": "5.5.0",
9094 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
9095 |       "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
9096 |       "license": "MIT",
9097 |       "dependencies": {
9098 |         "has-flag": "^3.0.0"
9099 |       },
9100 |       "engines": {
9101 |         "node": ">=4"
9102 |       }
9103 |     },
9104 |     "node_modules/supports-hyperlinks": {
9105 |       "version": "2.3.0",
9106 |       "resolved": "https://registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.3.0.tgz",
9107 |       "integrity": "sha512-RpsAZlpWcDwOPQA22aCH4J0t7L8JmAvsCxfOSEwm7cQs3LshN36QaTkwd70DnBOXDWGssw2eUoc8CaRWT0XunA==",
9108 |       "license": "MIT",
9109 |       "dependencies": {
9110 |         "has-flag": "^4.0.0",
9111 |         "supports-color": "^7.0.0"
9112 |       },
9113 |       "engines": {
9114 |         "node": ">=8"
9115 |       }
9116 |     },
9117 |     "node_modules/supports-hyperlinks/node_modules/has-flag": {
9118 |       "version": "4.0.0",
9119 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
9120 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
9121 |       "license": "MIT",
9122 |       "engines": {
9123 |         "node": ">=8"
9124 |       }
9125 |     },
9126 |     "node_modules/supports-hyperlinks/node_modules/supports-color": {
9127 |       "version": "7.2.0",
9128 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
9129 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
9130 |       "license": "MIT",
9131 |       "dependencies": {
9132 |         "has-flag": "^4.0.0"
9133 |       },
9134 |       "engines": {
9135 |         "node": ">=8"
9136 |       }
9137 |     },
9138 |     "node_modules/supports-preserve-symlinks-flag": {
9139 |       "version": "1.0.0",
9140 |       "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
9141 |       "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
9142 |       "license": "MIT",
9143 |       "engines": {
9144 |         "node": ">= 0.4"
9145 |       },
9146 |       "funding": {
9147 |         "url": "https://github.com/sponsors/ljharb"
9148 |       }
9149 |     },
9150 |     "node_modules/tar": {
9151 |       "version": "7.4.3",
9152 |       "resolved": "https://registry.npmjs.org/tar/-/tar-7.4.3.tgz",
9153 |       "integrity": "sha512-5S7Va8hKfV7W5U6g3aYxXmlPoZVAwUMy9AOKyF2fVuZa2UD3qZjg578OrLRt8PcNN1PleVaL/5/yYATNL0ICUw==",
9154 |       "license": "ISC",
9155 |       "dependencies": {
9156 |         "@isaacs/fs-minipass": "^4.0.0",
9157 |         "chownr": "^3.0.0",
9158 |         "minipass": "^7.1.2",
9159 |         "minizlib": "^3.0.1",
9160 |         "mkdirp": "^3.0.1",
9161 |         "yallist": "^5.0.0"
9162 |       },
9163 |       "engines": {
9164 |         "node": ">=18"
9165 |       }
9166 |     },
9167 |     "node_modules/tar/node_modules/mkdirp": {
9168 |       "version": "3.0.1",
9169 |       "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-3.0.1.tgz",
9170 |       "integrity": "sha512-+NsyUUAZDmo6YVHzL/stxSu3t9YS1iljliy3BSDrXJ/dkn1KYdmtZODGGjLcc9XLgVVpH4KshHB8XmZgMhaBXg==",
9171 |       "license": "MIT",
9172 |       "bin": {
9173 |         "mkdirp": "dist/cjs/src/bin.js"
9174 |       },
9175 |       "engines": {
9176 |         "node": ">=10"
9177 |       },
9178 |       "funding": {
9179 |         "url": "https://github.com/sponsors/isaacs"
9180 |       }
9181 |     },
9182 |     "node_modules/tar/node_modules/yallist": {
9183 |       "version": "5.0.0",
9184 |       "resolved": "https://registry.npmjs.org/yallist/-/yallist-5.0.0.tgz",
9185 |       "integrity": "sha512-YgvUTfwqyc7UXVMrB+SImsVYSmTS8X/tSrtdNZMImM+n7+QTriRXyXim0mBrTXNeqzVF0KWGgHPeiyViFFrNDw==",
9186 |       "license": "BlueOak-1.0.0",
9187 |       "engines": {
9188 |         "node": ">=18"
9189 |       }
9190 |     },
9191 |     "node_modules/temp-dir": {
9192 |       "version": "2.0.0",
9193 |       "resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-2.0.0.tgz",
9194 |       "integrity": "sha512-aoBAniQmmwtcKp/7BzsH8Cxzv8OL736p7v1ihGb5e9DJ9kTwGWHrQrVB5+lfVDzfGrdRzXch+ig7LHaY1JTOrg==",
9195 |       "license": "MIT",
9196 |       "engines": {
9197 |         "node": ">=8"
9198 |       }
9199 |     },
9200 |     "node_modules/terminal-link": {
9201 |       "version": "2.1.1",
9202 |       "resolved": "https://registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz",
9203 |       "integrity": "sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==",
9204 |       "license": "MIT",
9205 |       "dependencies": {
9206 |         "ansi-escapes": "^4.2.1",
9207 |         "supports-hyperlinks": "^2.0.0"
9208 |       },
9209 |       "engines": {
9210 |         "node": ">=8"
9211 |       },
9212 |       "funding": {
9213 |         "url": "https://github.com/sponsors/sindresorhus"
9214 |       }
9215 |     },
9216 |     "node_modules/terser": {
9217 |       "version": "5.44.0",
9218 |       "resolved": "https://registry.npmjs.org/terser/-/terser-5.44.0.tgz",
9219 |       "integrity": "sha512-nIVck8DK+GM/0Frwd+nIhZ84pR/BX7rmXMfYwyg+Sri5oGVE99/E3KvXqpC2xHFxyqXyGHTKBSioxxplrO4I4w==",
9220 |       "license": "BSD-2-Clause",
9221 |       "dependencies": {
9222 |         "@jridgewell/source-map": "^0.3.3",
9223 |         "acorn": "^8.15.0",
9224 |         "commander": "^2.20.0",
9225 |         "source-map-support": "~0.5.20"
9226 |       },
9227 |       "bin": {
9228 |         "terser": "bin/terser"
9229 |       },
9230 |       "engines": {
9231 |         "node": ">=10"
9232 |       }
9233 |     },
9234 |     "node_modules/terser/node_modules/commander": {
9235 |       "version": "2.20.3",
9236 |       "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
9237 |       "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
9238 |       "license": "MIT"
9239 |     },
9240 |     "node_modules/test-exclude": {
9241 |       "version": "6.0.0",
9242 |       "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
9243 |       "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
9244 |       "license": "ISC",
9245 |       "dependencies": {
9246 |         "@istanbuljs/schema": "^0.1.2",
9247 |         "glob": "^7.1.4",
9248 |         "minimatch": "^3.0.4"
9249 |       },
9250 |       "engines": {
9251 |         "node": ">=8"
9252 |       }
9253 |     },
9254 |     "node_modules/test-exclude/node_modules/brace-expansion": {
9255 |       "version": "1.1.12",
9256 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
9257 |       "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
9258 |       "license": "MIT",
9259 |       "dependencies": {
9260 |         "balanced-match": "^1.0.0",
9261 |         "concat-map": "0.0.1"
9262 |       }
9263 |     },
9264 |     "node_modules/test-exclude/node_modules/glob": {
9265 |       "version": "7.2.3",
9266 |       "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
9267 |       "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
9268 |       "deprecated": "Glob versions prior to v9 are no longer supported",
9269 |       "license": "ISC",
9270 |       "dependencies": {
9271 |         "fs.realpath": "^1.0.0",
9272 |         "inflight": "^1.0.4",
9273 |         "inherits": "2",
9274 |         "minimatch": "^3.1.1",
9275 |         "once": "^1.3.0",
9276 |         "path-is-absolute": "^1.0.0"
9277 |       },
9278 |       "engines": {
9279 |         "node": "*"
9280 |       },
9281 |       "funding": {
9282 |         "url": "https://github.com/sponsors/isaacs"
9283 |       }
9284 |     },
9285 |     "node_modules/test-exclude/node_modules/minimatch": {
9286 |       "version": "3.1.2",
9287 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
9288 |       "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
9289 |       "license": "ISC",
9290 |       "dependencies": {
9291 |         "brace-expansion": "^1.1.7"
9292 |       },
9293 |       "engines": {
9294 |         "node": "*"
9295 |       }
9296 |     },
9297 |     "node_modules/thenify": {
9298 |       "version": "3.3.1",
9299 |       "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
9300 |       "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
9301 |       "license": "MIT",
9302 |       "dependencies": {
9303 |         "any-promise": "^1.0.0"
9304 |       }
9305 |     },
9306 |     "node_modules/thenify-all": {
9307 |       "version": "1.6.0",
9308 |       "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
9309 |       "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
9310 |       "license": "MIT",
9311 |       "dependencies": {
9312 |         "thenify": ">= 3.1.0 < 4"
9313 |       },
9314 |       "engines": {
9315 |         "node": ">=0.8"
9316 |       }
9317 |     },
9318 |     "node_modules/throat": {
9319 |       "version": "5.0.0",
9320 |       "resolved": "https://registry.npmjs.org/throat/-/throat-5.0.0.tgz",
9321 |       "integrity": "sha512-fcwX4mndzpLQKBS1DVYhGAcYaYt7vsHNIvQV+WXMvnow5cgjPphq5CaayLaGsjRdSCKZFNGt7/GYAuXaNOiYCA==",
9322 |       "license": "MIT"
9323 |     },
9324 |     "node_modules/tmpl": {
9325 |       "version": "1.0.5",
9326 |       "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
9327 |       "integrity": "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw==",
9328 |       "license": "BSD-3-Clause"
9329 |     },
9330 |     "node_modules/to-regex-range": {
9331 |       "version": "5.0.1",
9332 |       "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
9333 |       "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
9334 |       "license": "MIT",
9335 |       "dependencies": {
9336 |         "is-number": "^7.0.0"
9337 |       },
9338 |       "engines": {
9339 |         "node": ">=8.0"
9340 |       }
9341 |     },
9342 |     "node_modules/toidentifier": {
9343 |       "version": "1.0.1",
9344 |       "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
9345 |       "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
9346 |       "license": "MIT",
9347 |       "engines": {
9348 |         "node": ">=0.6"
9349 |       }
9350 |     },
9351 |     "node_modules/tr46": {
9352 |       "version": "0.0.3",
9353 |       "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
9354 |       "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
9355 |       "license": "MIT"
9356 |     },
9357 |     "node_modules/ts-interface-checker": {
9358 |       "version": "0.1.13",
9359 |       "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
9360 |       "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
9361 |       "license": "Apache-2.0"
9362 |     },
9363 |     "node_modules/type-detect": {
9364 |       "version": "4.0.8",
9365 |       "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
9366 |       "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==",
9367 |       "license": "MIT",
9368 |       "engines": {
9369 |         "node": ">=4"
9370 |       }
9371 |     },
9372 |     "node_modules/type-fest": {
9373 |       "version": "0.7.1",
9374 |       "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.7.1.tgz",
9375 |       "integrity": "sha512-Ne2YiiGN8bmrmJJEuTWTLJR32nh/JdL1+PSicowtNb0WFpn59GK8/lfD61bVtzguz7b3PBt74nxpv/Pw5po5Rg==",
9376 |       "license": "(MIT OR CC0-1.0)",
9377 |       "engines": {
9378 |         "node": ">=8"
9379 |       }
9380 |     },
9381 |     "node_modules/ua-parser-js": {
9382 |       "version": "0.7.41",
9383 |       "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-0.7.41.tgz",
9384 |       "integrity": "sha512-O3oYyCMPYgNNHuO7Jjk3uacJWZF8loBgwrfd/5LE/HyZ3lUIOdniQ7DNXJcIgZbwioZxk0fLfI4EVnetdiX5jg==",
9385 |       "funding": [
9386 |         {
9387 |           "type": "opencollective",
9388 |           "url": "https://opencollective.com/ua-parser-js"
9389 |         },
9390 |         {
9391 |           "type": "paypal",
9392 |           "url": "https://paypal.me/faisalman"
9393 |         },
9394 |         {
9395 |           "type": "github",
9396 |           "url": "https://github.com/sponsors/faisalman"
9397 |         }
9398 |       ],
9399 |       "license": "MIT",
9400 |       "bin": {
9401 |         "ua-parser-js": "script/cli.js"
9402 |       },
9403 |       "engines": {
9404 |         "node": "*"
9405 |       }
9406 |     },
9407 |     "node_modules/undici": {
9408 |       "version": "6.21.3",
9409 |       "resolved": "https://registry.npmjs.org/undici/-/undici-6.21.3.tgz",
9410 |       "integrity": "sha512-gBLkYIlEnSp8pFbT64yFgGE6UIB9tAkhukC23PmMDCe5Nd+cRqKxSjw5y54MK2AZMgZfJWMaNE4nYUHgi1XEOw==",
9411 |       "license": "MIT",
9412 |       "engines": {
9413 |         "node": ">=18.17"
9414 |       }
9415 |     },
9416 |     "node_modules/undici-types": {
9417 |       "version": "7.12.0",
9418 |       "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.12.0.tgz",
9419 |       "integrity": "sha512-goOacqME2GYyOZZfb5Lgtu+1IDmAlAEu5xnD3+xTzS10hT0vzpf0SPjkXwAw9Jm+4n/mQGDP3LO8CPbYROeBfQ==",
9420 |       "license": "MIT"
9421 |     },
9422 |     "node_modules/unicode-canonical-property-names-ecmascript": {
9423 |       "version": "2.0.1",
9424 |       "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.1.tgz",
9425 |       "integrity": "sha512-dA8WbNeb2a6oQzAQ55YlT5vQAWGV9WXOsi3SskE3bcCdM0P4SDd+24zS/OCacdRq5BkdsRj9q3Pg6YyQoxIGqg==",
9426 |       "license": "MIT",
9427 |       "engines": {
9428 |         "node": ">=4"
9429 |       }
9430 |     },
9431 |     "node_modules/unicode-match-property-ecmascript": {
9432 |       "version": "2.0.0",
9433 |       "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
9434 |       "integrity": "sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==",
9435 |       "license": "MIT",
9436 |       "dependencies": {
9437 |         "unicode-canonical-property-names-ecmascript": "^2.0.0",
9438 |         "unicode-property-aliases-ecmascript": "^2.0.0"
9439 |       },
9440 |       "engines": {
9441 |         "node": ">=4"
9442 |       }
9443 |     },
9444 |     "node_modules/unicode-match-property-value-ecmascript": {
9445 |       "version": "2.2.1",
9446 |       "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-2.2.1.tgz",
9447 |       "integrity": "sha512-JQ84qTuMg4nVkx8ga4A16a1epI9H6uTXAknqxkGF/aFfRLw1xC/Bp24HNLaZhHSkWd3+84t8iXnp1J0kYcZHhg==",
9448 |       "license": "MIT",
9449 |       "engines": {
9450 |         "node": ">=4"
9451 |       }
9452 |     },
9453 |     "node_modules/unicode-property-aliases-ecmascript": {
9454 |       "version": "2.2.0",
9455 |       "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.2.0.tgz",
9456 |       "integrity": "sha512-hpbDzxUY9BFwX+UeBnxv3Sh1q7HFxj48DTmXchNgRa46lO8uj3/1iEn3MiNUYTg1g9ctIqXCCERn8gYZhHC5lQ==",
9457 |       "license": "MIT",
9458 |       "engines": {
9459 |         "node": ">=4"
9460 |       }
9461 |     },
9462 |     "node_modules/unique-string": {
9463 |       "version": "2.0.0",
9464 |       "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
9465 |       "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
9466 |       "license": "MIT",
9467 |       "dependencies": {
9468 |         "crypto-random-string": "^2.0.0"
9469 |       },
9470 |       "engines": {
9471 |         "node": ">=8"
9472 |       }
9473 |     },
9474 |     "node_modules/unpipe": {
9475 |       "version": "1.0.0",
9476 |       "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
9477 |       "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
9478 |       "license": "MIT",
9479 |       "engines": {
9480 |         "node": ">= 0.8"
9481 |       }
9482 |     },
9483 |     "node_modules/update-browserslist-db": {
9484 |       "version": "1.1.3",
9485 |       "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz",
9486 |       "integrity": "sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==",
9487 |       "funding": [
9488 |         {
9489 |           "type": "opencollective",
9490 |           "url": "https://opencollective.com/browserslist"
9491 |         },
9492 |         {
9493 |           "type": "tidelift",
9494 |           "url": "https://tidelift.com/funding/github/npm/browserslist"
9495 |         },
9496 |         {
9497 |           "type": "github",
9498 |           "url": "https://github.com/sponsors/ai"
9499 |         }
9500 |       ],
9501 |       "license": "MIT",
9502 |       "dependencies": {
9503 |         "escalade": "^3.2.0",
9504 |         "picocolors": "^1.1.1"
9505 |       },
9506 |       "bin": {
9507 |         "update-browserslist-db": "cli.js"
9508 |       },
9509 |       "peerDependencies": {
9510 |         "browserslist": ">= 4.21.0"
9511 |       }
9512 |     },
9513 |     "node_modules/use-latest-callback": {
9514 |       "version": "0.2.4",
9515 |       "resolved": "https://registry.npmjs.org/use-latest-callback/-/use-latest-callback-0.2.4.tgz",
9516 |       "integrity": "sha512-LS2s2n1usUUnDq4oVh1ca6JFX9uSqUncTfAm44WMg0v6TxL7POUTk1B044NH8TeLkFbNajIsgDHcgNpNzZucdg==",
9517 |       "license": "MIT",
9518 |       "peerDependencies": {
9519 |         "react": ">=16.8"
9520 |       }
9521 |     },
9522 |     "node_modules/use-sync-external-store": {
9523 |       "version": "1.5.0",
9524 |       "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.5.0.tgz",
9525 |       "integrity": "sha512-Rb46I4cGGVBmjamjphe8L/UnvJD+uPPtTkNvX5mZgqdbavhI4EbgIWJiIHXJ8bc/i9EQGPRh4DwEURJ552Do0A==",
9526 |       "license": "MIT",
9527 |       "peerDependencies": {
9528 |         "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
9529 |       }
9530 |     },
9531 |     "node_modules/utils-merge": {
9532 |       "version": "1.0.1",
9533 |       "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
9534 |       "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
9535 |       "license": "MIT",
9536 |       "engines": {
9537 |         "node": ">= 0.4.0"
9538 |       }
9539 |     },
9540 |     "node_modules/uuid": {
9541 |       "version": "7.0.3",
9542 |       "resolved": "https://registry.npmjs.org/uuid/-/uuid-7.0.3.tgz",
9543 |       "integrity": "sha512-DPSke0pXhTZgoF/d+WSt2QaKMCFSfx7QegxEWT+JOuHF5aWrKEn0G+ztjuJg/gG8/ItK+rbPCD/yNv8yyih6Cg==",
9544 |       "license": "MIT",
9545 |       "bin": {
9546 |         "uuid": "dist/bin/uuid"
9547 |       }
9548 |     },
9549 |     "node_modules/validate-npm-package-name": {
9550 |       "version": "5.0.1",
9551 |       "resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-5.0.1.tgz",
9552 |       "integrity": "sha512-OljLrQ9SQdOUqTaQxqL5dEfZWrXExyyWsozYlAWFawPVNuD83igl7uJD2RTkNMbniIYgt8l81eCJGIdQF7avLQ==",
9553 |       "license": "ISC",
9554 |       "engines": {
9555 |         "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
9556 |       }
9557 |     },
9558 |     "node_modules/vary": {
9559 |       "version": "1.1.2",
9560 |       "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
9561 |       "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
9562 |       "license": "MIT",
9563 |       "engines": {
9564 |         "node": ">= 0.8"
9565 |       }
9566 |     },
9567 |     "node_modules/vlq": {
9568 |       "version": "1.0.1",
9569 |       "resolved": "https://registry.npmjs.org/vlq/-/vlq-1.0.1.tgz",
9570 |       "integrity": "sha512-gQpnTgkubC6hQgdIcRdYGDSDc+SaujOdyesZQMv6JlfQee/9Mp0Qhnys6WxDWvQnL5WZdT7o2Ul187aSt0Rq+w==",
9571 |       "license": "MIT"
9572 |     },
9573 |     "node_modules/walker": {
9574 |       "version": "1.0.8",
9575 |       "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.8.tgz",
9576 |       "integrity": "sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==",
9577 |       "license": "Apache-2.0",
9578 |       "dependencies": {
9579 |         "makeerror": "1.0.12"
9580 |       }
9581 |     },
9582 |     "node_modules/warn-once": {
9583 |       "version": "0.1.1",
9584 |       "resolved": "https://registry.npmjs.org/warn-once/-/warn-once-0.1.1.tgz",
9585 |       "integrity": "sha512-VkQZJbO8zVImzYFteBXvBOZEl1qL175WH8VmZcxF2fZAoudNhNDvHi+doCaAEdU2l2vtcIwa2zn0QK5+I1HQ3Q==",
9586 |       "license": "MIT"
9587 |     },
9588 |     "node_modules/wcwidth": {
9589 |       "version": "1.0.1",
9590 |       "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
9591 |       "integrity": "sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==",
9592 |       "license": "MIT",
9593 |       "dependencies": {
9594 |         "defaults": "^1.0.3"
9595 |       }
9596 |     },
9597 |     "node_modules/webidl-conversions": {
9598 |       "version": "5.0.0",
9599 |       "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-5.0.0.tgz",
9600 |       "integrity": "sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA==",
9601 |       "license": "BSD-2-Clause",
9602 |       "engines": {
9603 |         "node": ">=8"
9604 |       }
9605 |     },
9606 |     "node_modules/whatwg-fetch": {
9607 |       "version": "3.6.20",
9608 |       "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.6.20.tgz",
9609 |       "integrity": "sha512-EqhiFU6daOA8kpjOWTL0olhVOF3i7OrFzSYiGsEMB8GcXS+RrzauAERX65xMeNWVqxA6HXH2m69Z9LaKKdisfg==",
9610 |       "license": "MIT"
9611 |     },
9612 |     "node_modules/whatwg-url": {
9613 |       "version": "5.0.0",
9614 |       "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
9615 |       "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
9616 |       "license": "MIT",
9617 |       "dependencies": {
9618 |         "tr46": "~0.0.3",
9619 |         "webidl-conversions": "^3.0.0"
9620 |       }
9621 |     },
9622 |     "node_modules/whatwg-url-without-unicode": {
9623 |       "version": "8.0.0-3",
9624 |       "resolved": "https://registry.npmjs.org/whatwg-url-without-unicode/-/whatwg-url-without-unicode-8.0.0-3.tgz",
9625 |       "integrity": "sha512-HoKuzZrUlgpz35YO27XgD28uh/WJH4B0+3ttFqRo//lmq+9T/mIOJ6kqmINI9HpUpz1imRC/nR/lxKpJiv0uig==",
9626 |       "license": "MIT",
9627 |       "dependencies": {
9628 |         "buffer": "^5.4.3",
9629 |         "punycode": "^2.1.1",
9630 |         "webidl-conversions": "^5.0.0"
9631 |       },
9632 |       "engines": {
9633 |         "node": ">=10"
9634 |       }
9635 |     },
9636 |     "node_modules/whatwg-url/node_modules/webidl-conversions": {
9637 |       "version": "3.0.1",
9638 |       "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
9639 |       "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
9640 |       "license": "BSD-2-Clause"
9641 |     },
9642 |     "node_modules/which": {
9643 |       "version": "2.0.2",
9644 |       "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
9645 |       "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
9646 |       "license": "ISC",
9647 |       "dependencies": {
9648 |         "isexe": "^2.0.0"
9649 |       },
9650 |       "bin": {
9651 |         "node-which": "bin/node-which"
9652 |       },
9653 |       "engines": {
9654 |         "node": ">= 8"
9655 |       }
9656 |     },
9657 |     "node_modules/wonka": {
9658 |       "version": "6.3.5",
9659 |       "resolved": "https://registry.npmjs.org/wonka/-/wonka-6.3.5.tgz",
9660 |       "integrity": "sha512-SSil+ecw6B4/Dm7Pf2sAshKQ5hWFvfyGlfPbEd6A14dOH6VDjrmbY86u6nZvy9omGwwIPFR8V41+of1EezgoUw==",
9661 |       "license": "MIT"
9662 |     },
9663 |     "node_modules/wrap-ansi": {
9664 |       "version": "8.1.0",
9665 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
9666 |       "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
9667 |       "license": "MIT",
9668 |       "dependencies": {
9669 |         "ansi-styles": "^6.1.0",
9670 |         "string-width": "^5.0.1",
9671 |         "strip-ansi": "^7.0.1"
9672 |       },
9673 |       "engines": {
9674 |         "node": ">=12"
9675 |       },
9676 |       "funding": {
9677 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
9678 |       }
9679 |     },
9680 |     "node_modules/wrap-ansi-cjs": {
9681 |       "name": "wrap-ansi",
9682 |       "version": "7.0.0",
9683 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
9684 |       "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
9685 |       "license": "MIT",
9686 |       "dependencies": {
9687 |         "ansi-styles": "^4.0.0",
9688 |         "string-width": "^4.1.0",
9689 |         "strip-ansi": "^6.0.0"
9690 |       },
9691 |       "engines": {
9692 |         "node": ">=10"
9693 |       },
9694 |       "funding": {
9695 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
9696 |       }
9697 |     },
9698 |     "node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
9699 |       "version": "4.3.0",
9700 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
9701 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
9702 |       "license": "MIT",
9703 |       "dependencies": {
9704 |         "color-convert": "^2.0.1"
9705 |       },
9706 |       "engines": {
9707 |         "node": ">=8"
9708 |       },
9709 |       "funding": {
9710 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
9711 |       }
9712 |     },
9713 |     "node_modules/wrap-ansi-cjs/node_modules/color-convert": {
9714 |       "version": "2.0.1",
9715 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
9716 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
9717 |       "license": "MIT",
9718 |       "dependencies": {
9719 |         "color-name": "~1.1.4"
9720 |       },
9721 |       "engines": {
9722 |         "node": ">=7.0.0"
9723 |       }
9724 |     },
9725 |     "node_modules/wrap-ansi-cjs/node_modules/color-name": {
9726 |       "version": "1.1.4",
9727 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
9728 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
9729 |       "license": "MIT"
9730 |     },
9731 |     "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
9732 |       "version": "8.0.0",
9733 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
9734 |       "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
9735 |       "license": "MIT"
9736 |     },
9737 |     "node_modules/wrap-ansi-cjs/node_modules/string-width": {
9738 |       "version": "4.2.3",
9739 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
9740 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
9741 |       "license": "MIT",
9742 |       "dependencies": {
9743 |         "emoji-regex": "^8.0.0",
9744 |         "is-fullwidth-code-point": "^3.0.0",
9745 |         "strip-ansi": "^6.0.1"
9746 |       },
9747 |       "engines": {
9748 |         "node": ">=8"
9749 |       }
9750 |     },
9751 |     "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
9752 |       "version": "6.0.1",
9753 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
9754 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
9755 |       "license": "MIT",
9756 |       "dependencies": {
9757 |         "ansi-regex": "^5.0.1"
9758 |       },
9759 |       "engines": {
9760 |         "node": ">=8"
9761 |       }
9762 |     },
9763 |     "node_modules/wrap-ansi/node_modules/ansi-styles": {
9764 |       "version": "6.2.3",
9765 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
9766 |       "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
9767 |       "license": "MIT",
9768 |       "engines": {
9769 |         "node": ">=12"
9770 |       },
9771 |       "funding": {
9772 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
9773 |       }
9774 |     },
9775 |     "node_modules/wrappy": {
9776 |       "version": "1.0.2",
9777 |       "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
9778 |       "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
9779 |       "license": "ISC"
9780 |     },
9781 |     "node_modules/write-file-atomic": {
9782 |       "version": "4.0.2",
9783 |       "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-4.0.2.tgz",
9784 |       "integrity": "sha512-7KxauUdBmSdWnmpaGFg+ppNjKF8uNLry8LyzjauQDOVONfFLNKrKvQOxZ/VuTIcS/gge/YNahf5RIIQWTSarlg==",
9785 |       "license": "ISC",
9786 |       "dependencies": {
9787 |         "imurmurhash": "^0.1.4",
9788 |         "signal-exit": "^3.0.7"
9789 |       },
9790 |       "engines": {
9791 |         "node": "^12.13.0 || ^14.15.0 || >=16.0.0"
9792 |       }
9793 |     },
9794 |     "node_modules/write-file-atomic/node_modules/signal-exit": {
9795 |       "version": "3.0.7",
9796 |       "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
9797 |       "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
9798 |       "license": "ISC"
9799 |     },
9800 |     "node_modules/ws": {
9801 |       "version": "7.5.10",
9802 |       "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.10.tgz",
9803 |       "integrity": "sha512-+dbF1tHwZpXcbOJdVOkzLDxZP1ailvSxM6ZweXTegylPny803bFhA+vqBYw4s31NSAk4S2Qz+AKXK9a4wkdjcQ==",
9804 |       "license": "MIT",
9805 |       "engines": {
9806 |         "node": ">=8.3.0"
9807 |       },
9808 |       "peerDependencies": {
9809 |         "bufferutil": "^4.0.1",
9810 |         "utf-8-validate": "^5.0.2"
9811 |       },
9812 |       "peerDependenciesMeta": {
9813 |         "bufferutil": {
9814 |           "optional": true
9815 |         },
9816 |         "utf-8-validate": {
9817 |           "optional": true
9818 |         }
9819 |       }
9820 |     },
9821 |     "node_modules/xcode": {
9822 |       "version": "3.0.1",
9823 |       "resolved": "https://registry.npmjs.org/xcode/-/xcode-3.0.1.tgz",
9824 |       "integrity": "sha512-kCz5k7J7XbJtjABOvkc5lJmkiDh8VhjVCGNiqdKCscmVpdVUpEAyXv1xmCLkQJ5dsHqx3IPO4XW+NTDhU/fatA==",
9825 |       "license": "Apache-2.0",
9826 |       "dependencies": {
9827 |         "simple-plist": "^1.1.0",
9828 |         "uuid": "^7.0.3"
9829 |       },
9830 |       "engines": {
9831 |         "node": ">=10.0.0"
9832 |       }
9833 |     },
9834 |     "node_modules/xml2js": {
9835 |       "version": "0.6.0",
9836 |       "resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.6.0.tgz",
9837 |       "integrity": "sha512-eLTh0kA8uHceqesPqSE+VvO1CDDJWMwlQfB6LuN6T8w6MaDJ8Txm8P7s5cHD0miF0V+GGTZrDQfxPZQVsur33w==",
9838 |       "license": "MIT",
9839 |       "dependencies": {
9840 |         "sax": ">=0.6.0",
9841 |         "xmlbuilder": "~11.0.0"
9842 |       },
9843 |       "engines": {
9844 |         "node": ">=4.0.0"
9845 |       }
9846 |     },
9847 |     "node_modules/xml2js/node_modules/xmlbuilder": {
9848 |       "version": "11.0.1",
9849 |       "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz",
9850 |       "integrity": "sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA==",
9851 |       "license": "MIT",
9852 |       "engines": {
9853 |         "node": ">=4.0"
9854 |       }
9855 |     },
9856 |     "node_modules/xmlbuilder": {
9857 |       "version": "15.1.1",
9858 |       "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-15.1.1.tgz",
9859 |       "integrity": "sha512-yMqGBqtXyeN1e3TGYvgNgDVZ3j84W4cwkOXQswghol6APgZWaff9lnbvN7MHYJOiXsvGPXtjTYJEiC9J2wv9Eg==",
9860 |       "license": "MIT",
9861 |       "engines": {
9862 |         "node": ">=8.0"
9863 |       }
9864 |     },
9865 |     "node_modules/y18n": {
9866 |       "version": "5.0.8",
9867 |       "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
9868 |       "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
9869 |       "license": "ISC",
9870 |       "engines": {
9871 |         "node": ">=10"
9872 |       }
9873 |     },
9874 |     "node_modules/yallist": {
9875 |       "version": "3.1.1",
9876 |       "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
9877 |       "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
9878 |       "license": "ISC"
9879 |     },
9880 |     "node_modules/yargs": {
9881 |       "version": "17.7.2",
9882 |       "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
9883 |       "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
9884 |       "license": "MIT",
9885 |       "dependencies": {
9886 |         "cliui": "^8.0.1",
9887 |         "escalade": "^3.1.1",
9888 |         "get-caller-file": "^2.0.5",
9889 |         "require-directory": "^2.1.1",
9890 |         "string-width": "^4.2.3",
9891 |         "y18n": "^5.0.5",
9892 |         "yargs-parser": "^21.1.1"
9893 |       },
9894 |       "engines": {
9895 |         "node": ">=12"
9896 |       }
9897 |     },
9898 |     "node_modules/yargs-parser": {
9899 |       "version": "21.1.1",
9900 |       "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
9901 |       "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
9902 |       "license": "ISC",
9903 |       "engines": {
9904 |         "node": ">=12"
9905 |       }
9906 |     },
9907 |     "node_modules/yargs/node_modules/emoji-regex": {
9908 |       "version": "8.0.0",
9909 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
9910 |       "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
9911 |       "license": "MIT"
9912 |     },
9913 |     "node_modules/yargs/node_modules/string-width": {
9914 |       "version": "4.2.3",
9915 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
9916 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
9917 |       "license": "MIT",
9918 |       "dependencies": {
9919 |         "emoji-regex": "^8.0.0",
9920 |         "is-fullwidth-code-point": "^3.0.0",
9921 |         "strip-ansi": "^6.0.1"
9922 |       },
9923 |       "engines": {
9924 |         "node": ">=8"
9925 |       }
9926 |     },
9927 |     "node_modules/yargs/node_modules/strip-ansi": {
9928 |       "version": "6.0.1",
9929 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
9930 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
9931 |       "license": "MIT",
9932 |       "dependencies": {
9933 |         "ansi-regex": "^5.0.1"
9934 |       },
9935 |       "engines": {
9936 |         "node": ">=8"
9937 |       }
9938 |     },
9939 |     "node_modules/yocto-queue": {
9940 |       "version": "0.1.0",
9941 |       "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
9942 |       "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
9943 |       "license": "MIT",
9944 |       "engines": {
9945 |         "node": ">=10"
9946 |       },
9947 |       "funding": {
9948 |         "url": "https://github.com/sponsors/sindresorhus"
9949 |       }
9950 |     }
9951 |   }
9952 | }
9953 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "xpens",
 3 |   "version": "1.0.0",
 4 |   "main": "index.js",
 5 |   "scripts": {
 6 |     "start": "expo start",
 7 |     "android": "expo start --android",
 8 |     "ios": "expo start --ios",
 9 |     "web": "expo start --web"
10 |   },
11 |   "dependencies": {
12 |     "@expo/metro-config": "~54.0.2",
13 |     "@react-native-async-storage/async-storage": "2.2.0",
14 |     "@react-native-community/datetimepicker": "8.4.4",
15 |     "@react-navigation/bottom-tabs": "^7.4.7",
16 |     "@react-navigation/native": "^7.1.17",
17 |     "@react-navigation/stack": "^7.4.8",
18 |     "expo": "~54.0.7",
19 |     "expo-build-properties": "~1.0.8",
20 |     "expo-constants": "~18.0.8",
21 |     "expo-crypto": "~15.0.7",
22 |     "expo-device": "~8.0.7",
23 |     "expo-file-system": "~19.0.14",
24 |     "expo-local-authentication": "~17.0.7",
25 |     "expo-sharing": "~14.0.7",
26 |     "expo-status-bar": "~3.0.8",
27 |     "react": "19.1.0",
28 |     "react-dom": "19.1.0",
29 |     "react-native": "0.81.4",
30 |     "react-native-safe-area-context": "~5.6.0",
31 |     "react-native-screens": "~4.16.0",
32 |     "react-native-uuid": "^2.0.3",
33 |     "react-native-web": "^0.21.0"
34 |   },
35 |   "private": true
36 | }
37 | 


--------------------------------------------------------------------------------
/src/components/CategoryPicker.js:
--------------------------------------------------------------------------------
 1 | import React, { useState } from 'react';
 2 | import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 3 | import { Ionicons } from '@expo/vector-icons';
 4 | import { categories } from '../utils/helpers';
 5 | import CategorySelectionPopup from './CategorySelectionPopup';
 6 | 
 7 | const CategoryPicker = ({ selectedCategory, onCategorySelect }) => {
 8 |   const [showPopup, setShowPopup] = useState(false);
 9 | 
10 |   const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
11 | 
12 |   return (
13 |     <>
14 |       <View style={styles.container}>
15 |         <Text style={styles.label}>Category *</Text>
16 |         <TouchableOpacity
17 |           style={styles.categoryButton}
18 |           onPress={() => setShowPopup(true)}
19 |         >
20 |           <View style={styles.categoryButtonLeft}>
21 |             {selectedCategoryData ? (
22 |               <Text style={styles.categoryButtonText}>
23 |                 {selectedCategoryData.name.toUpperCase()}
24 |               </Text>
25 |             ) : (
26 |               <Text style={styles.categoryButtonPlaceholder}>
27 |                 SELECT A CATEGORY
28 |               </Text>
29 |             )}
30 |           </View>
31 |           <Text style={styles.chevron}>▼</Text>
32 |         </TouchableOpacity>
33 |       </View>
34 | 
35 |       <CategorySelectionPopup
36 |         visible={showPopup}
37 |         selectedCategory={selectedCategory}
38 |         onCategorySelect={onCategorySelect}
39 |         onClose={() => setShowPopup(false)}
40 |       />
41 |     </>
42 |   );
43 | };
44 | 
45 | const styles = StyleSheet.create({
46 |   container: {
47 |     marginBottom: 24,
48 |   },
49 |   label: {
50 |     fontSize: 12,
51 |     fontWeight: '400',
52 |     marginBottom: 12,
53 |     color: '#ffffff',
54 |     fontFamily: 'monospace',
55 |     letterSpacing: 1,
56 |     textTransform: 'uppercase',
57 |   },
58 |   categoryButton: {
59 |     flexDirection: 'row',
60 |     alignItems: 'center',
61 |     justifyContent: 'space-between',
62 |     backgroundColor: 'transparent',
63 |     padding: 16,
64 |     borderRadius: 0,
65 |     borderWidth: 1,
66 |     borderColor: 'rgba(255, 255, 255, 0.1)',
67 |   },
68 |   categoryButtonLeft: {
69 |     flexDirection: 'row',
70 |     alignItems: 'center',
71 |     flex: 1,
72 |   },
73 |   categoryButtonText: {
74 |     fontSize: 14,
75 |     color: '#ffffff',
76 |     fontWeight: '300',
77 |     fontFamily: 'monospace',
78 |     letterSpacing: 0.5,
79 |   },
80 |   categoryButtonPlaceholder: {
81 |     fontSize: 14,
82 |     color: 'rgba(255, 255, 255, 0.4)',
83 |     fontWeight: '300',
84 |     fontFamily: 'monospace',
85 |     letterSpacing: 0.5,
86 |   },
87 |   chevron: {
88 |     fontSize: 12,
89 |     color: 'rgba(255, 255, 255, 0.4)',
90 |     fontWeight: '300',
91 |   },
92 | });
93 | 
94 | export default CategoryPicker;


--------------------------------------------------------------------------------
/src/components/CategorySelectionPopup.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   ScrollView,
  8 |   Modal,
  9 |   SafeAreaView,
 10 |   StatusBar
 11 | } from 'react-native';
 12 | import { categories } from '../utils/helpers';
 13 | 
 14 | const CategorySelectionPopup = ({
 15 |   visible,
 16 |   selectedCategory,
 17 |   onCategorySelect,
 18 |   onClose
 19 | }) => {
 20 |   const handleCategorySelect = (categoryId) => {
 21 |     onCategorySelect(categoryId);
 22 |     onClose();
 23 |   };
 24 | 
 25 |   return (
 26 |     <Modal
 27 |       visible={visible}
 28 |       animationType="slide"
 29 |       presentationStyle="fullScreen"
 30 |       onRequestClose={onClose}
 31 |     >
 32 |       <SafeAreaView style={styles.container}>
 33 |         <StatusBar barStyle="light-content" backgroundColor="#000" />
 34 | 
 35 |         {/* Header */}
 36 |         <View style={styles.header}>
 37 |           <Text style={styles.title}>SELECT CATEGORY</Text>
 38 |           <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
 39 |             <Text style={styles.closeText}>✕</Text>
 40 |           </TouchableOpacity>
 41 |         </View>
 42 | 
 43 |         {/* Content */}
 44 |         <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
 45 | 
 46 |           {/* CATEGORIES */}
 47 |           <View style={styles.section}>
 48 |             <Text style={styles.sectionTitle}>CHOOSE A CATEGORY</Text>
 49 | 
 50 |             {categories.map((category) => (
 51 |               <TouchableOpacity
 52 |                 key={category.id}
 53 |                 style={[styles.item, selectedCategory === category.id && styles.activeItem]}
 54 |                 onPress={() => handleCategorySelect(category.id)}
 55 |               >
 56 |                 <Text style={[styles.itemText, selectedCategory === category.id && styles.activeText]}>
 57 |                   {category.name.toUpperCase()}
 58 |                 </Text>
 59 |                 {selectedCategory === category.id && <Text style={styles.check}>●</Text>}
 60 |               </TouchableOpacity>
 61 |             ))}
 62 |           </View>
 63 | 
 64 |         </ScrollView>
 65 | 
 66 |         {/* Footer */}
 67 |         <View style={styles.footer}>
 68 |           <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
 69 |             <Text style={styles.cancelText}>CANCEL</Text>
 70 |           </TouchableOpacity>
 71 |         </View>
 72 | 
 73 |       </SafeAreaView>
 74 |     </Modal>
 75 |   );
 76 | };
 77 | 
 78 | const styles = StyleSheet.create({
 79 |   container: {
 80 |     flex: 1,
 81 |     backgroundColor: '#000000',
 82 |   },
 83 |   header: {
 84 |     flexDirection: 'row',
 85 |     justifyContent: 'space-between',
 86 |     alignItems: 'center',
 87 |     backgroundColor: '#000000',
 88 |     padding: 16,
 89 |     paddingTop: 12,
 90 |     borderBottomWidth: 1,
 91 |     borderBottomColor: 'rgba(255, 255, 255, 0.1)',
 92 |   },
 93 |   title: {
 94 |     color: '#ffffff',
 95 |     fontSize: 16,
 96 |     fontWeight: '400',
 97 |     letterSpacing: 1.5,
 98 |     fontFamily: 'monospace',
 99 |     textTransform: 'uppercase',
100 |   },
101 |   closeBtn: {
102 |     padding: 6,
103 |     borderRadius: 12,
104 |     backgroundColor: 'rgba(255, 255, 255, 0.05)',
105 |   },
106 |   closeText: {
107 |     color: '#ffffff',
108 |     fontSize: 16,
109 |     fontWeight: '300',
110 |   },
111 |   content: {
112 |     flex: 1,
113 |     backgroundColor: '#000000',
114 |   },
115 |   contentContainer: {
116 |     padding: 16,
117 |     paddingBottom: 24,
118 |   },
119 |   section: {
120 |     marginBottom: 24,
121 |   },
122 |   sectionTitle: {
123 |     color: '#ffffff',
124 |     fontSize: 12,
125 |     fontWeight: '400',
126 |     marginBottom: 12,
127 |     letterSpacing: 2,
128 |     borderBottomWidth: 1,
129 |     borderBottomColor: 'rgba(255, 255, 255, 0.1)',
130 |     paddingBottom: 8,
131 |     fontFamily: 'monospace',
132 |     textTransform: 'uppercase',
133 |   },
134 |   item: {
135 |     flexDirection: 'row',
136 |     justifyContent: 'space-between',
137 |     alignItems: 'center',
138 |     backgroundColor: 'transparent',
139 |     padding: 12,
140 |     marginBottom: 4,
141 |     borderRadius: 8,
142 |     borderWidth: 1,
143 |     borderColor: 'rgba(255, 255, 255, 0.08)',
144 |   },
145 |   activeItem: {
146 |     backgroundColor: 'rgba(255, 255, 255, 0.95)',
147 |     borderColor: 'rgba(255, 255, 255, 0.95)',
148 |   },
149 |   itemText: {
150 |     color: '#ffffff',
151 |     fontSize: 14,
152 |     fontWeight: '300',
153 |     fontFamily: 'monospace',
154 |   },
155 |   activeText: {
156 |     color: '#000000',
157 |     fontWeight: '400',
158 |   },
159 |   check: {
160 |     color: '#000000',
161 |     fontSize: 14,
162 |     fontWeight: '400',
163 |   },
164 |   footer: {
165 |     padding: 16,
166 |     backgroundColor: '#000000',
167 |     borderTopWidth: 1,
168 |     borderTopColor: 'rgba(255, 255, 255, 0.1)',
169 |   },
170 |   cancelBtn: {
171 |     backgroundColor: 'transparent',
172 |     padding: 14,
173 |     borderRadius: 8,
174 |     alignItems: 'center',
175 |     borderWidth: 1,
176 |     borderColor: 'rgba(255, 255, 255, 0.2)',
177 |   },
178 |   cancelText: {
179 |     color: '#ffffff',
180 |     fontSize: 12,
181 |     fontWeight: '300',
182 |     letterSpacing: 1.5,
183 |     fontFamily: 'monospace',
184 |     textTransform: 'uppercase',
185 |   },
186 | });
187 | 
188 | export default CategorySelectionPopup;


--------------------------------------------------------------------------------
/src/components/CustomAlert.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   Modal,
  7 |   TouchableOpacity,
  8 |   Dimensions
  9 | } from 'react-native';
 10 | 
 11 | const { width } = Dimensions.get('window');
 12 | 
 13 | const CustomAlert = ({
 14 |   visible,
 15 |   title,
 16 |   message,
 17 |   buttons = [],
 18 |   type = 'default', // 'success', 'error', 'warning', 'default'
 19 |   onClose
 20 | }) => {
 21 |   const getStatusIndicator = () => {
 22 |     switch (type) {
 23 |       case 'success':
 24 |         return '●';
 25 |       case 'error':
 26 |         return '●';
 27 |       case 'warning':
 28 |         return '●';
 29 |       default:
 30 |         return '●';
 31 |     }
 32 |   };
 33 | 
 34 |   const getIndicatorColor = () => {
 35 |     switch (type) {
 36 |       case 'success':
 37 |         return '#ffffff';
 38 |       case 'error':
 39 |         return '#ffffff';
 40 |       case 'warning':
 41 |         return '#ffffff';
 42 |       default:
 43 |         return '#ffffff';
 44 |     }
 45 |   };
 46 | 
 47 |   const defaultButtons = buttons.length > 0 ? buttons : [
 48 |     {
 49 |       text: 'OK',
 50 |       style: 'default',
 51 |       onPress: onClose
 52 |     }
 53 |   ];
 54 | 
 55 |   return (
 56 |     <Modal
 57 |       visible={visible}
 58 |       transparent={true}
 59 |       animationType="fade"
 60 |       onRequestClose={onClose}
 61 |     >
 62 |       <View style={styles.overlay}>
 63 |         <View style={styles.alertContainer}>
 64 |           {/* Header */}
 65 |           <View style={styles.header}>
 66 |             <Text style={styles.indicator}>{getStatusIndicator()}</Text>
 67 |             {title && <Text style={styles.title}>{title.toUpperCase()}</Text>}
 68 |           </View>
 69 | 
 70 |           {/* Message */}
 71 |           {message && (
 72 |             <Text style={styles.message}>{message}</Text>
 73 |           )}
 74 | 
 75 |           {/* Buttons */}
 76 |           <View style={styles.buttonContainer}>
 77 |             {defaultButtons.map((button, index) => (
 78 |               <TouchableOpacity
 79 |                 key={index}
 80 |                 style={[
 81 |                   styles.button,
 82 |                   button.style === 'destructive' && styles.destructiveButton,
 83 |                   button.style === 'cancel' && styles.cancelButton,
 84 |                   defaultButtons.length === 1 && styles.singleButton,
 85 |                   index === 0 && defaultButtons.length > 1 && styles.leftButton,
 86 |                   index === defaultButtons.length - 1 && defaultButtons.length > 1 && styles.rightButton
 87 |                 ]}
 88 |                 onPress={() => {
 89 |                   if (button.onPress) {
 90 |                     button.onPress();
 91 |                   }
 92 |                   onClose();
 93 |                 }}
 94 |               >
 95 |                 <Text style={[
 96 |                   styles.buttonText,
 97 |                   button.style === 'destructive' && styles.destructiveText,
 98 |                   button.style === 'cancel' && styles.cancelText,
 99 |                   (defaultButtons.length === 1 || (index === defaultButtons.length - 1 && defaultButtons.length > 1)) && styles.primaryButtonText
100 |                 ]}>
101 |                   {button.text.toUpperCase()}
102 |                 </Text>
103 |               </TouchableOpacity>
104 |             ))}
105 |           </View>
106 |         </View>
107 |       </View>
108 |     </Modal>
109 |   );
110 | };
111 | 
112 | const styles = StyleSheet.create({
113 |   overlay: {
114 |     flex: 1,
115 |     backgroundColor: 'rgba(0, 0, 0, 0.8)',
116 |     justifyContent: 'center',
117 |     alignItems: 'center',
118 |     padding: 20,
119 |   },
120 |   alertContainer: {
121 |     backgroundColor: '#000000',
122 |     borderWidth: 1,
123 |     borderColor: 'rgba(255, 255, 255, 0.1)',
124 |     borderRadius: 8,
125 |     width: width - 60,
126 |     maxWidth: 350,
127 |     padding: 0,
128 |     overflow: 'hidden',
129 |   },
130 |   header: {
131 |     flexDirection: 'row',
132 |     alignItems: 'center',
133 |     padding: 16,
134 |     borderBottomWidth: 1,
135 |     borderBottomColor: 'rgba(255, 255, 255, 0.1)',
136 |   },
137 |   indicator: {
138 |     fontSize: 12,
139 |     color: '#ffffff',
140 |     marginRight: 8,
141 |   },
142 |   title: {
143 |     fontSize: 14,
144 |     fontWeight: '400',
145 |     color: '#ffffff',
146 |     fontFamily: 'monospace',
147 |     letterSpacing: 1.5,
148 |     flex: 1,
149 |   },
150 |   message: {
151 |     fontSize: 13,
152 |     color: 'rgba(255, 255, 255, 0.7)',
153 |     lineHeight: 18,
154 |     padding: 16,
155 |     paddingTop: 12,
156 |     fontFamily: 'monospace',
157 |     letterSpacing: 0.3,
158 |     fontWeight: '300',
159 |   },
160 |   buttonContainer: {
161 |     flexDirection: 'row',
162 |     borderTopWidth: 1,
163 |     borderTopColor: 'rgba(255, 255, 255, 0.1)',
164 |   },
165 |   button: {
166 |     flex: 1,
167 |     padding: 14,
168 |     alignItems: 'center',
169 |     justifyContent: 'center',
170 |     backgroundColor: 'transparent',
171 |     borderRightWidth: 1,
172 |     borderRightColor: 'rgba(255, 255, 255, 0.1)',
173 |   },
174 |   singleButton: {
175 |     borderRightWidth: 0,
176 |     backgroundColor: 'rgba(255, 255, 255, 0.95)',
177 |   },
178 |   leftButton: {
179 |     borderRightWidth: 1,
180 |     borderRightColor: 'rgba(255, 255, 255, 0.1)',
181 |   },
182 |   rightButton: {
183 |     borderRightWidth: 0,
184 |     backgroundColor: 'rgba(255, 255, 255, 0.95)',
185 |   },
186 |   destructiveButton: {
187 |     backgroundColor: 'transparent',
188 |   },
189 |   cancelButton: {
190 |     backgroundColor: 'transparent',
191 |   },
192 |   buttonText: {
193 |     fontSize: 12,
194 |     fontWeight: '400',
195 |     color: '#ffffff',
196 |     fontFamily: 'monospace',
197 |     letterSpacing: 1,
198 |   },
199 |   destructiveText: {
200 |     color: '#ffffff',
201 |   },
202 |   cancelText: {
203 |     color: 'rgba(255, 255, 255, 0.6)',
204 |   },
205 |   primaryButtonText: {
206 |     color: '#000000',
207 |   },
208 | });
209 | 
210 | export default CustomAlert;


--------------------------------------------------------------------------------
/src/components/CustomPopup.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   Modal,
  7 |   TouchableOpacity,
  8 |   ScrollView,
  9 |   Dimensions
 10 | } from 'react-native';
 11 | import { Ionicons } from '@expo/vector-icons';
 12 | 
 13 | const { width, height } = Dimensions.get('window');
 14 | 
 15 | const CustomPopup = ({
 16 |   visible,
 17 |   title,
 18 |   children,
 19 |   onClose,
 20 |   size = 'medium', // 'small', 'medium', 'large', 'fullscreen'
 21 |   showCloseButton = true,
 22 |   headerIcon = null
 23 | }) => {
 24 |   const getPopupStyle = () => {
 25 |     switch (size) {
 26 |       case 'small':
 27 |         return {
 28 |           width: width - 80,
 29 |           maxHeight: height * 0.4,
 30 |           maxWidth: 300
 31 |         };
 32 |       case 'large':
 33 |         return {
 34 |           width: width - 40,
 35 |           maxHeight: height * 0.8,
 36 |           maxWidth: 500
 37 |         };
 38 |       case 'fullscreen':
 39 |         return {
 40 |           width: width,
 41 |           height: height,
 42 |           maxWidth: width,
 43 |           maxHeight: height
 44 |         };
 45 |       default: // medium
 46 |         return {
 47 |           width: width - 60,
 48 |           maxHeight: height * 0.6,
 49 |           maxWidth: 400
 50 |         };
 51 |     }
 52 |   };
 53 | 
 54 |   return (
 55 |     <Modal
 56 |       visible={visible}
 57 |       transparent={true}
 58 |       animationType="fade"
 59 |       onRequestClose={onClose}
 60 |     >
 61 |       <View style={styles.overlay}>
 62 |         <View style={[styles.popupContainer, getPopupStyle()]}>
 63 |           {/* Header */}
 64 |           {(title || showCloseButton) && (
 65 |             <View style={styles.header}>
 66 |               <View style={styles.headerLeft}>
 67 |                 {headerIcon && (
 68 |                   <Ionicons
 69 |                     name={headerIcon}
 70 |                     size={20}
 71 |                     color="#ffffff"
 72 |                     style={styles.headerIcon}
 73 |                   />
 74 |                 )}
 75 |                 {title && <Text style={styles.title}>{title}</Text>}
 76 |               </View>
 77 |               {showCloseButton && (
 78 |                 <TouchableOpacity
 79 |                   style={styles.closeButton}
 80 |                   onPress={onClose}
 81 |                   hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
 82 |                 >
 83 |                   <Ionicons name="close" size={20} color="#ffffff" />
 84 |                 </TouchableOpacity>
 85 |               )}
 86 |             </View>
 87 |           )}
 88 | 
 89 |           {/* Content */}
 90 |           <View style={styles.content}>
 91 |             {children}
 92 |           </View>
 93 |         </View>
 94 |       </View>
 95 |     </Modal>
 96 |   );
 97 | };
 98 | 
 99 | const styles = StyleSheet.create({
100 |   overlay: {
101 |     position: 'absolute',
102 |     top: 0,
103 |     left: 0,
104 |     right: 0,
105 |     bottom: 0,
106 |     backgroundColor: 'rgba(0, 0, 0, 0.9)',
107 |     justifyContent: 'center',
108 |     alignItems: 'center',
109 |     padding: 20,
110 |   },
111 |   popupContainer: {
112 |     backgroundColor: '#000000',
113 |     borderWidth: 1,
114 |     borderColor: '#1a1a1a',
115 |     borderRadius: 0,
116 |     overflow: 'hidden',
117 |     elevation: 10,
118 |     shadowColor: '#000',
119 |     shadowOffset: { width: 0, height: 4 },
120 |     shadowOpacity: 0.3,
121 |     shadowRadius: 8,
122 |   },
123 |   header: {
124 |     flexDirection: 'row',
125 |     alignItems: 'center',
126 |     justifyContent: 'space-between',
127 |     padding: 20,
128 |     borderBottomWidth: 1,
129 |     borderBottomColor: '#1a1a1a',
130 |     backgroundColor: '#000000',
131 |   },
132 |   headerLeft: {
133 |     flexDirection: 'row',
134 |     alignItems: 'center',
135 |     flex: 1,
136 |   },
137 |   headerIcon: {
138 |     marginRight: 12,
139 |   },
140 |   title: {
141 |     fontSize: 16,
142 |     fontWeight: '400',
143 |     color: '#ffffff',
144 |     fontFamily: 'monospace',
145 |     letterSpacing: 0.5,
146 |     textTransform: 'uppercase',
147 |     flex: 1,
148 |   },
149 |   closeButton: {
150 |     padding: 4,
151 |   },
152 |   content: {
153 |     flex: 1,
154 |     minHeight: 200,
155 |     backgroundColor: '#000000',
156 |   },
157 | });
158 | 
159 | export default CustomPopup;


--------------------------------------------------------------------------------
/src/components/DebugPopup.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   Modal,
  8 |   ScrollView,
  9 |   Dimensions
 10 | } from 'react-native';
 11 | import { Ionicons } from '@expo/vector-icons';
 12 | import { categories } from '../utils/helpers';
 13 | 
 14 | const { width, height } = Dimensions.get('window');
 15 | 
 16 | const DebugPopup = ({ visible, onClose }) => {
 17 |   return (
 18 |     <Modal
 19 |       visible={visible}
 20 |       transparent={true}
 21 |       animationType="fade"
 22 |       onRequestClose={onClose}
 23 |     >
 24 |       <View style={styles.overlay}>
 25 |         <View style={styles.container}>
 26 |           <View style={styles.header}>
 27 |             <Text style={styles.title}>DEBUG POPUP</Text>
 28 |             <TouchableOpacity onPress={onClose}>
 29 |               <Ionicons name="close" size={24} color="#ffffff" />
 30 |             </TouchableOpacity>
 31 |           </View>
 32 | 
 33 |           <ScrollView style={styles.content}>
 34 |             <Text style={styles.testText}>
 35 |               POPUP IS WORKING - Categories: {categories.length}
 36 |             </Text>
 37 | 
 38 |             <View style={styles.testSection}>
 39 |               <Text style={styles.sectionTitle}>CATEGORIES:</Text>
 40 |               {categories.map((category, index) => (
 41 |                 <View key={category.id} style={styles.testItem}>
 42 |                   <Ionicons name={category.icon} size={16} color="#ffffff" />
 43 |                   <Text style={styles.testItemText}>
 44 |                     {index + 1}. {category.name}
 45 |                   </Text>
 46 |                 </View>
 47 |               ))}
 48 |             </View>
 49 | 
 50 |             <TouchableOpacity style={styles.testButton}>
 51 |               <Text style={styles.testButtonText}>TEST BUTTON</Text>
 52 |             </TouchableOpacity>
 53 |           </ScrollView>
 54 |         </View>
 55 |       </View>
 56 |     </Modal>
 57 |   );
 58 | };
 59 | 
 60 | const styles = StyleSheet.create({
 61 |   overlay: {
 62 |     position: 'absolute',
 63 |     top: 0,
 64 |     left: 0,
 65 |     right: 0,
 66 |     bottom: 0,
 67 |     backgroundColor: 'rgba(0, 0, 0, 0.9)',
 68 |     justifyContent: 'center',
 69 |     alignItems: 'center',
 70 |     padding: 20,
 71 |   },
 72 |   container: {
 73 |     backgroundColor: '#000000',
 74 |     borderWidth: 3,
 75 |     borderColor: '#ffffff',
 76 |     width: width - 60,
 77 |     height: height * 0.7,
 78 |     maxWidth: 400,
 79 |   },
 80 |   header: {
 81 |     flexDirection: 'row',
 82 |     justifyContent: 'space-between',
 83 |     alignItems: 'center',
 84 |     padding: 20,
 85 |     borderBottomWidth: 1,
 86 |     borderBottomColor: '#ffffff',
 87 |     backgroundColor: '#000000',
 88 |   },
 89 |   title: {
 90 |     fontSize: 16,
 91 |     color: '#ffffff',
 92 |     fontFamily: 'monospace',
 93 |     letterSpacing: 1,
 94 |   },
 95 |   content: {
 96 |     flex: 1,
 97 |     padding: 20,
 98 |     backgroundColor: '#111111',
 99 |   },
100 |   testText: {
101 |     fontSize: 14,
102 |     color: '#00ff00',
103 |     fontFamily: 'monospace',
104 |     textAlign: 'center',
105 |     marginBottom: 20,
106 |     backgroundColor: '#000000',
107 |     padding: 10,
108 |     borderWidth: 1,
109 |     borderColor: '#00ff00',
110 |   },
111 |   testSection: {
112 |     marginBottom: 20,
113 |   },
114 |   sectionTitle: {
115 |     fontSize: 12,
116 |     color: '#ffffff',
117 |     fontFamily: 'monospace',
118 |     marginBottom: 10,
119 |     textTransform: 'uppercase',
120 |   },
121 |   testItem: {
122 |     flexDirection: 'row',
123 |     alignItems: 'center',
124 |     padding: 8,
125 |     backgroundColor: '#222222',
126 |     marginBottom: 4,
127 |     borderWidth: 1,
128 |     borderColor: '#444444',
129 |   },
130 |   testItemText: {
131 |     fontSize: 12,
132 |     color: '#ffffff',
133 |     fontFamily: 'monospace',
134 |     marginLeft: 8,
135 |   },
136 |   testButton: {
137 |     backgroundColor: '#ffffff',
138 |     padding: 15,
139 |     alignItems: 'center',
140 |     borderWidth: 2,
141 |     borderColor: '#ffffff',
142 |   },
143 |   testButtonText: {
144 |     color: '#000000',
145 |     fontSize: 14,
146 |     fontFamily: 'monospace',
147 |     fontWeight: 'bold',
148 |   },
149 | });
150 | 
151 | export default DebugPopup;


--------------------------------------------------------------------------------
/src/components/ExpenseDetailsPopup.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   ScrollView
  8 | } from 'react-native';
  9 | import { Ionicons } from '@expo/vector-icons';
 10 | import CustomPopup from './CustomPopup';
 11 | import { formatDate, categories } from '../utils/helpers';
 12 | 
 13 | const ExpenseDetailsPopup = ({
 14 |   visible,
 15 |   expense,
 16 |   onClose,
 17 |   onEdit,
 18 |   onDelete
 19 | }) => {
 20 |   if (!expense) return null;
 21 | 
 22 |   const category = categories.find(cat => cat.id === expense.category);
 23 |   const categoryName = category ? category.name : 'Other';
 24 |   const categoryIcon = category ? category.icon : 'help-circle';
 25 | 
 26 |   const formatCurrency = (amount) => {
 27 |     return `₹${amount.toFixed(2)}`;
 28 |   };
 29 | 
 30 |   const formatDateTime = (dateString) => {
 31 |     const date = new Date(dateString);
 32 |     return {
 33 |       date: formatDate(date),
 34 |       time: date.toLocaleTimeString('en-IN', {
 35 |         hour: '2-digit',
 36 |         minute: '2-digit',
 37 |         hour12: true
 38 |       })
 39 |     };
 40 |   };
 41 | 
 42 |   const dateTime = formatDateTime(expense.date);
 43 | 
 44 |   return (
 45 |     <CustomPopup
 46 |       visible={visible}
 47 |       title="Expense Details"
 48 |       onClose={onClose}
 49 |       size="medium"
 50 |       headerIcon="receipt-outline"
 51 |     >
 52 |       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
 53 |         {/* Amount Section */}
 54 |         <View style={styles.amountSection}>
 55 |           <Text style={styles.amountLabel}>Amount</Text>
 56 |           <Text style={styles.amountValue}>{formatCurrency(expense.amount)}</Text>
 57 |         </View>
 58 | 
 59 |         {/* Details Grid */}
 60 |         <View style={styles.detailsGrid}>
 61 |           {/* Description */}
 62 |           <View style={styles.detailItem}>
 63 |             <View style={styles.detailHeader}>
 64 |               <Ionicons name="document-text" size={16} color="#ffffff" />
 65 |               <Text style={styles.detailLabel}>Description</Text>
 66 |             </View>
 67 |             <Text style={styles.detailValue}>{expense.description}</Text>
 68 |           </View>
 69 | 
 70 |           {/* Category */}
 71 |           <View style={styles.detailItem}>
 72 |             <View style={styles.detailHeader}>
 73 |               <Ionicons name={categoryIcon} size={16} color="#ffffff" />
 74 |               <Text style={styles.detailLabel}>Category</Text>
 75 |             </View>
 76 |             <Text style={styles.detailValue}>{categoryName}</Text>
 77 |           </View>
 78 | 
 79 |           {/* Date */}
 80 |           <View style={styles.detailItem}>
 81 |             <View style={styles.detailHeader}>
 82 |               <Ionicons name="calendar" size={16} color="#ffffff" />
 83 |               <Text style={styles.detailLabel}>Date</Text>
 84 |             </View>
 85 |             <Text style={styles.detailValue}>{dateTime.date}</Text>
 86 |           </View>
 87 | 
 88 |           {/* Time */}
 89 |           <View style={styles.detailItem}>
 90 |             <View style={styles.detailHeader}>
 91 |               <Ionicons name="time" size={16} color="#ffffff" />
 92 |               <Text style={styles.detailLabel}>Time</Text>
 93 |             </View>
 94 |             <Text style={styles.detailValue}>{dateTime.time}</Text>
 95 |           </View>
 96 | 
 97 |           {/* ID */}
 98 |           <View style={styles.detailItem}>
 99 |             <View style={styles.detailHeader}>
100 |               <Ionicons name="finger-print" size={16} color="#666666" />
101 |               <Text style={styles.detailLabel}>ID</Text>
102 |             </View>
103 |             <Text style={[styles.detailValue, styles.idValue]}>
104 |               {expense.id.substring(0, 8).toUpperCase()}
105 |             </Text>
106 |           </View>
107 |         </View>
108 | 
109 |         {/* Action Buttons */}
110 |         <View style={styles.actionButtons}>
111 |           <TouchableOpacity
112 |             style={[styles.actionButton, styles.editButton]}
113 |             onPress={() => {
114 |               onClose();
115 |               onEdit(expense);
116 |             }}
117 |           >
118 |             <Ionicons name="pencil" size={16} color="#000000" />
119 |             <Text style={styles.editButtonText}>Edit</Text>
120 |           </TouchableOpacity>
121 | 
122 |           <TouchableOpacity
123 |             style={[styles.actionButton, styles.deleteButton]}
124 |             onPress={() => {
125 |               onClose();
126 |               onDelete(expense);
127 |             }}
128 |           >
129 |             <Ionicons name="trash" size={16} color="#ff4444" />
130 |             <Text style={styles.deleteButtonText}>Delete</Text>
131 |           </TouchableOpacity>
132 |         </View>
133 | 
134 |         {/* Footer Info */}
135 |         <View style={styles.footer}>
136 |           <Text style={styles.footerText}>
137 |             Added on {new Date(expense.createdAt || expense.date).toLocaleDateString('en-IN')}
138 |           </Text>
139 |         </View>
140 |       </ScrollView>
141 |     </CustomPopup>
142 |   );
143 | };
144 | 
145 | const styles = StyleSheet.create({
146 |   container: {
147 |     flex: 1,
148 |   },
149 |   amountSection: {
150 |     alignItems: 'center',
151 |     padding: 24,
152 |     borderBottomWidth: 1,
153 |     borderBottomColor: '#1a1a1a',
154 |   },
155 |   amountLabel: {
156 |     fontSize: 12,
157 |     color: '#666666',
158 |     fontFamily: 'monospace',
159 |     letterSpacing: 1,
160 |     textTransform: 'uppercase',
161 |     marginBottom: 8,
162 |   },
163 |   amountValue: {
164 |     fontSize: 32,
165 |     fontWeight: '300',
166 |     color: '#ffffff',
167 |     fontFamily: 'monospace',
168 |     letterSpacing: 1,
169 |   },
170 |   detailsGrid: {
171 |     padding: 24,
172 |   },
173 |   detailItem: {
174 |     marginBottom: 20,
175 |     paddingBottom: 16,
176 |     borderBottomWidth: 1,
177 |     borderBottomColor: '#0d0d0d',
178 |   },
179 |   detailHeader: {
180 |     flexDirection: 'row',
181 |     alignItems: 'center',
182 |     marginBottom: 8,
183 |   },
184 |   detailLabel: {
185 |     fontSize: 11,
186 |     color: '#666666',
187 |     fontFamily: 'monospace',
188 |     letterSpacing: 0.5,
189 |     textTransform: 'uppercase',
190 |     marginLeft: 8,
191 |   },
192 |   detailValue: {
193 |     fontSize: 14,
194 |     color: '#ffffff',
195 |     fontFamily: 'monospace',
196 |     letterSpacing: 0.3,
197 |     lineHeight: 20,
198 |   },
199 |   idValue: {
200 |     color: '#666666',
201 |     fontSize: 12,
202 |   },
203 |   actionButtons: {
204 |     flexDirection: 'row',
205 |     padding: 24,
206 |     paddingTop: 0,
207 |     gap: 12,
208 |   },
209 |   actionButton: {
210 |     flex: 1,
211 |     flexDirection: 'row',
212 |     alignItems: 'center',
213 |     justifyContent: 'center',
214 |     padding: 14,
215 |     borderWidth: 1,
216 |     borderRadius: 0,
217 |   },
218 |   editButton: {
219 |     backgroundColor: '#ffffff',
220 |     borderColor: '#ffffff',
221 |   },
222 |   editButtonText: {
223 |     fontSize: 12,
224 |     fontWeight: '400',
225 |     color: '#000000',
226 |     fontFamily: 'monospace',
227 |     letterSpacing: 0.5,
228 |     textTransform: 'uppercase',
229 |     marginLeft: 6,
230 |   },
231 |   deleteButton: {
232 |     backgroundColor: 'transparent',
233 |     borderColor: '#ff4444',
234 |   },
235 |   deleteButtonText: {
236 |     fontSize: 12,
237 |     fontWeight: '400',
238 |     color: '#ff4444',
239 |     fontFamily: 'monospace',
240 |     letterSpacing: 0.5,
241 |     textTransform: 'uppercase',
242 |     marginLeft: 6,
243 |   },
244 |   footer: {
245 |     alignItems: 'center',
246 |     padding: 20,
247 |     paddingTop: 0,
248 |   },
249 |   footerText: {
250 |     fontSize: 10,
251 |     color: '#444444',
252 |     fontFamily: 'monospace',
253 |     letterSpacing: 0.3,
254 |   },
255 | });
256 | 
257 | export default ExpenseDetailsPopup;


--------------------------------------------------------------------------------
/src/components/ExpenseForm.js:
--------------------------------------------------------------------------------
  1 | import React, { useState, useEffect } from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   TextInput,
  6 |   TouchableOpacity,
  7 |   StyleSheet,
  8 |   ScrollView
  9 | } from 'react-native';
 10 | import DateTimePicker from '@react-native-community/datetimepicker';
 11 | import { Ionicons } from '@expo/vector-icons';
 12 | import CategoryPicker from './CategoryPicker';
 13 | import { formatDate } from '../utils/helpers';
 14 | import CustomAlert from './CustomAlert';
 15 | import { useCustomAlert } from '../hooks/useCustomAlert';
 16 | 
 17 | const ExpenseForm = ({ onSubmit, initialData, onCancel }) => {
 18 |   const [amount, setAmount] = useState(initialData?.amount?.toString() || '');
 19 |   const [description, setDescription] = useState(initialData?.description || '');
 20 |   const [category, setCategory] = useState(initialData?.category || '');
 21 |   const [date, setDate] = useState(initialData?.date ? new Date(initialData.date) : new Date());
 22 |   const [showDatePicker, setShowDatePicker] = useState(false);
 23 | 
 24 |   const { alertConfig, hideAlert, showError } = useCustomAlert();
 25 | 
 26 |   const handleSubmit = () => {
 27 |     if (!amount.trim()) {
 28 |       showError('Error', 'Please enter an amount');
 29 |       return;
 30 |     }
 31 |     if (!description.trim()) {
 32 |       showError('Error', 'Please enter a description');
 33 |       return;
 34 |     }
 35 |     if (!category) {
 36 |       showError('Error', 'Please select a category');
 37 |       return;
 38 |     }
 39 | 
 40 |     const expenseData = {
 41 |       amount: parseFloat(amount),
 42 |       description: description.trim(),
 43 |       category,
 44 |       date: date.toISOString(),
 45 |     };
 46 | 
 47 |     onSubmit(expenseData);
 48 |   };
 49 | 
 50 |   const handleDateChange = (event, selectedDate) => {
 51 |     setShowDatePicker(false);
 52 |     if (selectedDate) {
 53 |       setDate(selectedDate);
 54 |     }
 55 |   };
 56 | 
 57 |   return (
 58 |     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
 59 |       <View style={styles.formGroup}>
 60 |         <Text style={styles.label}>Amount *</Text>
 61 |         <View style={styles.amountContainer}>
 62 |           <Text style={styles.currencySymbol}>₹</Text>
 63 |           <TextInput
 64 |             style={styles.amountInput}
 65 |             value={amount}
 66 |             onChangeText={setAmount}
 67 |             placeholder="0.00"
 68 |             keyboardType="numeric"
 69 |             placeholderTextColor="#333333"
 70 |           />
 71 |         </View>
 72 |       </View>
 73 | 
 74 |       <View style={styles.formGroup}>
 75 |         <Text style={styles.label}>Description *</Text>
 76 |         <TextInput
 77 |           style={styles.textInput}
 78 |           value={description}
 79 |           onChangeText={setDescription}
 80 |           placeholder="what did you spend on?"
 81 |           placeholderTextColor="#333333"
 82 |           multiline
 83 |           numberOfLines={2}
 84 |         />
 85 |       </View>
 86 | 
 87 |       <CategoryPicker
 88 |         selectedCategory={category}
 89 |         onCategorySelect={setCategory}
 90 |       />
 91 | 
 92 |       <View style={styles.formGroup}>
 93 |         <Text style={styles.label}>Date</Text>
 94 |         <TouchableOpacity
 95 |           style={styles.dateButton}
 96 |           onPress={() => setShowDatePicker(true)}
 97 |         >
 98 |           <Ionicons name="calendar" size={16} color="#ffffff" />
 99 |           <Text style={styles.dateText}>{formatDate(date)}</Text>
100 |         </TouchableOpacity>
101 |       </View>
102 | 
103 |       {showDatePicker && (
104 |         <DateTimePicker
105 |           value={date}
106 |           mode="date"
107 |           display="default"
108 |           onChange={handleDateChange}
109 |           maximumDate={new Date()}
110 |         />
111 |       )}
112 | 
113 |       <View style={styles.buttonContainer}>
114 |         <TouchableOpacity
115 |           style={[styles.button, styles.submitButton]}
116 |           onPress={handleSubmit}
117 |         >
118 |           <Text style={styles.submitButtonText}>
119 |             {initialData ? 'Update Expense' : 'Add Expense'}
120 |           </Text>
121 |         </TouchableOpacity>
122 | 
123 |         {onCancel && (
124 |           <TouchableOpacity
125 |             style={[styles.button, styles.cancelButton]}
126 |             onPress={onCancel}
127 |           >
128 |             <Text style={styles.cancelButtonText}>Cancel</Text>
129 |           </TouchableOpacity>
130 |         )}
131 |       </View>
132 | 
133 |       <CustomAlert
134 |         visible={alertConfig.visible}
135 |         title={alertConfig.title}
136 |         message={alertConfig.message}
137 |         buttons={alertConfig.buttons}
138 |         type={alertConfig.type}
139 |         onClose={hideAlert}
140 |       />
141 |     </ScrollView>
142 |   );
143 | };
144 | 
145 | const styles = StyleSheet.create({
146 |   container: {
147 |     flex: 1,
148 |     backgroundColor: '#000000',
149 |     padding: 24,
150 |   },
151 |   formGroup: {
152 |     marginBottom: 24,
153 |   },
154 |   label: {
155 |     fontSize: 12,
156 |     fontWeight: '400',
157 |     marginBottom: 12,
158 |     color: '#ffffff',
159 |     fontFamily: 'monospace',
160 |     letterSpacing: 1,
161 |     textTransform: 'uppercase',
162 |   },
163 |   amountContainer: {
164 |     flexDirection: 'row',
165 |     alignItems: 'center',
166 |     backgroundColor: 'transparent',
167 |     borderRadius: 0,
168 |     borderWidth: 1,
169 |     borderColor: '#1a1a1a',
170 |     paddingHorizontal: 16,
171 |   },
172 |   currencySymbol: {
173 |     fontSize: 16,
174 |     fontWeight: '300',
175 |     color: '#ffffff',
176 |     marginRight: 8,
177 |     fontFamily: 'monospace',
178 |   },
179 |   amountInput: {
180 |     flex: 1,
181 |     fontSize: 16,
182 |     fontWeight: '300',
183 |     paddingVertical: 16,
184 |     color: '#ffffff',
185 |     fontFamily: 'monospace',
186 |     letterSpacing: 0.5,
187 |   },
188 |   textInput: {
189 |     backgroundColor: 'transparent',
190 |     borderRadius: 0,
191 |     borderWidth: 1,
192 |     borderColor: '#1a1a1a',
193 |     padding: 16,
194 |     fontSize: 14,
195 |     color: '#ffffff',
196 |     textAlignVertical: 'top',
197 |     fontFamily: 'monospace',
198 |     letterSpacing: 0.5,
199 |   },
200 |   dateButton: {
201 |     flexDirection: 'row',
202 |     alignItems: 'center',
203 |     backgroundColor: 'transparent',
204 |     padding: 16,
205 |     borderRadius: 0,
206 |     borderWidth: 1,
207 |     borderColor: '#1a1a1a',
208 |   },
209 |   dateText: {
210 |     fontSize: 14,
211 |     color: '#ffffff',
212 |     marginLeft: 12,
213 |     fontWeight: '400',
214 |     fontFamily: 'monospace',
215 |     letterSpacing: 0.5,
216 |   },
217 |   buttonContainer: {
218 |     marginTop: 32,
219 |     marginBottom: 40,
220 |   },
221 |   button: {
222 |     borderRadius: 0,
223 |     padding: 16,
224 |     alignItems: 'center',
225 |     marginBottom: 12,
226 |     borderWidth: 1,
227 |   },
228 |   submitButton: {
229 |     backgroundColor: '#ffffff',
230 |     borderColor: '#ffffff',
231 |   },
232 |   submitButtonText: {
233 |     color: '#000000',
234 |     fontSize: 14,
235 |     fontWeight: '400',
236 |     fontFamily: 'monospace',
237 |     letterSpacing: 1,
238 |     textTransform: 'uppercase',
239 |   },
240 |   cancelButton: {
241 |     backgroundColor: 'transparent',
242 |     borderColor: '#333333',
243 |   },
244 |   cancelButtonText: {
245 |     color: '#666666',
246 |     fontSize: 14,
247 |     fontWeight: '400',
248 |     fontFamily: 'monospace',
249 |     letterSpacing: 1,
250 |     textTransform: 'uppercase',
251 |   },
252 | });
253 | 
254 | export default ExpenseForm;


--------------------------------------------------------------------------------
/src/components/ExpenseItem.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
  3 | import { Ionicons } from '@expo/vector-icons';
  4 | import { categories, formatCurrency, formatDate } from '../utils/helpers';
  5 | 
  6 | const ExpenseItem = ({ expense, onDelete, onEdit, onPress }) => {
  7 |   const category = categories.find(cat => cat.id === expense.category);
  8 | 
  9 |   return (
 10 |     <TouchableOpacity
 11 |       style={styles.container}
 12 |       onPress={onPress}
 13 |       activeOpacity={0.7}
 14 |     >
 15 |       <View style={styles.leftSection}>
 16 |         <View style={styles.categoryIcon}>
 17 |           <Ionicons
 18 |             name={category?.icon || 'ellipsis-horizontal-outline'}
 19 |             size={18}
 20 |             color="#ffffff"
 21 |           />
 22 |         </View>
 23 |         <View style={styles.expenseDetails}>
 24 |           <Text style={styles.description}>{expense.description}</Text>
 25 |           <Text style={styles.categoryName}>{category?.name || 'Other'}</Text>
 26 |           <Text style={styles.date}>{formatDate(expense.date)}</Text>
 27 |         </View>
 28 |       </View>
 29 |       <View style={styles.rightSection}>
 30 |         <Text style={styles.amount}>{formatCurrency(expense.amount)}</Text>
 31 |         <View style={styles.actions}>
 32 |           <TouchableOpacity
 33 |             style={[styles.actionButton, styles.editButton]}
 34 |             onPress={(e) => {
 35 |               e.stopPropagation();
 36 |               onEdit();
 37 |             }}
 38 |           >
 39 |             <Ionicons name="pencil" size={12} color="#ffffff" />
 40 |           </TouchableOpacity>
 41 |           <TouchableOpacity
 42 |             style={[styles.actionButton, styles.deleteButton]}
 43 |             onPress={(e) => {
 44 |               e.stopPropagation();
 45 |               onDelete();
 46 |             }}
 47 |           >
 48 |             <Ionicons name="trash" size={12} color="#ff4444" />
 49 |           </TouchableOpacity>
 50 |         </View>
 51 |       </View>
 52 |     </TouchableOpacity>
 53 |   );
 54 | };
 55 | 
 56 | const styles = StyleSheet.create({
 57 |   container: {
 58 |     flexDirection: 'row',
 59 |     alignItems: 'center',
 60 |     backgroundColor: 'transparent',
 61 |     padding: 20,
 62 |     marginHorizontal: 24,
 63 |     marginVertical: 4,
 64 |     borderRadius: 0,
 65 |     borderWidth: 1,
 66 |     borderColor: '#1a1a1a',
 67 |   },
 68 |   leftSection: {
 69 |     flexDirection: 'row',
 70 |     alignItems: 'center',
 71 |     flex: 1,
 72 |   },
 73 |   categoryIcon: {
 74 |     width: 40,
 75 |     height: 40,
 76 |     borderRadius: 0,
 77 |     borderWidth: 1,
 78 |     borderColor: '#333333',
 79 |     alignItems: 'center',
 80 |     justifyContent: 'center',
 81 |     marginRight: 16,
 82 |     backgroundColor: 'transparent',
 83 |   },
 84 |   expenseDetails: {
 85 |     flex: 1,
 86 |   },
 87 |   description: {
 88 |     fontSize: 14,
 89 |     fontWeight: '400',
 90 |     color: '#ffffff',
 91 |     marginBottom: 4,
 92 |     fontFamily: 'monospace',
 93 |     letterSpacing: 0.5,
 94 |   },
 95 |   categoryName: {
 96 |     fontSize: 12,
 97 |     color: '#666666',
 98 |     marginBottom: 4,
 99 |     fontFamily: 'monospace',
100 |     letterSpacing: 0.3,
101 |   },
102 |   date: {
103 |     fontSize: 10,
104 |     color: '#444444',
105 |     fontFamily: 'monospace',
106 |     letterSpacing: 0.3,
107 |   },
108 |   rightSection: {
109 |     alignItems: 'flex-end',
110 |   },
111 |   amount: {
112 |     fontSize: 16,
113 |     fontWeight: '300',
114 |     color: '#ffffff',
115 |     marginBottom: 12,
116 |     fontFamily: 'monospace',
117 |     letterSpacing: 1,
118 |   },
119 |   actions: {
120 |     flexDirection: 'row',
121 |     gap: 8,
122 |   },
123 |   actionButton: {
124 |     width: 24,
125 |     height: 24,
126 |     borderRadius: 0,
127 |     borderWidth: 1,
128 |     alignItems: 'center',
129 |     justifyContent: 'center',
130 |   },
131 |   editButton: {
132 |     backgroundColor: 'transparent',
133 |     borderColor: '#ffffff',
134 |   },
135 |   deleteButton: {
136 |     backgroundColor: 'transparent',
137 |     borderColor: '#ff4444',
138 |   },
139 | });
140 | 
141 | export default ExpenseItem;


--------------------------------------------------------------------------------
/src/components/FilterSortPopup.js:
--------------------------------------------------------------------------------
  1 | import React, { useState } from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   Modal,
  8 |   ScrollView,
  9 |   SafeAreaView,
 10 |   StatusBar
 11 | } from 'react-native';
 12 | import { Ionicons } from '@expo/vector-icons';
 13 | import { categories } from '../utils/helpers';
 14 | 
 15 | const FilterSortPopup = ({
 16 |   visible,
 17 |   currentFilters = {},
 18 |   onApplyFilters,
 19 |   onClose
 20 | }) => {
 21 |   const [filters, setFilters] = useState({
 22 |     sortBy: currentFilters.sortBy || 'date',
 23 |     sortOrder: currentFilters.sortOrder || 'desc',
 24 |     category: currentFilters.category || null,
 25 |     dateRange: currentFilters.dateRange || 'all'
 26 |   });
 27 | 
 28 |   const handleApplyFilters = () => {
 29 |     onApplyFilters(filters);
 30 |     onClose();
 31 |   };
 32 | 
 33 |   const handleResetFilters = () => {
 34 |     const resetFilters = {
 35 |       sortBy: 'date',
 36 |       sortOrder: 'desc',
 37 |       category: null,
 38 |       dateRange: 'all'
 39 |     };
 40 |     setFilters(resetFilters);
 41 |   };
 42 | 
 43 |   return (
 44 |     <Modal
 45 |       visible={visible}
 46 |       animationType="slide"
 47 |       presentationStyle="fullScreen"
 48 |       onRequestClose={onClose}
 49 |     >
 50 |       <SafeAreaView style={styles.container}>
 51 |         <StatusBar barStyle="light-content" backgroundColor="#000" />
 52 | 
 53 |         {/* Header */}
 54 |         <View style={styles.header}>
 55 |           <Text style={styles.title}>FILTER & SORT</Text>
 56 |           <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
 57 |             <Text style={styles.closeText}>✕</Text>
 58 |           </TouchableOpacity>
 59 |         </View>
 60 | 
 61 |         {/* Content */}
 62 |         <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
 63 | 
 64 |             {/* SORT BY */}
 65 |             <View style={styles.section}>
 66 |               <Text style={styles.sectionTitle}>SORT BY</Text>
 67 | 
 68 |               <TouchableOpacity
 69 |                 style={[styles.item, filters.sortBy === 'date' && styles.activeItem]}
 70 |                 onPress={() => setFilters(prev => ({...prev, sortBy: 'date'}))}
 71 |               >
 72 |                 <Text style={[styles.itemText, filters.sortBy === 'date' && styles.activeText]}>
 73 |                   Date
 74 |                 </Text>
 75 |                 {filters.sortBy === 'date' && <Text style={styles.check}>●</Text>}
 76 |               </TouchableOpacity>
 77 | 
 78 |               <TouchableOpacity
 79 |                 style={[styles.item, filters.sortBy === 'amount' && styles.activeItem]}
 80 |                 onPress={() => setFilters(prev => ({...prev, sortBy: 'amount'}))}
 81 |               >
 82 |                 <Text style={[styles.itemText, filters.sortBy === 'amount' && styles.activeText]}>
 83 |                   Amount
 84 |                 </Text>
 85 |                 {filters.sortBy === 'amount' && <Text style={styles.check}>●</Text>}
 86 |               </TouchableOpacity>
 87 | 
 88 |               <TouchableOpacity
 89 |                 style={[styles.item, filters.sortBy === 'description' && styles.activeItem]}
 90 |                 onPress={() => setFilters(prev => ({...prev, sortBy: 'description'}))}
 91 |               >
 92 |                 <Text style={[styles.itemText, filters.sortBy === 'description' && styles.activeText]}>
 93 |                   Description
 94 |                 </Text>
 95 |                 {filters.sortBy === 'description' && <Text style={styles.check}>●</Text>}
 96 |               </TouchableOpacity>
 97 |             </View>
 98 | 
 99 |             {/* SORT ORDER */}
100 |             <View style={styles.section}>
101 |               <Text style={styles.sectionTitle}>SORT ORDER</Text>
102 | 
103 |               <TouchableOpacity
104 |                 style={[styles.item, filters.sortOrder === 'desc' && styles.activeItem]}
105 |                 onPress={() => setFilters(prev => ({...prev, sortOrder: 'desc'}))}
106 |               >
107 |                 <Text style={[styles.itemText, filters.sortOrder === 'desc' && styles.activeText]}>
108 |                   Newest First
109 |                 </Text>
110 |                 {filters.sortOrder === 'desc' && <Text style={styles.check}>●</Text>}
111 |               </TouchableOpacity>
112 | 
113 |               <TouchableOpacity
114 |                 style={[styles.item, filters.sortOrder === 'asc' && styles.activeItem]}
115 |                 onPress={() => setFilters(prev => ({...prev, sortOrder: 'asc'}))}
116 |               >
117 |                 <Text style={[styles.itemText, filters.sortOrder === 'asc' && styles.activeText]}>
118 |                   Oldest First
119 |                 </Text>
120 |                 {filters.sortOrder === 'asc' && <Text style={styles.check}>●</Text>}
121 |               </TouchableOpacity>
122 |             </View>
123 | 
124 |             {/* DATE RANGE */}
125 |             <View style={styles.section}>
126 |               <Text style={styles.sectionTitle}>DATE RANGE</Text>
127 | 
128 |               <TouchableOpacity
129 |                 style={[styles.item, filters.dateRange === 'all' && styles.activeItem]}
130 |                 onPress={() => setFilters(prev => ({...prev, dateRange: 'all'}))}
131 |               >
132 |                 <Text style={[styles.itemText, filters.dateRange === 'all' && styles.activeText]}>
133 |                   All Time
134 |                 </Text>
135 |                 {filters.dateRange === 'all' && <Text style={styles.check}>●</Text>}
136 |               </TouchableOpacity>
137 | 
138 |               <TouchableOpacity
139 |                 style={[styles.item, filters.dateRange === 'today' && styles.activeItem]}
140 |                 onPress={() => setFilters(prev => ({...prev, dateRange: 'today'}))}
141 |               >
142 |                 <Text style={[styles.itemText, filters.dateRange === 'today' && styles.activeText]}>
143 |                   Today
144 |                 </Text>
145 |                 {filters.dateRange === 'today' && <Text style={styles.check}>●</Text>}
146 |               </TouchableOpacity>
147 | 
148 |               <TouchableOpacity
149 |                 style={[styles.item, filters.dateRange === 'week' && styles.activeItem]}
150 |                 onPress={() => setFilters(prev => ({...prev, dateRange: 'week'}))}
151 |               >
152 |                 <Text style={[styles.itemText, filters.dateRange === 'week' && styles.activeText]}>
153 |                   This Week
154 |                 </Text>
155 |                 {filters.dateRange === 'week' && <Text style={styles.check}>●</Text>}
156 |               </TouchableOpacity>
157 | 
158 |               <TouchableOpacity
159 |                 style={[styles.item, filters.dateRange === 'month' && styles.activeItem]}
160 |                 onPress={() => setFilters(prev => ({...prev, dateRange: 'month'}))}
161 |               >
162 |                 <Text style={[styles.itemText, filters.dateRange === 'month' && styles.activeText]}>
163 |                   This Month
164 |                 </Text>
165 |                 {filters.dateRange === 'month' && <Text style={styles.check}>●</Text>}
166 |               </TouchableOpacity>
167 | 
168 |               <TouchableOpacity
169 |                 style={[styles.item, filters.dateRange === 'year' && styles.activeItem]}
170 |                 onPress={() => setFilters(prev => ({...prev, dateRange: 'year'}))}
171 |               >
172 |                 <Text style={[styles.itemText, filters.dateRange === 'year' && styles.activeText]}>
173 |                   This Year
174 |                 </Text>
175 |                 {filters.dateRange === 'year' && <Text style={styles.check}>●</Text>}
176 |               </TouchableOpacity>
177 |             </View>
178 | 
179 |             {/* CATEGORIES */}
180 |             <View style={styles.section}>
181 |               <Text style={styles.sectionTitle}>CATEGORY</Text>
182 | 
183 |               <TouchableOpacity
184 |                 style={[styles.item, !filters.category && styles.activeItem]}
185 |                 onPress={() => setFilters(prev => ({...prev, category: null}))}
186 |               >
187 |                 <Text style={[styles.itemText, !filters.category && styles.activeText]}>
188 |                   ALL CATEGORIES
189 |                 </Text>
190 |                 {!filters.category && <Text style={styles.check}>●</Text>}
191 |               </TouchableOpacity>
192 | 
193 |               {categories.map((category) => (
194 |                 <TouchableOpacity
195 |                   key={category.id}
196 |                   style={[styles.item, filters.category === category.id && styles.activeItem]}
197 |                   onPress={() => setFilters(prev => ({
198 |                     ...prev,
199 |                     category: prev.category === category.id ? null : category.id
200 |                   }))}
201 |                 >
202 |                   <Text style={[styles.itemText, filters.category === category.id && styles.activeText]}>
203 |                     {category.name.toUpperCase()}
204 |                   </Text>
205 |                   {filters.category === category.id && <Text style={styles.check}>●</Text>}
206 |                 </TouchableOpacity>
207 |               ))}
208 |             </View>
209 | 
210 |         </ScrollView>
211 | 
212 |         {/* Footer */}
213 |         <View style={styles.footer}>
214 |           <TouchableOpacity style={styles.resetBtn} onPress={handleResetFilters}>
215 |             <Text style={styles.resetText}>RESET</Text>
216 |           </TouchableOpacity>
217 |           <TouchableOpacity style={styles.applyBtn} onPress={handleApplyFilters}>
218 |             <Text style={styles.applyText}>APPLY</Text>
219 |           </TouchableOpacity>
220 |         </View>
221 | 
222 |       </SafeAreaView>
223 |     </Modal>
224 |   );
225 | };
226 | 
227 | const styles = StyleSheet.create({
228 |   container: {
229 |     flex: 1,
230 |     backgroundColor: '#000000',
231 |   },
232 |   header: {
233 |     flexDirection: 'row',
234 |     justifyContent: 'space-between',
235 |     alignItems: 'center',
236 |     backgroundColor: '#000000',
237 |     padding: 16,
238 |     paddingTop: 12,
239 |     borderBottomWidth: 1,
240 |     borderBottomColor: 'rgba(255, 255, 255, 0.1)',
241 |   },
242 |   title: {
243 |     color: '#ffffff',
244 |     fontSize: 16,
245 |     fontWeight: '400',
246 |     letterSpacing: 1.5,
247 |     fontFamily: 'monospace',
248 |     textTransform: 'uppercase',
249 |   },
250 |   closeBtn: {
251 |     padding: 6,
252 |     borderRadius: 12,
253 |     backgroundColor: 'rgba(255, 255, 255, 0.05)',
254 |   },
255 |   closeText: {
256 |     color: '#ffffff',
257 |     fontSize: 16,
258 |     fontWeight: '300',
259 |   },
260 |   content: {
261 |     flex: 1,
262 |     backgroundColor: '#000000',
263 |   },
264 |   contentContainer: {
265 |     padding: 16,
266 |     paddingBottom: 24,
267 |   },
268 |   section: {
269 |     marginBottom: 24,
270 |   },
271 |   sectionTitle: {
272 |     color: '#ffffff',
273 |     fontSize: 12,
274 |     fontWeight: '400',
275 |     marginBottom: 12,
276 |     letterSpacing: 2,
277 |     borderBottomWidth: 1,
278 |     borderBottomColor: 'rgba(255, 255, 255, 0.1)',
279 |     paddingBottom: 8,
280 |     fontFamily: 'monospace',
281 |     textTransform: 'uppercase',
282 |   },
283 |   item: {
284 |     flexDirection: 'row',
285 |     justifyContent: 'space-between',
286 |     alignItems: 'center',
287 |     backgroundColor: 'transparent',
288 |     padding: 12,
289 |     marginBottom: 4,
290 |     borderRadius: 8,
291 |     borderWidth: 1,
292 |     borderColor: 'rgba(255, 255, 255, 0.08)',
293 |   },
294 |   activeItem: {
295 |     backgroundColor: 'rgba(255, 255, 255, 0.95)',
296 |     borderColor: 'rgba(255, 255, 255, 0.95)',
297 |   },
298 |   itemText: {
299 |     color: '#ffffff',
300 |     fontSize: 14,
301 |     fontWeight: '300',
302 |     fontFamily: 'monospace',
303 |   },
304 |   activeText: {
305 |     color: '#000000',
306 |     fontWeight: '400',
307 |   },
308 |   check: {
309 |     color: '#000000',
310 |     fontSize: 14,
311 |     fontWeight: '400',
312 |   },
313 |   footer: {
314 |     flexDirection: 'row',
315 |     padding: 16,
316 |     gap: 12,
317 |     backgroundColor: '#000000',
318 |     borderTopWidth: 1,
319 |     borderTopColor: 'rgba(255, 255, 255, 0.1)',
320 |   },
321 |   resetBtn: {
322 |     flex: 1,
323 |     backgroundColor: 'transparent',
324 |     padding: 14,
325 |     borderRadius: 8,
326 |     alignItems: 'center',
327 |     borderWidth: 1,
328 |     borderColor: 'rgba(255, 255, 255, 0.2)',
329 |   },
330 |   resetText: {
331 |     color: '#ffffff',
332 |     fontSize: 12,
333 |     fontWeight: '300',
334 |     letterSpacing: 1.5,
335 |     fontFamily: 'monospace',
336 |     textTransform: 'uppercase',
337 |   },
338 |   applyBtn: {
339 |     flex: 2,
340 |     backgroundColor: 'rgba(255, 255, 255, 0.95)',
341 |     padding: 14,
342 |     borderRadius: 8,
343 |     alignItems: 'center',
344 |   },
345 |   applyText: {
346 |     color: '#000000',
347 |     fontSize: 12,
348 |     fontWeight: '400',
349 |     letterSpacing: 1.5,
350 |     fontFamily: 'monospace',
351 |     textTransform: 'uppercase',
352 |   },
353 | });
354 | 
355 | export default FilterSortPopup;


--------------------------------------------------------------------------------
/src/components/InlineCategoryPicker.js:
--------------------------------------------------------------------------------
  1 | import React, { useState } from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   ScrollView,
  8 |   Dimensions
  9 | } from 'react-native';
 10 | import { Ionicons } from '@expo/vector-icons';
 11 | import { categories } from '../utils/helpers';
 12 | 
 13 | const { width, height } = Dimensions.get('window');
 14 | 
 15 | const InlineCategoryPicker = ({ selectedCategory, onCategorySelect }) => {
 16 |   const [isExpanded, setIsExpanded] = useState(false);
 17 | 
 18 |   const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
 19 | 
 20 |   const handleCategorySelect = (categoryId) => {
 21 |     onCategorySelect(categoryId);
 22 |     setIsExpanded(false);
 23 |   };
 24 | 
 25 |   return (
 26 |     <View style={styles.container}>
 27 |       <Text style={styles.label}>Category *</Text>
 28 | 
 29 |       {/* Category Button */}
 30 |       <TouchableOpacity
 31 |         style={styles.categoryButton}
 32 |         onPress={() => setIsExpanded(!isExpanded)}
 33 |       >
 34 |         <View style={styles.categoryButtonLeft}>
 35 |           {selectedCategoryData ? (
 36 |             <>
 37 |               <Ionicons
 38 |                 name={selectedCategoryData.icon}
 39 |                 size={16}
 40 |                 color="#ffffff"
 41 |               />
 42 |               <Text style={styles.categoryButtonText}>
 43 |                 {selectedCategoryData.name}
 44 |               </Text>
 45 |             </>
 46 |           ) : (
 47 |             <>
 48 |               <Ionicons name="help-circle-outline" size={16} color="#666666" />
 49 |               <Text style={styles.categoryButtonPlaceholder}>
 50 |                 Select a category
 51 |               </Text>
 52 |             </>
 53 |           )}
 54 |         </View>
 55 |         <Ionicons
 56 |           name={isExpanded ? "chevron-up" : "chevron-down"}
 57 |           size={16}
 58 |           color="#666666"
 59 |         />
 60 |       </TouchableOpacity>
 61 | 
 62 |       {/* Expanded Category List */}
 63 |       {isExpanded && (
 64 |         <View style={styles.expandedContainer}>
 65 | 
 66 |           <ScrollView style={styles.categoriesList} nestedScrollEnabled={true}>
 67 |             <View style={styles.categoriesGrid}>
 68 |               {categories.map((category) => (
 69 |                 <TouchableOpacity
 70 |                   key={category.id}
 71 |                   style={[
 72 |                     styles.categoryItem,
 73 |                     selectedCategory === category.id && styles.selectedCategory
 74 |                   ]}
 75 |                   onPress={() => handleCategorySelect(category.id)}
 76 |                 >
 77 |                   <Ionicons
 78 |                     name={category.icon}
 79 |                     size={20}
 80 |                     color={selectedCategory === category.id ? '#000000' : '#ffffff'}
 81 |                   />
 82 |                   <Text style={[
 83 |                     styles.categoryName,
 84 |                     selectedCategory === category.id && styles.selectedCategoryName
 85 |                   ]}>
 86 |                     {category.name}
 87 |                   </Text>
 88 |                 </TouchableOpacity>
 89 |               ))}
 90 |             </View>
 91 |           </ScrollView>
 92 | 
 93 |           <TouchableOpacity
 94 |             style={styles.collapseButton}
 95 |             onPress={() => setIsExpanded(false)}
 96 |           >
 97 |             <Text style={styles.collapseButtonText}>COLLAPSE</Text>
 98 |           </TouchableOpacity>
 99 |         </View>
100 |       )}
101 |     </View>
102 |   );
103 | };
104 | 
105 | const styles = StyleSheet.create({
106 |   container: {
107 |     marginBottom: 24,
108 |   },
109 |   label: {
110 |     fontSize: 12,
111 |     fontWeight: '400',
112 |     marginBottom: 12,
113 |     color: '#ffffff',
114 |     fontFamily: 'monospace',
115 |     letterSpacing: 1,
116 |     textTransform: 'uppercase',
117 |   },
118 |   categoryButton: {
119 |     flexDirection: 'row',
120 |     alignItems: 'center',
121 |     justifyContent: 'space-between',
122 |     backgroundColor: 'transparent',
123 |     padding: 16,
124 |     borderRadius: 0,
125 |     borderWidth: 1,
126 |     borderColor: '#1a1a1a',
127 |   },
128 |   categoryButtonLeft: {
129 |     flexDirection: 'row',
130 |     alignItems: 'center',
131 |     flex: 1,
132 |   },
133 |   categoryButtonText: {
134 |     fontSize: 14,
135 |     color: '#ffffff',
136 |     marginLeft: 12,
137 |     fontWeight: '400',
138 |     fontFamily: 'monospace',
139 |     letterSpacing: 0.5,
140 |   },
141 |   categoryButtonPlaceholder: {
142 |     fontSize: 14,
143 |     color: '#666666',
144 |     marginLeft: 12,
145 |     fontWeight: '400',
146 |     fontFamily: 'monospace',
147 |     letterSpacing: 0.5,
148 |   },
149 |   expandedContainer: {
150 |     backgroundColor: '#111111',
151 |     borderWidth: 2,
152 |     borderColor: '#ffffff',
153 |     borderTopWidth: 0,
154 |     maxHeight: 300,
155 |   },
156 |   categoriesList: {
157 |     maxHeight: 200,
158 |   },
159 |   categoriesGrid: {
160 |     flexDirection: 'row',
161 |     flexWrap: 'wrap',
162 |     padding: 16,
163 |     justifyContent: 'space-between',
164 |   },
165 |   categoryItem: {
166 |     width: '48%',
167 |     backgroundColor: '#222222',
168 |     borderWidth: 1,
169 |     borderColor: '#444444',
170 |     padding: 12,
171 |     alignItems: 'center',
172 |     marginBottom: 8,
173 |   },
174 |   selectedCategory: {
175 |     backgroundColor: '#ffffff',
176 |     borderColor: '#ffffff',
177 |   },
178 |   categoryName: {
179 |     fontSize: 10,
180 |     color: '#ffffff',
181 |     fontFamily: 'monospace',
182 |     textAlign: 'center',
183 |     marginTop: 6,
184 |     textTransform: 'uppercase',
185 |   },
186 |   selectedCategoryName: {
187 |     color: '#000000',
188 |   },
189 |   collapseButton: {
190 |     backgroundColor: '#333333',
191 |     padding: 12,
192 |     alignItems: 'center',
193 |     borderTopWidth: 1,
194 |     borderTopColor: '#444444',
195 |   },
196 |   collapseButtonText: {
197 |     color: '#ffffff',
198 |     fontSize: 12,
199 |     fontFamily: 'monospace',
200 |     letterSpacing: 1,
201 |   },
202 | });
203 | 
204 | export default InlineCategoryPicker;


--------------------------------------------------------------------------------
/src/components/SimpleCategoryPopup.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   ScrollView,
  8 |   Modal,
  9 |   Dimensions
 10 | } from 'react-native';
 11 | import { Ionicons } from '@expo/vector-icons';
 12 | import { categories } from '../utils/helpers';
 13 | 
 14 | const { width, height } = Dimensions.get('window');
 15 | 
 16 | const SimpleCategoryPopup = ({
 17 |   visible,
 18 |   selectedCategory,
 19 |   onCategorySelect,
 20 |   onClose
 21 | }) => {
 22 |   console.log('SimpleCategoryPopup render:', {
 23 |     visible,
 24 |     categoriesLength: categories.length,
 25 |     selectedCategory
 26 |   });
 27 | 
 28 |   const handleCategorySelect = (categoryId) => {
 29 |     console.log('Category selected:', categoryId);
 30 |     onCategorySelect(categoryId);
 31 |     onClose();
 32 |   };
 33 | 
 34 |   return (
 35 |     <Modal
 36 |       visible={visible}
 37 |       transparent={true}
 38 |       animationType="fade"
 39 |       onRequestClose={onClose}
 40 |     >
 41 |       <View style={styles.overlay}>
 42 |         <View style={styles.container}>
 43 |           {/* Header */}
 44 |           <View style={styles.header}>
 45 |             <Text style={styles.title}>Select Category</Text>
 46 |             <TouchableOpacity onPress={onClose}>
 47 |               <Ionicons name="close" size={24} color="#ffffff" />
 48 |             </TouchableOpacity>
 49 |           </View>
 50 | 
 51 |           {/* Content */}
 52 |           <ScrollView style={styles.content}>
 53 |             <Text style={styles.debugText}>
 54 |               Categories: {categories.length}
 55 |             </Text>
 56 | 
 57 |             <View style={styles.categoriesGrid}>
 58 |               {categories.map((category) => (
 59 |                 <TouchableOpacity
 60 |                   key={category.id}
 61 |                   style={[
 62 |                     styles.categoryItem,
 63 |                     selectedCategory === category.id && styles.selectedCategory
 64 |                   ]}
 65 |                   onPress={() => handleCategorySelect(category.id)}
 66 |                 >
 67 |                   <Ionicons
 68 |                     name={category.icon}
 69 |                     size={24}
 70 |                     color={selectedCategory === category.id ? '#000000' : '#ffffff'}
 71 |                   />
 72 |                   <Text style={[
 73 |                     styles.categoryName,
 74 |                     selectedCategory === category.id && styles.selectedCategoryName
 75 |                   ]}>
 76 |                     {category.name}
 77 |                   </Text>
 78 |                 </TouchableOpacity>
 79 |               ))}
 80 |             </View>
 81 | 
 82 |             <Text style={styles.footerText}>
 83 |               Choose a category for your expense
 84 |             </Text>
 85 |           </ScrollView>
 86 |         </View>
 87 |       </View>
 88 |     </Modal>
 89 |   );
 90 | };
 91 | 
 92 | const styles = StyleSheet.create({
 93 |   overlay: {
 94 |     position: 'absolute',
 95 |     top: 0,
 96 |     left: 0,
 97 |     right: 0,
 98 |     bottom: 0,
 99 |     backgroundColor: 'rgba(0, 0, 0, 0.9)',
100 |     justifyContent: 'center',
101 |     alignItems: 'center',
102 |   },
103 |   container: {
104 |     backgroundColor: '#000000',
105 |     borderWidth: 3,
106 |     borderColor: '#ffffff',
107 |     width: width - 60,
108 |     height: height * 0.7,
109 |     maxWidth: 400,
110 |   },
111 |   header: {
112 |     flexDirection: 'row',
113 |     justifyContent: 'space-between',
114 |     alignItems: 'center',
115 |     padding: 20,
116 |     borderBottomWidth: 1,
117 |     borderBottomColor: '#333333',
118 |   },
119 |   title: {
120 |     fontSize: 18,
121 |     color: '#ffffff',
122 |     fontFamily: 'monospace',
123 |     letterSpacing: 1,
124 |   },
125 |   content: {
126 |     flex: 1,
127 |     padding: 20,
128 |     backgroundColor: '#222222',
129 |     minHeight: 300,
130 |   },
131 |   debugText: {
132 |     fontSize: 16,
133 |     color: '#ff0000',
134 |     fontFamily: 'monospace',
135 |     textAlign: 'center',
136 |     marginBottom: 20,
137 |     backgroundColor: '#333333',
138 |     padding: 10,
139 |   },
140 |   categoriesGrid: {
141 |     flexDirection: 'row',
142 |     flexWrap: 'wrap',
143 |     justifyContent: 'space-between',
144 |   },
145 |   categoryItem: {
146 |     width: '48%',
147 |     backgroundColor: '#222222',
148 |     borderWidth: 1,
149 |     borderColor: '#444444',
150 |     padding: 16,
151 |     alignItems: 'center',
152 |     marginBottom: 12,
153 |   },
154 |   selectedCategory: {
155 |     backgroundColor: '#ffffff',
156 |     borderColor: '#ffffff',
157 |   },
158 |   categoryName: {
159 |     fontSize: 12,
160 |     color: '#ffffff',
161 |     fontFamily: 'monospace',
162 |     textAlign: 'center',
163 |     marginTop: 8,
164 |   },
165 |   selectedCategoryName: {
166 |     color: '#000000',
167 |   },
168 |   footerText: {
169 |     fontSize: 12,
170 |     color: '#666666',
171 |     fontFamily: 'monospace',
172 |     textAlign: 'center',
173 |     marginTop: 20,
174 |   },
175 | });
176 | 
177 | export default SimpleCategoryPopup;


--------------------------------------------------------------------------------
/src/components/SimpleFilterPopup.js:
--------------------------------------------------------------------------------
  1 | import React, { useState } from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   ScrollView,
  8 |   Modal,
  9 |   Dimensions
 10 | } from 'react-native';
 11 | import { Ionicons } from '@expo/vector-icons';
 12 | import { categories } from '../utils/helpers';
 13 | 
 14 | const { width, height } = Dimensions.get('window');
 15 | 
 16 | const SimpleFilterPopup = ({
 17 |   visible,
 18 |   currentFilters = {},
 19 |   onApplyFilters,
 20 |   onClose
 21 | }) => {
 22 |   const [filters, setFilters] = useState({
 23 |     sortBy: currentFilters.sortBy || 'date',
 24 |     sortOrder: currentFilters.sortOrder || 'desc',
 25 |     category: currentFilters.category || null,
 26 |     dateRange: currentFilters.dateRange || 'all'
 27 |   });
 28 | 
 29 | 
 30 |   const sortOptions = [
 31 |     { id: 'date', name: 'Date', icon: 'calendar-outline' },
 32 |     { id: 'amount', name: 'Amount', icon: 'cash-outline' },
 33 |     { id: 'description', name: 'Description', icon: 'text-outline' }
 34 |   ];
 35 | 
 36 |   const dateRangeOptions = [
 37 |     { id: 'all', name: 'All Time' },
 38 |     { id: 'today', name: 'Today' },
 39 |     { id: 'week', name: 'This Week' },
 40 |     { id: 'month', name: 'This Month' }
 41 |   ];
 42 | 
 43 |   const handleApply = () => {
 44 |     onApplyFilters(filters);
 45 |     onClose();
 46 |   };
 47 | 
 48 |   const handleReset = () => {
 49 |     const resetFilters = {
 50 |       sortBy: 'date',
 51 |       sortOrder: 'desc',
 52 |       category: null,
 53 |       dateRange: 'all'
 54 |     };
 55 |     setFilters(resetFilters);
 56 |     onApplyFilters(resetFilters);
 57 |     onClose();
 58 |   };
 59 | 
 60 |   return (
 61 |     <Modal
 62 |       visible={visible}
 63 |       transparent={true}
 64 |       animationType="fade"
 65 |       onRequestClose={onClose}
 66 |     >
 67 |       <View style={styles.overlay}>
 68 |         <View style={styles.container}>
 69 |           {/* Header */}
 70 |           <View style={styles.header}>
 71 |             <Text style={styles.title}>Filter & Sort</Text>
 72 |             <TouchableOpacity onPress={onClose}>
 73 |               <Ionicons name="close" size={24} color="#ffffff" />
 74 |             </TouchableOpacity>
 75 |           </View>
 76 | 
 77 |           {/* Content */}
 78 |           <ScrollView style={styles.content}>
 79 | 
 80 |             {/* Sort By */}
 81 |             <Text style={styles.sectionTitle}>Sort By</Text>
 82 |             {sortOptions.map((option) => (
 83 |               <TouchableOpacity
 84 |                 key={option.id}
 85 |                 style={[
 86 |                   styles.optionItem,
 87 |                   filters.sortBy === option.id && styles.selectedOption
 88 |                 ]}
 89 |                 onPress={() => setFilters(prev => ({ ...prev, sortBy: option.id }))}
 90 |               >
 91 |                 <Ionicons name={option.icon} size={16} color="#ffffff" />
 92 |                 <Text style={styles.optionText}>{option.name}</Text>
 93 |                 {filters.sortBy === option.id && (
 94 |                   <Ionicons name="checkmark" size={16} color="#ffffff" />
 95 |                 )}
 96 |               </TouchableOpacity>
 97 |             ))}
 98 | 
 99 |             {/* Date Range */}
100 |             <Text style={styles.sectionTitle}>Date Range</Text>
101 |             {dateRangeOptions.map((option) => (
102 |               <TouchableOpacity
103 |                 key={option.id}
104 |                 style={[
105 |                   styles.optionItem,
106 |                   filters.dateRange === option.id && styles.selectedOption
107 |                 ]}
108 |                 onPress={() => setFilters(prev => ({ ...prev, dateRange: option.id }))}
109 |               >
110 |                 <Text style={styles.optionText}>{option.name}</Text>
111 |                 {filters.dateRange === option.id && (
112 |                   <Ionicons name="checkmark" size={16} color="#ffffff" />
113 |                 )}
114 |               </TouchableOpacity>
115 |             ))}
116 | 
117 |             {/* Categories */}
118 |             <Text style={styles.sectionTitle}>Category</Text>
119 |             <TouchableOpacity
120 |               style={[
121 |                 styles.optionItem,
122 |                 !filters.category && styles.selectedOption
123 |               ]}
124 |               onPress={() => setFilters(prev => ({ ...prev, category: null }))}
125 |             >
126 |               <Text style={styles.optionText}>All Categories</Text>
127 |               {!filters.category && (
128 |                 <Ionicons name="checkmark" size={16} color="#ffffff" />
129 |               )}
130 |             </TouchableOpacity>
131 | 
132 |             {categories.map((category) => (
133 |               <TouchableOpacity
134 |                 key={category.id}
135 |                 style={[
136 |                   styles.optionItem,
137 |                   filters.category === category.id && styles.selectedOption
138 |                 ]}
139 |                 onPress={() => setFilters(prev => ({
140 |                   ...prev,
141 |                   category: prev.category === category.id ? null : category.id
142 |                 }))}
143 |               >
144 |                 <Ionicons name={category.icon} size={16} color="#ffffff" />
145 |                 <Text style={styles.optionText}>{category.name}</Text>
146 |                 {filters.category === category.id && (
147 |                   <Ionicons name="checkmark" size={16} color="#ffffff" />
148 |                 )}
149 |               </TouchableOpacity>
150 |             ))}
151 | 
152 |             {/* Action Buttons */}
153 |             <View style={styles.buttonContainer}>
154 |               <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
155 |                 <Text style={styles.resetButtonText}>RESET</Text>
156 |               </TouchableOpacity>
157 |               <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
158 |                 <Text style={styles.applyButtonText}>APPLY</Text>
159 |               </TouchableOpacity>
160 |             </View>
161 |           </ScrollView>
162 |         </View>
163 |       </View>
164 |     </Modal>
165 |   );
166 | };
167 | 
168 | const styles = StyleSheet.create({
169 |   overlay: {
170 |     position: 'absolute',
171 |     top: 0,
172 |     left: 0,
173 |     right: 0,
174 |     bottom: 0,
175 |     backgroundColor: 'rgba(0, 0, 0, 0.9)',
176 |     justifyContent: 'center',
177 |     alignItems: 'center',
178 |   },
179 |   container: {
180 |     backgroundColor: '#000000',
181 |     borderWidth: 3,
182 |     borderColor: '#ffffff',
183 |     width: width - 60,
184 |     height: height * 0.8,
185 |     maxWidth: 400,
186 |   },
187 |   header: {
188 |     flexDirection: 'row',
189 |     justifyContent: 'space-between',
190 |     alignItems: 'center',
191 |     padding: 20,
192 |     borderBottomWidth: 1,
193 |     borderBottomColor: '#333333',
194 |   },
195 |   title: {
196 |     fontSize: 18,
197 |     color: '#ffffff',
198 |     fontFamily: 'monospace',
199 |     letterSpacing: 1,
200 |   },
201 |   content: {
202 |     flex: 1,
203 |     padding: 20,
204 |     backgroundColor: '#222222',
205 |     minHeight: 400,
206 |   },
207 |   sectionTitle: {
208 |     fontSize: 14,
209 |     color: '#ffffff',
210 |     fontFamily: 'monospace',
211 |     marginTop: 20,
212 |     marginBottom: 10,
213 |     textTransform: 'uppercase',
214 |   },
215 |   optionItem: {
216 |     flexDirection: 'row',
217 |     alignItems: 'center',
218 |     padding: 12,
219 |     backgroundColor: '#222222',
220 |     borderWidth: 1,
221 |     borderColor: '#444444',
222 |     marginBottom: 4,
223 |   },
224 |   selectedOption: {
225 |     backgroundColor: '#444444',
226 |     borderColor: '#ffffff',
227 |   },
228 |   optionText: {
229 |     fontSize: 14,
230 |     color: '#ffffff',
231 |     fontFamily: 'monospace',
232 |     marginLeft: 10,
233 |     flex: 1,
234 |   },
235 |   buttonContainer: {
236 |     flexDirection: 'row',
237 |     marginTop: 20,
238 |     gap: 10,
239 |   },
240 |   resetButton: {
241 |     flex: 1,
242 |     backgroundColor: '#333333',
243 |     padding: 12,
244 |     alignItems: 'center',
245 |   },
246 |   resetButtonText: {
247 |     color: '#ffffff',
248 |     fontSize: 12,
249 |     fontFamily: 'monospace',
250 |   },
251 |   applyButton: {
252 |     flex: 1,
253 |     backgroundColor: '#ffffff',
254 |     padding: 12,
255 |     alignItems: 'center',
256 |   },
257 |   applyButtonText: {
258 |     color: '#000000',
259 |     fontSize: 12,
260 |     fontFamily: 'monospace',
261 |   },
262 | });
263 | 
264 | export default SimpleFilterPopup;


--------------------------------------------------------------------------------
/src/components/TestModal.js:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import {
 3 |   View,
 4 |   Text,
 5 |   StyleSheet,
 6 |   Modal,
 7 |   TouchableOpacity
 8 | } from 'react-native';
 9 | 
10 | const TestModal = ({ visible, onClose }) => {
11 |   console.log('TestModal render:', visible);
12 | 
13 |   return (
14 |     <Modal
15 |       visible={visible}
16 |       transparent={true}
17 |       animationType="fade"
18 |     >
19 |       <View style={styles.overlay}>
20 |         <View style={styles.container}>
21 |           <Text style={styles.text}>TEST MODAL IS VISIBLE!</Text>
22 |           <Text style={styles.text}>Categories should work now</Text>
23 |           <TouchableOpacity style={styles.button} onPress={onClose}>
24 |             <Text style={styles.buttonText}>CLOSE</Text>
25 |           </TouchableOpacity>
26 |         </View>
27 |       </View>
28 |     </Modal>
29 |   );
30 | };
31 | 
32 | const styles = StyleSheet.create({
33 |   overlay: {
34 |     flex: 1,
35 |     backgroundColor: 'rgba(255, 0, 0, 0.8)', // Red background
36 |     justifyContent: 'center',
37 |     alignItems: 'center',
38 |   },
39 |   container: {
40 |     backgroundColor: '#ffffff',
41 |     padding: 40,
42 |     borderWidth: 5,
43 |     borderColor: '#000000',
44 |     alignItems: 'center',
45 |   },
46 |   text: {
47 |     fontSize: 20,
48 |     color: '#000000',
49 |     fontWeight: 'bold',
50 |     textAlign: 'center',
51 |     marginBottom: 20,
52 |   },
53 |   button: {
54 |     backgroundColor: '#ff0000',
55 |     padding: 15,
56 |     borderWidth: 2,
57 |     borderColor: '#000000',
58 |   },
59 |   buttonText: {
60 |     color: '#ffffff',
61 |     fontSize: 16,
62 |     fontWeight: 'bold',
63 |   },
64 | });
65 | 
66 | export default TestModal;


--------------------------------------------------------------------------------
/src/context/ExpenseContext.js:
--------------------------------------------------------------------------------
  1 | import React, { createContext, useContext, useReducer, useEffect } from 'react';
  2 | import { saveExpenses, loadExpenses } from '../utils/storage';
  3 | import uuid from 'react-native-uuid';
  4 | 
  5 | const ExpenseContext = createContext();
  6 | 
  7 | const expenseReducer = (state, action) => {
  8 |   switch (action.type) {
  9 |     case 'SET_EXPENSES':
 10 |       return {
 11 |         ...state,
 12 |         expenses: action.payload
 13 |       };
 14 |     case 'ADD_EXPENSE':
 15 |       return {
 16 |         ...state,
 17 |         expenses: [...state.expenses, action.payload]
 18 |       };
 19 |     case 'UPDATE_EXPENSE':
 20 |       return {
 21 |         ...state,
 22 |         expenses: state.expenses.map(expense =>
 23 |           expense.id === action.payload.id ? action.payload : expense
 24 |         )
 25 |       };
 26 |     case 'DELETE_EXPENSE':
 27 |       return {
 28 |         ...state,
 29 |         expenses: state.expenses.filter(expense => expense.id !== action.payload)
 30 |       };
 31 |     case 'CLEAR_ALL_EXPENSES':
 32 |       return {
 33 |         ...state,
 34 |         expenses: []
 35 |       };
 36 |     case 'SET_LOADING':
 37 |       return {
 38 |         ...state,
 39 |         loading: action.payload
 40 |       };
 41 |     default:
 42 |       return state;
 43 |   }
 44 | };
 45 | 
 46 | const initialState = {
 47 |   expenses: [],
 48 |   loading: true
 49 | };
 50 | 
 51 | export const ExpenseProvider = ({ children }) => {
 52 |   const [state, dispatch] = useReducer(expenseReducer, initialState);
 53 | 
 54 |   useEffect(() => {
 55 |     loadExpensesFromStorage();
 56 |   }, []);
 57 | 
 58 |   useEffect(() => {
 59 |     if (!state.loading) {
 60 |       saveExpenses(state.expenses);
 61 |     }
 62 |   }, [state.expenses, state.loading]);
 63 | 
 64 |   const loadExpensesFromStorage = async () => {
 65 |     try {
 66 |       const expenses = await loadExpenses();
 67 |       dispatch({ type: 'SET_EXPENSES', payload: expenses });
 68 |     } catch (error) {
 69 |       console.error('Error loading expenses:', error);
 70 |     } finally {
 71 |       dispatch({ type: 'SET_LOADING', payload: false });
 72 |     }
 73 |   };
 74 | 
 75 |   const addExpense = (expenseData) => {
 76 |     const newExpense = {
 77 |       id: uuid.v4(),
 78 |       ...expenseData,
 79 |       createdAt: new Date().toISOString()
 80 |     };
 81 |     dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
 82 |   };
 83 | 
 84 |   const updateExpense = (id, updatedData) => {
 85 |     const updatedExpense = {
 86 |       ...updatedData,
 87 |       id,
 88 |       updatedAt: new Date().toISOString()
 89 |     };
 90 |     dispatch({ type: 'UPDATE_EXPENSE', payload: updatedExpense });
 91 |   };
 92 | 
 93 |   const deleteExpense = (id) => {
 94 |     dispatch({ type: 'DELETE_EXPENSE', payload: id });
 95 |   };
 96 | 
 97 |   const clearAllExpenses = () => {
 98 |     dispatch({ type: 'CLEAR_ALL_EXPENSES' });
 99 |   };
100 | 
101 |   const value = {
102 |     expenses: state.expenses,
103 |     loading: state.loading,
104 |     addExpense,
105 |     updateExpense,
106 |     deleteExpense,
107 |     clearAllExpenses
108 |   };
109 | 
110 |   return (
111 |     <ExpenseContext.Provider value={value}>
112 |       {children}
113 |     </ExpenseContext.Provider>
114 |   );
115 | };
116 | 
117 | export const useExpenses = () => {
118 |   const context = useContext(ExpenseContext);
119 |   if (!context) {
120 |     throw new Error('useExpenses must be used within an ExpenseProvider');
121 |   }
122 |   return context;
123 | };


--------------------------------------------------------------------------------
/src/context/SecurityContext.js:
--------------------------------------------------------------------------------
  1 | import React, { createContext, useContext, useReducer, useEffect } from 'react';
  2 | import AsyncStorage from '@react-native-async-storage/async-storage';
  3 | import * as Crypto from 'expo-crypto';
  4 | import * as LocalAuthentication from 'expo-local-authentication';
  5 | 
  6 | const SecurityContext = createContext();
  7 | 
  8 | const SECURITY_STORAGE_KEY = '@xpens_security';
  9 | 
 10 | const securityReducer = (state, action) => {
 11 |   switch (action.type) {
 12 |     case 'SET_LOADING':
 13 |       return {
 14 |         ...state,
 15 |         loading: action.payload
 16 |       };
 17 |     case 'SET_PIN_ENABLED':
 18 |       return {
 19 |         ...state,
 20 |         isPinEnabled: action.payload
 21 |       };
 22 |     case 'SET_AUTHENTICATED':
 23 |       return {
 24 |         ...state,
 25 |         isAuthenticated: action.payload
 26 |       };
 27 |     case 'SET_PIN_SET':
 28 |       return {
 29 |         ...state,
 30 |         isPinSet: action.payload
 31 |       };
 32 |     case 'SET_BIOMETRIC_AVAILABLE':
 33 |       return {
 34 |         ...state,
 35 |         isBiometricAvailable: action.payload
 36 |       };
 37 |     case 'SET_BIOMETRIC_ENABLED':
 38 |       return {
 39 |         ...state,
 40 |         isBiometricEnabled: action.payload
 41 |       };
 42 |     default:
 43 |       return state;
 44 |   }
 45 | };
 46 | 
 47 | const initialState = {
 48 |   loading: true,
 49 |   isPinEnabled: false,
 50 |   isAuthenticated: false,
 51 |   isPinSet: false,
 52 |   isBiometricAvailable: false,
 53 |   isBiometricEnabled: false
 54 | };
 55 | 
 56 | export const SecurityProvider = ({ children }) => {
 57 |   const [state, dispatch] = useReducer(securityReducer, initialState);
 58 | 
 59 |   useEffect(() => {
 60 |     initializeSecurity();
 61 |   }, []);
 62 | 
 63 |   const initializeSecurity = async () => {
 64 |     try {
 65 |       const securityData = await AsyncStorage.getItem(SECURITY_STORAGE_KEY);
 66 |       if (securityData) {
 67 |         const parsed = JSON.parse(securityData);
 68 |         dispatch({ type: 'SET_PIN_ENABLED', payload: parsed.isPinEnabled || false });
 69 |         dispatch({ type: 'SET_PIN_SET', payload: !!parsed.pinHash });
 70 |         dispatch({ type: 'SET_BIOMETRIC_ENABLED', payload: parsed.isBiometricEnabled || false });
 71 |       }
 72 | 
 73 |       const biometricAvailable = await LocalAuthentication.hasHardwareAsync() &&
 74 |                                 await LocalAuthentication.isEnrolledAsync();
 75 |       dispatch({ type: 'SET_BIOMETRIC_AVAILABLE', payload: biometricAvailable });
 76 |     } catch (error) {
 77 |       console.error('Error initializing security:', error);
 78 |     } finally {
 79 |       dispatch({ type: 'SET_LOADING', payload: false });
 80 |     }
 81 |   };
 82 | 
 83 |   const hashPin = async (pin) => {
 84 |     try {
 85 |       const hash = await Crypto.digestStringAsync(
 86 |         Crypto.CryptoDigestAlgorithm.SHA256,
 87 |         pin + 'xpens_salt_2025',
 88 |         { encoding: Crypto.CryptoEncoding.HEX }
 89 |       );
 90 |       return hash;
 91 |     } catch (error) {
 92 |       console.error('Error hashing PIN:', error);
 93 |       throw error;
 94 |     }
 95 |   };
 96 | 
 97 |   const setupPin = async (pin) => {
 98 |     try {
 99 |       const pinHash = await hashPin(pin);
100 |       const securityData = {
101 |         isPinEnabled: true,
102 |         pinHash: pinHash,
103 |         createdAt: new Date().toISOString()
104 |       };
105 | 
106 |       await AsyncStorage.setItem(SECURITY_STORAGE_KEY, JSON.stringify(securityData));
107 |       dispatch({ type: 'SET_PIN_ENABLED', payload: true });
108 |       dispatch({ type: 'SET_PIN_SET', payload: true });
109 |       dispatch({ type: 'SET_AUTHENTICATED', payload: true });
110 |       return true;
111 |     } catch (error) {
112 |       console.error('Error setting up PIN:', error);
113 |       return false;
114 |     }
115 |   };
116 | 
117 |   const verifyPin = async (pin) => {
118 |     try {
119 |       const securityData = await AsyncStorage.getItem(SECURITY_STORAGE_KEY);
120 |       if (!securityData) {
121 |         return false;
122 |       }
123 | 
124 |       const parsed = JSON.parse(securityData);
125 |       const pinHash = await hashPin(pin);
126 | 
127 |       if (pinHash === parsed.pinHash) {
128 |         dispatch({ type: 'SET_AUTHENTICATED', payload: true });
129 |         return true;
130 |       }
131 |       return false;
132 |     } catch (error) {
133 |       console.error('Error verifying PIN:', error);
134 |       return false;
135 |     }
136 |   };
137 | 
138 |   const changePin = async (oldPin, newPin) => {
139 |     try {
140 |       const isOldPinValid = await verifyPin(oldPin);
141 |       if (!isOldPinValid) {
142 |         return { success: false, error: 'Current PIN is incorrect' };
143 |       }
144 | 
145 |       const success = await setupPin(newPin);
146 |       return { success, error: success ? null : 'Failed to update PIN' };
147 |     } catch (error) {
148 |       console.error('Error changing PIN:', error);
149 |       return { success: false, error: 'Failed to change PIN' };
150 |     }
151 |   };
152 | 
153 |   const disableSecurity = async (pin) => {
154 |     try {
155 |       const isValid = await verifyPin(pin);
156 |       if (!isValid) {
157 |         return { success: false, error: 'PIN is incorrect' };
158 |       }
159 | 
160 |       await AsyncStorage.removeItem(SECURITY_STORAGE_KEY);
161 |       dispatch({ type: 'SET_PIN_ENABLED', payload: false });
162 |       dispatch({ type: 'SET_PIN_SET', payload: false });
163 |       dispatch({ type: 'SET_AUTHENTICATED', payload: true });
164 |       return { success: true };
165 |     } catch (error) {
166 |       console.error('Error disabling security:', error);
167 |       return { success: false, error: 'Failed to disable security' };
168 |     }
169 |   };
170 | 
171 |   const authenticateWithBiometric = async () => {
172 |     try {
173 |       if (!state.isBiometricAvailable) {
174 |         return { success: false, error: 'Biometric authentication not available' };
175 |       }
176 | 
177 |       const result = await LocalAuthentication.authenticateAsync({
178 |         promptMessage: 'Authenticate to access your expenses',
179 |         cancelLabel: 'Use PIN instead',
180 |         disableDeviceFallback: false,
181 |         fallbackLabel: 'Enter PIN'
182 |       });
183 | 
184 |       if (result.success) {
185 |         dispatch({ type: 'SET_AUTHENTICATED', payload: true });
186 |         return { success: true };
187 |       } else {
188 |         return { success: false, error: result.error || 'Authentication failed' };
189 |       }
190 |     } catch (error) {
191 |       console.error('Biometric authentication error:', error);
192 |       return { success: false, error: 'Biometric authentication failed' };
193 |     }
194 |   };
195 | 
196 |   const enableBiometric = async () => {
197 |     try {
198 |       if (!state.isBiometricAvailable) {
199 |         return { success: false, error: 'Biometric authentication not available on this device' };
200 |       }
201 | 
202 |       const securityData = await AsyncStorage.getItem(SECURITY_STORAGE_KEY);
203 |       if (!securityData) {
204 |         return { success: false, error: 'PIN must be set first' };
205 |       }
206 | 
207 |       const parsed = JSON.parse(securityData);
208 |       const updatedData = {
209 |         ...parsed,
210 |         isBiometricEnabled: true
211 |       };
212 | 
213 |       await AsyncStorage.setItem(SECURITY_STORAGE_KEY, JSON.stringify(updatedData));
214 |       dispatch({ type: 'SET_BIOMETRIC_ENABLED', payload: true });
215 |       return { success: true };
216 |     } catch (error) {
217 |       console.error('Error enabling biometric:', error);
218 |       return { success: false, error: 'Failed to enable biometric authentication' };
219 |     }
220 |   };
221 | 
222 |   const disableBiometric = async () => {
223 |     try {
224 |       const securityData = await AsyncStorage.getItem(SECURITY_STORAGE_KEY);
225 |       if (!securityData) {
226 |         return { success: false, error: 'No security settings found' };
227 |       }
228 | 
229 |       const parsed = JSON.parse(securityData);
230 |       const updatedData = {
231 |         ...parsed,
232 |         isBiometricEnabled: false
233 |       };
234 | 
235 |       await AsyncStorage.setItem(SECURITY_STORAGE_KEY, JSON.stringify(updatedData));
236 |       dispatch({ type: 'SET_BIOMETRIC_ENABLED', payload: false });
237 |       return { success: true };
238 |     } catch (error) {
239 |       console.error('Error disabling biometric:', error);
240 |       return { success: false, error: 'Failed to disable biometric authentication' };
241 |     }
242 |   };
243 | 
244 |   const logout = () => {
245 |     dispatch({ type: 'SET_AUTHENTICATED', payload: false });
246 |   };
247 | 
248 |   const value = {
249 |     ...state,
250 |     setupPin,
251 |     verifyPin,
252 |     changePin,
253 |     disableSecurity,
254 |     authenticateWithBiometric,
255 |     enableBiometric,
256 |     disableBiometric,
257 |     logout
258 |   };
259 | 
260 |   return (
261 |     <SecurityContext.Provider value={value}>
262 |       {children}
263 |     </SecurityContext.Provider>
264 |   );
265 | };
266 | 
267 | export const useSecurity = () => {
268 |   const context = useContext(SecurityContext);
269 |   if (!context) {
270 |     throw new Error('useSecurity must be used within a SecurityProvider');
271 |   }
272 |   return context;
273 | };


--------------------------------------------------------------------------------
/src/hooks/useCustomAlert.js:
--------------------------------------------------------------------------------
 1 | import { useState } from 'react';
 2 | 
 3 | export const useCustomAlert = () => {
 4 |   const [alertConfig, setAlertConfig] = useState({
 5 |     visible: false,
 6 |     title: '',
 7 |     message: '',
 8 |     buttons: [],
 9 |     type: 'default'
10 |   });
11 | 
12 |   const showAlert = (title, message, buttons = [], type = 'default') => {
13 |     setAlertConfig({
14 |       visible: true,
15 |       title,
16 |       message,
17 |       buttons,
18 |       type
19 |     });
20 |   };
21 | 
22 |   const hideAlert = () => {
23 |     setAlertConfig(prev => ({
24 |       ...prev,
25 |       visible: false
26 |     }));
27 |   };
28 | 
29 |   // Convenience methods for different alert types
30 |   const showSuccess = (title, message, buttons = []) => {
31 |     showAlert(title, message, buttons, 'success');
32 |   };
33 | 
34 |   const showError = (title, message, buttons = []) => {
35 |     showAlert(title, message, buttons, 'error');
36 |   };
37 | 
38 |   const showWarning = (title, message, buttons = []) => {
39 |     showAlert(title, message, buttons, 'warning');
40 |   };
41 | 
42 |   const showConfirm = (title, message, onConfirm, onCancel = null) => {
43 |     const buttons = [
44 |       {
45 |         text: 'Cancel',
46 |         style: 'cancel',
47 |         onPress: onCancel || (() => {})
48 |       },
49 |       {
50 |         text: 'Confirm',
51 |         style: 'default',
52 |         onPress: onConfirm
53 |       }
54 |     ];
55 |     showAlert(title, message, buttons, 'warning');
56 |   };
57 | 
58 |   const showDestructiveConfirm = (title, message, onConfirm, onCancel = null) => {
59 |     const buttons = [
60 |       {
61 |         text: 'Cancel',
62 |         style: 'cancel',
63 |         onPress: onCancel || (() => {})
64 |       },
65 |       {
66 |         text: 'Delete',
67 |         style: 'destructive',
68 |         onPress: onConfirm
69 |       }
70 |     ];
71 |     showAlert(title, message, buttons, 'error');
72 |   };
73 | 
74 |   return {
75 |     alertConfig,
76 |     showAlert,
77 |     hideAlert,
78 |     showSuccess,
79 |     showError,
80 |     showWarning,
81 |     showConfirm,
82 |     showDestructiveConfirm
83 |   };
84 | };


--------------------------------------------------------------------------------
/src/navigation/AppNavigator.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import { NavigationContainer } from '@react-navigation/native';
  3 | import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  4 | import { createStackNavigator } from '@react-navigation/stack';
  5 | import { Ionicons } from '@expo/vector-icons';
  6 | import { useSecurity } from '../context/SecurityContext';
  7 | 
  8 | import HomeScreen from '../screens/HomeScreen';
  9 | import AddExpenseScreen from '../screens/AddExpenseScreen';
 10 | import StatisticsScreen from '../screens/StatisticsScreen';
 11 | import SettingsScreen from '../screens/SettingsScreen';
 12 | import PinSetupScreen from '../screens/PinSetupScreen';
 13 | import PinEntryScreen from '../screens/PinEntryScreen';
 14 | 
 15 | const Tab = createBottomTabNavigator();
 16 | const Stack = createStackNavigator();
 17 | 
 18 | const HomeStack = () => {
 19 |   return (
 20 |     <Stack.Navigator>
 21 |       <Stack.Screen
 22 |         name="ExpenseList"
 23 |         component={HomeScreen}
 24 |         options={{
 25 |           title: 'Expenses',
 26 |           headerStyle: { backgroundColor: '#000000' },
 27 |           headerTintColor: '#fff'
 28 |         }}
 29 |       />
 30 |     </Stack.Navigator>
 31 |   );
 32 | };
 33 | 
 34 | const AddExpenseStack = () => {
 35 |   return (
 36 |     <Stack.Navigator>
 37 |       <Stack.Screen
 38 |         name="AddExpenseForm"
 39 |         component={AddExpenseScreen}
 40 |         options={{
 41 |           title: 'Add Expense',
 42 |           headerStyle: { backgroundColor: '#000000' },
 43 |           headerTintColor: '#fff'
 44 |         }}
 45 |       />
 46 |     </Stack.Navigator>
 47 |   );
 48 | };
 49 | 
 50 | const StatisticsStack = () => {
 51 |   return (
 52 |     <Stack.Navigator>
 53 |       <Stack.Screen
 54 |         name="StatisticsView"
 55 |         component={StatisticsScreen}
 56 |         options={{
 57 |           title: 'Statistics',
 58 |           headerStyle: { backgroundColor: '#000000' },
 59 |           headerTintColor: '#fff'
 60 |         }}
 61 |       />
 62 |     </Stack.Navigator>
 63 |   );
 64 | };
 65 | 
 66 | const SettingsStack = () => {
 67 |   return (
 68 |     <Stack.Navigator>
 69 |       <Stack.Screen
 70 |         name="SettingsView"
 71 |         component={SettingsScreen}
 72 |         options={{
 73 |           title: 'Settings',
 74 |           headerStyle: { backgroundColor: '#000000' },
 75 |           headerTintColor: '#fff'
 76 |         }}
 77 |       />
 78 |       <Stack.Screen
 79 |         name="PinSetup"
 80 |         component={PinSetupScreen}
 81 |         options={{
 82 |           headerShown: false
 83 |         }}
 84 |       />
 85 |       <Stack.Screen
 86 |         name="PinEntry"
 87 |         component={PinEntryScreen}
 88 |         options={{
 89 |           headerShown: false
 90 |         }}
 91 |       />
 92 |     </Stack.Navigator>
 93 |   );
 94 | };
 95 | 
 96 | const TabNavigator = () => {
 97 |   return (
 98 |     <Tab.Navigator
 99 |       screenOptions={({ route }) => ({
100 |         tabBarIcon: ({ focused, color, size }) => {
101 |           let iconName;
102 | 
103 |           if (route.name === 'Home') {
104 |             iconName = focused ? 'list' : 'list-outline';
105 |           } else if (route.name === 'AddExpense') {
106 |             iconName = focused ? 'add-circle' : 'add-circle-outline';
107 |           } else if (route.name === 'Statistics') {
108 |             iconName = focused ? 'bar-chart' : 'bar-chart-outline';
109 |           } else if (route.name === 'Settings') {
110 |             iconName = focused ? 'settings' : 'settings-outline';
111 |           }
112 | 
113 |           return <Ionicons name={iconName} size={size} color={color} />;
114 |         },
115 |         tabBarActiveTintColor: '#ffffff',
116 |         tabBarInactiveTintColor: '#666666',
117 |         tabBarStyle: { backgroundColor: '#000000', borderTopColor: '#1a1a1a' },
118 |         headerShown: false
119 |       })}
120 |     >
121 |       <Tab.Screen
122 |         name="Home"
123 |         component={HomeStack}
124 |         options={{ title: 'Expenses' }}
125 |       />
126 |       <Tab.Screen
127 |         name="AddExpense"
128 |         component={AddExpenseStack}
129 |         options={{ title: 'Add' }}
130 |       />
131 |       <Tab.Screen
132 |         name="Statistics"
133 |         component={StatisticsStack}
134 |         options={{ title: 'Stats' }}
135 |       />
136 |       <Tab.Screen
137 |         name="Settings"
138 |         component={SettingsStack}
139 |         options={{ title: 'Settings' }}
140 |       />
141 |     </Tab.Navigator>
142 |   );
143 | };
144 | 
145 | const AppNavigator = () => {
146 |   const { loading, isPinEnabled, isAuthenticated } = useSecurity();
147 | 
148 |   if (loading) {
149 |     return null; // Could add a loading screen here
150 |   }
151 | 
152 |   return (
153 |     <NavigationContainer>
154 |       <Stack.Navigator screenOptions={{ headerShown: false }}>
155 |         {isPinEnabled && !isAuthenticated ? (
156 |           <Stack.Screen
157 |             name="PinEntry"
158 |             component={PinEntryScreen}
159 |             options={{ gestureEnabled: false }}
160 |           />
161 |         ) : (
162 |           <Stack.Screen name="Main" component={TabNavigator} />
163 |         )}
164 |       </Stack.Navigator>
165 |     </NavigationContainer>
166 |   );
167 | };
168 | 
169 | export default AppNavigator;


--------------------------------------------------------------------------------
/src/screens/AddExpenseScreen.js:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { View, StyleSheet } from 'react-native';
 3 | import { useExpenses } from '../context/ExpenseContext';
 4 | import ExpenseForm from '../components/ExpenseForm';
 5 | import CustomAlert from '../components/CustomAlert';
 6 | import { useCustomAlert } from '../hooks/useCustomAlert';
 7 | 
 8 | const AddExpenseScreen = ({ navigation }) => {
 9 |   const { addExpense } = useExpenses();
10 |   const { alertConfig, hideAlert, showSuccess } = useCustomAlert();
11 | 
12 |   const handleAddExpense = (expenseData) => {
13 |     addExpense(expenseData);
14 |     showSuccess(
15 |       'Success',
16 |       'Expense added successfully!',
17 |       [
18 |         {
19 |           text: 'OK',
20 |           style: 'default',
21 |           onPress: () => {
22 |             navigation.navigate('Home');
23 |           }
24 |         }
25 |       ]
26 |     );
27 |   };
28 | 
29 |   return (
30 |     <View style={styles.container}>
31 |       <ExpenseForm onSubmit={handleAddExpense} />
32 | 
33 |       <CustomAlert
34 |         visible={alertConfig.visible}
35 |         title={alertConfig.title}
36 |         message={alertConfig.message}
37 |         buttons={alertConfig.buttons}
38 |         type={alertConfig.type}
39 |         onClose={hideAlert}
40 |       />
41 |     </View>
42 |   );
43 | };
44 | 
45 | const styles = StyleSheet.create({
46 |   container: {
47 |     flex: 1,
48 |     backgroundColor: '#000000',
49 |   },
50 | });
51 | 
52 | export default AddExpenseScreen;


--------------------------------------------------------------------------------
/src/screens/HomeScreen.js:
--------------------------------------------------------------------------------
  1 | import React, { useState } from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   FlatList,
  6 |   StyleSheet,
  7 |   TouchableOpacity,
  8 |   TextInput,
  9 |   Modal
 10 | } from 'react-native';
 11 | import { Ionicons } from '@expo/vector-icons';
 12 | import { useExpenses } from '../context/ExpenseContext';
 13 | import ExpenseItem from '../components/ExpenseItem';
 14 | import ExpenseForm from '../components/ExpenseForm';
 15 | import ExpenseDetailsPopup from '../components/ExpenseDetailsPopup';
 16 | import FilterSortPopup from '../components/FilterSortPopup';
 17 | import CustomAlert from '../components/CustomAlert';
 18 | import { useCustomAlert } from '../hooks/useCustomAlert';
 19 | import { formatCurrency, categories } from '../utils/helpers';
 20 | 
 21 | const HomeScreen = () => {
 22 |   const { expenses, loading, updateExpense, deleteExpense } = useExpenses();
 23 |   const [searchQuery, setSearchQuery] = useState('');
 24 |   const [filters, setFilters] = useState({
 25 |     sortBy: 'date',
 26 |     sortOrder: 'desc',
 27 |     category: null,
 28 |     dateRange: 'all'
 29 |   });
 30 |   const [editingExpense, setEditingExpense] = useState(null);
 31 |   const [showEditModal, setShowEditModal] = useState(false);
 32 |   const [selectedExpense, setSelectedExpense] = useState(null);
 33 |   const [showDetailsPopup, setShowDetailsPopup] = useState(false);
 34 |   const [showFilterPopup, setShowFilterPopup] = useState(false);
 35 | 
 36 |   const { alertConfig, hideAlert, showSuccess, showDestructiveConfirm } = useCustomAlert();
 37 | 
 38 |   const filteredExpenses = expenses.filter(expense => {
 39 |     const matchesSearch = expense.description.toLowerCase().includes(searchQuery.toLowerCase());
 40 |     const matchesCategory = !filters.category || expense.category === filters.category;
 41 | 
 42 |     // Date range filtering
 43 |     const expenseDate = new Date(expense.date);
 44 |     const now = new Date();
 45 |     let matchesDateRange = true;
 46 | 
 47 |     switch (filters.dateRange) {
 48 |       case 'today':
 49 |         matchesDateRange = expenseDate.toDateString() === now.toDateString();
 50 |         break;
 51 |       case 'week':
 52 |         const weekStart = new Date(now);
 53 |         weekStart.setDate(now.getDate() - now.getDay());
 54 |         matchesDateRange = expenseDate >= weekStart;
 55 |         break;
 56 |       case 'month':
 57 |         matchesDateRange = expenseDate.getMonth() === now.getMonth() &&
 58 |                           expenseDate.getFullYear() === now.getFullYear();
 59 |         break;
 60 |       case 'year':
 61 |         matchesDateRange = expenseDate.getFullYear() === now.getFullYear();
 62 |         break;
 63 |       default:
 64 |         matchesDateRange = true;
 65 |     }
 66 | 
 67 |     return matchesSearch && matchesCategory && matchesDateRange;
 68 |   }).sort((a, b) => {
 69 |     let comparison = 0;
 70 | 
 71 |     switch (filters.sortBy) {
 72 |       case 'amount':
 73 |         comparison = a.amount - b.amount;
 74 |         break;
 75 |       case 'description':
 76 |         comparison = a.description.localeCompare(b.description);
 77 |         break;
 78 |       default: // date
 79 |         comparison = new Date(a.date) - new Date(b.date);
 80 |     }
 81 | 
 82 |     return filters.sortOrder === 'asc' ? comparison : -comparison;
 83 |   });
 84 | 
 85 |   const totalAmount = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
 86 | 
 87 |   const handleExpensePress = (expense) => {
 88 |     setSelectedExpense(expense);
 89 |     setShowDetailsPopup(true);
 90 |   };
 91 | 
 92 |   const handleEdit = (expense) => {
 93 |     setEditingExpense(expense);
 94 |     setShowEditModal(true);
 95 |   };
 96 | 
 97 |   const handleUpdateExpense = (updatedData) => {
 98 |     updateExpense(editingExpense.id, updatedData);
 99 |     setShowEditModal(false);
100 |     setEditingExpense(null);
101 |     showSuccess('Success', 'Expense updated successfully!');
102 |   };
103 | 
104 |   const handleDelete = (expense) => {
105 |     showDestructiveConfirm(
106 |       'Delete Expense',
107 |       `Are you sure you want to delete "${expense.description}"? This action cannot be undone.`,
108 |       () => {
109 |         deleteExpense(expense.id);
110 |         showSuccess('Deleted', 'Expense deleted successfully');
111 |       }
112 |     );
113 |   };
114 | 
115 |   const handleApplyFilters = (newFilters) => {
116 |     setFilters(newFilters);
117 |   };
118 | 
119 |   const renderExpenseItem = ({ item }) => (
120 |     <ExpenseItem
121 |       expense={item}
122 |       onPress={() => handleExpensePress(item)}
123 |       onEdit={() => handleEdit(item)}
124 |       onDelete={() => handleDelete(item)}
125 |     />
126 |   );
127 | 
128 |   const renderEmptyState = () => (
129 |     <View style={styles.emptyState}>
130 |       <Ionicons name="receipt-outline" size={80} color="#ccc" />
131 |       <Text style={styles.emptyStateText}>No expenses found</Text>
132 |       <Text style={styles.emptyStateSubtext}>
133 |         {searchQuery || filters.category || filters.dateRange !== 'all'
134 |           ? 'Try adjusting your filters'
135 |           : 'Start by adding your first expense'}
136 |       </Text>
137 |     </View>
138 |   );
139 | 
140 |   if (loading) {
141 |     return (
142 |       <View style={styles.loadingContainer}>
143 |         <Text style={{ color: '#ffffff', fontFamily: 'monospace', letterSpacing: 0.5 }}>Loading expenses...</Text>
144 |       </View>
145 |     );
146 |   }
147 | 
148 |   return (
149 |     <View style={styles.container}>
150 |       <View style={styles.header}>
151 |         <View style={styles.totalContainer}>
152 |           <Text style={styles.totalLabel}>Total Expenses</Text>
153 |           <Text style={styles.totalAmount}>{formatCurrency(totalAmount)}</Text>
154 |         </View>
155 |       </View>
156 | 
157 |       <View style={styles.filtersContainer}>
158 |         <View style={styles.searchContainer}>
159 |           <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
160 |           <TextInput
161 |             style={styles.searchInput}
162 |             placeholder="Search expenses..."
163 |             value={searchQuery}
164 |             onChangeText={setSearchQuery}
165 |             placeholderTextColor="#999"
166 |           />
167 |         </View>
168 | 
169 | 
170 | <TouchableOpacity
171 |           style={styles.filterButton}
172 |           onPress={() => setShowFilterPopup(true)}
173 |         >
174 |           <Ionicons name="funnel" size={16} color="#ffffff" />
175 |           <Text style={styles.filterText}>
176 |             {filters.category || filters.dateRange !== 'all' ? 'Filtered' : 'Filter'}
177 |           </Text>
178 |         </TouchableOpacity>
179 |       </View>
180 | 
181 |       <FlatList
182 |         data={filteredExpenses}
183 |         renderItem={renderExpenseItem}
184 |         keyExtractor={(item) => item.id}
185 |         ListEmptyComponent={renderEmptyState}
186 |         showsVerticalScrollIndicator={false}
187 |         contentContainerStyle={filteredExpenses.length === 0 ? styles.emptyListContainer : null}
188 |       />
189 | 
190 |       <Modal
191 |         visible={showEditModal}
192 |         animationType="slide"
193 |         presentationStyle="pageSheet"
194 |       >
195 |         <View style={styles.modalContainer}>
196 |           <View style={styles.modalHeader}>
197 |             <Text style={styles.modalTitle}>Edit Expense</Text>
198 |             <TouchableOpacity
199 |               onPress={() => {
200 |                 setShowEditModal(false);
201 |                 setEditingExpense(null);
202 |               }}
203 |             >
204 |               <Ionicons name="close" size={20} color="#ffffff" />
205 |             </TouchableOpacity>
206 |           </View>
207 |           <ExpenseForm
208 |             initialData={editingExpense}
209 |             onSubmit={handleUpdateExpense}
210 |             onCancel={() => {
211 |               setShowEditModal(false);
212 |               setEditingExpense(null);
213 |             }}
214 |           />
215 |         </View>
216 |       </Modal>
217 | 
218 |       {/* Custom Popups */}
219 |       <ExpenseDetailsPopup
220 |         visible={showDetailsPopup}
221 |         expense={selectedExpense}
222 |         onClose={() => {
223 |           setShowDetailsPopup(false);
224 |           setSelectedExpense(null);
225 |         }}
226 |         onEdit={handleEdit}
227 |         onDelete={handleDelete}
228 |       />
229 | 
230 |       <FilterSortPopup
231 |         visible={showFilterPopup}
232 |         currentFilters={filters}
233 |         onApplyFilters={handleApplyFilters}
234 |         onClose={() => setShowFilterPopup(false)}
235 |       />
236 | 
237 | 
238 | <CustomAlert
239 |         visible={alertConfig.visible}
240 |         title={alertConfig.title}
241 |         message={alertConfig.message}
242 |         buttons={alertConfig.buttons}
243 |         type={alertConfig.type}
244 |         onClose={hideAlert}
245 |       />
246 |     </View>
247 |   );
248 | };
249 | 
250 | const styles = StyleSheet.create({
251 |   container: {
252 |     flex: 1,
253 |     backgroundColor: '#000000',
254 |   },
255 |   loadingContainer: {
256 |     flex: 1,
257 |     justifyContent: 'center',
258 |     alignItems: 'center',
259 |     backgroundColor: '#000000',
260 |   },
261 |   header: {
262 |     backgroundColor: '#000000',
263 |     padding: 24,
264 |     paddingTop: 16,
265 |     borderBottomWidth: 1,
266 |     borderBottomColor: '#1a1a1a',
267 |   },
268 |   totalContainer: {
269 |     alignItems: 'center',
270 |   },
271 |   totalLabel: {
272 |     color: '#666666',
273 |     fontSize: 12,
274 |     marginBottom: 8,
275 |     fontFamily: 'monospace',
276 |     letterSpacing: 1,
277 |     textTransform: 'uppercase',
278 |   },
279 |   totalAmount: {
280 |     color: '#ffffff',
281 |     fontSize: 32,
282 |     fontWeight: '300',
283 |     fontFamily: 'monospace',
284 |     letterSpacing: 2,
285 |   },
286 |   filtersContainer: {
287 |     flexDirection: 'row',
288 |     padding: 24,
289 |     gap: 12,
290 |   },
291 |   searchContainer: {
292 |     flex: 1,
293 |     flexDirection: 'row',
294 |     alignItems: 'center',
295 |     backgroundColor: 'transparent',
296 |     borderWidth: 1,
297 |     borderColor: '#1a1a1a',
298 |     borderRadius: 0,
299 |     paddingHorizontal: 16,
300 |   },
301 |   searchIcon: {
302 |     marginRight: 12,
303 |   },
304 |   searchInput: {
305 |     flex: 1,
306 |     paddingVertical: 16,
307 |     fontSize: 14,
308 |     color: '#ffffff',
309 |     fontFamily: 'monospace',
310 |     letterSpacing: 0.5,
311 |   },
312 |   filterButton: {
313 |     flexDirection: 'row',
314 |     alignItems: 'center',
315 |     backgroundColor: 'transparent',
316 |     paddingHorizontal: 16,
317 |     borderWidth: 1,
318 |     borderColor: '#1a1a1a',
319 |     borderRadius: 0,
320 |   },
321 |   filterText: {
322 |     marginLeft: 8,
323 |     color: '#ffffff',
324 |     fontWeight: '400',
325 |     fontFamily: 'monospace',
326 |     fontSize: 12,
327 |     letterSpacing: 0.5,
328 |   },
329 |   emptyListContainer: {
330 |     flex: 1,
331 |   },
332 |   emptyState: {
333 |     flex: 1,
334 |     justifyContent: 'center',
335 |     alignItems: 'center',
336 |     paddingHorizontal: 40,
337 |   },
338 |   emptyStateText: {
339 |     fontSize: 16,
340 |     fontWeight: '400',
341 |     color: '#ffffff',
342 |     marginTop: 24,
343 |     marginBottom: 8,
344 |     fontFamily: 'monospace',
345 |     letterSpacing: 0.5,
346 |   },
347 |   emptyStateSubtext: {
348 |     fontSize: 12,
349 |     color: '#666666',
350 |     textAlign: 'center',
351 |     lineHeight: 18,
352 |     fontFamily: 'monospace',
353 |     letterSpacing: 0.3,
354 |   },
355 |   modalContainer: {
356 |     flex: 1,
357 |     backgroundColor: '#000000',
358 |   },
359 |   modalHeader: {
360 |     flexDirection: 'row',
361 |     justifyContent: 'space-between',
362 |     alignItems: 'center',
363 |     padding: 24,
364 |     backgroundColor: '#000000',
365 |     borderBottomWidth: 1,
366 |     borderBottomColor: '#1a1a1a',
367 |   },
368 |   modalTitle: {
369 |     fontSize: 18,
370 |     fontWeight: '400',
371 |     color: '#ffffff',
372 |     fontFamily: 'monospace',
373 |     letterSpacing: 1,
374 |   },
375 | });
376 | 
377 | export default HomeScreen;


--------------------------------------------------------------------------------
/src/screens/PinEntryScreen.js:
--------------------------------------------------------------------------------
  1 | import React, { useState, useEffect } from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   Alert,
  8 |   AppState
  9 | } from 'react-native';
 10 | import { Ionicons } from '@expo/vector-icons';
 11 | import { useSecurity } from '../context/SecurityContext';
 12 | 
 13 | const PinEntryScreen = () => {
 14 |   const { verifyPin, authenticateWithBiometric, isBiometricAvailable, isBiometricEnabled } = useSecurity();
 15 |   const [pin, setPin] = useState('');
 16 |   const [attempts, setAttempts] = useState(0);
 17 |   const [isLocked, setIsLocked] = useState(false);
 18 |   const [lockUntil, setLockUntil] = useState(null);
 19 |   const [shake, setShake] = useState(false);
 20 |   const [biometricAttempted, setBiometricAttempted] = useState(false);
 21 | 
 22 |   const MAX_ATTEMPTS = 5;
 23 |   const LOCK_DURATION = 30000; // 30 seconds
 24 | 
 25 |   useEffect(() => {
 26 |     const subscription = AppState.addEventListener('change', (nextAppState) => {
 27 |       if (nextAppState === 'active' && isLocked) {
 28 |         checkLockStatus();
 29 |       }
 30 |     });
 31 | 
 32 |     return () => {
 33 |       subscription?.remove();
 34 |     };
 35 |   }, [isLocked]);
 36 | 
 37 |   useEffect(() => {
 38 |     if (lockUntil) {
 39 |       const timer = setTimeout(() => {
 40 |         checkLockStatus();
 41 |       }, 1000);
 42 |       return () => clearTimeout(timer);
 43 |     }
 44 |   }, [lockUntil]);
 45 | 
 46 |   useEffect(() => {
 47 |     if (isBiometricAvailable && isBiometricEnabled && !biometricAttempted && !isLocked) {
 48 |       handleBiometricAuth();
 49 |     }
 50 |   }, [isBiometricAvailable, isBiometricEnabled, biometricAttempted, isLocked]);
 51 | 
 52 |   const checkLockStatus = () => {
 53 |     if (lockUntil && Date.now() >= lockUntil) {
 54 |       setIsLocked(false);
 55 |       setLockUntil(null);
 56 |       setAttempts(0);
 57 |     }
 58 |   };
 59 | 
 60 |   const handleBiometricAuth = async () => {
 61 |     if (isLocked || biometricAttempted) return;
 62 | 
 63 |     setBiometricAttempted(true);
 64 | 
 65 |     try {
 66 |       const result = await authenticateWithBiometric();
 67 |       if (!result.success) {
 68 |         console.log('Biometric authentication failed or cancelled');
 69 |       }
 70 |     } catch (error) {
 71 |       console.error('Biometric authentication error:', error);
 72 |     }
 73 |   };
 74 | 
 75 |   const handleNumberPress = (number) => {
 76 |     if (isLocked) return;
 77 | 
 78 |     if (pin.length < 6) {
 79 |       const newPin = pin + number;
 80 |       setPin(newPin);
 81 | 
 82 |       if (newPin.length === 6) {
 83 |         handleVerifyPin(newPin);
 84 |       }
 85 |     }
 86 |   };
 87 | 
 88 |   const handleDelete = () => {
 89 |     if (isLocked) return;
 90 |     setPin(prev => prev.slice(0, -1));
 91 |   };
 92 | 
 93 |   const handleVerifyPin = async (pinToVerify) => {
 94 |     try {
 95 |       const isValid = await verifyPin(pinToVerify);
 96 | 
 97 |       if (isValid) {
 98 |         // PIN is correct, authentication successful
 99 |         setPin('');
100 |         setAttempts(0);
101 |       } else {
102 |         // Wrong PIN
103 |         const newAttempts = attempts + 1;
104 |         setAttempts(newAttempts);
105 |         setPin('');
106 | 
107 |         // Trigger shake animation
108 |         setShake(true);
109 |         setTimeout(() => setShake(false), 500);
110 | 
111 |         if (newAttempts >= MAX_ATTEMPTS) {
112 |           // Lock the app
113 |           const lockTime = Date.now() + LOCK_DURATION;
114 |           setLockUntil(lockTime);
115 |           setIsLocked(true);
116 |           Alert.alert(
117 |             'Too Many Attempts',
118 |             `App is locked for ${LOCK_DURATION / 1000} seconds due to too many incorrect attempts.`,
119 |             [{ text: 'OK' }]
120 |           );
121 |         } else {
122 |           const remainingAttempts = MAX_ATTEMPTS - newAttempts;
123 |           Alert.alert(
124 |             'Incorrect PIN',
125 |             `Wrong PIN. ${remainingAttempts} attempt${remainingAttempts !== 1 ? 's' : ''} remaining.`,
126 |             [{ text: 'OK' }]
127 |           );
128 |         }
129 |       }
130 |     } catch (error) {
131 |       console.error('PIN verification error:', error);
132 |       Alert.alert('Error', 'An error occurred while verifying PIN.');
133 |       setPin('');
134 |     }
135 |   };
136 | 
137 |   const renderDots = () => {
138 |     return (
139 |       <View style={[styles.dotsContainer, shake && styles.shakeAnimation]}>
140 |         {[1, 2, 3, 4, 5, 6].map((_, index) => (
141 |           <View
142 |             key={index}
143 |             style={[
144 |               styles.dot,
145 |               index < pin.length && styles.filledDot,
146 |               attempts > 0 && styles.errorDot
147 |             ]}
148 |           />
149 |         ))}
150 |       </View>
151 |     );
152 |   };
153 | 
154 |   const renderNumberPad = () => {
155 |     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'delete'];
156 | 
157 |     return (
158 |       <View style={styles.numberPad}>
159 |         {numbers.map((item, index) => {
160 |           if (item === null) {
161 |             // Show biometric button if available and enabled
162 |             if (isBiometricAvailable && isBiometricEnabled && !isLocked) {
163 |               return (
164 |                 <TouchableOpacity
165 |                   key={index}
166 |                   style={styles.numberButton}
167 |                   onPress={handleBiometricAuth}
168 |                 >
169 |                   <Ionicons
170 |                     name="finger-print"
171 |                     size={24}
172 |                     color="#ffffff"
173 |                   />
174 |                 </TouchableOpacity>
175 |               );
176 |             }
177 |             return <View key={index} style={styles.numberButton} />;
178 |           }
179 | 
180 |           if (item === 'delete') {
181 |             return (
182 |               <TouchableOpacity
183 |                 key={index}
184 |                 style={[
185 |                   styles.numberButton,
186 |                   isLocked && styles.disabledButton
187 |                 ]}
188 |                 onPress={handleDelete}
189 |                 disabled={isLocked}
190 |               >
191 |                 <Ionicons
192 |                   name="backspace-outline"
193 |                   size={24}
194 |                   color={isLocked ? "#333333" : "#ffffff"}
195 |                 />
196 |               </TouchableOpacity>
197 |             );
198 |           }
199 | 
200 |           return (
201 |             <TouchableOpacity
202 |               key={index}
203 |               style={[
204 |                 styles.numberButton,
205 |                 isLocked && styles.disabledButton
206 |               ]}
207 |               onPress={() => handleNumberPress(item.toString())}
208 |               disabled={isLocked}
209 |             >
210 |               <Text style={[
211 |                 styles.numberText,
212 |                 isLocked && styles.disabledText
213 |               ]}>
214 |                 {item}
215 |               </Text>
216 |             </TouchableOpacity>
217 |           );
218 |         })}
219 |       </View>
220 |     );
221 |   };
222 | 
223 |   const getRemainingLockTime = () => {
224 |     if (!lockUntil) return 0;
225 |     return Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000));
226 |   };
227 | 
228 |   return (
229 |     <View style={styles.container}>
230 |       <View style={styles.header}>
231 |         <View style={styles.appInfo}>
232 |           <View style={styles.appIconContainer}>
233 |             <Ionicons name="shield-checkmark" size={40} color="#ffffff" />
234 |           </View>
235 |           <Text style={styles.appName}>XPENS</Text>
236 |           <Text style={styles.subtitle}>SECURE ACCESS</Text>
237 |         </View>
238 |       </View>
239 | 
240 |       <View style={styles.content}>
241 |         <Text style={styles.instruction}>
242 |           {isLocked ? 'APP LOCKED' : 'ENTER YOUR PIN'}
243 |         </Text>
244 | 
245 |         {isLocked ? (
246 |           <Text style={styles.lockMessage}>
247 |             Too many incorrect attempts.{'\n'}
248 |             Try again in {getRemainingLockTime()} seconds.
249 |           </Text>
250 |         ) : (
251 |           <Text style={styles.securityMessage}>
252 |             Enter your 6-digit PIN to access your expenses
253 |           </Text>
254 |         )}
255 | 
256 |         {renderDots()}
257 | 
258 |         {attempts > 0 && !isLocked && (
259 |           <Text style={styles.attemptsWarning}>
260 |             {MAX_ATTEMPTS - attempts} attempts remaining
261 |           </Text>
262 |         )}
263 | 
264 |         {renderNumberPad()}
265 |       </View>
266 | 
267 |       <View style={styles.footer}>
268 |         <Text style={styles.footerText}>
269 |           Your data is protected with encryption
270 |         </Text>
271 |       </View>
272 |     </View>
273 |   );
274 | };
275 | 
276 | const styles = StyleSheet.create({
277 |   container: {
278 |     flex: 1,
279 |     backgroundColor: '#000000',
280 |   },
281 |   header: {
282 |     alignItems: 'center',
283 |     paddingVertical: 60,
284 |     paddingHorizontal: 24,
285 |   },
286 |   appInfo: {
287 |     alignItems: 'center',
288 |   },
289 |   appIconContainer: {
290 |     width: 80,
291 |     height: 80,
292 |     borderWidth: 2,
293 |     borderColor: '#ffffff',
294 |     borderRadius: 0,
295 |     alignItems: 'center',
296 |     justifyContent: 'center',
297 |     marginBottom: 20,
298 |     backgroundColor: 'transparent',
299 |   },
300 |   appName: {
301 |     fontSize: 32,
302 |     fontWeight: '300',
303 |     color: '#ffffff',
304 |     marginBottom: 8,
305 |     fontFamily: 'monospace',
306 |     letterSpacing: 2,
307 |   },
308 |   subtitle: {
309 |     fontSize: 12,
310 |     color: '#666666',
311 |     fontFamily: 'monospace',
312 |     letterSpacing: 1,
313 |   },
314 |   content: {
315 |     flex: 1,
316 |     alignItems: 'center',
317 |     paddingHorizontal: 24,
318 |   },
319 |   instruction: {
320 |     fontSize: 16,
321 |     fontWeight: '400',
322 |     color: '#ffffff',
323 |     textAlign: 'center',
324 |     marginBottom: 12,
325 |     fontFamily: 'monospace',
326 |     letterSpacing: 0.5,
327 |   },
328 |   securityMessage: {
329 |     fontSize: 12,
330 |     color: '#666666',
331 |     textAlign: 'center',
332 |     marginBottom: 40,
333 |     fontFamily: 'monospace',
334 |     letterSpacing: 0.3,
335 |     lineHeight: 18,
336 |   },
337 |   lockMessage: {
338 |     fontSize: 12,
339 |     color: '#ff4444',
340 |     textAlign: 'center',
341 |     marginBottom: 40,
342 |     fontFamily: 'monospace',
343 |     letterSpacing: 0.3,
344 |     lineHeight: 18,
345 |   },
346 |   dotsContainer: {
347 |     flexDirection: 'row',
348 |     justifyContent: 'center',
349 |     marginBottom: 20,
350 |     gap: 16,
351 |   },
352 |   shakeAnimation: {
353 |     // Simple shake effect (would need animation library for smooth animation)
354 |   },
355 |   dot: {
356 |     width: 16,
357 |     height: 16,
358 |     borderRadius: 0,
359 |     borderWidth: 1,
360 |     borderColor: '#333333',
361 |     backgroundColor: 'transparent',
362 |   },
363 |   filledDot: {
364 |     backgroundColor: '#ffffff',
365 |     borderColor: '#ffffff',
366 |   },
367 |   errorDot: {
368 |     borderColor: '#ff4444',
369 |   },
370 |   attemptsWarning: {
371 |     fontSize: 12,
372 |     color: '#ff4444',
373 |     textAlign: 'center',
374 |     marginBottom: 20,
375 |     fontFamily: 'monospace',
376 |     letterSpacing: 0.3,
377 |   },
378 |   numberPad: {
379 |     flexDirection: 'row',
380 |     flexWrap: 'wrap',
381 |     justifyContent: 'center',
382 |     maxWidth: 300,
383 |     gap: 20,
384 |   },
385 |   numberButton: {
386 |     width: 70,
387 |     height: 70,
388 |     borderWidth: 1,
389 |     borderColor: '#1a1a1a',
390 |     borderRadius: 0,
391 |     alignItems: 'center',
392 |     justifyContent: 'center',
393 |     backgroundColor: 'transparent',
394 |   },
395 |   disabledButton: {
396 |     borderColor: '#333333',
397 |   },
398 |   numberText: {
399 |     fontSize: 24,
400 |     fontWeight: '300',
401 |     color: '#ffffff',
402 |     fontFamily: 'monospace',
403 |   },
404 |   disabledText: {
405 |     color: '#333333',
406 |   },
407 |   footer: {
408 |     alignItems: 'center',
409 |     paddingVertical: 20,
410 |     paddingHorizontal: 24,
411 |   },
412 |   footerText: {
413 |     fontSize: 10,
414 |     color: '#444444',
415 |     fontFamily: 'monospace',
416 |     letterSpacing: 0.3,
417 |     textAlign: 'center',
418 |   },
419 | });
420 | 
421 | export default PinEntryScreen;


--------------------------------------------------------------------------------
/src/screens/PinSetupScreen.js:
--------------------------------------------------------------------------------
  1 | import React, { useState } from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   Alert,
  8 |   ScrollView
  9 | } from 'react-native';
 10 | import { Ionicons } from '@expo/vector-icons';
 11 | import { useSecurity } from '../context/SecurityContext';
 12 | 
 13 | const PinSetupScreen = ({ navigation, route }) => {
 14 |   const { setupPin } = useSecurity();
 15 |   const { isChanging = false, onComplete } = route?.params || {};
 16 | 
 17 |   const [pin, setPin] = useState('');
 18 |   const [confirmPin, setConfirmPin] = useState('');
 19 |   const [step, setStep] = useState(1); // 1: enter pin, 2: confirm pin
 20 |   const [loading, setLoading] = useState(false);
 21 | 
 22 |   const handleNumberPress = (number) => {
 23 |     if (step === 1) {
 24 |       if (pin.length < 6) {
 25 |         setPin(prev => prev + number);
 26 |       }
 27 |     } else {
 28 |       if (confirmPin.length < 6) {
 29 |         setConfirmPin(prev => prev + number);
 30 |       }
 31 |     }
 32 |   };
 33 | 
 34 |   const handleDelete = () => {
 35 |     if (step === 1) {
 36 |       setPin(prev => prev.slice(0, -1));
 37 |     } else {
 38 |       setConfirmPin(prev => prev.slice(0, -1));
 39 |     }
 40 |   };
 41 | 
 42 |   const handleNext = () => {
 43 |     if (step === 1 && pin.length === 6) {
 44 |       setStep(2);
 45 |     } else if (step === 2 && confirmPin.length === 6) {
 46 |       handleSetupPin();
 47 |     }
 48 |   };
 49 | 
 50 |   const handleSetupPin = async () => {
 51 |     if (pin !== confirmPin) {
 52 |       Alert.alert('Error', 'PINs do not match. Please try again.');
 53 |       setStep(1);
 54 |       setPin('');
 55 |       setConfirmPin('');
 56 |       return;
 57 |     }
 58 | 
 59 |     setLoading(true);
 60 |     try {
 61 |       const success = await setupPin(pin);
 62 |       if (success) {
 63 |         Alert.alert(
 64 |           'Success',
 65 |           isChanging ? 'PIN changed successfully!' : 'Security enabled successfully!',
 66 |           [
 67 |             {
 68 |               text: 'OK',
 69 |               onPress: () => {
 70 |                 if (onComplete) {
 71 |                   onComplete();
 72 |                 }
 73 |                 if (navigation.canGoBack()) {
 74 |                   navigation.goBack();
 75 |                 } else {
 76 |                   navigation.replace('Main');
 77 |                 }
 78 |               }
 79 |             }
 80 |           ]
 81 |         );
 82 |       } else {
 83 |         Alert.alert('Error', 'Failed to set up PIN. Please try again.');
 84 |       }
 85 |     } catch (error) {
 86 |       console.error('PIN setup error:', error);
 87 |       Alert.alert('Error', 'An error occurred while setting up PIN.');
 88 |     } finally {
 89 |       setLoading(false);
 90 |     }
 91 |   };
 92 | 
 93 |   const renderDots = (currentPin) => {
 94 |     return (
 95 |       <View style={styles.dotsContainer}>
 96 |         {[1, 2, 3, 4, 5, 6].map((_, index) => (
 97 |           <View
 98 |             key={index}
 99 |             style={[
100 |               styles.dot,
101 |               index < currentPin.length && styles.filledDot
102 |             ]}
103 |           />
104 |         ))}
105 |       </View>
106 |     );
107 |   };
108 | 
109 |   const renderNumberPad = () => {
110 |     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'delete'];
111 | 
112 |     return (
113 |       <View style={styles.numberPad}>
114 |         {numbers.map((item, index) => {
115 |           if (item === null) {
116 |             return <View key={index} style={styles.numberButton} />;
117 |           }
118 | 
119 |           if (item === 'delete') {
120 |             return (
121 |               <TouchableOpacity
122 |                 key={index}
123 |                 style={styles.numberButton}
124 |                 onPress={handleDelete}
125 |               >
126 |                 <Ionicons name="backspace-outline" size={24} color="#ffffff" />
127 |               </TouchableOpacity>
128 |             );
129 |           }
130 | 
131 |           return (
132 |             <TouchableOpacity
133 |               key={index}
134 |               style={styles.numberButton}
135 |               onPress={() => handleNumberPress(item.toString())}
136 |             >
137 |               <Text style={styles.numberText}>{item}</Text>
138 |             </TouchableOpacity>
139 |           );
140 |         })}
141 |       </View>
142 |     );
143 |   };
144 | 
145 |   return (
146 |     <ScrollView style={styles.container} contentContainerStyle={styles.content}>
147 |       <View style={styles.header}>
148 |         {navigation.canGoBack() && (
149 |           <TouchableOpacity
150 |             style={styles.backButton}
151 |             onPress={() => navigation.goBack()}
152 |           >
153 |             <Ionicons name="arrow-back" size={24} color="#ffffff" />
154 |           </TouchableOpacity>
155 |         )}
156 |         <Text style={styles.title}>
157 |           {isChanging ? 'CHANGE PIN' : 'SET UP SECURITY'}
158 |         </Text>
159 |       </View>
160 | 
161 |       <View style={styles.instructionContainer}>
162 |         <Ionicons name="shield-checkmark-outline" size={48} color="#ffffff" />
163 |         <Text style={styles.instruction}>
164 |           {step === 1 ? 'ENTER A 6-DIGIT PIN' : 'CONFIRM YOUR PIN'}
165 |         </Text>
166 |         <Text style={styles.subtitle}>
167 |           {step === 1
168 |             ? 'This PIN will be required to access your expense data'
169 |             : 'Please enter your PIN again to confirm'
170 |           }
171 |         </Text>
172 |       </View>
173 | 
174 |       {renderDots(step === 1 ? pin : confirmPin)}
175 | 
176 |       {renderNumberPad()}
177 | 
178 |       {((step === 1 && pin.length === 6) || (step === 2 && confirmPin.length === 6)) && (
179 |         <TouchableOpacity
180 |           style={[styles.continueButton, loading && styles.disabledButton]}
181 |           onPress={handleNext}
182 |           disabled={loading}
183 |         >
184 |           <Text style={styles.continueButtonText}>
185 |             {loading ? 'SETTING UP...' : step === 1 ? 'CONTINUE' : 'CONFIRM'}
186 |           </Text>
187 |         </TouchableOpacity>
188 |       )}
189 |     </ScrollView>
190 |   );
191 | };
192 | 
193 | const styles = StyleSheet.create({
194 |   container: {
195 |     flex: 1,
196 |     backgroundColor: '#000000',
197 |   },
198 |   content: {
199 |     flexGrow: 1,
200 |     padding: 24,
201 |   },
202 |   header: {
203 |     flexDirection: 'row',
204 |     alignItems: 'center',
205 |     marginBottom: 40,
206 |   },
207 |   backButton: {
208 |     marginRight: 16,
209 |     padding: 8,
210 |   },
211 |   title: {
212 |     fontSize: 18,
213 |     fontWeight: '400',
214 |     color: '#ffffff',
215 |     fontFamily: 'monospace',
216 |     letterSpacing: 1,
217 |   },
218 |   instructionContainer: {
219 |     alignItems: 'center',
220 |     marginBottom: 40,
221 |   },
222 |   instruction: {
223 |     fontSize: 16,
224 |     fontWeight: '400',
225 |     color: '#ffffff',
226 |     textAlign: 'center',
227 |     marginTop: 16,
228 |     marginBottom: 8,
229 |     fontFamily: 'monospace',
230 |     letterSpacing: 0.5,
231 |   },
232 |   subtitle: {
233 |     fontSize: 12,
234 |     color: '#666666',
235 |     textAlign: 'center',
236 |     fontFamily: 'monospace',
237 |     letterSpacing: 0.3,
238 |     lineHeight: 18,
239 |     paddingHorizontal: 20,
240 |   },
241 |   dotsContainer: {
242 |     flexDirection: 'row',
243 |     justifyContent: 'center',
244 |     marginBottom: 40,
245 |     gap: 16,
246 |   },
247 |   dot: {
248 |     width: 16,
249 |     height: 16,
250 |     borderRadius: 0,
251 |     borderWidth: 1,
252 |     borderColor: '#333333',
253 |     backgroundColor: 'transparent',
254 |   },
255 |   filledDot: {
256 |     backgroundColor: '#ffffff',
257 |     borderColor: '#ffffff',
258 |   },
259 |   numberPad: {
260 |     flexDirection: 'row',
261 |     flexWrap: 'wrap',
262 |     justifyContent: 'center',
263 |     maxWidth: 300,
264 |     alignSelf: 'center',
265 |     gap: 20,
266 |   },
267 |   numberButton: {
268 |     width: 70,
269 |     height: 70,
270 |     borderWidth: 1,
271 |     borderColor: '#1a1a1a',
272 |     borderRadius: 0,
273 |     alignItems: 'center',
274 |     justifyContent: 'center',
275 |     backgroundColor: 'transparent',
276 |   },
277 |   numberText: {
278 |     fontSize: 24,
279 |     fontWeight: '300',
280 |     color: '#ffffff',
281 |     fontFamily: 'monospace',
282 |   },
283 |   continueButton: {
284 |     backgroundColor: '#ffffff',
285 |     borderWidth: 1,
286 |     borderColor: '#ffffff',
287 |     borderRadius: 0,
288 |     paddingVertical: 16,
289 |     marginTop: 40,
290 |     alignItems: 'center',
291 |   },
292 |   disabledButton: {
293 |     backgroundColor: '#333333',
294 |     borderColor: '#333333',
295 |   },
296 |   continueButtonText: {
297 |     color: '#000000',
298 |     fontSize: 14,
299 |     fontWeight: '400',
300 |     fontFamily: 'monospace',
301 |     letterSpacing: 1,
302 |   },
303 | });
304 | 
305 | export default PinSetupScreen;


--------------------------------------------------------------------------------
/src/screens/SettingsScreen.js:
--------------------------------------------------------------------------------
  1 | import React from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   TouchableOpacity,
  7 |   ScrollView
  8 | } from 'react-native';
  9 | import { Ionicons } from '@expo/vector-icons';
 10 | import * as FileSystem from 'expo-file-system/legacy';
 11 | import * as Sharing from 'expo-sharing';
 12 | import { useExpenses } from '../context/ExpenseContext';
 13 | import { useSecurity } from '../context/SecurityContext';
 14 | import { categories, formatDate } from '../utils/helpers';
 15 | import CustomAlert from '../components/CustomAlert';
 16 | import { useCustomAlert } from '../hooks/useCustomAlert';
 17 | 
 18 | const SettingsScreen = ({ navigation }) => {
 19 |   const { expenses, clearAllExpenses } = useExpenses();
 20 |   const {
 21 |     isPinEnabled,
 22 |     isPinSet,
 23 |     isBiometricAvailable,
 24 |     isBiometricEnabled,
 25 |     disableSecurity,
 26 |     enableBiometric,
 27 |     disableBiometric
 28 |   } = useSecurity();
 29 | 
 30 |   const {
 31 |     alertConfig,
 32 |     hideAlert,
 33 |     showSuccess,
 34 |     showError,
 35 |     showDestructiveConfirm,
 36 |     showConfirm
 37 |   } = useCustomAlert();
 38 | 
 39 |   const handleClearAllData = () => {
 40 |     showDestructiveConfirm(
 41 |       'Clear All Data',
 42 |       `This will permanently delete all ${expenses.length} expenses. This action cannot be undone.`,
 43 |       () => {
 44 |         try {
 45 |           clearAllExpenses();
 46 |           showSuccess('Success', 'All data has been cleared successfully!');
 47 |         } catch (error) {
 48 |           console.error('Error clearing data:', error);
 49 |           showError('Error', 'Failed to clear data. Please try again.');
 50 |         }
 51 |       }
 52 |     );
 53 |   };
 54 | 
 55 |   const handleExportData = async () => {
 56 |     if (expenses.length === 0) {
 57 |       showError('No Data', 'There are no expenses to export.');
 58 |       return;
 59 |     }
 60 | 
 61 |     try {
 62 |       // Create CSV header
 63 |       const csvHeader = 'Date,Description,Category,Amount\n';
 64 | 
 65 |       // Convert expenses to CSV format
 66 |       const csvData = expenses.map(expense => {
 67 |         const category = categories.find(cat => cat.id === expense.category);
 68 |         const categoryName = category ? category.name : 'Other';
 69 |         const formattedDate = formatDate(expense.date);
 70 | 
 71 |         // Properly escape CSV fields
 72 |         const escapeField = (field) => {
 73 |           if (field == null) return '';
 74 |           const str = String(field);
 75 |           if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
 76 |             return `"${str.replace(/"/g, '""')}"`;
 77 |           }
 78 |           return str;
 79 |         };
 80 | 
 81 |         return `${escapeField(formattedDate)},${escapeField(expense.description)},${escapeField(categoryName)},${escapeField(expense.amount)}`;
 82 |       }).join('\n');
 83 | 
 84 |       const csvContent = csvHeader + csvData;
 85 | 
 86 |       // Create filename with current date
 87 |       const currentDate = new Date().toISOString().split('T')[0];
 88 |       const filename = `xpens-expenses-${currentDate}.csv`;
 89 |       const fileUri = `${FileSystem.documentDirectory}${filename}`;
 90 | 
 91 |       // Write CSV file
 92 |       await FileSystem.writeAsStringAsync(fileUri, csvContent);
 93 | 
 94 |       // Check if sharing is available
 95 |       if (await Sharing.isAvailableAsync()) {
 96 |         await Sharing.shareAsync(fileUri, {
 97 |           mimeType: 'text/csv',
 98 |           dialogTitle: 'Export Xpens Data',
 99 |         });
100 |       } else {
101 |         showSuccess(
102 |           'Export Complete',
103 |           `CSV file saved to: ${filename}\n\nFile location: Documents folder`
104 |         );
105 |       }
106 |     } catch (error) {
107 |       console.error('Export error:', error);
108 |       showError(
109 |         'Export Failed',
110 |         `There was an error exporting your data: ${error.message || 'Unknown error'}. Please try again.`
111 |       );
112 |     }
113 |   };
114 | 
115 |   const handleEnableSecurity = () => {
116 |     navigation.navigate('PinSetup', {
117 |       isChanging: false,
118 |       onComplete: () => {
119 |         showSuccess('Success', 'Security has been enabled successfully!');
120 |       }
121 |     });
122 |   };
123 | 
124 |   const handleChangePIN = () => {
125 |     navigation.navigate('PinSetup', {
126 |       isChanging: true,
127 |       onComplete: () => {
128 |         showSuccess('Success', 'PIN has been changed successfully!');
129 |       }
130 |     });
131 |   };
132 | 
133 |   const handleDisableSecurity = () => {
134 |     showConfirm(
135 |       'Disable Security',
136 |       'Enter your current PIN to disable security protection.',
137 |       () => {
138 |         // Navigate to PIN entry for verification
139 |         navigation.navigate('PinEntry', {
140 |           purpose: 'disable',
141 |           onSuccess: async (pin) => {
142 |             const result = await disableSecurity(pin);
143 |             if (result.success) {
144 |               showSuccess('Success', 'Security has been disabled.');
145 |             } else {
146 |               showError('Error', result.error || 'Failed to disable security.');
147 |             }
148 |           }
149 |         });
150 |       }
151 |     );
152 |   };
153 | 
154 |   const handleEnableBiometric = async () => {
155 |     try {
156 |       const result = await enableBiometric();
157 |       if (result.success) {
158 |         showSuccess('Success', 'Biometric authentication has been enabled!');
159 |       } else {
160 |         showError('Error', result.error || 'Failed to enable biometric authentication.');
161 |       }
162 |     } catch (error) {
163 |       console.error('Enable biometric error:', error);
164 |       showError('Error', 'An error occurred while enabling biometric authentication.');
165 |     }
166 |   };
167 | 
168 |   const handleDisableBiometric = () => {
169 |     showDestructiveConfirm(
170 |       'Disable Biometric Authentication',
171 |       'Are you sure you want to disable biometric authentication? You will only be able to use your PIN to access the app.',
172 |       async () => {
173 |         try {
174 |           const result = await disableBiometric();
175 |           if (result.success) {
176 |             showSuccess('Success', 'Biometric authentication has been disabled.');
177 |           } else {
178 |             showError('Error', result.error || 'Failed to disable biometric authentication.');
179 |           }
180 |         } catch (error) {
181 |           console.error('Disable biometric error:', error);
182 |           showError('Error', 'An error occurred while disabling biometric authentication.');
183 |         }
184 |       }
185 |     );
186 |   };
187 | 
188 | 
189 |   const SettingItem = ({ icon, title, subtitle, onPress, danger = false }) => (
190 |     <TouchableOpacity style={styles.settingItem} onPress={onPress}>
191 |       <View style={styles.settingLeft}>
192 |         <Ionicons
193 |           name={icon}
194 |           size={20}
195 |           color={danger ? '#ff4444' : '#ffffff'}
196 |           style={styles.settingIcon}
197 |         />
198 |         <View style={styles.settingText}>
199 |           <Text style={[styles.settingTitle, danger && styles.dangerText]}>
200 |             {title}
201 |           </Text>
202 |           {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
203 |         </View>
204 |       </View>
205 |       <Ionicons name="chevron-forward" size={16} color="#666666" />
206 |     </TouchableOpacity>
207 |   );
208 | 
209 |   const SectionHeader = ({ title }) => (
210 |     <Text style={styles.sectionHeader}>{title}</Text>
211 |   );
212 | 
213 |   return (
214 |     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
215 |       <View style={styles.header}>
216 |         <View style={styles.appInfo}>
217 |           <View style={styles.appIconContainer}>
218 |             <Ionicons name="wallet" size={40} color="#fff" />
219 |           </View>
220 |           <Text style={styles.appName}>Xpens</Text>
221 |           <Text style={styles.appVersion}>Version 1.0.0</Text>
222 |         </View>
223 |       </View>
224 | 
225 |       <View style={styles.content}>
226 |         <SectionHeader title="Security" />
227 |         <View style={styles.section}>
228 |           {!isPinEnabled ? (
229 |             <SettingItem
230 |               icon="shield-outline"
231 |               title="Enable Security"
232 |               subtitle="Protect your data with a PIN"
233 |               onPress={handleEnableSecurity}
234 |             />
235 |           ) : (
236 |             <>
237 |               <SettingItem
238 |                 icon="key-outline"
239 |                 title="Change PIN"
240 |                 subtitle="Update your security PIN"
241 |                 onPress={handleChangePIN}
242 |               />
243 |               {isBiometricAvailable && (
244 |                 <SettingItem
245 |                   icon={isBiometricEnabled ? "finger-print" : "finger-print-outline"}
246 |                   title={isBiometricEnabled ? "Disable Biometric" : "Enable Biometric"}
247 |                   subtitle={isBiometricEnabled ? "Use PIN only for authentication" : "Use fingerprint or face unlock"}
248 |                   onPress={isBiometricEnabled ? handleDisableBiometric : handleEnableBiometric}
249 |                   danger={isBiometricEnabled}
250 |                 />
251 |               )}
252 |               <SettingItem
253 |                 icon="shield-outline"
254 |                 title="Disable Security"
255 |                 subtitle="Remove all security protection"
256 |                 onPress={handleDisableSecurity}
257 |                 danger={true}
258 |               />
259 |             </>
260 |           )}
261 |         </View>
262 | 
263 |         <SectionHeader title="Data Management" />
264 |         <View style={styles.section}>
265 |           <SettingItem
266 |             icon="download-outline"
267 |             title="Export Data"
268 |             subtitle={`Export all ${expenses.length} expenses as CSV`}
269 |             onPress={handleExportData}
270 |           />
271 |           <SettingItem
272 |             icon="trash-outline"
273 |             title="Clear All Data"
274 |             subtitle="Permanently delete all expenses"
275 |             onPress={handleClearAllData}
276 |             danger={true}
277 |           />
278 |         </View>
279 | 
280 | 
281 |         <View style={styles.statsContainer}>
282 |           <View style={styles.statItem}>
283 |             <Text style={styles.statNumber}>{expenses.length}</Text>
284 |             <Text style={styles.statLabel}>Total Expenses</Text>
285 |           </View>
286 |           <View style={styles.statItem}>
287 |             <Text style={styles.statNumber}>
288 |               {expenses.length > 0
289 |                 ? Math.ceil((Date.now() - new Date(expenses[0]?.createdAt).getTime()) / (1000 * 60 * 60 * 24))
290 |                 : 0}
291 |             </Text>
292 |             <Text style={styles.statLabel}>Days Tracking</Text>
293 |           </View>
294 |         </View>
295 | 
296 |         <View style={styles.footer}>
297 |           <Text style={styles.copyrightText}>
298 |             © 2025 Xpens. All rights reserved.
299 |           </Text>
300 |         </View>
301 |       </View>
302 | 
303 |       <CustomAlert
304 |         visible={alertConfig.visible}
305 |         title={alertConfig.title}
306 |         message={alertConfig.message}
307 |         buttons={alertConfig.buttons}
308 |         type={alertConfig.type}
309 |         onClose={hideAlert}
310 |       />
311 |     </ScrollView>
312 |   );
313 | };
314 | 
315 | const styles = StyleSheet.create({
316 |   container: {
317 |     flex: 1,
318 |     backgroundColor: '#000000',
319 |   },
320 |   header: {
321 |     backgroundColor: '#000000',
322 |     paddingVertical: 40,
323 |     paddingHorizontal: 24,
324 |     alignItems: 'center',
325 |     borderBottomWidth: 1,
326 |     borderBottomColor: '#1a1a1a',
327 |   },
328 |   appInfo: {
329 |     alignItems: 'center',
330 |   },
331 |   appIconContainer: {
332 |     width: 72,
333 |     height: 72,
334 |     borderRadius: 0,
335 |     backgroundColor: 'transparent',
336 |     borderWidth: 2,
337 |     borderColor: '#ffffff',
338 |     alignItems: 'center',
339 |     justifyContent: 'center',
340 |     marginBottom: 20,
341 |   },
342 |   appName: {
343 |     fontSize: 32,
344 |     fontWeight: '300',
345 |     color: '#ffffff',
346 |     marginBottom: 8,
347 |     fontFamily: 'monospace',
348 |     letterSpacing: 2,
349 |   },
350 |   appVersion: {
351 |     fontSize: 12,
352 |     color: '#666666',
353 |     fontFamily: 'monospace',
354 |     letterSpacing: 1,
355 |   },
356 |   content: {
357 |     flex: 1,
358 |     padding: 24,
359 |   },
360 |   sectionHeader: {
361 |     fontSize: 14,
362 |     fontWeight: '400',
363 |     color: '#ffffff',
364 |     marginTop: 32,
365 |     marginBottom: 16,
366 |     marginLeft: 0,
367 |     fontFamily: 'monospace',
368 |     letterSpacing: 1,
369 |     textTransform: 'uppercase',
370 |   },
371 |   section: {
372 |     backgroundColor: 'transparent',
373 |     borderRadius: 0,
374 |     marginBottom: 24,
375 |     borderWidth: 1,
376 |     borderColor: '#1a1a1a',
377 |   },
378 |   settingItem: {
379 |     flexDirection: 'row',
380 |     alignItems: 'center',
381 |     justifyContent: 'space-between',
382 |     padding: 20,
383 |     borderBottomWidth: 1,
384 |     borderBottomColor: '#1a1a1a',
385 |     backgroundColor: 'transparent',
386 |   },
387 |   settingLeft: {
388 |     flexDirection: 'row',
389 |     alignItems: 'center',
390 |     flex: 1,
391 |   },
392 |   settingIcon: {
393 |     marginRight: 16,
394 |   },
395 |   settingText: {
396 |     flex: 1,
397 |   },
398 |   settingTitle: {
399 |     fontSize: 16,
400 |     fontWeight: '400',
401 |     color: '#ffffff',
402 |     marginBottom: 4,
403 |     fontFamily: 'monospace',
404 |     letterSpacing: 0.5,
405 |   },
406 |   settingSubtitle: {
407 |     fontSize: 12,
408 |     color: '#666666',
409 |     fontFamily: 'monospace',
410 |     letterSpacing: 0.3,
411 |   },
412 |   dangerText: {
413 |     color: '#ff4444',
414 |   },
415 |   statsContainer: {
416 |     flexDirection: 'row',
417 |     backgroundColor: 'transparent',
418 |     borderRadius: 0,
419 |     padding: 24,
420 |     marginBottom: 24,
421 |     borderWidth: 1,
422 |     borderColor: '#1a1a1a',
423 |   },
424 |   statItem: {
425 |     flex: 1,
426 |     alignItems: 'center',
427 |   },
428 |   statNumber: {
429 |     fontSize: 28,
430 |     fontWeight: '300',
431 |     color: '#ffffff',
432 |     marginBottom: 8,
433 |     fontFamily: 'monospace',
434 |     letterSpacing: 1,
435 |   },
436 |   statLabel: {
437 |     fontSize: 11,
438 |     color: '#666666',
439 |     textAlign: 'center',
440 |     fontFamily: 'monospace',
441 |     letterSpacing: 0.5,
442 |     textTransform: 'uppercase',
443 |   },
444 |   footer: {
445 |     alignItems: 'center',
446 |     marginTop: 40,
447 |     marginBottom: 32,
448 |     paddingTop: 24,
449 |     borderTopWidth: 1,
450 |     borderTopColor: '#1a1a1a',
451 |   },
452 |   footerText: {
453 |     fontSize: 12,
454 |     color: '#666666',
455 |     marginBottom: 8,
456 |     fontFamily: 'monospace',
457 |   },
458 |   copyrightText: {
459 |     fontSize: 10,
460 |     color: '#444444',
461 |     fontFamily: 'monospace',
462 |     letterSpacing: 0.5,
463 |   },
464 | });
465 | 
466 | export default SettingsScreen;


--------------------------------------------------------------------------------
/src/screens/StatisticsScreen.js:
--------------------------------------------------------------------------------
  1 | import React, { useMemo } from 'react';
  2 | import {
  3 |   View,
  4 |   Text,
  5 |   StyleSheet,
  6 |   ScrollView,
  7 |   TouchableOpacity,
  8 |   Dimensions
  9 | } from 'react-native';
 10 | import { useExpenses } from '../context/ExpenseContext';
 11 | import {
 12 |   categories,
 13 |   formatCurrency,
 14 |   getMonthlyTotal,
 15 |   getCategoryTotal
 16 | } from '../utils/helpers';
 17 | 
 18 | const { width } = Dimensions.get('window');
 19 | 
 20 | const StatisticsScreen = () => {
 21 |   const { expenses } = useExpenses();
 22 | 
 23 |   const currentMonth = new Date().getMonth();
 24 |   const currentYear = new Date().getFullYear();
 25 | 
 26 |   const stats = useMemo(() => {
 27 |     const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
 28 |     const monthlyTotal = getMonthlyTotal(expenses, currentMonth, currentYear);
 29 |     const expenseCount = expenses.length;
 30 |     const avgExpense = expenseCount > 0 ? totalAmount / expenseCount : 0;
 31 | 
 32 |     const categoryStats = categories.map(category => {
 33 |       const total = getCategoryTotal(expenses, category.id);
 34 |       const count = expenses.filter(expense => expense.category === category.id).length;
 35 |       const percentage = totalAmount > 0 ? (total / totalAmount) * 100 : 0;
 36 |       return {
 37 |         ...category,
 38 |         total,
 39 |         count,
 40 |         percentage
 41 |       };
 42 |     }).filter(stat => stat.count > 0).sort((a, b) => b.total - a.total);
 43 | 
 44 |     const last7Days = expenses.filter(expense => {
 45 |       const expenseDate = new Date(expense.date);
 46 |       const sevenDaysAgo = new Date();
 47 |       sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
 48 |       return expenseDate >= sevenDaysAgo;
 49 |     });
 50 | 
 51 |     const weeklyTotal = last7Days.reduce((sum, expense) => sum + expense.amount, 0);
 52 | 
 53 |     return {
 54 |       totalAmount,
 55 |       monthlyTotal,
 56 |       weeklyTotal,
 57 |       expenseCount,
 58 |       avgExpense,
 59 |       categoryStats
 60 |     };
 61 |   }, [expenses, currentMonth, currentYear]);
 62 | 
 63 |   const StatCard = ({ title, value, subtitle, color = '#ffffff' }) => (
 64 |     <View style={[styles.statCard, { borderLeftColor: color }]}>
 65 |       <Text style={styles.statTitle}>{title}</Text>
 66 |       <Text style={styles.statValue}>{value}</Text>
 67 |       {subtitle && <Text style={styles.statSubtitle}>{subtitle}</Text>}
 68 |     </View>
 69 |   );
 70 | 
 71 |   const CategoryBar = ({ category, total, percentage }) => (
 72 |     <View style={styles.categoryRow}>
 73 |       <View style={styles.categoryInfo}>
 74 |         <View style={styles.categoryIcon}>
 75 |           <Text style={styles.categoryEmoji}>{category.icon}</Text>
 76 |         </View>
 77 |         <Text style={styles.categoryName}>{category.name}</Text>
 78 |       </View>
 79 |       <View style={styles.categoryStats}>
 80 |         <Text style={styles.categoryAmount}>{formatCurrency(total)}</Text>
 81 |         <View style={styles.progressBarContainer}>
 82 |           <View
 83 |             style={[
 84 |               styles.progressBar,
 85 |               {
 86 |                 width: `${Math.min(percentage, 100)}%`
 87 |               }
 88 |             ]}
 89 |           />
 90 |         </View>
 91 |         <Text style={styles.percentage}>{percentage.toFixed(1)}%</Text>
 92 |       </View>
 93 |     </View>
 94 |   );
 95 | 
 96 |   const SpendingChart = () => {
 97 |     const last7Days = [];
 98 |     const today = new Date();
 99 | 
100 |     for (let i = 6; i >= 0; i--) {
101 |       const date = new Date(today);
102 |       date.setDate(date.getDate() - i);
103 |       const dayExpenses = expenses.filter(expense => {
104 |         const expenseDate = new Date(expense.date);
105 |         return expenseDate.toDateString() === date.toDateString();
106 |       });
107 |       const dayTotal = dayExpenses.reduce((sum, exp) => sum + exp.amount, 0);
108 |       last7Days.push({
109 |         day: date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase(),
110 |         amount: dayTotal,
111 |         date: date
112 |       });
113 |     }
114 | 
115 |     const maxAmount = Math.max(...last7Days.map(d => d.amount)) || 100;
116 | 
117 |     return (
118 |       <View style={styles.chartContainer}>
119 |         <View style={styles.chartBars}>
120 |           {last7Days.map((day, index) => (
121 |             <View key={index} style={styles.chartBarContainer}>
122 |               <View style={styles.chartBarWrapper}>
123 |                 <View
124 |                   style={[
125 |                     styles.chartBar,
126 |                     {
127 |                       height: `${Math.max((day.amount / maxAmount) * 100, 2)}%`
128 |                     }
129 |                   ]}
130 |                 />
131 |               </View>
132 |               <Text style={styles.chartLabel}>{day.day}</Text>
133 |               <Text style={styles.chartValue}>
134 |                 {day.amount > 0 ? formatCurrency(day.amount).replace('₹', '') : '0'}
135 |               </Text>
136 |             </View>
137 |           ))}
138 |         </View>
139 |       </View>
140 |     );
141 |   };
142 | 
143 |   if (expenses.length === 0) {
144 |     return (
145 |       <View style={styles.emptyContainer}>
146 |         <Text style={styles.emptyText}>No expenses to analyze</Text>
147 |         <Text style={styles.emptySubtext}>Add some expenses to see statistics</Text>
148 |       </View>
149 |     );
150 |   }
151 | 
152 |   return (
153 |     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
154 |       <View style={styles.section}>
155 |         <Text style={styles.sectionTitle}>Overview</Text>
156 |         <View style={styles.statsGrid}>
157 |           <StatCard
158 |             title="Total Spent"
159 |             value={formatCurrency(stats.totalAmount)}
160 |             subtitle={`${stats.expenseCount} expenses`}
161 |           />
162 |           <StatCard
163 |             title="This Month"
164 |             value={formatCurrency(stats.monthlyTotal)}
165 |             color="#ffffff"
166 |           />
167 |           <StatCard
168 |             title="Last 7 Days"
169 |             value={formatCurrency(stats.weeklyTotal)}
170 |             color="#ffffff"
171 |           />
172 |           <StatCard
173 |             title="Average"
174 |             value={formatCurrency(stats.avgExpense)}
175 |             subtitle="per expense"
176 |             color="#ffffff"
177 |           />
178 |         </View>
179 |       </View>
180 | 
181 |       <View style={styles.section}>
182 |         <Text style={styles.sectionTitle}>Last 7 Days</Text>
183 |         <SpendingChart />
184 |       </View>
185 | 
186 |       <View style={styles.section}>
187 |         <Text style={styles.sectionTitle}>Spending by Category</Text>
188 |         <View style={styles.categoryContainer}>
189 |           {stats.categoryStats.map((categoryData, index) => (
190 |             <CategoryBar
191 |               key={categoryData.id}
192 |               category={categoryData}
193 |               total={categoryData.total}
194 |               percentage={categoryData.percentage}
195 |             />
196 |           ))}
197 |         </View>
198 |       </View>
199 | 
200 |       <View style={styles.section}>
201 |         <Text style={styles.sectionTitle}>Quick Insights</Text>
202 |         <View style={styles.insightsContainer}>
203 |           <View style={styles.insightCard}>
204 |             <Text style={styles.insightTitle}>Top Category</Text>
205 |             <View style={styles.insightContent}>
206 |               <Text style={styles.insightEmoji}>
207 |                 {stats.categoryStats[0]?.icon || '📝'}
208 |               </Text>
209 |               <Text style={styles.insightText}>
210 |                 {stats.categoryStats[0]?.name || 'No data'}
211 |               </Text>
212 |             </View>
213 |           </View>
214 | 
215 |           <View style={styles.insightCard}>
216 |             <Text style={styles.insightTitle}>Monthly Avg</Text>
217 |             <Text style={styles.insightAmount}>
218 |               {formatCurrency(stats.monthlyTotal)}
219 |             </Text>
220 |           </View>
221 |         </View>
222 |       </View>
223 |     </ScrollView>
224 |   );
225 | };
226 | 
227 | const styles = StyleSheet.create({
228 |   container: {
229 |     flex: 1,
230 |     backgroundColor: '#000000',
231 |   },
232 |   emptyContainer: {
233 |     flex: 1,
234 |     justifyContent: 'center',
235 |     alignItems: 'center',
236 |     paddingHorizontal: 40,
237 |     backgroundColor: '#000000',
238 |   },
239 |   emptyText: {
240 |     fontSize: 16,
241 |     fontWeight: '400',
242 |     color: '#ffffff',
243 |     marginBottom: 8,
244 |     fontFamily: 'monospace',
245 |     letterSpacing: 0.5,
246 |   },
247 |   emptySubtext: {
248 |     fontSize: 12,
249 |     color: '#666666',
250 |     textAlign: 'center',
251 |     fontFamily: 'monospace',
252 |     letterSpacing: 0.3,
253 |   },
254 |   section: {
255 |     padding: 24,
256 |   },
257 |   sectionTitle: {
258 |     fontSize: 14,
259 |     fontWeight: '400',
260 |     color: '#ffffff',
261 |     marginBottom: 20,
262 |     fontFamily: 'monospace',
263 |     letterSpacing: 1,
264 |     textTransform: 'uppercase',
265 |   },
266 |   statsGrid: {
267 |     gap: 16,
268 |   },
269 |   statCard: {
270 |     backgroundColor: 'transparent',
271 |     padding: 20,
272 |     borderRadius: 0,
273 |     borderWidth: 1,
274 |     borderColor: '#1a1a1a',
275 |   },
276 |   statTitle: {
277 |     fontSize: 12,
278 |     color: '#666666',
279 |     marginBottom: 8,
280 |     fontFamily: 'monospace',
281 |     letterSpacing: 0.5,
282 |     textTransform: 'uppercase',
283 |   },
284 |   statValue: {
285 |     fontSize: 24,
286 |     fontWeight: '300',
287 |     color: '#ffffff',
288 |     fontFamily: 'monospace',
289 |     letterSpacing: 1,
290 |   },
291 |   statSubtitle: {
292 |     fontSize: 10,
293 |     color: '#444444',
294 |     marginTop: 8,
295 |     fontFamily: 'monospace',
296 |     letterSpacing: 0.3,
297 |   },
298 |   categoryContainer: {
299 |     backgroundColor: 'transparent',
300 |     borderRadius: 0,
301 |     padding: 0,
302 |     borderWidth: 1,
303 |     borderColor: '#1a1a1a',
304 |   },
305 |   categoryRow: {
306 |     flexDirection: 'row',
307 |     alignItems: 'center',
308 |     paddingVertical: 16,
309 |     paddingHorizontal: 20,
310 |     borderBottomWidth: 1,
311 |     borderBottomColor: '#1a1a1a',
312 |   },
313 |   categoryInfo: {
314 |     flexDirection: 'row',
315 |     alignItems: 'center',
316 |     flex: 1,
317 |   },
318 |   categoryIcon: {
319 |     width: 32,
320 |     height: 32,
321 |     borderRadius: 0,
322 |     borderWidth: 1,
323 |     borderColor: '#333333',
324 |     alignItems: 'center',
325 |     justifyContent: 'center',
326 |     marginRight: 16,
327 |     backgroundColor: 'transparent',
328 |   },
329 |   categoryEmoji: {
330 |     fontSize: 14,
331 |   },
332 |   categoryName: {
333 |     fontSize: 14,
334 |     fontWeight: '400',
335 |     color: '#ffffff',
336 |     fontFamily: 'monospace',
337 |     letterSpacing: 0.5,
338 |   },
339 |   categoryStats: {
340 |     alignItems: 'flex-end',
341 |     flex: 1,
342 |   },
343 |   categoryAmount: {
344 |     fontSize: 12,
345 |     fontWeight: '400',
346 |     color: '#ffffff',
347 |     marginBottom: 8,
348 |     fontFamily: 'monospace',
349 |     letterSpacing: 0.3,
350 |   },
351 |   progressBarContainer: {
352 |     width: 64,
353 |     height: 4,
354 |     backgroundColor: '#1a1a1a',
355 |     borderRadius: 0,
356 |     marginBottom: 4,
357 |   },
358 |   progressBar: {
359 |     height: '100%',
360 |     borderRadius: 0,
361 |     backgroundColor: '#ffffff',
362 |   },
363 |   percentage: {
364 |     fontSize: 10,
365 |     color: '#666666',
366 |     fontFamily: 'monospace',
367 |     letterSpacing: 0.3,
368 |   },
369 |   insightsContainer: {
370 |     flexDirection: 'row',
371 |     gap: 16,
372 |   },
373 |   insightCard: {
374 |     flex: 1,
375 |     backgroundColor: 'transparent',
376 |     padding: 20,
377 |     borderRadius: 0,
378 |     alignItems: 'center',
379 |     borderWidth: 1,
380 |     borderColor: '#1a1a1a',
381 |   },
382 |   insightTitle: {
383 |     fontSize: 12,
384 |     color: '#666666',
385 |     marginBottom: 12,
386 |     fontFamily: 'monospace',
387 |     letterSpacing: 0.5,
388 |     textTransform: 'uppercase',
389 |   },
390 |   insightContent: {
391 |     alignItems: 'center',
392 |   },
393 |   insightEmoji: {
394 |     fontSize: 20,
395 |     marginBottom: 8,
396 |   },
397 |   insightText: {
398 |     fontSize: 12,
399 |     fontWeight: '400',
400 |     color: '#ffffff',
401 |     textAlign: 'center',
402 |     fontFamily: 'monospace',
403 |     letterSpacing: 0.5,
404 |   },
405 |   insightAmount: {
406 |     fontSize: 16,
407 |     fontWeight: '300',
408 |     color: '#ffffff',
409 |     fontFamily: 'monospace',
410 |     letterSpacing: 1,
411 |   },
412 |   chartContainer: {
413 |     backgroundColor: 'transparent',
414 |     borderWidth: 1,
415 |     borderColor: '#1a1a1a',
416 |     borderRadius: 0,
417 |     padding: 20,
418 |   },
419 |   chartBars: {
420 |     flexDirection: 'row',
421 |     alignItems: 'flex-end',
422 |     justifyContent: 'space-between',
423 |     height: 120,
424 |     marginBottom: 16,
425 |   },
426 |   chartBarContainer: {
427 |     flex: 1,
428 |     alignItems: 'center',
429 |     marginHorizontal: 2,
430 |   },
431 |   chartBarWrapper: {
432 |     height: 80,
433 |     width: 20,
434 |     justifyContent: 'flex-end',
435 |     alignItems: 'center',
436 |   },
437 |   chartBar: {
438 |     width: '100%',
439 |     backgroundColor: '#ffffff',
440 |     borderRadius: 0,
441 |     minHeight: 2,
442 |   },
443 |   chartLabel: {
444 |     fontSize: 10,
445 |     color: '#666666',
446 |     marginTop: 8,
447 |     fontFamily: 'monospace',
448 |     letterSpacing: 0.5,
449 |     textAlign: 'center',
450 |   },
451 |   chartValue: {
452 |     fontSize: 9,
453 |     color: '#444444',
454 |     marginTop: 2,
455 |     fontFamily: 'monospace',
456 |     letterSpacing: 0.3,
457 |     textAlign: 'center',
458 |   },
459 | });
460 | 
461 | export default StatisticsScreen;


--------------------------------------------------------------------------------
/src/utils/helpers.js:
--------------------------------------------------------------------------------
 1 | export const categories = [
 2 |   { id: 'food', name: 'Food', icon: 'restaurant-outline', color: '#FF6B6B' },
 3 |   { id: 'transport', name: 'Transport', icon: 'car-outline', color: '#4ECDC4' },
 4 |   { id: 'entertainment', name: 'Entertainment', icon: 'film-outline', color: '#45B7D1' },
 5 |   { id: 'shopping', name: 'Shopping', icon: 'bag-outline', color: '#96CEB4' },
 6 |   { id: 'bills', name: 'Bills', icon: 'receipt-outline', color: '#FECA57' },
 7 |   { id: 'health', name: 'Health', icon: 'medical-outline', color: '#FF9FF3' },
 8 |   { id: 'education', name: 'Education', icon: 'school-outline', color: '#54A0FF' },
 9 |   { id: 'other', name: 'Other', icon: 'ellipsis-horizontal-outline', color: '#8E8E8E' }
10 | ];
11 | 
12 | export const formatCurrency = (amount) => {
13 |   return new Intl.NumberFormat('en-IN', {
14 |     style: 'currency',
15 |     currency: 'INR'
16 |   }).format(amount);
17 | };
18 | 
19 | export const formatDate = (date) => {
20 |   return new Date(date).toLocaleDateString('en-IN', {
21 |     year: 'numeric',
22 |     month: 'short',
23 |     day: 'numeric'
24 |   });
25 | };
26 | 
27 | export const getMonthlyTotal = (expenses, month, year) => {
28 |   return expenses
29 |     .filter(expense => {
30 |       const expenseDate = new Date(expense.date);
31 |       return expenseDate.getMonth() === month && expenseDate.getFullYear() === year;
32 |     })
33 |     .reduce((total, expense) => total + expense.amount, 0);
34 | };
35 | 
36 | export const getCategoryTotal = (expenses, categoryId) => {
37 |   return expenses
38 |     .filter(expense => expense.category === categoryId)
39 |     .reduce((total, expense) => total + expense.amount, 0);
40 | };
41 | 
42 | export const filterExpensesByDateRange = (expenses, startDate, endDate) => {
43 |   return expenses.filter(expense => {
44 |     const expenseDate = new Date(expense.date);
45 |     return expenseDate >= startDate && expenseDate <= endDate;
46 |   });
47 | };
48 | 
49 | export const generateId = () => {
50 |   return Date.now().toString(36) + Math.random().toString(36).substr(2);
51 | };


--------------------------------------------------------------------------------
/src/utils/storage.js:
--------------------------------------------------------------------------------
 1 | import AsyncStorage from '@react-native-async-storage/async-storage';
 2 | 
 3 | const EXPENSES_KEY = '@expenses';
 4 | 
 5 | export const saveExpenses = async (expenses) => {
 6 |   try {
 7 |     await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
 8 |   } catch (error) {
 9 |     console.error('Error saving expenses:', error);
10 |   }
11 | };
12 | 
13 | export const loadExpenses = async () => {
14 |   try {
15 |     const expenses = await AsyncStorage.getItem(EXPENSES_KEY);
16 | 
17 |     if (expenses) {
18 |       return JSON.parse(expenses);
19 |     }
20 | 
21 |     // Return sample data for first-time users
22 |     const sampleExpenses = [
23 |       {
24 |         id: 'sample1',
25 |         amount: 150.00,
26 |         description: 'Lunch at restaurant',
27 |         category: 'food',
28 |         date: new Date().toISOString(),
29 |         createdAt: new Date().toISOString()
30 |       },
31 |       {
32 |         id: 'sample2',
33 |         amount: 50.00,
34 |         description: 'Bus fare to office',
35 |         category: 'transport',
36 |         date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
37 |         createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
38 |       },
39 |       {
40 |         id: 'sample3',
41 |         amount: 300.00,
42 |         description: 'Movie tickets',
43 |         category: 'entertainment',
44 |         date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
45 |         createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
46 |       },
47 |       {
48 |         id: 'sample4',
49 |         amount: 1200.00,
50 |         description: 'Groceries for the week',
51 |         category: 'shopping',
52 |         date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
53 |         createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
54 |       }
55 |     ];
56 | 
57 |     // Save the sample data
58 |     await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(sampleExpenses));
59 |     return sampleExpenses;
60 |   } catch (error) {
61 |     console.error('Error loading expenses:', error);
62 |     return [];
63 |   }
64 | };
65 | 
66 | export const clearAllExpenses = async () => {
67 |   try {
68 |     await AsyncStorage.removeItem(EXPENSES_KEY);
69 |   } catch (error) {
70 |     console.error('Error clearing expenses:', error);
71 |   }
72 | };


--------------------------------------------------------------------------------

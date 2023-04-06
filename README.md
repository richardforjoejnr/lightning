# Getting started

This `getting started with Lightning` document will guide you through the first steps of building an app with Lightning.

This guide consist of 3 main topics: 
1. Setting up your environment
2. Run, test 
3. App contents


---
### Setting up your environment

1. Start by cloning the repo `git clone https://github.com/richardforjoesky/lightning.git`
2. Start by installing the Lightning-CLI (Command-line interface) `npm install -g @lightningjs/cli`
3. Navigate to a folder on your machine where your project is
4. On the command-line type: `npm i` to install all the dependencies.

We now have a couple of options: 

1. `npm run build` will create a standalone bundle that you can run in the browser
2. `npm run dev` will build the app, start a webserver and watch for changes.

---
### Testing

Running cypress tests

1. `npm run test:debug` Runs cypress in debug mode via UI
2. `npm run test:cypress` Runs cypress in headless mode

---
### App contents

When you inspect the contents in your app folder you will find the following files: 

* `README.md` a markdown readme file that can hold instructions for configuration, installation, changelogs etc.
* `metadata.json` this hold the following app related metadata:

* `package.json` this file holds various [metadata](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/) relevant to the project

* `package-lock.json` is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. [Read more...](https://docs.npmjs.com/files/package-lock.json)
* `settings.json` which holds app and platform specific settings.

```
{
  "appSettings": {
    "stage": {
      "clearColor": "0x00000000",
      "useImageWorker": true
    },
    "debug": false
  },
  "platformSettings": {
    "inspector": false,
    "path": "./static",
    "log": false,
    "showVersion": true,
    "imageServerUrl": "",
    "proxyUrl": "",
    "textureMode": true
  }
}
```

1. [clearColor](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearColor), specifies the color we use when we call the clear() method
2. ImageWorker, if the platform you run the code on support [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
3. Debug, toggles debug mode on / off
4. Inspector, when set to true it will render out a HTML structure inside the DOM so you can inspect why certain elements are maybe rendered off-screen
5. path, the path to the static app assets, Utils.asset() will use this folder to lookup assets
6. log, toggles app logging on / off
7. showVersion, if set to true, will overlay the app's version in the corner (version specified in `metadata.json`)
8. imageServerUrl, if you have an image resizing server set the value to the endpoint
9. proxyUrl, if you have access to a proxy server (i.e to cache data to speed up network request) you set the value to the endpoint
10. textureMode, specify if you want to render video as a texture on the active drawing canvas


Inside the `src` folder we find an `index.js` and with the following contents that are needed to launch our app.

```
import { Launch } from 'wpe-lightning-sdk'
import App from './App.js'

export default function () {
    return Launch(App, ...arguments)
}
```

This is the first time we really touch the SDK. Since we developed our SDK with a modular approach you can control which 
modules of the SDK you want to use.

> Eventually when we bundle and run the game, our bundler (rollup) will add the imported modules to the bundle so we keep an optimized codebase (no un-used code). This method is often refered to as treeshaking.

1. We import the Launch method from the SDK (will act as a bootstrapper) 
2. Next we import our App class from App.js
3. Export a function which upon invocation will Launch the app

Now that we have a basic setup we can move over to the next phase, the actual development of the App.

Lets step back for a brief moment and think about the different Views / Components of the game  `Tic Tac Toe`

1. A `Splash` screen to display a logo
2. A `Main` screen on which the user of the app lands after the `splash` screen hides. In the `main` screen we also render a menu
which has some interaction with the `remote control`
3. A `Game` screen. This screen will hold all the components which are needed to display our Tic Tac Toe game.
4. A `Menu` Component with `Item` Components.











































 


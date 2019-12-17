## Example code for using UFT Mobile with NodeJS

### How to use
1. Clone/download this code repo.
1. Unzip it if needed, then go into this directory.
1. Install node.JS –Download official version (on Salve 4 installed node ver. 6):
https://nodejs.org/en/download/releases/
1. Run the following commands of required packages installations:
```npm install
   npm install --global wd
   npm install --global mocha
   npm install --global appium-uiautomator2-driver
   npm install --global chai
   npm install --global chai-as-promised
   npm install --global wdio-appium-service –D
   npm install --global underscore
   npm install --global should
```

### Common issues during installations
In case of any SSL error during installation, define npm proxy as:
```
npm config set proxy http://proxy:8080/
npm config set https-proxy http://proxy:8080/
```

In case of any 404 not found error, config registry as:
```
npm config set registry https://registry.npmjs.org
```
If still not working, try: 
```
npm config set registry https://registry.npmjs.com
```


### Tests running commands:
```
npm run wd-Android
npm run wd-iOS_XCUI
```

## Example code for using UFT Mobile with Python

### How to use on Windows
1. Clone/download this code repo.
1. Unzip it if needed, then go into this directory.
1. Install Python:
https://www.python.org/downloads/windows/
1. Add relevant path of "pip3.exe" to environment variables, for example:
```
C:\Users\<userid>\AppData\Local\Programs\Python\Python37\Scripts
```
1. Install Selenium driver module:  
```
pip3 install -U selenium
```
In case of using proxy, cmd will be:
```
pip install --proxy http://proxy.il.hpecorp.net:8080 -U selenium
```
1. Install Appium client module: 
```
pip3 install Appium-Python-Client
```  
In case of using proxy, cmd will be:
```
pip install --proxy http://proxy.il.hpecorp.net:8080 Appium-Python-Client
```

### Running tests
```
python -m unittest AppiumPythonTest_Android
python -m unittest AppiumPythonTest_iOS_XCUI
```

Note: before running manually, 'appium_server.py' file must be editer with server URL.

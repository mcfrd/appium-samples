import os

# Returns abs path relative to this file and not cwd
def PATH(p):
    return os.path.abspath(
        os.path.join(os.path.dirname(__file__), p)
    )


def get_desired_capabilities():
    desired_caps = {
        'platformName': "Android",
		'platformVersion': ">5",
		'appPackage': 'com.hpswdemo.advantageinc',
		'appActivity': 'com.hpswdemo.advantageinc.activities.MainActivity',
		'automationName': "UiAutomator2",
		'userName': "admin@default.com",
		'password': "password"
    }

    return desired_caps
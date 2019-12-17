require './spec_helper'

desired_caps = {
  caps: {
	deviceName: 'ONEPLUS',
    platformName:  'Android',
	platformVersion: '>4',
	appPackage: 'com.hpswdemo.advantageinc',
	appActivity: 'com.hpswdemo.advantageinc.activities.MainActivity',
    #app:           ANDROID_APP,
    automationName: 'UiAutomator2',
	userName: 'admin@default.com',
	password: 'password'
  },
  appium_lib: {
	server_url: 'http://10.14.67.94:8080/wd/hub', 
    wait: 60
  }
}

describe 'Create Android session' do
  it 'should create and destroy Android sessions' do
    @driver = Appium::Driver.new(desired_caps, true).start_driver
	loginBtn = @driver.find_element :id, 'loginButton'
    loginBtn_text_value = loginBtn.text
    expect(loginBtn_text_value).to eql 'LOGIN'
    @driver.quit
  end
end

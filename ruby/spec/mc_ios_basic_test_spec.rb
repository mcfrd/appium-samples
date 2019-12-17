require './spec_helper'

desired_caps = {
  caps: {
	deviceName: 'iPhone 6',
    platformName:  'iOS',
	platformVersion: '>11',
	bundleId: 'com.hpe.advantage',
	userName: 'admin@default.com',
	password: 'password'
  },
  appium_lib: {
	server_url: 'http://10.14.67.94:8080/wd/hub', 
    wait: 60
  }
}

describe 'Create iOS session and click LogIn button' do
  it 'should create and destroy iOS sessions after clicking on LogIn button' do
    @driver = Appium::Driver.new(desired_caps, true).start_driver
	loginBtn = @driver.find_element :id, 'LOGIN'
    loginBtn_text_value = loginBtn.text
    expect(loginBtn_text_value).to eql 'LOGIN'
    @driver.quit
  end
end


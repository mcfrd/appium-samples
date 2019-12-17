import unittest
from time import sleep
from appium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

from selenium.common.exceptions import NoSuchElementException

from appium import webdriver
import desired_capabilities_iOS_XCUI
import appium_server

# the emulator is sometimes slow and needs time to think
SLEEPY_TIME = 1

class AMB_iOS_XCUI_Tests(unittest.TestCase):
    def setUp(self):
	desired_caps = desired_capabilities_iOS_XCUI.get_desired_capabilities()
	URL = appium_server.appium_server()
	self.driver = webdriver.Remote(URL + '/wd/hub', desired_caps)

    def tearDown(self):
	self.driver.quit()
	
    def test_find_by_id(self):
	WebDriverWait(self.driver, 20).until(EC.presence_of_element_located((By.ID, 'LOGIN')))
	self.driver.find_element_by_id("LOGIN").click()

    def test_find_by_xpath(self):
	WebDriverWait(self.driver, 20).until(EC.presence_of_element_located((By.XPATH, "//XCUIElementTypeButton[@name=\"LOGIN\"]")))
	loginElement = self.driver.find_element_by_xpath("//XCUIElementTypeButton[@name=\"LOGIN\"]")
	attr = loginElement.get_attribute('name')
	self.assertEqual(str(attr), "LOGIN")

    def test_send_keys(self):	
	WebDriverWait(self.driver, 20).until(EC.presence_of_element_located((By.CLASS_NAME, 'XCUIElementTypeTextField')))
	loginElement = self.driver.find_element_by_class_name("XCUIElementTypeTextField")
	loginElement.clear()
	loginElement.send_keys("userNameTest")
	loginElement = self.driver.find_element_by_class_name("XCUIElementTypeTextField")
	self.assertEqual(loginElement.text, "userNameTest")
	
    def test_find_by_class_name(self):
	WebDriverWait(self.driver, 20).until(EC.presence_of_element_located((By.CLASS_NAME, 'XCUIElementTypeButton')))
	attr = self.driver.find_element_by_class_name("XCUIElementTypeButton").get_attribute('name')
	self.assertEqual(str(attr), "LOGIN")
	
	
if __name__ == "__main__":
	unittest.main()

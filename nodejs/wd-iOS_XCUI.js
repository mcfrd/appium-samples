"use strict";
require("./setup");
var wd = require('wd'),
_ = require('underscore'),
serverConfigs = require('./appium_server.js');
require("mocha");
require("should");
var expect = require('chai').expect;


// THIS TEST IS FOR XCUI ONLY
describe("Test Case - AMB - iOS - XCUI", function () {
    this.timeout(0);
    var driver;
    var allPassed = true;
	
	// runs before all tests in this block
    beforeEach(function () {
        var serverConfig = serverConfigs.local;
        driver = wd.promiseChainRemote(serverConfig + "/wd/hub");
        require("./logging").configure(driver);
        var desired = _.clone(require('./desired_caps_iOS_XCUI').desiredCapsIOS);
        return driver
            .init(desired)
			.setImplicitWaitTimeout(15000);
    });

	
	// runs after all tests in this block
    afterEach(function () {
        return driver
            .quit()
    });
		
	it("Test: Insert Text", function(){
		this.timeout(20000);

		return driver.elementByClassName("XCUIElementTypeTextField")
		.clear()
		.type("userNameTest")
		.elementByClassName("XCUIElementTypeTextField")
		.text()
		.then(function (text){ 
			expect(text).to.equal("userNameTest");
		});			
    });
	
	// Test cases		
    it("Test: Find Element By ID", function(){
		return driver.element("id","LOGIN").click();
    });
		
	it("Test: Find Element By ClassName", function(){
		this.timeout(20000);

		return driver.elementByClassName("XCUIElementTypeButton")
		.getAttribute('name')
		.then(function (text){ 
			expect(text).to.equal("LOGIN");
		});				
    });
	
	// Works only for < 7
	it("Test: Find Element By xPath2", function(){
		this.timeout(20000);
		var xpath = "//XCUIElementTypeButton[@name=\"LOGIN\"]";
		
		return driver.elementByXPath(xpath)
		.getAttribute('name')
		.then(function (text){ 
			expect(text).to.equal("LOGIN");
		});				
    });
	
	
	
	// TODO: test of UIselector
	
});

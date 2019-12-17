"use strict";
require("./setup");
var wd = require('wd'),
_ = require('underscore'),
serverConfigs = require('./appium_server.js');
require("mocha");
require("should");
//require('https').globalAgent.options.ca = require('ssl-root-cas').create();
var expect = require('chai').expect;

describe("Test Case - AMB - Android", function () {
    this.timeout(0);
    var driver;
    var allPassed = true;
	
	
	// runs before all tests in this block
    beforeEach(function () {
        var serverConfig = serverConfigs.local;
        driver = wd.promiseChainRemote(serverConfig + "/wd/hub");
        require("./logging").configure(driver);
        var desired = _.clone(require('./desired_caps_Android').desiredCapsAndroid);
        return driver
            .init(desired)
			.setImplicitWaitTimeout(15000);
    });

	
	// runs after all tests in this block
    afterEach(function () {
        return driver
            .quit()
    });
		

	// Test cases		
    it("Test: Find Element By ID", function(){
		return driver.element("id","loginButton").click();
    });
		
	it("Test: Find Element By ClassName", function(){
		this.timeout(20000);

		return driver.elementByClassName("android.widget.Button")
		.getAttribute('name')
		.then(function (text){ 
			expect(text).to.equal("LOGIN");
		});				
    });
	
	// Works only for < 7
	//it("Test: Find Element By xPath2", function(){
	//	this.timeout(20000);
	//	var xpath = "//android.view.View[1]/android.widget.FrameLayout[1]/android.support.v4.widget.DrawerLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.Button[1]";
		
	//	return driver.elementByXPath(xpath)
	//	.getAttribute('name')
	//	.then(function (text){ 
	//		expect(text).to.equal("LOGIN");
	//	});				
   // });
	
	it("Test: Insert Text", function(){
		this.timeout(20000);

		return driver.element("id","loginUserNameEditText")
		.clear()
		.type("userNameTest")
		.element("id","loginUserNameEditText")
		.text()
		.then(function (text){ 
			expect(text).to.equal("userNameTest");
		});			
    });
	
	// TODO: test of UIselector
	
});

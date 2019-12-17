var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config = require('./desiredCapabilities').options;
var client = webdriverio.remote(config);

describe('AMB Node.js Testing', function () {
 
    before(function () {
        this.timeout(50000);
        return client.init();
    });
 
    afterEach(function(){
        this.timeout(5000);
		return client.click('android=new UiSelector().resourceId("android:id/up")');
    });
	
	
//addition testing
    describe("Test AMB addition", function () {
        this.timeout(15000);
        it("test-login", function(){
            return client.elementByAccessibilityId("loginButton").click();
        });

        it("test-userName", function(){
            return client.elementByAccessibilityId("loginButton")
           .click('android=new UiSelector().resourceId("loginButton")')
           .click('android=new UiSelector().resourceId("accountNameTextView")').getText()
           .then(function (text){
               console.log("Text we've got from output: ",text);
               expect(text).to.equal('user');
            });
		});
    });



after(function() {
        return client.end();
    });
});
	
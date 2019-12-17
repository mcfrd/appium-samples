
Feature('Simple Feature');

Scenario('test something', (I) => {
  I.runInWeb(
    () => {
      I.amOnPage('https://github.com');
      I.see('GitHub');
    }
  )
});

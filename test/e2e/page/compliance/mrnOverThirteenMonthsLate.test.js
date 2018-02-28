'use strict';

const paths = require('paths');
const content = require('steps/compliance/mrn-over-month-late/content.en.json');

Feature('MRN Over thirteen months late');

Before((I) => {
    I.createTheSession();
    I.amOnPage(paths.compliance.mrnOverThirteenMonthsLate);
});

After((I) => {
    I.endTheSession();
});

Scenario('When I enter a reason for lateness and click continue, I am taken to the are-you-an-appointee page', (I) => {

    I.fillField('#reasonForBeingLate', 'Late');
    I.click('Continue');
    I.seeInCurrentUrl(paths.identity.areYouAnAppointee);

});

Scenario('When I have an MRN that is over thirteen months late, I do not enter a reason why my appeal is late, I see errors', (I) => {

    I.click('Continue');
    I.seeCurrentUrlEquals(paths.compliance.mrnOverThirteenMonthsLate);
    I.see(content.fields.reasonForBeingLate.error.required);

});
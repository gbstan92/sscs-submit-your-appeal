const doYouWantTextMsgRemindersContent = require('steps/sms-notify/text-reminders/content.en.json');
const selectors = require('steps/check-your-appeal/selectors');
const DateUtils = require('utils/DateUtils');
const moment = require('moment');
const paths = require('paths');

const doYouWantTextMsgReminders = doYouWantTextMsgRemindersContent.fields.doYouWantTextMsgReminders;
const datesYouCantAttend = selectors.theHearing.datesYouCantAttend;
const datesYouCantAttendHearingAnswer = `${datesYouCantAttend}  ${selectors.answer}`;
const datesYouCantAttendHearingChange = `${datesYouCantAttend}  ${selectors.change}`;

/* eslint-disable max-len */
Feature('Appellant PIP, one month ago, attends hearing with dates cannot attend using date-picker @batch-01 @crossbrowser');

Before(I => {
  I.createTheSession();
  I.seeCurrentUrlEquals(paths.start.benefitType);
});

After(I => {
  I.endTheSession();
});

Scenario('Selects a date when they cannot attend the hearing, then edits the date', async I => {
  const randomWeekDayIn9Weeks = DateUtils.getDateInMilliseconds(
    DateUtils.getRandomWeekDayFromDate(moment().utc().startOf('day').add(9, 'weeks'))
  );
  const randomWeekDayIn10Weeks = DateUtils.getDateInMilliseconds(
    DateUtils.getRandomWeekDayFromDate(moment().utc().startOf('day').add(10, 'weeks'))
  );

  I.enterDetailsFromStartToNINO();
  I.enterAppellantContactDetailsAndContinue();
  I.selectDoYouWantToReceiveTextMessageReminders(doYouWantTextMsgReminders.no);
  I.enterDetailsFromNoRepresentativeToUploadingEvidence();
  await I.enterDetailsFromAttendingTheHearingDatePickerToEnd(randomWeekDayIn9Weeks);
  I.see(moment(randomWeekDayIn9Weeks).format('DD MMMM YYYY'), datesYouCantAttendHearingAnswer);

  // Now edit the single date from 5 to 6 weeks.
  I.click('Change', datesYouCantAttendHearingChange);
  I.waitUrlEquals(paths.hearing.hearingAvailability);
  I.click('Continue');
  I.waitUrlEquals(paths.hearing.datesCantAttend);
  await I.deselectDates([randomWeekDayIn9Weeks]);
  I.wait(2);
  await I.selectDates([randomWeekDayIn10Weeks]);
  I.click('Continue');
  I.confirmDetailsArePresent();
  I.see(moment(randomWeekDayIn10Weeks).format('DD MMMM YYYY'), datesYouCantAttendHearingAnswer);
}).retry(1);

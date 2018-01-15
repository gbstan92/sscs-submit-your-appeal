module.exports = {

    benefitType:                '#cya-benefittype-benefit-name .cya-answer',

    mrn: {
        date:                   '#cya-mrndate-date-of-mrn .cya-answer',
        dwpIssuingOffice:       '#cya-dwpissuingoffice-number-from-mrn-address .cya-answer',
        noMRN:                  '#cya-nomrn-reason-for-no-mrn .cya-answer',
        overOneMonthLate:       '#cya-mrnoveronemonthlate-why-your-appeal-is-late .cya-answer',
        overThirteenMonthsLate: '#cya-mrnoverthirteenmonthslate-why-your-appeal-is-late .cya-answer'
    },

    appellant: {
        appointee:              '#cya-appointee-appointee .cya-answer',
        name:                   '#cya-appellantname-name .cya-answer',
        dob:                    '#cya-appellantdob-date-of-birth .cya-answer',
        nino:                   '#cya-appellantnino-national-insurance-number .cya-answer',
        addressLine1:           '#cya-appellantcontactdetails-address-line-1 .cya-answer',
        addressLine2:           '#cya-appellantcontactdetails-address-line-2 .cya-answer',
        townCity:               '#cya-appellantcontactdetails-towncity .cya-answer',
        county:                 '#cya-appellantcontactdetails-county .cya-answer',
        postCode:               '#cya-appellantcontactdetails-postcode .cya-answer',
        phoneNumber:            '#cya-appellantcontactdetails-phone-number .cya-answer',
        email:                  '#cya-appellantcontactdetails-email .cya-answer'
    },

    textMsgReminders: {
        receiveTxtMsgReminders: '#cya-textreminders-receive-text-message-reminders .cya-answer',
        mobileNumber:           '#cya-smsconfirmation-mobile-number .cya-answer'
    },

    representative: {
        haveARepresentative:    '#cya-representative-have-a-representative.cya-answer',
        firstName:              '#cya-representativedetails-first-name .cya-answer',
        lastName:               '#cya-representativedetails-last-name .cya-answer',
        organisation:           '#cya-representativedetails-organisation-if-they-work-for-one .cya-answer',
        addressLine1:           '#cya-representativedetails-address-line-1 .cya-answer',
        addressLine2:           '#cya-representativedetails-address-line-2 .cya-answer',
        townCity:               '#cya-representativedetails-towncity .cya-answer',
        county:                 '#cya-representativedetails-county .cya-answer',
        postCode:               '#cya-representativedetails-postcode .cya-answer',
        phoneNumber:            '#cya-representativedetails-phone-number .cya-answer',
        email:                  '#cya-representativedetails-email-address .cya-answer'
    },

    reasonsForAppealing: {
        reasons:                '#cya-reasonforappealing-reason-for-appealing .cya-answer',
        otherReasons:           '#cya-otherreasonforappealing-other-reasons-for-appealing .cya-answer'
    },

    theHearing: {
        attendingTheHearing:    '#cya-thehearing-attending-the-hearing .cya-answer',
        datesYouCantAttend:     '#cya-datescantattend-dates-youre-not-available .cya-answer'
    },

    hearingArrangements: {
        yourArrangements:       '#cya-hearingarrangements-your-hearing-arrangement .cya-answer',
        anyOtherArrangements:   '#cya-hearingarrangements-any-other-arrangements .cya-answer'
    }
};

'use strict';

const { Question, goTo } = require('@hmcts/one-per-page');
const { form, textField } = require('@hmcts/one-per-page/forms');
const { answer } = require('@hmcts/one-per-page/checkYourAnswers');
const { whitelist } = require('utils/regex');
const sections = require('steps/check-your-appeal/sections');
const Joi = require('joi');
const paths = require('paths');

class NoMRN extends Question {

    static get path() {

        return paths.compliance.noMRN;
    }

    get form() {

        return form(

            textField('reasonForNoMRN').joi(
                this.content.fields.reasonForNoMRN.error.required,
                Joi.string().regex(whitelist).required()
            )
        );
    }

    answers() {

        return [

            answer(this, {
                question: this.content.cya.reasonForNoMRN.question,
                section: sections.noMRN,
                answer: `${this.fields.reasonForNoMRN.value}`
            })
        ];
    }

    values() {
        return { mrn: { reasonForNoMRN: this.fields.reasonForNoMRN.value } };
    }

    next() {

        return goTo(this.journey.steps.Appointee);
    }
}

module.exports = NoMRN;

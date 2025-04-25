import {
    Form as VeeForm,
    Field as VeeField,
    defineRule,
    ErrorMessage,
    configure

} from 'vee-validate';

import {
    required,
    min,
    max,
    email,
    alpha_spaces as alphaSpace,
    min_value as minVal,
    max_value as maxVal,
    confirmed,
    not_one_of as excluded

} from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required);
        defineRule('checkbox', required);
        defineRule('email', email);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('alpha_spaces', alphaSpace);
        defineRule('min_value', minVal);
        defineRule('max_value', maxVal);
        defineRule('confirmed', confirmed);
        defineRule('passwords_mismatch', confirmed);
        defineRule('excluded', excluded);

        configure({
            generateMessage: (ctx) => {
                const message = {
                    required: `The field ${ctx.field} is required`,
                    min: `The field ${ctx.field} is too short`,
                    max: `The field ${ctx.field} is too long`,
                    alpha_spaces: `The field ${ctx.field} may only contains alphabatical character and space`,
                    email: `The field ${ctx.field} must be a valid email address`,
                    min_value: `The field ${ctx.field} is too low`,
                    max_value: `The field ${ctx.field} is too high`,
                    excluded: `You are now allow to use this value for the field ${ctx.field}`,
                    passwords_mismatch: `These credentials do not match our records.`,
                    checkbox: `You must check/select a particular option`,
                }
            }
        })
    }

}
import { clearInputValuesFromSessionStorage } from "./poll.js";


function validateValue(value, rules) {
    for (const rule of rules) {
        switch (rule) {
            case 'notEmpty':
                if (value === '' || value === null || value === undefined) {
                    return 'Pole {} nie może być puste';
                }
                break;
            case 'age':
                if (+value && (+value < 18 || +value > 100)) {
                    return 'Pole {} wymaga podania prawidłowego wieku (od 18 do 100)';
                }
                break;
            case 'date':
                if (value > new Date()) {
                    return 'Pole {} nie może zawierać daty późniejszej niż obecna';
                }
            default:
                break;
        }
    }

    return;
}

function showMessage(message) {
    $('#dialog-message')
        .first()
        .html(message);


    $('#dialog-message')
        .dialog();
}

$('form.poll').submit(function (event) {
    const inputs = [
        { value: $('#age').val(), rules: ['notEmpty', 'age'], name: 'wiek' },
        { value: $('input[name=gender]:checked').val(), rules: ['notEmpty'], name: 'płeć' },
        { value: $('#education').val(), rules: ['notEmpty'], name: 'wykształcenie' },
        { value: $('#color').val(), rules: ['notEmpty'], name: 'ulubiony kolor' },
        { value: new Date($('#important-day').val()), rules: ['date'], name: 'najważniejszy dzień' },
    ]

    for (const input of inputs) {
        let message = validateValue(input.value, input.rules);
        if (message) {
            showMessage(message.replace('{}', input.name));
            event.preventDefault();
            break;
        }
    }

    clearInputValuesFromSessionStorage();
});

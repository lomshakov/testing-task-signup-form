export const required = value => (value ? undefined : 'Поле обязательно для заполнения!')

export const nameValidate = value => {
    let regex = /^[а-яА-ЯёЁa-zA-Z -]*$/
    if (regex.test(value)) {
        return undefined
    } else {
        return 'Введите корректное имя'
    }
}

export const mailValidate = value => {
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (regex.test(value)) {
        return undefined
    } else {
        return 'Введите корректный email'
    }
}

export const phoneValidate = value => {
    if (value !== undefined) {
        let numCount = value.split('').filter(el => !isNaN(el)).length
        let regex = /^[0-9()+-]*$/

        if (regex.test(value) && numCount === 11) {
            return undefined
        } else {
            return 'Введите корректный номер телефона'
        }
    }
}

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)
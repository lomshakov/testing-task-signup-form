import React from 'react'
import './styles.css'
import {Form, Field} from 'react-final-form'
import TextInput from './components/TextInput'
import CustomSelect from './components/CustomSelect'
import {composeValidators, mailValidate, nameValidate, phoneValidate, required} from './utils/validators/validators'
import {mutatorLang} from './utils/mutators'

let onSubmit = (values) => {
    alert(JSON.stringify(values, 0, 2))
}

const SubmitForm = () => {
    return (
        <div className='container'>
            <div className='form'>
                <Form onSubmit={onSubmit}
                      mutators={{ mutatorLang }}
                      render={({handleSubmit, validating, submitting, pristine, invalid, form}) => {

                          return (
                          <form onSubmit={handleSubmit}>

                              <div className='header'>
                                  <h1 className='header__title'>Регистрация</h1>
                                  <div className='header__subtitle'>
                                      Уже есть аккаунт? <a href="/">Войти</a>
                                  </div>
                              </div>

                              <div className='inputs'>

                                  <div className='input__item'>
                                      <div className='input__title'>Имя</div>
                                      <Field name="name"
                                             className='form__input'
                                             component={TextInput}
                                             placeholder="Введите Ваше имя"
                                             validate={composeValidators(required, nameValidate)}
                                      />
                                  </div>

                                  <div className='input__item'>
                                      <div className='input__title'>E-mail</div>
                                      <Field name="email"
                                             className='form__input'
                                             component={TextInput}
                                             placeholder="Введите Ваш email"
                                             validate={composeValidators(required, mailValidate)}
                                      />
                                  </div>

                                  <div className='input__item'>
                                      <div className='input__title'>Номер телефона</div>
                                      <Field name="phone"
                                             className='form__input'
                                             component={TextInput}
                                             placeholder="Введите номер телефона"
                                             validate={composeValidators(required, phoneValidate)}
                                      />
                                  </div>

                                  <div className='select__item'>
                                      <div className='input__title'>Язык</div>
                                      <Field name="lang"
                                             component={CustomSelect}
                                             form={form}
                                             validate={required}
                                      />
                                  </div>

                                  <div className='checkbox__input'>
                                      <Field className='custom__checkbox'
                                             id='idCheck'
                                             name="rules"
                                             component="input"
                                             type="checkbox"
                                             validate={required}
                                      />
                                      <label className='checkbox__label' htmlFor='idCheck'>
                                          Принимаю <a href="/">условия</a> использования
                                      </label>
                                  </div>

                                  <button className='button__item'
                                          type="submit"
                                          disabled={submitting || pristine || invalid}>
                                      Зарегистрироваться
                                  </button>
                              </div>

                          </form>
                      )}}
                />
            </div>
        </div>
    )
}

export default SubmitForm
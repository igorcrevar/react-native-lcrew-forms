import React from 'react'
import { FormField } from 'react-lcrew-forms-base'
import InputPasswordComponent from '../components/InputPasswordComponent'

function renderField(props) {
    return <InputPasswordComponent {...props} onChangeText={props.changeValue} editable={props.fieldEnabled} />
}

export default function PasswordFormFieldComponent(props) {
    return <FormField {...props} renderField={renderField} />
}

PasswordFormFieldComponent.defaultProps = {
    label: 'Password',
    name: 'password',
    showError: true,
    fieldEnabled: true,
    value: '',
    dependencies: undefined,
    validators: undefined,
    validateOnBlur: false,
    onBlur: undefined, // (name, value, error) => {}
    Template: undefined, // FormFieldBasicTemplateComponent,
    style: undefined, // formsStyle,
    renderRevelIcon: undefined,
    renderHideIcon: undefined,
}
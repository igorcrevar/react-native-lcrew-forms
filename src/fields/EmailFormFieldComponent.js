import React from 'react'
import { formsStyle } from '../styles/FormsStyles'
import FormFieldBasicTemplateComponent from '../base/FormFieldBasicTemplateComponent'
import TextFormFieldComponent from './TextFormFieldComponent'

export default function EmailFormFieldComponent(props) {
    return <TextFormFieldComponent {...props} keyboardType="email-address" />
}

EmailFormFieldComponent.defaultProps = {
    name: 'email',
    label: 'Email',
    showError: true,
    fieldEnabled: true,
    value: '',
    dependencies: undefined,
    validators: undefined,
    validateOnBlur: false,
    onBlur: undefined, // (name, value, error) => {}
    Template: FormFieldBasicTemplateComponent,
    style: formsStyle,
}
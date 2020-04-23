import React from 'react'
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
    autoCapitalize: 'none',
    onBlur: undefined, // (name, value, error) => {}
    Template: undefined, // FormFieldBasicTemplateComponent,
    style: undefined, // formsStyle,
}
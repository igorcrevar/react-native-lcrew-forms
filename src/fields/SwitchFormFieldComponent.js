import React from 'react'
import { Switch } from 'react-native'
import { FormFieldComponent } from 'react-lcrew-forms-base'
import FormFieldBasicTemplateComponent from '../base/FormFieldBasicTemplateComponent'
import { formsStyle } from '../styles/FormsStyles'

function renderField(props) {
    const { changeValue, fieldEnabled } = props
    return (
        <Switch
            {...props}
            disabled={!fieldEnabled}
            onValueChange ={changeValue} />
    )
}

export default function TextFormFieldComponent(props) {
    return <FormFieldComponent {...props} renderField={renderField} />
}

TextFormFieldComponent.defaultProps = {
    label: 'Switch Field',
    name: 'enabled',
    value: true,
    showError: true,
    fieldEnabled: true,
    validators: undefined,
    validateOnBlur: false,
    onBlur: undefined, // (name, value, error) => {}
    dependencies: undefined, // for example: ['email', 'date']
    Template: FormFieldBasicTemplateComponent,
    style: formsStyle,
}
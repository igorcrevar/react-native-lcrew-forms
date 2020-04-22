import React from 'react'
import { Switch } from 'react-native'
import { FormField } from 'react-lcrew-forms-base'

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
    return <FormField {...props} renderField={renderField} />
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
    Template: undefined, // FormFieldBasicTemplateComponent
    style: undefined, // formsStyle
}
import React from 'react'
import { FormField } from 'react-lcrew-forms-base'

function renderField(props) {
    const { style, changeValue, multiline, fieldEnabled, CustomTextInput } = props
    const concreteStyle = fieldEnabled 
        ? (multiline ? style.formFieldTextInputLarge : style.formFieldTextInput) 
        : style.formFieldTextInputDisabled
    return (
        <CustomTextInput
            {...props}
            editable={fieldEnabled}
            style={concreteStyle}
            onChangeText={changeValue} />
    )
}

export default function TextFormFieldComponent(props) {
    return <FormField {...props} renderField={renderField} />
}

TextFormFieldComponent.defaultProps = {
    CustomTextInput: undefined, // TextInput,
    label: 'Text Field',
    name: 'name',
    value: '',
    showError: true,
    fieldEnabled: true,
    validators: undefined,
    validateOnBlur: false,
    onBlur: undefined, // (name, value, error) => {}
    dependencies: undefined, // for example: ['email', 'date']
    Template: undefined, // FormFieldBasicTemplateComponent,
    style: undefined, // formsStyle,
}
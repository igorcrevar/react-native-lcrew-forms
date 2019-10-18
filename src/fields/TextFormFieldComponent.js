import React from 'react'
import { TextInput } from 'react-native'
import { FormField } from 'react-lcrew-forms-base'
import { formsStyle } from '../styles/FormsStyles'
import FormFieldBasicTemplateComponent from '../base/FormFieldBasicTemplateComponent'

function renderField(props) {
    const { style, changeValue, autoCapitalize, returnKeyType, multiline, fieldEnabled, CustomTextInput } = props
    const concreteStyle = fieldEnabled 
        ? (multiline ? style.formFieldTextInputLarge : style.formFieldTextInput) 
        : style.formFieldTextInputDisabled
    return (
        <CustomTextInput
            {...props}
            editable={fieldEnabled}
            autoCapitalize={autoCapitalize || 'none'}
            returnKeyType={returnKeyType || 'done'}
            style={concreteStyle}
            onChangeText={changeValue} />
    )
}

export default function TextFormFieldComponent(props) {
    return <FormField {...props} renderField={renderField} />
}

TextFormFieldComponent.defaultProps = {
    CustomTextInput: TextInput,
    label: 'Text Field',
    name: 'name',
    value: '',
    showError: true,
    fieldEnabled: true,
    validators: undefined,
    validateOnBlur: false,
    onBlur: undefined, // (name, value, error) => {}
    dependencies: undefined, // for example: ['email', 'date']
    Template: FormFieldBasicTemplateComponent,
    style: formsStyle,
}
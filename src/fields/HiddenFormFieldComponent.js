import React from 'react'
import { FormField } from 'react-lcrew-forms-base'

export default function HiddenFormFieldComponent(props) {
    return <FormField {...props} renderField={undefined} />
}

HiddenFormFieldComponent.defaultProps = {
    name: 'hidden',
    showError: true,
    fieldEnabled: true,
    dependencies: undefined, // for example: ['email', 'date']
    style: undefined, // formsStyle,
    Template: undefined, // FormFieldBasicTemplateComponent,
}

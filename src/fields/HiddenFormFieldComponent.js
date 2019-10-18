import React from 'react'
import { FormField } from 'react-lcrew-forms-base'
import { formsStyle } from '../styles/FormsStyles'
import FormFieldBasicTemplateComponent from '../base/FormFieldBasicTemplateComponent'

export default function HiddenFormFieldComponent(props) {
    return <FormField {...props} renderField={undefined} />
}

HiddenFormFieldComponent.defaultProps = {
    name: 'hidden',
    showError: true,
    fieldEnabled: true,
    dependencies: undefined, // for example: ['email', 'date']
    style: formsStyle,
    Template: FormFieldBasicTemplateComponent,
}

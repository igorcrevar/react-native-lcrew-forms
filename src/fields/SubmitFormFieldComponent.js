import React from 'react'
import { useFormSubmit } from 'react-lcrew-forms-base'
import SubmitFormComponent from '../base/FormSubmitComponent'

export default function SubmitFormFieldComponent(props) {
    const [ isSubmitted, disabled, dispatch, additionalContextProps ] = useFormSubmit()
    const Template = props.Template
    return <Template {...props} {...additionalContextProps}
        isSubmitted={isSubmitted} disabled={disabled || props.disabled} dispatch={dispatch} />
}

SubmitFormFieldComponent.defaultProps = {
    Template: SubmitFormComponent
}
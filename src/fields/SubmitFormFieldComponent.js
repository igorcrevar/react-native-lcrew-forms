import React from 'react'
import { useFormSubmit } from 'react-lcrew-forms-base'
import SubmitFormComponent from '../base/FormSubmitComponent'

export default function SubmitFormFieldComponent(props) {
    const [ isSubmitted, disabled, dispatch ] = useFormSubmit()
    const Template = props.Template
    return <Template {...props} isSubmitted={isSubmitted} disabled={disabled} dispatch={dispatch} />
}

SubmitFormFieldComponent.defaultProps = {
    Template: SubmitFormComponent
}
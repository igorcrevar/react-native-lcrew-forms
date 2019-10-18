import React from 'react'
import { useFormContextError } from 'react-lcrew-forms-base'
import { formsStyle } from '../styles/FormsStyles'
import FormErrorComponent from '../base/FormErrorComponent'

export default function ErrorFormFieldComponent({
    name,
    style = formsStyle.formGlobalError,
}) {
    const error = useFormContextError(name)
    return !!error ? <FormErrorComponent style={style} error={error} /> : null
}

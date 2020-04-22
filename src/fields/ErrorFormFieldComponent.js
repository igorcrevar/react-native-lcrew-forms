import React from 'react'
import { useFormContextError } from 'react-lcrew-forms-base'

export default function ErrorFormFieldComponent({
    name,
    style,
    CustomText,
}) {
    const error = useFormContextError(name)
    if (!error) {
        return null
    }
    return <CustomText style={style}>{error}</CustomText>
}

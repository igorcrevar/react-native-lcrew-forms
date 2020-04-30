import React from 'react'
import { View } from 'react-native'

function FormFieldBasicTemplateComponent(props) {
    const {
        style, label, renderField, error, showError,
        fieldEnabled, hideIfNotEnabled, CustomText, labelAbove = true
    } = props

    // console.log('Field rendered: name=', props.name, ' value=', props.value, ' error=', error, ' enabled=', fieldEnabled)
    if (!fieldEnabled && hideIfNotEnabled || 
        !label && !renderField && (!showError || !error)) {
        return null
    }

    return (
        <View style={style.formFieldContainer}>
            {labelAbove && !!label && <CustomText style={style.formFieldLabel}>{label}</CustomText>}
            {!!renderField && renderField(props)}
            {!labelAbove && !!label && <CustomText style={style.formFieldLabel}>{label}</CustomText>}
            {showError && !!error && <CustomText style={style.formFieldError}>{error}</CustomText>}
        </View>
    )
}

export default React.memo(FormFieldBasicTemplateComponent)
import React from 'react'
import FormLabelComponent from './FormLabelComponent'
import FormErrorComponent from './FormErrorComponent'
import { View } from 'react-native'

function FormFieldBasicTemplateComponent(props) {
    const { style, label, renderField, error, showError, fieldEnabled, hideIfNotEnabled } = props

    console.log('Field rendered: name=', props.name, ' value=', props.value, ' error=', error, ' enabled=', fieldEnabled)
    
    if (!fieldEnabled && hideIfNotEnabled) {
        return null
    }

    return (
        <View style={style.formFieldContainer}>
            {!!label && <FormLabelComponent label={label} style={style.formFieldLabel} />}
            {!!renderField && renderField(props)}
            {showError && !!error && <FormErrorComponent style={style.formFieldError} error={error} />}
        </View>
    )
}

export default React.memo(FormFieldBasicTemplateComponent)
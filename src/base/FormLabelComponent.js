import React from 'react'
import { Text } from 'react-native'

function FormLabelComponent({ style, label, CustomText }) {
    return (
        <CustomText style={style}>
            {label}
        </CustomText>
    )
}

FormLabelComponent.defaultProps = {
    CustomText: Text,
}

export default React.memo(FormLabelComponent)
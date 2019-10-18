import React from 'react'
import { Text } from 'react-native'

function FormErrorComponent({ style, error, CustomText }) {
    if (!error) return null
    return (
        <CustomText style={style}>
            {error}
        </CustomText>
    )
}

FormErrorComponent.defaultProps = {
    CustomText: Text,
}

export default React.memo(FormErrorComponent)
import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import IconsService from '../additional/IconsService'

function InputPasswordComponent(props) {
    const [hidePassword, setHidePassword] = useState(true)
    const { style, autoCapitalize, returnKeyType, editable, RevealIcon, HideIcon, CustomTextInput } = props
    
    function onRevealPassword() {
        setHidePassword(!hidePassword)
    }
    
    return (
        <View style={style.formFieldPasswordContainer}>
            <CustomTextInput
                { ...props }
                autoCapitalize={autoCapitalize || 'none'}
                returnKeyType={returnKeyType || 'done'}
                style={style.formFieldPasswordInput}
                secureTextEntry={hidePassword} />
            {editable &&
                <TouchableOpacity style={style.formFieldPasswordIcon}
                    onPress={onRevealPassword}>
                    {hidePassword ? <RevealIcon /> : <HideIcon />}
               </TouchableOpacity>}
        </View> 
    )
}

InputPasswordComponent.propTypes = {
    CustomTextInput: PropTypes.elementType,
    style: PropTypes.object,
    RevealIcon: PropTypes.elementType,
    HideIcon: PropTypes.elementType,
}

InputPasswordComponent.defaultProps = {
    CustomTextInput: TextInput,
    RevealIcon: IconsService.RevealIcon,
    HideIcon: IconsService.HideIcon,
}

export default React.memo(InputPasswordComponent)

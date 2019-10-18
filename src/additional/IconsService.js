import React from 'react'
import { Text } from 'react-native'

// if vector icons is installed try to retrieve icons from it
let RevealIconComponent
let HideIconComponent
let RemoveIconComponent
try {
    const Icon = require('react-native-vector-icons/Ionicons').default
    RevealIconComponent = _props => <Icon size={30} name="ios-eye" />
    HideIconComponent = _props => <Icon size={30} name="ios-eye-off" />
    RemoveIconComponent = _props => <Icon size={30} name="md-close-circle-outline" color="red" />
} catch (_er) {
    RevealIconComponent = _props => <Text>reveal</Text>
    HideIconComponent = _props => <Text> hide </Text>
    RemoveIconComponent = _props => <Text> - </Text>
}

const RevealIcon = React.memo(RevealIconComponent)
const HideIcon = React.memo(HideIconComponent)
const RemoveIcon = React.memo(RemoveIconComponent)

export default {
    RevealIcon,
    HideIcon,
    RemoveIcon
}
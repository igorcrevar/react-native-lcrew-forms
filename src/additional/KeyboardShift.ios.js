import React, { useEffect, useState } from 'react'
import { Keyboard, View } from 'react-native'

export default function KeyboardShift({
    children,
    heightOffset = 0,
}) {
    const [ placeholderHeight, setPlaceholderHeight ] = useState(0)
    useEffect(() => {
        const listeners = [
            Keyboard.addListener('keyboardWillShow', onKeyboardWillShow),
            Keyboard.addListener('keyboardWillHide', onKeyboardWillHide),
        ]
        return () => listeners.forEach(x => x.remove())
    }, [])

    function onKeyboardWillShow(event) {
        const keyboardHeight = event.endCoordinates.height
        keyboardHeight && !isNaN(keyboardHeight) && setPlaceholderHeight(keyboardHeight)
    }

    function onKeyboardWillHide() {
        setPlaceholderHeight(0)
    }

    const height = Math.min(0, placeholderHeight + heightOffset)
    return (
        <>
            {children}
            {height > 0 && <View style={{ height }} />}
        </>
    )
}
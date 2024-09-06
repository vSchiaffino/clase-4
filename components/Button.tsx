import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export interface ButtonProps {
  label: string
  onPress?: (event: GestureResponderEvent) => void
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.gray.backgroundPressed,
        paddingHorizontal: 40,
        paddingVertical: 20,
      }}
    >
      <Text style={{ color: 'white' }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

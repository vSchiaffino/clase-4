import { useState } from 'react'
import { Pressable, Text } from 'react-native'

export interface CardProps {
  label: string
}

export const Card = ({ label }: CardProps) => {
  const [pressed, setPressed] = useState(false)
  const backgroundColor = pressed ? '#253C46' : '#808080'
  return (
    <Pressable
      onPress={() => setPressed((prev) => !prev)}
      style={{
        backgroundColor,
        paddingVertical: 40,
      }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>
    </Pressable>
  )
}

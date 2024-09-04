import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Contador = () => {
  const [contador, setContador] = useState(0)
  const aumentar = () => setContador((prev) => prev + 1)
  const disminuir = () => setContador((prev) => (prev > 0 ? prev - 1 : 0))
  return (
    <View>
      <Button title='Aumentar' onPress={aumentar} />
      <Button title='Disminuir' onPress={disminuir} />
      <Text>{contador}</Text>
    </View>
  )
}

export default Contador

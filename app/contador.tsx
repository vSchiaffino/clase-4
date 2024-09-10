import { View, Text } from 'react-native'
import React, { useState } from 'react'

import Button from '@/components/Button'
import Container from '@/components/Container'

const Contador = () => {
  const [contador, setContador] = useState(0)
  const aumentar = () => setContador((prev) => prev + 1)
  const disminuir = () => setContador((prev) => (prev > 0 ? prev - 1 : 0))
  return (
    <Container>
      <View style={{ rowGap: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>{contador}</Text>
        <Button onPress={aumentar} label='Aumentar' />
        <Button onPress={disminuir} label='Disminuir' />
      </View>
    </Container>
  )
}

export default Contador

import { View } from 'react-native'
import React from 'react'
import { Card } from '@/components/Card'
import Container from '@/components/Container'

const Tarjetas = () => {
  return (
    <Container>
      <View style={{ paddingHorizontal: 40, gap: 20, width: '100%' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card label={'Tarjeta ' + (index + 1)} key={index} />
        ))}
      </View>
    </Container>
  )
}

export default Tarjetas

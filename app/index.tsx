import { View, Text, Modal, TextInput } from 'react-native'
import Button from '@/components/Button'
import React, { useState } from 'react'
import Container from '@/components/Container'
import { Colors } from '@/constants/Colors'

const Perfil = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [nameToChange, setNameToChange] = useState('')
  const [name, setName] = useState('Valentín Schiaffino')
  return (
    <Container>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              rowGap: 20,
              padding: 40,
              width: 300,
              height: 200,
              borderRadius: 20,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextInput
              style={{
                borderRadius: 5,
                borderColor: Colors.gray.backgroundPressed,
                borderWidth: 1,
                width: '100%',
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              onChangeText={(text) => setNameToChange(text)}
              value={nameToChange}
            />
            <Button
              label='Guardar nombre'
              onPress={() => {
                setName(nameToChange)
                setNameToChange('')
                setModalVisible(false)
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={{ rowGap: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 15 }}>Hola {name}</Text>
        <Button
          label='Cambiar nombre'
          onPress={() => {
            setModalVisible(true)
          }}
        />
      </View>
    </Container>
  )
}

export default Perfil

import { View, Text, Button, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'

const Perfil = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [nameToChange, setNameToChange] = useState('')
  const [name, setName] = useState('Valentín Schiaffino')
  return (
    <View>
      <Modal visible={modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: 200,
              height: 100,
              borderRadius: 20,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextInput
              onChangeText={(text) => setNameToChange(text)}
              value={nameToChange}
            />
            <Button
              title='Guardar nombre'
              onPress={() => {
                setName(nameToChange)
                setNameToChange('')
                setModalVisible(false)
              }}
            />
          </View>
        </View>
      </Modal>
      <Text>Hola {name}</Text>
      <Button title='Cambiar nombre' onPress={() => setModalVisible(true)} />
    </View>
  )
}

export default Perfil

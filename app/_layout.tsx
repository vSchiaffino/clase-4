import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function RootLayout() {
  return (
    <Tabs initialRouteName='Perfil'>
      <Tabs.Screen
        name='Contador'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calculator' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='Perfil'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='Tarjetas'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='apps' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}

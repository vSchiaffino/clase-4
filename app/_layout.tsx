import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='contador'
        options={{
          title: 'Contador',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calculator' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='tarjetas'
        options={{
          title: 'Tarjetas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='apps' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}

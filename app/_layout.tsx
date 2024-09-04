import { Stack, Tabs } from 'expo-router'

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='contador' />
      <Tabs.Screen name='perfil' />
      <Tabs.Screen name='tarjetas' />
    </Tabs>
  )
}

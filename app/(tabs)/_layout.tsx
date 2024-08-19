import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="composer"
        options={{
          title: 'Composer',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="account-music" color={color} />,
        }}
      />
        <Tabs.Screen
        name="form"
        options={{
          title: 'Form',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="library-music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="question-circle-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="composer/[name]"
        options={{
          title: 'In Progress',
          href: null         
       }}
      />
      <Tabs.Screen
        name="form/[name]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
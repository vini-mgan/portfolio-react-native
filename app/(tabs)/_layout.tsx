import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../_layout';

export default function TabLayout() {
  const { dark } = useContext(ThemeContext);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: dark ? '#4da3ff' : '#007AFF',
        tabBarInactiveTintColor: dark ? '#bbb' : '#8E8E93',
        tabBarStyle: {
          backgroundColor: dark ? '#181818' : '#FFFFFF',
          borderTopColor: dark ? '#232323' : '#e0e0e0',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="experiencia-academica"
        options={{
          title: 'Acadêmico',
          tabBarIcon: ({ color }) => <FontAwesome name="graduation-cap" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="experiencia-profissional"
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color }) => <FontAwesome name="briefcase" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <FontAwesome name="code" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
} 
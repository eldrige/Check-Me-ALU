import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return (
    <FontAwesome
      size={28}
      color="white"
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // tabBarBackground: 'red',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FF5B83',
        },
        // tabBarStyle: {
      }}
      sceneContainerStyle={{
        backgroundColor: 'red',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color="white" />,
        }}
      />
      <Tabs.Screen
        name="articles"
        options={{
          title: 'Articles',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" size={25} color="white" />
          ),
          tabBarStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox-outline" size={25} color="white" />
          ),
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </Tabs>
  );
}

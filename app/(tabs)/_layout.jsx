import { StyleSheet, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from 'expo-blur';
import Octicons from '@expo/vector-icons/Octicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'transparent', 
          position: 'absolute',
          borderRadius: 100,
          marginBottom: 20,
          marginHorizontal: 20,
          justifyContent: 'center',
          paddingBottom: 1,
          paddingTop: 10,
          overflow: 'hidden',
          height: 66,
        },
        tabBarBackground: () => (
          <BlurView 
            intensity={50} 
            tint="transparent" 
            style={StyleSheet.absoluteFillObject} 
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
        tabBarLabel: "",
         headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={25} color={color} />
           ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="search" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="heart" size={25} color={color} />

          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={29} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
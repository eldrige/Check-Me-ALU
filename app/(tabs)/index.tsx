import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Box } from 'native-base';
import { Text as RnText } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import { secureStore } from '@/utils/secureStore';
import { Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    secureStore.getItem('username').then((value) => {
      if (value) {
        setUsername(value);
      }
    });
  }, [username]);
  // const { data, isLoading } = useGetArticles();
  // console.log(data, 'From index');
  // if (isLoading) return null;
  return (
    <ImageBackground
      source={require('@/assets/images/bg.png')}
      className="flex flex-1"
    >
      <View className="w-full bg-transparent py-12 px-6">
        {/* <Feather name="menu" size={24} color="black" /> */}
        <View className="bg-transparent flex flex-row items-start justify-between gap-4">
          <View className="flex-1 bg-transparent">
            <Text className="text-white">Good morning, {username}</Text>
            <Text className="font-semibold text-white text-2xl ">
              its been 17 days since your last checkup
            </Text>
          </View>
          <Pressable className="bg-[#FF5B83] w-10 h-10 rounded-full items-center justify-center">
            <FontAwesome name="bell" size={18} color="white" />
          </Pressable>
        </View>
        <Text className="mb-2 mt-12 text-white">
          What would you like to do today?
        </Text>
        <View className="bg-transparent flex-row items-center justify-between gap-2 w-full mb-4">
          <Pressable
            onPress={() => router.push('/self-exam')}
            className="px-3 w-[48%] h-24 bg-white rounded-2xl items-center justify-center"
          >
            <Text className="text-black font-semibold text-[20px]">
              Self examination
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push('/chat')}
            className="px-3 w-[48%] h-24 bg-white rounded-2xl items-center justify-center"
          >
            <Text className="text-black font-semibold text-[20px]">
              Chat with a specialist
            </Text>
          </Pressable>
        </View>
        <View className="bg-transparent flex-row items-center justify-between gap-2 w-full">
          <View className="px-3 w-[48%] h-24 bg-white rounded-2xl items-center justify-center">
            <Text className="text-black font-semibold text-[20px]">
              Check your calendar
            </Text>
          </View>
          <Pressable
            onPress={() => router.push('/articles')}
            className="px-3 w-[48%] h-24 bg-white rounded-2xl items-center justify-center"
          >
            <Text className="text-black font-semibold text-[20px]">
              Read our blog
            </Text>
          </Pressable>
        </View>
        <Text className=" mb-2 mt-12 text-white font-semibold text-[20px]">
          Upcoming events
        </Text>
        <View className="bg-transparent w-full rounded-2xl bg-white h-[25%]"></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

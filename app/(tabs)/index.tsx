import { Pressable, SafeAreaView, StyleSheet } from 'react-native';

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
    <SafeAreaView className="flex flex-1 bg-white">
      <View className="w-full py-12 px-6">
        {/* <Feather name="menu" size={24} color="black" /> */}
        <View className="flex flex-row items-start justify-between gap-4">
          <View className="flex-1">
            <Text>Good morning, {username}</Text>
            <Text className="font-semibold text-black text-2xl ">
              It's been 17 Days since your last Checkup.
            </Text>
          </View>
          <Pressable className="bg-[#d9d9d9] w-10 h-10 rounded-full items-center justify-center">
            <FontAwesome name="bell" size={18} color="black" />
          </Pressable>
        </View>
        <Text className="mb-2 mt-12">What would you like to do today?</Text>
        <View className="flex-row items-center justify-between gap-2 w-full mb-4">
          <Pressable
            onPress={() => router.push('/self-exam')}
            className="px-3 w-[48%] h-24 bg-[#d9d9d9] rounded-2xl items-center justify-center"
          >
            <Text className="text-black font-semibold text-[20px]">
              Self Examination
            </Text>
          </Pressable>
          <View className="px-3 w-[48%] h-24 bg-[#d9d9d9] rounded-2xl items-center justify-center">
            <Text className="text-black font-semibold text-[20px]">
              Chat with a Specialist
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between gap-2 w-full">
          <View className="px-3 w-[48%] h-24 bg-[#d9d9d9] rounded-2xl items-center justify-center">
            <Text className="text-black font-semibold text-[20px]">
              Check your Calendar
            </Text>
          </View>
          <View className="px-3 w-[48%] h-24 bg-[#d9d9d9] rounded-2xl items-center justify-center">
            <Text className="text-black font-semibold text-[20px]">
              Read our Blog
            </Text>
          </View>
        </View>
        <Text className="mb-2 mt-12 text-black font-semibold text-[20px]">
          Upcoming Events
        </Text>
        <View className="w-full rounded-2xl bg-[#dedede] h-[25%]"></View>
      </View>
    </SafeAreaView>
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

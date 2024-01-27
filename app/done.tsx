import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Text, View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { CustomText } from '@/components/CustomText';
import { useState, useCallback } from 'react';

const ITEMS = [
  'A hard knot or lump near your underarm',
  'Dimples, puckers or bulges or ridges on the skin of your breast',
  'Inverted nipples, nipples are pushed in',
  'redness, warmth,swelling or pain',
  'Bloody, nipple discharge',
  'Itching scales, sores',
];

export default function Done() {
  return (
    <ImageBackground
      source={require('@/assets/images/bg.png')}
      className="flex flex-1"
    >
      <View className="bg-transparent w-full flex flex-col flex-1 justify-between py-12 px-6">
        <View className="bg-transparent">
          <Ionicons
            name="arrow-back"
            color="white"
            size={24}
            onPress={() => router.back()}
          />
        </View>
        <View className="bg-transparent h-[80%] justify-between">
          <View className="bg-transparent">
            <View className="bg-transparent mb-6">
              <CustomText className="text-3xl font-bold text-white">
                Congratulations! you finished your self examination
              </CustomText>
            </View>
            <CustomText className="text-white mb-8">
              Please reach out to a doctor/specialist if you noticed any of the
              following
            </CustomText>
            {ITEMS.map((item, idx) => (
              <View
                key={idx}
                className="bg-transparent flex-row items-center gap-2 mb-2 max-w-[70%]"
              >
                <View className="bg-white w-2 h-2 rounded-full"></View>
                <Text className="text-white">{item}</Text>
              </View>
            ))}
          </View>

          <View className="w-full bg-transparent flex-row items-center justify-end">
            {/* <CustomText className="underline text-white">Skip </CustomText> */}
            <View className="flex-row justify-end bg-transparent gap-3">
              <Pressable className="bg-white  rounded-md py-2 px-3">
                <Ionicons
                  name="checkmark"
                  className="text-black"
                  size={24}
                  onPress={() => router.replace('(tabs)/')}
                />
              </Pressable>
            </View>
          </View>
        </View>
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

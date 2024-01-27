import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState, useCallback } from 'react';
import { CustomText } from '@/components/CustomText';

export default function OnboardingScreen() {
  const ITEMS = [
    {
      title: 'Find licensed specialists from your home',
      label: 'Experts, Care Takers, Consulatants and Doctors are always there to help',
      active: true,
    },
    {
      title: 'Learn how to perform self examination',
      label: 'You are your first line of defense against breast cancer',
      active: false,
    },
    {
      title: 'Schedule Your First Consultation',
      label:
        'Take control of your healthj journey, booking an appointment is simple and convenient',
      active: false,
    },
  ];

  const [slideIdx, setslideIdx] = useState(0);
  const [featuredItem, setFeaturedItem] = useState(ITEMS[slideIdx]);

  const goToNextItem = useCallback(() => {
    if (slideIdx === 2) {
      router.replace('/auth/');
      return;
    }
    let nextIdx;
    if (slideIdx + 1 >= ITEMS.length) {
      nextIdx = 0;
    } else {
      nextIdx = slideIdx + 1;
    }
    setslideIdx(nextIdx);
    setFeaturedItem(ITEMS[nextIdx]);
  }, [slideIdx, ITEMS]);

  return (
    <View style={styles.container}>
      <View className="px-6 py-8 rounded-t-[60px] bg-[#d9d9d9] h-[36%] justify-around relative">
        <View className="flex-row justify-center align-center mx-auto absolute -top-6 left-1/2">
          {ITEMS.map((item, idx) => (
            <View
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === slideIdx ? 'bg-black' : 'bg-white'
              } mx-1`}
            />
          ))}
        </View>
        <CustomText className="text-black capitalize text-center font-semibold text-3xl leading-9">
          {featuredItem.title}
        </CustomText>
        <CustomText className="text-black text-center font-bold mx-auto">
          {featuredItem.label}
        </CustomText>
        <View className="items-center justify-between flex-row w-full">
          <CustomText className="underline">Skip to login</CustomText>
          <Pressable className="bg-white rounded-md p-2">
            <Ionicons
              name="arrow-forward"
              className="text-black"
              size={24}
              onPress={goToNextItem}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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

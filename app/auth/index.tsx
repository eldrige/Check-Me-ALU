import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState, useCallback } from 'react';

export default function LoginScreen() {
  const ITEMS = [
    {
      title: 'Learn how to perform self exams',

      active: true,
    },
    {
      title: 'Connect with licensed specialists',

      active: false,
    },
    {
      title: 'Schedule Your First Consultation',
      active: false,
    },
  ];

  const [slideIdx, setslideIdx] = useState(0);
  const [featuredItem, setFeaturedItem] = useState(ITEMS[slideIdx]);

  const goToNextItem = useCallback(() => {
    if (slideIdx === 2) {
      router.replace('/(tabs)');
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
      <View className="px-6 py-8 rounded-t-[60px] bg-[#d9d9d9] h-[40%] justify-between">
        <Text className="text-black text-center font-bold text-3xl">
          {featuredItem.title}
        </Text>

        <Text className="text-black text-center font-bold ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          vitae officiis necessitatibus laboriosam inventore quae dolore, dolor
          consequatur culpa? Quod reiciendis aut iure enim fugiat corrupti quis
          veritatis repellat illum.
        </Text>
        <View className="items-center justify-between flex-row w-full">
          <Text>Skip to home</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            onPress={goToNextItem}
          />
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

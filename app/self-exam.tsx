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

export default function SelfExam() {
  const ITEMS = [
    {
      title: 'Welcome To Your Self Examination',
      steps: [
        'Remeber to please stay calm and relaxed. A breast self exam is not a substitute for a doctors visit',
        'A breast self exam is a safe way to become familiar with the normal look and feel of your breast',
      ],
    },
    {
      title: 'Finish your self exam in 7 steps',
      steps: [
        'Remeber to please stay calm and relaxed. A breast self exam is not a substitute for a doctors visit',
        'A breast self exam is a safe way to become familiar with the normal look and feel of your breast',
      ],
    },
    {
      title: 'Make surre you are comfortable',
      steps: [
        'Remeber to please stay calm and relaxed. A breast self exam is not a substitute for a doctors visit',
        'A breast self exam is a safe way to become familiar with the normal look and feel of your breast',
      ],
    },
  ];

  const [slideIdx, setslideIdx] = useState(0);
  const [featuredItem, setFeaturedItem] = useState(ITEMS[slideIdx]);

  const goToNextItem = useCallback(() => {
    let nextIdx;
    if (slideIdx + 1 >= ITEMS.length) {
      nextIdx = 0;
    } else {
      nextIdx = slideIdx + 1;
    }
    setslideIdx(nextIdx);
    setFeaturedItem(ITEMS[nextIdx]);
  }, [slideIdx, ITEMS]);

  const goToPreviousItem = useCallback(() => {
    const previousIdx = (slideIdx - 1 + ITEMS.length) % ITEMS.length;
    setslideIdx(previousIdx);
    setFeaturedItem(ITEMS[previousIdx]);
  }, [slideIdx, ITEMS, setslideIdx, setFeaturedItem]);

  return (
    <ImageBackground
      source={require('@/assets/images/bg.png')}
      className="flex flex-1"
    >
      <View className="bg-transparent w-full flex flex-col flex-1 justify-between py-12 px-6">
        <View className="bg-transparent">
          <Ionicons
            name="arrow-back"
            color="black"
            size={24}
            onPress={() => router.back()}
          />
        </View>
        <View className="bg-transparent h-[50%] justify-between">
          <View className="bg-transparent">
            {/* <CustomText className="italic text-[20px] font-semibold mb-1">
              Step 1
            </CustomText> */}
            <CustomText className="text-3xl font-bold text-black">
              {featuredItem.title}
            </CustomText>
          </View>
          {featuredItem.steps.map((item, idx) => (
            <CustomText key={idx} className="text-black">
              {item}
            </CustomText>
          ))}
          {/* <CustomText className="text-black">
            Remember to stay and relaxed A breast self exam is not a substiture
            for a doctor's visit or a screening mammogram
          </CustomText>
          <CustomText className="text-black">
            A breast self exam is a safe way to become familiar with the normal
            look and feel of your breast
          </CustomText> */}
          <CustomText className="underline italic max-w-[80%]">
            Read more about why breast exams are conducted
          </CustomText>
          <View className="w-full bg-transparent flex-row items-center justify-between">
            <CustomText className="underline">Skip </CustomText>
            <View className="flex-row bg-transparent gap-3">
              <Pressable className="bg-white rounded-md py-2 px-3">
                <Ionicons
                  name="arrow-back"
                  className="text-black"
                  size={24}
                  onPress={goToPreviousItem}
                />
              </Pressable>
              <Pressable className="bg-white rounded-md py-2 px-3">
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

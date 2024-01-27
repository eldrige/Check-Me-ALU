import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View, TextInput, Pressable, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState, useCallback } from 'react';
import { CustomText } from '@/components/CustomText';
import Animated from 'react-native-reanimated';
import { secureStore } from '@/utils/secureStore';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const handleGoHome = () => {
    if (!name) return;
    secureStore.setItem('username', name);
    router.push('/(tabs)');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/bg.png')}
      style={styles.container}
    >
      <Animated.View className="mx-auto w-[85%]">
        <CustomText className="font-bold text-3xl text-white ">
          Hello there!
        </CustomText>
        <CustomText className="text-white mt-2 mb-4">
          Im CheckMe, what can I call you ?
        </CustomText>
        <TextInput
          className="bg-[#ededed] rounded-xl px-6 py-3 mb-2"
          placeholder="Name"
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <Pressable className="bg-[#ededed] rounded-lg p-2.5 self-end">
          <Ionicons
            name="arrow-forward"
            className="text-white"
            size={28}
            onPress={handleGoHome}
          />
        </Pressable>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
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

import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View, TextInput, Pressable } from 'react-native';
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
    <View style={styles.container}>
      <Animated.View className="mx-auto w-[85%]">
        <CustomText className="font-bold text-3xl text-black ">
          Hello there!
        </CustomText>
        <CustomText className="text-black mt-4 mb-5">
          I'm CheckMe, what can I call you?
        </CustomText>
        <TextInput
          className="bg-[#ededed] rounded-xl py-4 text-lg px-6 mb-5"
          placeholder="Name"
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <Pressable className="bg-[#ededed] rounded-md p-2 self-end">
          <Ionicons
            name="arrow-forward"
            className="text-black"
            size={36}
            onPress={handleGoHome}
          />
        </Pressable>
      </Animated.View>
    </View>
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

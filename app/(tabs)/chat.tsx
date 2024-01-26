import { StyleSheet, TextInput,SafeAreaView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { router } from 'expo-router';

export default function ChatScreen() {
  return (
    <SafeAreaView className="w-full flex flex-1">
      <View className="w-full flex flex-row items-center justify-between px-4 py-2">
        <View className="flex flex-row items-center justify-between">
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => router.back()}
          />
          <View className="w-10 items-center justify-center h-10 rounded-full bg-blue-600 mx-2">
            <Text className="text-white">JD</Text>
          </View>
          <Text>Jane Doe</Text>
        </View>
        <Ionicons name="calendar" size={24} color="black" />
      </View>
      <ScrollView className="flex-1"></ScrollView>
      <View className="w-full flex flex-row items-center justify-between px-4 py-3 gap-2 bg-gray-100">
        <Ionicons name="add" size={28} color="black" />
        <TextInput
          className="flex-1 bg-gray-300 py-2 px-4 rounded-3xl "
          placeholder="Type your message"
        />
        <Ionicons name="paper-plane" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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

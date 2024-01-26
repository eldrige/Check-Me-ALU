import { Keyboard, StyleSheet, TextInput, SafeAreaView } from 'react-native';

import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import { Text, View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { useState } from 'react';

export default function ChatScreen() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<string>>([
    'Hii, there I am the main man',
  ]);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const handleSendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage('');
    }
    Keyboard.dismiss();
  };

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
        <Ionicons
          name="calendar"
          size={24}
          color="black"
          onPress={() => {
            DateTimePickerAndroid.open({
              value: date,
              onChange,
              mode: 'date',
              is24Hour: true,
            });
          }}
        />
      </View>
      <ScrollView className="flex-1 px-4 py-2 gap-2">
        {messages.map((message, index) => {
          return (
            <Text
              key={index}
              className="w-3/5 px-4 py-2 bg-red-200 rounded-t-lg rounded-bl-lg self-end"
            >
              {message}
            </Text>
          );
        })}
      </ScrollView>
      <View className="w-full flex flex-row items-center justify-between px-4 py-3 gap-2 bg-gray-100">
        <Ionicons name="add" size={28} color="black" />
        <TextInput
          className="flex-1 bg-gray-300 py-2 px-4 rounded-3xl "
          placeholder="Type your message"
          value={message}
          onChangeText={(val) => setMessage(val)}
        />
        <Ionicons
          name="paper-plane"
          size={24}
          color="black"
          onPress={handleSendMessage}
        />
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

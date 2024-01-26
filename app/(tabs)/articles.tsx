import { StyleSheet, TextInput,SafeAreaView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function BlogScreen() {
  return (
    <SafeAreaView className="w-full flex flex-1 bg-white">
      <View className="flex flex-row pl-6 items-center mt-12 gap-3">
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => router.back()}
          />
          <Text className="text-xl font-bold ">Blog</Text>
      </View>
      <View className="flex items-center">
          <View className="flex flex-row items-center bg-gray-200 px-4 mx-auto w-[90%] py-2 rounded-full mt-5">
            <TextInput
              placeholder="Search For Articles"
              placeholderTextColor="gray"
              className="flex-1"
            />
            <Ionicons name="search" size={20} color="gray" className="ml-2" />
          </View>
      </View>
      <View className="flex flex-row pl-12 items-center ">
          <Text className="text-xl font-bold mt-8">Staff Pick Of The Pick</Text>
      </View>
      <View className='rounded-2xl py-6 bg-gray-100 mx-auto w-[90%] mt-4'>
        <View className="w-[90%] h-48 rounded-2xl bg-white-100 items-center mt-59 ml-5 mb-4"></View>
         <Text className="text-xl font-bold mt-8 ml-10">Article Title</Text>
         <Text className="text-small  mt-8 mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas sit vel dolore deserunt commodi alias eaque, eos suscipit eius dolor eveniet. Facilis voluptatem, excepturi esse impedit aliquid sint assumenda.</Text>
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

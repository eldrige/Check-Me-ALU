import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function SelfExam() {
  // const { data, isLoading } = useGetArticles();
  // console.log(data, 'From index');
  // if (isLoading) return null;
  return (
    <SafeAreaView className="flex flex-1 bg-white">
      <View className="w-full py-12 px-6">
        <Text>Welcome to your self examination</Text>
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

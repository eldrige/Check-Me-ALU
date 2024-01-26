import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Box } from 'native-base';
import { Text as RnText } from 'react-native';
import { useGetArticles } from '@/features/articles';

export default function TabOneScreen() {
  const { data, isLoading } = useGetArticles();
  console.log(data, 'From index');
  if (isLoading) return null;
  return (
    <View style={styles.container}>
      <Box>Hello world</Box>

      <RnText className="text-red-500">Hello world</RnText>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

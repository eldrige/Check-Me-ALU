import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Box } from 'native-base';
import { Text as RnText } from 'react-native';
// import { useGetArticles } from '@/features/articles';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import { secureStore } from '@/utils/secureStore';

export default function TabOneScreen() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    secureStore.getItem('username').then((value) => {
      if (value) {
        setUsername(value);
      }
    });
  }, [username]);
  // const { data, isLoading } = useGetArticles();
  // console.log(data, 'From index');
  // if (isLoading) return null;
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={() => {
          router.replace('/');
        }}
      >
        Onboarding, {username}
      </Text>
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

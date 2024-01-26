import 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { useColorScheme } from '@/components/useColorScheme';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from 'react-query';
import { AuthProvider } from '@/providers/authProvider.';
import { NotificationsProvider } from '@/providers/notificatedProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <NativeBaseProvider>
        {/* NativeBaseProvider includes SafeAreaProvider so that we don't have to include it in a root render tree */}
        {/* @ts-expect-error: error comes from a react-native-notificated library which doesn't have declared children in types required in react 18 */}
        <NotificationsProvider>
          <QueryClientProvider client={queryClient} contextSharing={true}>
            <AuthProvider>
              <ThemeProvider
                value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
              >
                <Stack>
                  <Stack.Screen
                    name="onboarding"
                    options={{ headerShown: false }}
                  />
                  {/* <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  /> */}
                  <Stack.Screen
                    name="modal"
                    options={{ presentation: 'modal' }}
                  />
                </Stack>
              </ThemeProvider>
            </AuthProvider>
          </QueryClientProvider>
        </NotificationsProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
});

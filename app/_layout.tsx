import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         <Stack.Screen name="search" options={{ headerShown: false, title: 'Search' }} />
          <Stack.Screen name="imagePreview" options={{ headerShown: false, title: 'ImagePreview' }}   />
          <Stack.Screen name="searchList" options={{ headerShown: false, title: 'Search List' }}   />
          <Stack.Screen name="imageInfo" options={{ headerShown: false, title: 'Image Info' }}   />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

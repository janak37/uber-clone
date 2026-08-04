import * as Device from 'expo-device';
import { Text, StatusBar } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
   <view className="flex-1 items-center justify-center bg-white">
    <Text >Uber Clone!</Text>
    <StatusBar Style="auto" />
   </SafeAreaView>
  );
}


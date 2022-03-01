import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';

import Mainscreen from './COMPONENTS/Mainscreen';
import CountContextProvider from './COMPONENTS/countContextProvider';

export default function App() {
  return (
     <CountContextProvider>
        <Mainscreen />
     </CountContextProvider>
  );
}
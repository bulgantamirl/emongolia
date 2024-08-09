import React from 'react';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

const App = () => {
  return (
    <TailwindProvider>
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-xl font-bold">Welcome to emongolia!</Text>
      </View>
    </TailwindProvider>
  );
};

export default App;
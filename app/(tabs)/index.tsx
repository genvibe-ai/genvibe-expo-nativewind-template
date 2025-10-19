import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="bg-red-500 p-8">
      <Text className="text-white text-2xl">
        Welcome to NativeWind!
      </Text>
      <Text className="text-white mt-4">
        Start prompting now to make changes with Tailwind CSS classes
      </Text>
      <TouchableOpacity className="bg-blue-600 p-4 mt-4 rounded">
        <Text className="text-white">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
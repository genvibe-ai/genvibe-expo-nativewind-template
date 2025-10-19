import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center p-4 bg-gray-50">
      <Text className="text-xl font-semibold text-center text-gray-800 mb-4">
        Welcome to NativeWind!
      </Text>
      <Text className="text-base text-center text-gray-600 mb-6">
        Start prompting now to make changes with Tailwind CSS classes
      </Text>
      <View className="bg-blue-500 px-6 py-3 rounded-lg">
        <Text className="text-white font-medium">Get Started</Text>
      </View>
    </View>
  );
}
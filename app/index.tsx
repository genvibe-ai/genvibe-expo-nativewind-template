import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-xl font-bold text-white">
        Welcome to NativeWind!
      </Text>
      <Text className="text-base text-white mt-2">
        Start prompting now to make changes with Tailwind CSS classes
      </Text>
      <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded mt-4">
        <Text className="text-white font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
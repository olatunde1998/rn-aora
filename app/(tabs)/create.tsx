import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <Text>Create</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

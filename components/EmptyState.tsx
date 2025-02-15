import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

interface EmptyStateProps {
  title: string;
  subTitle: string;
}
const EmptyState = ({ title, subTitle }: EmptyStateProps) => {
  return (
    <View className="justify-center items-center px-4 ">
      <Image
        source={images.trash}
        resizeMode="contain"
        className="w-[270px] h-[215px]"
      />
      <Text className="text-white text-center font-poppins-semibold text-3xl mt-2">
        {title}
      </Text>
      <Text className="font-poppins-semibold text-base text-gray-100">
        {subTitle}
      </Text>

      <CustomButton
        title="Create Video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;

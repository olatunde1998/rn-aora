import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

const VideoCard = () => {
  return (
    <View className="px-8 mt-8">
      <View className="flex flex-row justify-between items-start">
        <View className="flex flex-row gap-4">
          <View className="border border-secondary-100 rounded-lg w-[46px] h-[46px]">
            <Image
              source={images.author}
              resizeMode="contain"
              className="rounded-lg"
            />
          </View>
          <View>
            <Text className="text-white text-xl font-poppins-semibold">
              Woman walks down a Tokyo...
            </Text>
            <Text className="text-gray-100 text-lg font-poppins-medium">
              Brandon Etter
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={icons.menu}
            resizeMode="contain"
            className="w-[21px] h-[23px]"
          />
        </View>
      </View>

      <Image
        source={images.banner}
        resizeMode="cover"
        className="w-full h-[200px] mt-8 rounded-xl"
      />
    </View>
  );
};

export default VideoCard;

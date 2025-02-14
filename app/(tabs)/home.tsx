import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import VideoCard from "@/components/VideoCard";
import TrendingVideo from "@/components/TrendingVideo";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full px-8 mt-6 ">
          <View className="flex flex-row items-center justify-between gap-3">
            <View className="flex flex-col gap-2">
              <Text className="font-poppins-semibold text-base text-gray-100">
                Welcome Back
              </Text>
              <Text className="text-white font-poppins-bold text-3xl">
                jsmastery
              </Text>
            </View>
            <Image
              source={images.brandLogoTwo}
              resizeMode="contain"
              className="w-[30px] h-[35px]"
            />
          </View>
          <Search />
        </View>
        <View className="w-full flex-1 pt-5 pb-8 ">
          <Text className="text-lg font-poppins-regular text-gray-100 mb-3 px-8">
            Trending Videos
          </Text>

          <TrendingVideo />
        </View>
        <VideoCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

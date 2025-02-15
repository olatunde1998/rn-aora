import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import SearchInput from "@/components/SearchInput";
import VideoCard from "@/components/VideoCard";
import { TrendingVideo } from "@/components/TrendingVideo";
import EmptyState from "@/components/EmptyState";


const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <VideoCard />}
        keyExtractor={(item) => item.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
        // columnWrapperClassName="flex gap-5  px-6"
        ListEmptyComponent={
          () => (
            // loading ? (
            //   <ActivityIndicator size="large" className="text-primary-300 mt-5" />
            // ) : (
            <EmptyState
              title="No Videos Found"
              subTitle="Be the first one to upload a video"
            />
          )
          // )
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <>
            <View className="w-full px-7 mt-6">
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
                  source={images.brandLogoSmall}
                  resizeMode="contain"
                  className="w-[30px] h-[35px]"
                />
              </View>
              <SearchInput />
            </View>
            <View className="w-full flex-1 pt-5 pb-8 ">
              <Text className="text-lg font-poppins-regular text-gray-100 mb-3 px-8">
                Trending Videos
              </Text>

              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => <TrendingVideo />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Home;

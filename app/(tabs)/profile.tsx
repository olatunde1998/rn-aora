import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import EmptyState from "@/components/EmptyState";
import VideoCard from "@/components/VideoCard";

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[1, 2]}
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
              subTitle="No videos found for this profile"
            />
          )
          // )
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <>
            <View className="px-7 my-6">
              <TouchableOpacity onPress={() => router.push("/sign-in")}>
                <Image
                  source={icons.logout}
                  className="w-6 h-6 ml-auto"
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Image
                source={images.jsMastery}
                className="w-[56px] h-[56px] mx-auto border-2 border-secondary rounded-xl"
                resizeMode="contain"
              />
              <Text className="text-3xl mt-8 text-white text-center font-poppins-semibold">
                jsmastery
              </Text>
              <View className="flex flex-row justify-center items-center mt-6 gap-8">
                <View className="flex flex-col items-center">
                  <Text className="text-white text-3xl font-poppins-bold">
                    10
                  </Text>
                  <Text className="text-gray-100 text-xl font-poppins-medium mt-0.5">
                    Posts
                  </Text>
                </View>
                <View className="flex flex-col items-center">
                  <Text className="text-white text-3xl font-poppins-bold">
                    1.2k
                  </Text>
                  <Text className="text-gray-100 text-xl font-poppins-medium mt-0.5">
                    Views
                  </Text>
                </View>
              </View>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Profile;

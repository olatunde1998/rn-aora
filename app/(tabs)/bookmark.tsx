import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/SearchInput";
import VideoCard from "@/components/VideoCard";
import EmptyState from "@/components/EmptyState";

const Bookmark = () => {
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
                <Text className="text-white font-poppins-bold text-3xl">
                  Saved Videos
                </Text>
              </View>
              <Search />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Bookmark;

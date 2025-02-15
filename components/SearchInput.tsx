import { View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );
  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg border-2 border-black-200 mt-5 py-6">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for a video topic"
          placeholderTextColor="#CDCDE0"
          className="text-sm font-poppins-regular ml-2 flex-1 text-white"
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.search} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

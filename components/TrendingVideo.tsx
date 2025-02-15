import { TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

interface Props {
  onPress?: () => void;
}
export const TrendingVideo = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-[170px] h-[270px] relative"
    >
      <Image source={images.trendingVideo} className="size-full rounded-2xl" />
    </TouchableOpacity>
  );
};

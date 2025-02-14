import images from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="my-10 mx-auto">
          <Image
            source={images.brandLogo}
            resizeMode="contain"
            className="siz-2 w-40 h-10"
          />
        </View>
        <View className="">
          <Image
            source={images.onboarding}
            alt="onboarding Image"
            resizeMode="contain"
            className="max-w-[380px] w-full h-[298px]"
          />
        </View>
        <View className="relative mt-8">
          <Text className="text-4xl text-white font-bold text-center">
            Discover Endless{"\n"}
            Possibilities with <Text className="text-secondary-200">Aora</Text>
          </Text>

          <Image
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-2"
            resizeMode="contain"
          />
        </View>

        <Text className="text-base font-poppins-regular text-gray-100 my-10 text-center">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
        <CustomButton
          title="Continue with Email"
          handlePress={() => router.push("/sign-in")}
          containerStyles="w-full"
        />
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

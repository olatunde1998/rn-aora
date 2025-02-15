import {
  View,
  Text,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from "expo-document-picker";
import { ResizeMode, Video } from "expo-av";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import icons from "@/constants/icons";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    prompt: "",
    video: "",
    thumbnail: "",
  });

  const openPicker = async (selectType: any) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectType === "image"
          ? ["image/png", "image/jpg"]
          : ["video/mp4", "video/gif"],
    });

    if (!result.canceled) {
      if (selectType === "image") {
        setForm({
          ...form,
          thumbnail: result.assets[0],
        });
      }

      if (selectType === "video") {
        setForm({
          ...form,
          video: result.assets[0],
        });
      }
    } else {
      setTimeout(() => {
        Alert.alert("Document picked", JSON.stringify(result, null, 2));
      }, 100);
    }
  };

  const submit = async () => {
    if (
      form.prompt === "" ||
      form.title === "" ||
      !form.thumbnail ||
      !form.video
    ) {
      return Alert.alert("Please provide all fields");
    }

    setUploading(true);
    try {
      Alert.alert("Success", "Post uploaded successfully");
      router.push("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setForm({
        title: "",
        video: "",
        thumbnail: "",
        prompt: "",
      });
      setUploading(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full px-7 mt-6">
          <View className="flex flex-row items-center justify-between gap-3">
            <Text className="text-white font-poppins-bold text-3xl">
              Upload Video
            </Text>
          </View>
          <FormField
            title="Video Title"
            placeholder="Give your video a catchy title..."
            value={form.title}
            handleChangeText={(e: any) => setForm({ ...form, title: e })}
            otherStyles="mt-7"
          />
          <View className="mt-7 space-y-2">
            <Text className="text-xl text-gray-100 font-poppins-semibold mb-2">
              Upload Video
            </Text>

            <TouchableOpacity onPress={() => openPicker("video")}>
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl border border-black-200 flex justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 flex justify-center items-center">
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    alt="upload"
                    className="w-1/2 h-1/2"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-7 space-y-2">
            <Text className="text-xl text-gray-100 font-poppins-semibold mb-2">
              Thumbnail Image
            </Text>

            <TouchableOpacity onPress={() => openPicker("image")}>
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  alt="upload"
                  className="w-5 h-5"
                />
                <Text className="text-sm text-gray-100 font-poppins-medium">
                  Choose a file
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <FormField
            title="AI Prompt"
            placeholder="The AI prompt of your video...."
            value={form.prompt}
            handleChangeText={(e: any) => setForm({ ...form, prompt: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Submit & Publish"
            handlePress={submit}
            containerStyles="mt-7"
            // isLoading={uploading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

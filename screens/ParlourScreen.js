import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AntDesign,
  EvilIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { urlFor } from "../sanity";

const ParlourScreen = () => {
  const {
    params: { id, name, image, rating, genre, address, shortDescription },
  } = useRoute();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    // <View className="pt-2 pl-4 pr-4 pb-2 flex-row items-center bg-white">
    //   <TouchableOpacity onPress={navigation.goBack}>
    //     <FontAwesome5 name="step-backward" size={24} color="black" />
    //   </TouchableOpacity>
    //   <Text className="flex-1 text-3xl text-red-800 text-center font-bold">
    //     {name}
    //   </Text>
    // </View>
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(image).url() }}
          className="w-full h-56 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{ opacity: 0.7 }}
          className="absolute top-14 left-5 rounded-full bg-gray-500 p-2"
        >
          <FontAwesome5 name="step-backward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <View className="p-4">
          <Text className="font-bold text-3xl">{name}</Text>
        </View>
        <View className="flex-row space-x-2 bg-white p-4 items-center">
          <AntDesign
            style={{ opacity: 0.5 }}
            name="star"
            size={22}
            color="green"
          />
          <Text>{rating} |</Text>
          <Text>{genre} |</Text>
          <MaterialIcons
            style={{ opacity: 0.5 }}
            name="location-city"
            size={24}
            color="black"
          />
          <Text className="flex-shrink">{address}</Text>
        </View>
        <View
          className="bg-white p-4 flex-row space-x-2 items-center"
          style={{ opacity: 0.5 }}
        >
          <Ionicons name="information-circle-outline" size={24} color="black" />
          <Text>{shortDescription}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 bg-white p-4 border border-gray-300">
          <EvilIcons name="question" size={24} color="black" />
          <Text className="flex-1 font-bold text-sm">
            Have a hair/skin allergy?
          </Text>
          <AntDesign name="right" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ParlourScreen;

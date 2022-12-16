import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const ParlourCard = ({
  id,
  name,
  image,
  rating,
  genre,
  address,
  shortDescription,
}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ParlourScreen", {
            id,
            name,
            image,
            rating,
            genre,
            address,
            shortDescription,
          });
        }}
        className="bg-white mr-3 shadow h-80 p-3"
      >
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className="h-40 w-60 rounded-sm bg-gray-300 p-10"
        />
        <Text className="bottom-1 left-1 text-black font-bold text-lg pt-2 w-52">
          {name}
        </Text>
        <View className="flex-row items-center space-x-2">
          <AntDesign
            style={{ opacity: 0.5 }}
            name="star"
            size={22}
            color="green"
          />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-700">{rating}</Text> | {genre}
          </Text>
        </View>
        <View className="flex-row items-center pb-2 space-x-2 mt-1">
          <Entypo
            style={{ opacity: 0.5 }}
            name="location"
            size={21}
            color="black"
          />
          <Text className="text-xs w-52 text-gray-500">Nearby | {address}</Text>
        </View>
        <View className="flex-row space-x-2">
          <FontAwesome
            style={{ opacity: 0.5 }}
            name="hashtag"
            size={20}
            color="black"
          />
          <Text className="text-xs pb-2 text-gray-500">{shortDescription}</Text>
          {/* {dishes.map((dishes) => (
            <Text key={dishes._id} className="text-xs pb-2 text-gray-500">
              {dishes.title}
            </Text>
          ))} */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ParlourCard;

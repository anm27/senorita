import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [category, setCategory] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type=="categories"]{
            ...,
          }[]
    `
      )
      .then((data) => {
        setCategory(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type=="featured"]{
            ...,
          }[]
    `
      )
      .then((data) => {
        setFeatured(data);
        // console.log(data);
      });
  }, []);

  //   console.log(category);

  return (
    <ScrollView
      className="pt-2 pl-4 pr-4 pb-2"
      vertical
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View className="flex-row pb-3 items-center">
        <View className="flex-row flex-1">
          {/* <Image
            source={{
              uri: "https://www.clipartmax.com/png/full/67-676790_delivery-take-out-courier-euclidean-vector-moto-delivery-png.png",
            }}
            className="h-8 w-8 rounded-full bg-gray-300 p-5"
          /> */}
          <Text className="text-3xl text-pink-500 font-bold">Senorita</Text>
          <View className="mx-2">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <View className="flex-row items-end">
              <Text className="font-bold text-xl">Current Location</Text>
              <AntDesign name="down" size={22} color="#EC4899" />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="face-woman"
              size={35}
              color="#EC4899"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center">
        <View className="flex-row items-center flex-1 p-2 mr-2 rounded-sm bg-gray-300">
          <AntDesign name="search1" size={24} color="#EC4899" />
          <TextInput
            className="pl-2 flex-1"
            placeholder="Saloons near-by"
            keyboardType="default"
          />
        </View>
        <AntDesign className="" name="filter" size={24} color="#EC4899" />
      </View>

      {/* Body */}
      <ScrollView className="">
        {/* Categories */}
        <ScrollView
          //   className="flex-row"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {category.map((category) => (
            <Categories
              key={category._id}
              name={category.name}
              image={category.image}
            />
          ))}
        </ScrollView>
        {/* Featured Rows */}

        {featured.map((featured) => (
          <FeaturedRow
            key={featured._id}
            name={featured.name}
            shortDescription={featured.short_description}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

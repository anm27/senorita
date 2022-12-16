import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const Categories = ({ name, image }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* {category.map((category) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          image={category.image}
          title={category.name}
        />
      ))} */}

      {/* Category Card */}
      <TouchableOpacity className="relative items-center flex-row pt-2">
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className="h-20 w-20 rounded-md bg-gray-300 p-10 mr-2"
          // style={{ opacity: 0.7 }}
        />
        <Text className="absolute bottom-1 left-1 w-20 text-white bg-gray-300 font-bold">
          {name}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Categories;

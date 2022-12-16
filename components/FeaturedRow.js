import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import ParlourCard from "./ParlourCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ name, shortDescription }) => {
  const [parlour, setParlour] = useState([]);

  useState(() => {
    sanityClient
      .fetch(
        `
    *[_type=="parlours"]{
      ...,
    }
    `
      )
      .then((data) => {
        setParlour(data);
      });
  }, []);

  return (
    <View>
      <View className="flex-row items-center justify-between mt-4">
        <Text className="font-bold text-lg">{name}</Text>
        <Entypo name="chevron-right" size={24} color="red" />
      </View>
      <Text className="text-xs text-gray-500">{shortDescription}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {parlour.map((parlour) => (
          <ParlourCard
            key={parlour._id}
            id={parlour._id}
            name={parlour.name}
            rating={parlour.rating}
            genre={parlour.genre}
            address={parlour.address}
            image={parlour.image}
            shortDescription={parlour.short_description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

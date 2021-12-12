import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import Screen from "./Screen";
import Card from "../components/Card";
import colors from "../../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Red Jacket for sale",
    price: 200,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 3,
    title: "Red Jacket for sale",
    price: 200,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 4,
    title: "Red Jacket for sale",
    price: 200,
    image: require("../assets/jacket.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.pink,
  },
});

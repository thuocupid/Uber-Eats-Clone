import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "Kes 1300",
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
  {
    title: "Food 2",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "Kes 1300",
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
  {
    title: "Food 3",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "Kes 1300",
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
  {
    title: "Food 4",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "Kes 1300",
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
  {
    title: "Food 5",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "Kes 1300",
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
  {
    title: "Food 6",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "Kes 1300",
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titelStyle: {
    fontSize: 22,
    fontWeight: "900",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titelStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);

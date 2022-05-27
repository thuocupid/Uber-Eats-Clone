import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SafeViewAndroid from "../components/home/SafeViewAndroid";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem, { localRestaurants } from "../components/home/RestaurantItem";
import { useEffect } from "react";
import BottomTab from "../components/home/BottomTab";

const YELP_API_KEY =
  "zDx63QTskztksZhcER_FeD2GYXpeLur0JJavJ7BKyspBNXjXIvfZwwZ9h7q0HSbEU1tWQdew5uK6OATeouLVLDmCSoNCgb5wG8kbHY9pYsKe0ytMKXJsBvAqLtKQYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantFromYelp = () => {
    const yelpurl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood';

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpurl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(()=>{
    getRestaurantFromYelp()
  }, [])

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
      {/* <Divider  width={1}/> */}
      <BottomTab />
    </SafeAreaView>
  );
}

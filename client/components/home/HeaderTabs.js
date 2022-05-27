import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      {/*header button */}
      <Headerbutton
        text="Delivery"
        btncolor="black"
        textcolor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}  
      />
      <Headerbutton
        text="Pickup"
        btncolor="white"
        textcolor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const Headerbutton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? 'black':'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress = {()=> props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.activeTab === props.text ? 'white':'black', fontSize: 15, fontWeight: "900" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;

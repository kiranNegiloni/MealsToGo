import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantScreen = () => {
  return (
    <>
      <View style={styles.search}>
        <Searchbar
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Search Restaurants"
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 12,
  },
  search: {
    padding: 12,
  },
});

import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

import styled from "styled-components/native";

const List = styled.View`
  flex: 1;
  background-color: blue;
  padding: 12px;
`;

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
      <List>
        <RestaurantInfo />
      </List>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 12,
  },
});

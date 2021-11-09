import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;

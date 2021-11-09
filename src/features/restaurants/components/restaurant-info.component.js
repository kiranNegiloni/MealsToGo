import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    address = "173 4th Main, BSK 5th stage, Bangalore",
    icon = null,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/01/88/b0/07/salle-du-restaurant-pic.jpg",
    ],
    rating = 4,
    isOpen = true,
    isClosedPermanantly = false,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover style={styles.image} key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
  },
});

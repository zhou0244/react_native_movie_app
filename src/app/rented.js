import { Stack } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { styles } from "../theme/style";
import { useMovie } from "../context/StorageContext";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

export default function Rented() {
  const { rentedMovies } = useMovie();

  return (
    <View style={styles.body}>
      <Stack.Screen
        options={{
          title: "My Movies",
          headerBackTitle: "Back",
        }}
      />

      {rentedMovies == 0 ? (
        <Text>It looks empty here, go rent some movies.</Text>
      ) : (
        <FlatList
          data={rentedMovies}
          style={styles.container.card}
          renderItem={({ item }) => {
            const { id, title, vote_average, poster_path } = item;
            return (
              <MovieCard
                id={id}
                title={title}
                rate={vote_average}
                poster={poster_path}
                source="rented"
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

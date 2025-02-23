import { Stack } from "expo-router";
import { View, Text, FlatList, Image } from "react-native";
import { styles } from "../theme/style";
import { useMovie } from "../context/StorageContext";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

export default function Rented() {
  // Accessing rentedMovies from context using custom hook
  const { rentedMovies } = useMovie();

  return (
    <View style={styles.body}>
      <Stack.Screen
        options={{
          title: "My Movies",
          headerBackTitle: "Back",
        }}
      />

      {/* Conditional rendering: If rentedMovies is empty, display a message */}
      {rentedMovies == 0 ? (
        <View
          style={{
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={[styles.subTitle]}>It looks empty here...</Text>

          <Image
            source={require("../../assets/undraw_void_wez2.png")}
            style={{ height: 320, width: "100%" }}
            resizeMode="contain"
          />
        </View>
      ) : (
        <FlatList
          data={rentedMovies}
          style={styles.container.card}
          renderItem={({ item }) => {
            const {
              id,
              title,
              original_language,
              release_date,
              vote_average,
              poster_path,
            } = item;
            return (
              <MovieCard
                id={id}
                title={title}
                language={original_language}
                year={release_date}
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

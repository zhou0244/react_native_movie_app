import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { styles } from "../theme/theme";
import { useMovie } from "../context/StorageContext";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

const videoSrc =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function Watch() {
  const { rentedMovies, setRentedMovies } = useMovie();
  const { id, title } = useLocalSearchParams();
  const player = useVideoPlayer(videoSrc, (player) => {
    player.loop = false;
  });
  const orientation = useDeviceOrientation();
  const [orient, setOrient] = useState("portrait");
  const vidview = useRef(null);

  useEffect(() => {
    setOrient(orientation);
    console.log(`${orientation} mode`);

    if (orientation === "landscape") {
      vidview.current.enterFullscreen();
    } else if (orientation === "portrait") {
      vidview.current.exitFullscreen();
    }
  }, [orientation]);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Watch",
          headerBackTitle: "Back",
        }}
      />
      <Text>Watching Movies {title}</Text>

      <VideoView
        ref={vidview}
        allowsFullscreen
        player={player}
        style={styles.video}
      />

      <Pressable style={styles.buttonBase}>
        <Text>Marked as watched</Text>
      </Pressable>
    </View>
  );
}

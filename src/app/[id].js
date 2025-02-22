import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { styles } from "../theme/theme";
import { useMovie } from "../context/StorageContext";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useEvent } from "expo";

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

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  useEffect(() => {
    console.log(`Is playing? ${isPlaying}`);
  }, [isPlaying]);

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
      {isPlaying ? null : (
        <View>
          <Text>You're watching</Text>
          <Text>{title}</Text>
        </View>
      )}

      <VideoView
        ref={vidview}
        allowsFullscreen
        player={player}
        nativeControls={true}
        style={styles.video}
      />

      {!isPlaying ? (
        <Pressable style={styles.buttonBase}>
          <Text>Marked as watched</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

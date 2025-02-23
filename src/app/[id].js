import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { styles } from "../theme/style";
import { useMovie } from "../context/StorageContext";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useEvent } from "expo";
import Button from "../components/Button";

const videoSrc =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function Watch() {
  const { removeRented } = useMovie();
  const { id, title } = useLocalSearchParams();
  const router = useRouter();
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

  const handleMarkAsWatched = () => {
    try {
      if (id) {
        router.back();
        removeRented(id);
      } else {
        console.error("No movie ID found in params");
      }
    } catch (error) {
      console.error("Error in handleMarkAsWatched:", error);
    }
  };

  return (
    <View style={styles.body}>
      <Stack.Screen
        options={{
          title: "Movie Player",
          headerBackTitle: "Back",
        }}
      />
      {isPlaying ? null : (
        <View style={{ paddingTop: 32, paddingBottom: 8 }}>
          <Text style={styles.subTitle}>You're watching</Text>
          <Text style={[styles.title, { color: "royalblue" }]}>{title}</Text>
        </View>
      )}

      <View style={{ paddingHorizontal: 16 }}>
        <VideoView
          ref={vidview}
          allowsFullscreen
          player={player}
          nativeControls={true}
          style={styles.video}
        />

        {!isPlaying ? (
          <Button
            type="cancel"
            text="Marked as Watched"
            iconName="check"
            onPress={handleMarkAsWatched}
          />
        ) : null}
      </View>
    </View>
  );
}

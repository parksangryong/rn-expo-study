import FeedItem from "@/components/FeedItem";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FeedItem
        post={{
          id: 1,
          userId: 1,
          title: "title",
          description: "description",
          createdAt: "2023-10-27T10:00:00Z",
          author: {
            id: 1,
            nickname: "nickname",
            imageUri: "imageUri",
          },
          imageUris: [
            {
              id: 1,
              uri: "uri",
            },
          ],
          likes: [{ userId: 1 }],
          hasVote: true,
          voteCount: 1,
          commentCount: 1,
          viewCount: 1,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

import SearchFeedList from "@/components/SearchFeedList";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <SearchFeedList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

import { BASE_URL } from "@/api/axios";
import AuthRoute from "@/components/AuthRoute";
import CustomButton from "@/components/CustomButton";
import Tab from "@/components/Tab";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MyScreen() {
  const { auth } = useAuth();
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabPress = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <AuthRoute>
      <View style={styles.header}>
        <Image
          source={
            auth.imageUri
              ? { uri: `${BASE_URL}/${auth.imageUri}` }
              : require("@/assets/images/default-avatar.png")
          }
          style={styles.avatar}
        />
        <CustomButton
          label="프로필 편집"
          variant="outlined"
          size="medium"
          style={styles.editButton}
          onPress={() => {}}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.profile}>
          <Text style={styles.nickname}>{auth.nickname}</Text>
          <Text style={styles.introduce}>{auth.introduce}</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <Tab isActive={currentTab === 0} onPress={() => handleTabPress(0)}>
          게시물
        </Tab>
        <Tab isActive={currentTab === 1} onPress={() => handleTabPress(1)}>
          좋아한 게시물
        </Tab>
      </View>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    backgroundColor: colors.ORANGE_200,
    width: "100%",
    height: 154,
  },
  avatar: {
    position: "absolute",
    top: 77,
    left: 16,
    width: 154,
    height: 154,
    borderRadius: 154,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_500,
  },
  container: { marginTop: 77 },
  profile: {
    padding: 16,
    gap: 16,
  },
  nickname: {
    fontSize: 24,
    fontWeight: "bold",
  },
  introduce: {
    fontSize: 14,
  },
  tabs: {
    flexDirection: "row",
  },
  editButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
});

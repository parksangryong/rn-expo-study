import { colors } from "@/constants";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Post } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Profile from "./Profile";

interface FeedItemProps {
  post: Post;
}

const FeedItem = ({ post }: FeedItemProps) => {
  const isLike = true;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Profile
          nickname={post.author.nickname}
          imageUri={post.author.imageUri}
          createdAt={post.createdAt}
          onPress={() => {}}
        />
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {post.description}
        </Text>
      </View>
      <View style={styles.menuContainer}>
        <Pressable style={styles.menu}>
          <Octicons
            name={isLike ? "heart-fill" : "heart"}
            size={16}
            color={isLike ? colors.ORANGE_600 : colors.BLACK}
          />
          <Text style={isLike ? styles.menuTextActive : styles.menuText}>
            {post.likes.length}
          </Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={16}
            color={colors.BLACK}
          />
          <Text style={styles.menuText}>{post.commentCount}</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <Ionicons name="eye-outline" size={16} color={colors.BLACK} />
          <Text style={styles.menuText}>{post.viewCount}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    padding: 16,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: colors.GRAY_300,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.BLACK,
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: colors.BLACK,
    marginBottom: 14,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    width: "33%",
    gap: 4,
  },
  menuText: {
    fontSize: 14,
    color: colors.GRAY_700,
  },
  menuTextActive: {
    color: colors.ORANGE_600,
    fontWeight: "500",
  },
});

export default FeedItem;

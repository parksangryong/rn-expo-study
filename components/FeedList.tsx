import { colors } from "@/constants";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

interface FeedListProps {}

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: "더미 제목입니다",
    description: "더미 내용입니다",
    createdAt: "2023-10-27T10:00:00Z",
    author: {
      id: 1,
      nickname: "더미 닉네임",
      imageUri: "https://picsum.photos/200/300",
    },
    imageUris: [],
    likes: [{ userId: 1 }],
    hasVote: true,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 1,
    title: "더미 제목입니다",
    description: "더미 내용입니다",
    createdAt: "2023-10-27T10:00:00Z",
    author: {
      id: 1,
      nickname: "더미 닉네임",
      imageUri: "https://picsum.photos/200/300",
    },
    imageUris: [],
    likes: [{ userId: 1 }],
    hasVote: true,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 3,
    userId: 1,
    title: "더미 제목입니다",
    description: "더미 내용입니다",
    createdAt: "2023-10-27T10:00:00Z",
    author: {
      id: 1,
      nickname: "더미 닉네임",
      imageUri: "https://picsum.photos/200/300",
    },
    imageUris: [],
    likes: [{ userId: 1 }],
    hasVote: true,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
];

const FeedList = ({}: FeedListProps) => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;

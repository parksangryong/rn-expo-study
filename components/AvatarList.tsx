import { getImageId } from "@/utils/images";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AvatarItem from "./AvatarItem";

interface AvatarListProps {
  data: string[];
  onSelect: (id: string) => void;
  isSelected: string;
}

const AvatarList = ({ data, onSelect, isSelected }: AvatarListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <AvatarItem
          uri={item}
          isSelected={isSelected === getImageId(item)}
          onPress={() => onSelect(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item + index.toString()}
      numColumns={3}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={() => <View style={styles.footer} />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  footer: {
    height: 100,
  },
});

export default AvatarList;

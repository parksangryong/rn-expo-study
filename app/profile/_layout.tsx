import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" size={28} color={colors.BLACK} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="update"
        options={{
          title: "프로필 편집",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" size={28} color={colors.BLACK} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="avatar"
        options={{
          title: "아바타 변경",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" size={28} color={colors.BLACK} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}

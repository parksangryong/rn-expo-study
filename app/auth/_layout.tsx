import { Link, Stack } from "expo-router";
import React from "react";

import { colors } from "@/constants";
import Foundation from "@expo/vector-icons/Foundation";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
          headerTitleAlign: "center",
          headerLeft: () => (
            <Link href="/" replace>
              <Foundation name="home" size={28} color={colors.BLACK} />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}

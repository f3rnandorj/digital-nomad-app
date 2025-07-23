import { Redirect, Stack } from "expo-router";
import React from "react";

const isSignedIn = true;

export default function ProtectedLayout() {
  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

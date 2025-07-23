import { Box } from "@/src/components/Box";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import { Text } from "react-native";

export default function CityDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text onPress={router.back}>City details: {id}</Text>
    </Box>
  );
}

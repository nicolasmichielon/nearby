import BottomSheet from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    maxHeight: 36,
    position: "absolute",
    zIndex: 1,
    top: 64,
  },
  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
});

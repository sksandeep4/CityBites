import { View, StyleSheet, Text, SafeAreaView, Platform } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        padding: 2,
        backgroundColor: "green",
      }}
    >
      <Text style={{ padding: 4 }}>Search</Text>
    </View>
    <View
      style={{
        flex: 1,
        paddingLeft: 2,
        backgroundColor: "skyblue",
      }}
    >
      <Text>List</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  stepContainer: {},
  reactLogo: {},
});

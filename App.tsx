import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CatListView from "./src/components/CatListView";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <CatListView />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default App;

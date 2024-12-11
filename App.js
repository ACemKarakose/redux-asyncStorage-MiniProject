import {SafeAreaView, StyleSheet} from 'react-native';
import MainScreen from "./src/screens/MainScreen";
import {Provider} from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
      <Provider store={store}>
          <SafeAreaView style={styles.container}>
              <MainScreen/>
          </SafeAreaView>

      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

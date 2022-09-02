import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page from './views/Page.js'

export default function App() {

const props={
  aoba:"Astral Future",
  bao:"No futuro no topo"
}

  return (
    <View style={styles.container}>
      <Page {...props}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

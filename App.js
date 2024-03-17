import { StyleSheet, Text, View, Animated} from 'react-native';
import Status from './components/StatusBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Status/>
      <View style={styles.messageContent}>
      </View> 
      <View style={styles.toolbarSpace}>
        <Text>Denzell Gil</Text>
      </View>
      <View style={styles.inputMethod}>
        <Text>Sheesh kebob</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageContent: {
    flex: 1,
    backgroundColor: 'white', //'#c983f7',
  },
  inputMethod: {
    flex: 1, 
    backgroundColor: '#2803fc',
    padding: 15,
    alignItems: 'center'
  },
  toolbarSpace: {
    borderTopWidth: 1, 
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: '#fc0303',
    padding: 15,
    alignItems: 'center',
  }
});
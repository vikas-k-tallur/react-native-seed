import { StyleSheet } from 'react-native';
import {
  Colors
} from 'react-native-paper';

const styles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: Colors.lightBlue50, },
    header: { height: 40, backgroundColor: '#262626', },
    cell: { fontSize: 15, color: Colors.white },
    progressIndicator: {
      marginTop: 100
    },
    refresh: {
      flex: 1,
      alignSelf: "flex-end",
      width: 100,
      backgroundColor: Colors.amber600
    }
});
  export default styles;
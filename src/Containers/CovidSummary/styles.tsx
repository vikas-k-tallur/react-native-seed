import { StyleSheet } from 'react-native';
import {
  Colors
} from 'react-native-paper';

const styles = StyleSheet.create({
    body: {
      backgroundColor: Colors.lightBlue50,
      padding: 5,
      marginBottom: -1
    },
    titleContainer: {
      marginBottom: 10,
      flexDirection: 'row',
      alignSelf: 'center'
    },
    bold: {
      fontWeight: '700'
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      color: Colors.lightBlue600
    },
    refresh: {
      flex: 1,
      marginLeft: 20,
      backgroundColor: Colors.amber600
    }
  });

  export default styles;
import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import Summary from '../../Components/CovideSummary/Summary';
import styles from'./styles';
import {
  BallIndicator,
} from 'react-native-indicators';
import {
  Colors,
  Button
} from 'react-native-paper';
import { getSummary } from '../../Services/apis';

const CovidSummaryContainer = () => {
  const [coronaData, setCoronaData] = React.useState({
    cases:0,
    deaths: 0,
    recovered: 0,
    updated: ''
  });
  const [progressIndicator, setProgressIndicator] = React.useState(true);
  React.useEffect(() => {
    getSummary().then(
      (data: any)=>{
        setProgressIndicator(false)
        setCoronaData(data)
      }
    );
  }, [])
  const refresh = () => {
    setProgressIndicator(true)
    getSummary().then(
      (data: any)=>{
        setProgressIndicator(false)
        setCoronaData(data)
      }
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.body}>
        <Text style={styles.titleContainer}>
          <Text style={styles.title}>Coronavirus Cases</Text>
        </Text>
        <BallIndicator animating={progressIndicator} color={Colors.lightBlue900} />
        <Summary type="cases" data={coronaData.cases} />
        <Summary type="recovered" data={coronaData.recovered} />
        <Summary type="deaths" data={coronaData.deaths} />
        
        <View style={{flex: 1, flexDirection:"row"}}>
          <Text style={styles.titleContainer}>
            <Text style={styles.bold}>Last Updated: </Text>
            {coronaData.updated !== '' && new Date(coronaData.updated).toLocaleString()}
          </Text>
          <Button style={styles.refresh} mode="contained" onPress={() => refresh()}>
            Refresh
          </Button>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CovidSummaryContainer;
import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import {
  withTheme,
  DataTable,
  Colors
} from 'react-native-paper';
import {
  BallIndicator,
} from 'react-native-indicators'
import styles from './styles'
import { getByCountry } from '../../Services/apis'

const CovidByCountryContainer = () => {
  const [coronaData, setCoronaData] = React.useState([]);
  const [progressIndicator, setProgressIndicator] = React.useState(true);
  const statusHeaders: string[] = ['Country', 'Reported', 'Active', 'Deaths' ]
  const coronaDataResponseKeys: string[] = ['country', 'cases','active','deaths']
  React.useEffect(() => {
    getByCountry().then(
      (data: any)=>{
        setProgressIndicator(false)
        setCoronaData(data)
      }
    );
  }, [])

  return (
    <ScrollView
      style={styles.container}
    >
      <DataTable style={{borderStyle: 'solid', borderWidth: 1, alignContent: 'center'}}>
        <DataTable.Header style={{
          backgroundColor: Colors.lightBlue600}}>
            {
              statusHeaders.map((statusHeader, idx) => {
                return (
                  <DataTable.Title key={idx}>
                      <Text style={styles.cell}>{statusHeader}</Text>
                  </DataTable.Title>
                )
              })
            }
        </DataTable.Header>
        {
        coronaData.map((coronaInfo, rowCount)=>{
          return(
              <DataTable.Row key={rowCount}>
                {
                  coronaDataResponseKeys.map((coronaDataResponseKey, columnCount) => {
                    return (
                      <DataTable.Cell key={columnCount}>
                        {coronaInfo[coronaDataResponseKey]}
                      </DataTable.Cell>
                    )
                  })
                }
              </DataTable.Row>
            )
        })}
      </DataTable>
      <BallIndicator style={styles.progressIndicator} animating={progressIndicator} color={Colors.lightBlue900}  />
     </ScrollView>
  );
};

export default withTheme(CovidByCountryContainer);

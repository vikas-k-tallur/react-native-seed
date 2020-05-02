import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {
  Colors
} from 'react-native-paper';

export type StatisticProps = {
    type: string,
    data: number
  }

  const ThemeType: Record<string, string> = {
    'cases': Colors.black,
    'recovered': Colors.green500,
    'deaths': Colors.red500
  };

const Summary = (props: StatisticProps) => {
    const commaDelimiterRegexp = /\B(?=(\d{3})+(?!\d))/g;
    const formatNumber = (number: number): string => {
      return number.toString().replace(commaDelimiterRegexp, ',');
    };
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.type}</Text>
        <Text style={[styles.info, { color: ThemeType[props.type] }]}>
          {formatNumber(props.data)}
        </Text>
      </View>
    );
  };

  export default Summary;
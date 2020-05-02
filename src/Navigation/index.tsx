import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Colors
  } from 'react-native-paper';
import CovidSummaryContainer from '../Containers/CovidSummary';
import CovidByCountryContainer from '../Containers/CovidByCountry';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Summary" tabBarOptions={{
                    inactiveTintColor: Colors.black,
                    inactiveBackgroundColor: Colors.cyan50,
                    activeBackgroundColor: Colors.cyan300,
                    activeTintColor: Colors.black,
                    labelStyle: { fontSize: 15 },
                    showIcon: false
                }}>
                <Tab.Screen name="Summary" component={CovidSummaryContainer} />
                <Tab.Screen name="ByCountry" component={CovidByCountryContainer} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigation;

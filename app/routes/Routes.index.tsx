import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import TransactionListScreen from "../pages/TransactionList.screen";
import TransactionDetailScreen from "../pages/TransactionDetail.screen";



const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Transaction/>
    </NavigationContainer>
  )
}

function Transaction(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={"TransactionList"} component={TransactionListScreen}/>
      <Stack.Screen name={"TransactionDetail"} component={TransactionDetailScreen}/>
    </Stack.Navigator>
  )
}



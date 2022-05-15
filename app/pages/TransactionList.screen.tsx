import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TransactionItem from "../components/TransactionItem/TransactionItem";
import { TransactionDataTypes } from "../types/data.type";
import theme from "../theme/theme";
import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";


type renderTypes = {
  item:TransactionDataTypes,
  index:number,
}

type TransactionListScreenProps = StackNavigationProp<any, any>;




export default function TransactionListScreen() {

  const [ transactionList,updateTransactionList ] = useState([]);
  const navigation = useNavigation<TransactionListScreenProps>();


  async function _getData(){
    try {
      const response = await fetch('https://recruitment-test.flip.id/frontend-test');
      const data = await response.json();
      const transformed:any = Object.values(data);
      updateTransactionList(transformed);
    }catch (e){
      Alert.alert("Oops!","Sorry Something Went Wrong...")
    }
  }

  function _renderList(param:renderTypes){
    const {item} = param;
    return(
      <TransactionItem
        data={item}
        onPress={(data)=>{
          navigation.navigate("TransactionDetail",{transaction:data});
        }}
      />
    )
  }

  useEffect(()=>{
    _getData();
  },[])
  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{
          padding:theme.padding.normal
        }}
        data={transactionList}
        renderItem={_renderList}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:theme.colors.container_background_color,
  }
})

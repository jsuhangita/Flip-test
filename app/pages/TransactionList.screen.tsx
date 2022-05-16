import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TransactionItem from "../components/TransactionItem/TransactionItem";
import { TransactionDataTypes } from "../types/data.type";
import theme from "../theme/theme";
import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import SearchBarSortComponent from "../components/SearchBarSort.component";
import { sortAtoZ, sortZtoA } from "../helper/helper";


type renderTypes = {
  item:TransactionDataTypes,
  index:number,
}

type TransactionListScreenProps = StackNavigationProp<any, any>;




export default function TransactionListScreen() {

  const [ transactionList,updateTransactionList ] = useState<Array<TransactionDataTypes>>([]);
  const [ viewedList, updateViewedList ] = useState<Array<TransactionDataTypes>>([]);
  const navigation = useNavigation<TransactionListScreenProps>();


  async function _getData(){
    try {
      const response = await fetch('https://recruitment-test.flip.id/frontend-test');
      const data = await response.json();
      const transformed:any = Object.values(data);
      updateTransactionList(transformed);
      updateViewedList(transformed);
    }catch (e){
      Alert.alert("Oops!","Sorry Something Went Wrong...")
    }
  }

  function _onSelectSortMethod(type:string){
    switch (type){
      case "ascending":{
        const temp = transactionList.map((item)=>item);
        const sorted:Array<any> = sortAtoZ(temp);
        updateViewedList([...sorted]);
        break;
      }
      case "descending":{
        const temp = transactionList.map((item)=>item);
        const sorted:Array<any> = sortZtoA(temp);
        updateViewedList([...sorted]);
        break;
      }
      default:{
        updateViewedList([...transactionList]);
        break;
      }
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
      <SearchBarSortComponent
        onSelectSortMethod={_onSelectSortMethod}
      />
      <FlatList
        contentContainerStyle={{
          padding:theme.padding.normal
        }}
        data={viewedList}
        renderItem={_renderList}
        keyExtractor={(item:TransactionDataTypes,index)=>`${item.id}`}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:theme.colors.container_background_color,
  }
})

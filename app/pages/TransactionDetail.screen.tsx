import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import theme from "../theme/theme";
import Text from "../components/base/Text/Text.component";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { TransactionDataTypes } from "../types/data.type";
import Icon from "../components/base/Icon/Icon.component";
import { dateFormatter, rupiahFormatter } from "../helper/helper";

type TransactionListScreenProps = {
  navigation:StackNavigationProp<any, any>,
  route:RouteProp<{ params: { transaction:TransactionDataTypes } }, 'params'>,
}




export default function TransactionDetailScreen({navigation,route}:TransactionListScreenProps) {
  const {
    transaction,
  } = route.params
  const {
    id,
    sender_bank='',
    beneficiary_bank='',
    beneficiary_name='',
    account_number='',
    remark='',
    created_at='',
    amount=0,
    unique_code=0,
  } = transaction
  const date = new Date(created_at);
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <Text bold medium>
          ID TRANSAKSI: #{id} <Icon color={theme.colors.status_pending} name={"copy"} iconType={"FontAwesome5"} size={theme.fontSize.medium}/>
        </Text>
      </View>
      <View style={styles.spacer}/>
      <View style={[styles.dataContainer,{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
        <Text bold medium>
          DETAIL TRANSAKSI
        </Text>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Text bold color={theme.colors.status_pending}>
            Tutup
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer}/>
      <View style={styles.dataContainer}>
        <Text medium bold style={{marginBottom:theme.padding.small}}>
          {sender_bank.toUpperCase()}{" "}
          <Icon size={theme.fontSize.normal} iconType={"FontAwesome5"} name={"arrow-right"}/>{" "}
          {beneficiary_bank.toUpperCase()}
        </Text>
        <View style={styles.detailContainer}>
          <View style={{flex:1.3}}>
            <View style={styles.detailItemContainer}>
              <Text bold medium>
                {beneficiary_name}
              </Text>
              <Text medium>
                {account_number}
              </Text>
            </View>
            <View style={styles.detailItemContainer}>
              <Text bold medium>
                BERITA TRANSFER
              </Text>
              <Text medium>
                {remark}
              </Text>
            </View>
            <View style={styles.detailItemContainer}>
              <Text bold medium>
                WAKTU DIBUAT
              </Text>
              <Text medium>
                {dateFormatter(created_at)}
              </Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <View style={styles.detailItemContainer}>
              <Text bold medium>
                NOMINAL
              </Text>
              <Text medium>
                {rupiahFormatter(amount)}
              </Text>
            </View>
            <View style={styles.detailItemContainer}>
              <Text bold medium>
                KODE UNIK
              </Text>
              <Text medium>
                {unique_code}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:theme.colors.container_background_color,
  },
  dataContainer:{
    backgroundColor:theme.colors.white,
    padding:theme.padding.medium,
  },
  spacer:{
    height:2,
    backgroundColor:'#e3e3e3',
    width:'100%',
  },
  detailContainer:{
    flexDirection:"row",
  },
  detailItemContainer:{
    marginVertical:theme.padding.normal
  }
})


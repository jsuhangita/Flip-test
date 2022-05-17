import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import theme from "../../theme/theme";
import { TransactionDataTypes } from "../../types/data.type";
import Text from "../base/Text/Text.component";
import Icon from "../base/Icon/Icon.component";
import { dateFormatter, rupiahFormatter } from "../../helper/helper";

type TransactionItemProps = {
  data:TransactionDataTypes,
  onPress:(item:TransactionDataTypes)=>void
}

export default function TransactionItem(
  {
    data,
    onPress,
  }:TransactionItemProps
){
  const {
    sender_bank="",
    beneficiary_bank="",
    beneficiary_name="",
    created_at="",
    amount=0,
    status="PENDING",
  } = data;

  return(
    <TouchableOpacity onPress={()=>{onPress(data)}} style={styles.container}>
      <View style={{
        width:8,
        backgroundColor:status==="SUCCESS"?theme.colors.status_success:theme.colors.status_pending,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
      }}/>
      <View style={{flex:8,padding:theme.padding.normal}}>
        <Text medium bold style={{marginBottom:theme.padding.small}}>
          {sender_bank.toUpperCase()}{" "}
          <Icon size={theme.fontSize.normal} iconType={"FontAwesome5"} name={"arrow-right"}/>{" "}
          {beneficiary_bank.toUpperCase()}
        </Text>
        <Text style={{marginBottom:theme.padding.small}}>
          {beneficiary_name.toUpperCase()}
        </Text>
        <Text>
          {rupiahFormatter(amount)} • {dateFormatter(created_at)}
        </Text>
      </View>
      <View style={{flex:3.5}}>
        <View style={[
          styles.badgeContainer,
          {
            backgroundColor:status==="SUCCESS"?theme.colors.status_success:theme.colors.white,
            borderColor:status==="SUCCESS"?theme.colors.status_success:theme.colors.status_pending,
          }
        ]}>
          <Text bold color={status==="SUCCESS"?theme.colors.white:theme.colors.text_primary}>
            {
              status==="SUCCESS"?"Berhasil":"Pengecekan"
            }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:theme.padding.normal,
    borderRadius:10,
    backgroundColor:theme.colors.white,
    flexDirection:'row',
    width:"100%"
  },
  badgeContainer:{
    marginTop:"auto",
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:'auto',
    borderWidth:2,
    borderRadius:5,
    padding:theme.padding.small
  }
});

import React, { useState } from "react";
import { Modal, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import theme from "../theme/theme";
import Icon from "./base/Icon/Icon.component";
import Text from "./base/Text/Text.component";
import { DEFAULT_SORT_LIST, sortItemType } from "../variables/variables.global";


type SearchBarSortComponentProps ={
  onSearchTextChange:(text:string)=>void,
  onSelectSortMethod:(type:string)=>void,
}

export default function SearchBarSortComponent(
  {
    onSearchTextChange,
    onSelectSortMethod,
  }:SearchBarSortComponentProps
) {

  const [ sortList, updateSortList ] = useState(DEFAULT_SORT_LIST);
  const [ modalVisible,updateModalVisible ] = useState(false);
  const [ selectedSort, updateSelectedSort ] = useState<sortItemType>(sortList[0]);
  return(
    <View style={styles.barContainer}>
      <View style={{flexDirection:'row',flex:2}}>
        <Icon name={"search"} size={20} style={{marginRight:theme.padding.small}}/>
        <TextInput
          numberOfLines={1}
          placeholder={"Cari nama, bank, atau nominal"}
        />
      </View>
      <TouchableOpacity onPress={()=>{updateModalVisible(true)}} style={{flex:1.4}}>
        <Text style={{alignSelf:'flex-end'}} color={theme.colors.status_pending}>
          {selectedSort.label} <Icon size={theme.fontSize.normal} name={"angle-down"} color={theme.colors.status_pending} />
        </Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent
        animationType={"fade"}
      >
        <View style={{backgroundColor:theme.colors.modal_background_color,flex:1}}>
          <View style={styles.sortContainer}>
            {
              sortList.map((item,index)=>{
                const {label,type} = item;
                return(
                  <TouchableOpacity onPress={()=>{
                    onSelectSortMethod(type)
                    updateSelectedSort(item)
                    updateModalVisible(false)
                  }} key={index} style={styles.itemContainer}>
                    <View style={styles.radioContainer}>
                      {
                        selectedSort.type===type&&<View
                          style={styles.radioFill}
                        />
                      }
                    </View>
                    <Text>
                      {label}
                    </Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  barContainer:{
    backgroundColor:theme.colors.white,
    padding:theme.padding.normal,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:theme.padding.normal,
    justifyContent:'space-between',
  },
  sortContainer:{
    marginTop:'auto',
    marginBottom:'auto',
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor:theme.colors.white,
    padding:theme.padding.medium,
    borderRadius:5,
    width:"80%"
  },
  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:theme.padding.normal,
  },
  radioContainer:{
    borderRadius:100,
    width:20,
    height:20,
    borderWidth:2,
    borderColor:theme.colors.status_pending,
    padding:3,
    marginRight:theme.padding.normal
  },
  radioFill:{
    backgroundColor:theme.colors.status_pending,
    flex:1,
    borderRadius:100,

  }
})

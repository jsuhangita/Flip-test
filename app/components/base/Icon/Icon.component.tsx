import React from 'react';
// @ts-ignore
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
// @ts-ignore
import IconFeather from 'react-native-vector-icons/Feather';
// @ts-ignore
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
// @ts-ignore
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleProp, ViewStyle } from "react-native";
import theme from "../../../theme/theme";

type IconProps = {
  size?:number,
  color?:string,
  style?:StyleProp<ViewStyle>,
  iconType?:"Material"|"MaterialCommunityIcons"|"Feather"|"FontAwesome5",
  name:string,

}


export default function Icon(
  {
    size=13,
    color=theme.colors.text_primary,
    style,
    iconType,
    name,
    ...rest
  }:IconProps
){
    const colorStyle = [
      { color },
      style,
    ];
    if (iconType === 'Material') {
      return (
        <IconMaterial
          {...rest}
          size={size}
          style={colorStyle}
        />
      );
    }
    if (iconType === 'MaterialCommunityIcons') {
      return (
        <IconMaterialCommunityIcons
          {...rest}
          size={size}
          style={colorStyle}
          name={name}
        />
      );
    }
    if (iconType === 'Feather') {
      return (
        <IconFeather
          {...rest}
          size={size}
          style={colorStyle}
          name={name}
        />
      );
    }

    if (iconType === 'FontAwesome5') {
      return (
        <IconFontAwesome5
          {...rest}
          size={size}
          style={colorStyle}
          name={name}
        />
      );
    }
    return (
      <IconFontAwesome
        {...rest}
        name={name}
        size={size}
        style={colorStyle}
      />
    );
}

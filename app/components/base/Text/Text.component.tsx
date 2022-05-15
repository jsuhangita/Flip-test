import React  from "react";
import PropTypes from 'prop-types';
import { Text as RNText, StyleSheet, StyleProp, ViewStyle } from "react-native";
import theme from "../../../theme/theme";

type TextProps ={
  secondary:boolean,
  center:boolean,
  extraSmall:boolean,
  small:boolean,
  medium:boolean,
  large:boolean,
  bold:boolean,
  extraBold:boolean,
  spacer:number,
  children:string|React.ReactNode,
  color:string,
  style:StyleProp<ViewStyle>,
}

const Text = (
  {
    secondary,
    center,
    extraSmall,
    small,
    medium,
    large,
    bold,
    extraBold,
    spacer,
    children,
    color,
    style,
    ...rest
  }:TextProps
) => {
  return (
    <RNText
      {...rest}
      style={[
        styles.text,
        center && styles.center,
        extraSmall && styles.extraSmall,
        small && styles.small,
        medium && styles.medium,
        large && styles.large,
        bold && styles.bold,
        extraBold && styles.extraBold,
        {marginVertical:spacer},
        { color:color|| theme.colors.text_primary },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

Text.propTypes = {
  secondary: PropTypes.bool,
  center: PropTypes.bool,
  extraSmall: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  bold: PropTypes.bool,
  extraBold: PropTypes.bool,

  spacer: PropTypes.number,

  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  color: PropTypes.string,

  style: PropTypes.any,
};

Text.defaultProps = {
  secondary: false,
  center: false,
  extraSmall: false,
  small: false,
  medium: false,
  large: false,
  bold: false,
  extraBold: false,

  spacer: 0,

  children: '',
  color: null,

  style: {},
};

const styles = StyleSheet.create({
  text: {

  },

  center: {
    textAlign: 'center',
  },

  extraSmall: {
    fontSize:theme.fontSize.extra_small,
  },

  small: {
    fontSize:theme.fontSize.small,
  },

  medium: {
    fontSize:theme.fontSize.medium,
  },

  large: {
    fontSize:theme.fontSize.large
  },

  bold: {
    fontWeight:"bold"
  },

  extraBold: {

  },
});

export default Text;

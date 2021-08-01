import React from 'react';
import {Text, StyleSheet} from 'react-native';

type Props = {
  children: string;
  size?: 'large' | 'small' | 'medium';
};
const BoldText = ({children, size = 'medium'}: Props) => {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: size === 'medium' ? 14 : size === 'large' ? 20 : 12,
      fontWeight: '600',
    },
  });

  return <Text style={styles.textStyle}>{children}</Text>;
};

export default BoldText;

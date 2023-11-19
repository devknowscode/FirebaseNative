import React from 'react';
import theme from '../styles/theme';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

interface ISpinnerProps {
  loading: boolean;
  size: 'large' | 'small';
  color: string;
}

const Render = ({
  loading = false,
  size = 'large',
  color = theme.colors.white,
}: ISpinnerProps) => (
  <View style={styles.spinner}>
    <ActivityIndicator animating={loading} size={size} color={color} />
  </View>
);

export default Render;

const styles = StyleSheet.create({
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

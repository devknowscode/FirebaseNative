import React from 'react';
import {Pressable, Text} from 'react-native';
import {ScreenWrapper} from '../components';
import {useAuth, logout} from '../auth';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const Render = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const {currentUser} = useAuth();

  return (
    <ScreenWrapper>
      <Text>Current user ID: {currentUser?.uid}</Text>
      <Pressable onPress={() => navigation.navigate('Placeholder')}>
        <Text>Navigate to Placeholder screen</Text>
      </Pressable>
      <Pressable onPress={() => logout()}>
        <Text>Logout</Text>
      </Pressable>
    </ScreenWrapper>
  );
};

export default Render;

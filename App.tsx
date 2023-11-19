import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {
  navigator,
  applyBackHandleListener,
  removeBackHandleListener,
} from './src/utils/navigation';
import {AuthProvider, useAuth} from './src/auth';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/screens';
import InAppMessaging from './src/utils/inappmessaging';
import RNBootSplash from 'react-native-bootsplash';

const Content = (): JSX.Element => {
  const {initialized} = useAuth();

  // Handle in app messaging when app is started
  useEffect(() => {
    InAppMessaging();
  }, []);

  // Handle on app launch handlers here
  useEffect(() => {
    applyBackHandleListener();
    if (initialized) {
      RNBootSplash.hide({fade: true});
    }

    console.log('Initialized');

    // Clean up
    return () => {
      removeBackHandleListener();
    };
  }, [initialized]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeAreaView style={styles.safeView}>
        <NavigationContainer ref={navigator}>
          <Screens />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  safeView: {flex: 1},
});

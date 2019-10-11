import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Login } from './components/login'
import {APP_NAME} from './constants'
import './App.css'
import { createStore } from 'redux';
import globalReducer from './store/globalReducer'
import { Provider } from 'react-redux';
const store = createStore(globalReducer);

const App = () => {
  return (
    <Provider store={ store }>
      <View style={styles.container}>
        <Login appName={APP_NAME}></Login>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
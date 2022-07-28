import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [creds, setCdreds] = useState({login: '', password: '', loggedIn: false});
  return (
    <View style={styles.container}>
      { !creds.loggedIn &&
        <>
          <TextInput
            style={styles.formInput}
            placeholder="Login"
            defaultValue=''
            onChangeText={newText => setCdreds({...creds, login: newText})}
          />
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            placeholder="Password"
            defaultValue=''
            onChangeText={newText => setCdreds({...creds, password: newText})}
          />
          <Button
            onPress={async () => {
              if (creds.login !== '' && creds.password !== '') {
                await delay(2000);
                setCdreds({...creds, loggedIn: true});
              }
            }}
            title="Sign in"
          />
        </>
        }
      { creds.loggedIn &&
        <>
          <Text style={{marginBottom: 20}}>Hello, {creds.login}. You are logged in.</Text>
          <Button
            onPress={async () => {
              await delay(2000);
              setCdreds({login: '', password: '', loggedIn: false});
            }}
            title="Log out"
          />
        </>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    height: 40,
    width: 200,
    padding: 10,
    marginBottom:10,
    borderWidth: 0.5
  },
});

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

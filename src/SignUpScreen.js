// SignUpScreen.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { AuthContext } from './AuthProvider';

const SignUpScreen = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={() => signUp(email, password)} />
    </View>
  );
};

export default SignUpScreen;

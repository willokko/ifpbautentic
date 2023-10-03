// ///rnfs
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function telalogin() {
//   return (
//     <View>
//       <Text>telalogin</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
// Importando os componentes necessários do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TelaLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Senha:', senha);
    // Implemente a lógica de autenticação aqui (por exemplo, fazer uma chamada à API para verificar as credenciais)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à sua aplicação</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
        value={senha}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'EB Garamond'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#80B1FF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default TelaLogin;

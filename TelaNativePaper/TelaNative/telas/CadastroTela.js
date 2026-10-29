import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Checkbox, Button } from 'react-native-paper';

export default function CadastroTela() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitou, setAceitou] = useState(false);

  const cadastrar = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    if (!aceitou) {
      Alert.alert('Atenção', 'Aceite os termos para continuar.');
      return;
    }
    Alert.alert('Sucesso', 'Cadastro realizado, ' + nome + '!');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.titulo}>
        Cadastro
      </Text>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.campo}
      />

      <TextInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.campo}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.campo}
      />

      <Checkbox.Item
        label="Aceito os termos de uso"
        status={aceitou ? 'checked' : 'unchecked'}
        onPress={() => setAceitou(!aceitou)}
        position="leading"
        labelStyle={styles.labelCheckbox}
      />

      <Button mode="contained" onPress={cadastrar} style={styles.botao}>
        Cadastrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 24,
  },
  campo: {
    marginBottom: 12,
  },
  labelCheckbox: {
    textAlign: 'left',
  },
  botao: {
    marginTop: 16,
  },
});

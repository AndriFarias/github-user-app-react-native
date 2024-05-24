import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/input.component';
import ButtonComponent from './components/button.component';
import User from './components/user.component';
import { getUser } from './services/users.services';

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [git, setGit] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const procurarUser = async () => {
    try {
      const data = await getUser(usuario);
      if (data && data.id) {
        setGit(data);
        setNotFound(false);
      } else {
        setGit(null);
        setNotFound(true);
      }
    } catch (error) {
      setGit(null);
      setNotFound(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Input
          placeholder="Digite o nome do seu usuário"
          onChangeText={setUsuario}
          style={styles.input}
        />
        <ButtonComponent title="Buscar" onPress={procurarUser} />
        {notFound ? (
          <Text style={styles.errorText}>Usuário não encontrado na base de dados</Text>
        ) : (
          git && <User data={git} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

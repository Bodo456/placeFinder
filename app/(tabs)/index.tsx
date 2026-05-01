import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explotador</Text>

      {/* login-field */}

      <View style={styles.form}>
        
        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="passwort"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>login</Text>
        </TouchableOpacity>
      </View>


      {/* register-part */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerQuestion}>No account yet?</Text>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 50,
    letterSpacing: 2,
  },
  form: {
    gap: 12,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    color: '#ffffff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  loginButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 10,
    padding: 15,
    marginTop: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerContainer: {
    alignItems: 'center',
    marginTop: 40,
    gap: 12,
  },
  registerQuestion: {
    color: '#888',
    fontSize: 15,
  },
  registerButton: {
    borderWidth: 1,
    borderColor: '#4a90e2',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: '600',
  },
});
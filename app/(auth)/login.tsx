import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement actual login logic
    console.log('Login attempt with:', email, password);
    // For now, just navigate to the main app
    router.replace('/(tabs)');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <Link href="/signup" asChild>
          <TouchableOpacity>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.devLinksContainer}>
        <Text style={styles.devLinksTitle}>Development Links:</Text>
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.devLink}>
            <Text style={styles.link}>Home</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/profile" asChild>
          <TouchableOpacity style={styles.devLink}>
            <Text style={styles.link}>Profile</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/meal-plan" asChild>
          <TouchableOpacity style={styles.devLink}>
            <Text style={styles.link}>Meal Plan</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/recipes" asChild>
          <TouchableOpacity style={styles.devLink}>
            <Text style={styles.link}>Recipes</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/tracking" asChild>
          <TouchableOpacity style={styles.devLink}>
            <Text style={styles.link}>Tracking</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  devLinksContainer: {
    marginTop: 40,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  devLinksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  devLink: {
    padding: 5,
  },
});
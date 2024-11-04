import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showWelcomeCard, setShowWelcomeCard] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleSubmit = () => {
    if (
      email.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      fullName.trim() &&
      address.trim() &&
      dateOfBirth.trim() &&
      password === confirmPassword
    ) {
      const userInfo = {
        email,
        password,
        fullName,
        address,
        dateOfBirth,
      };
      setUserInfo(userInfo);
      setShowWelcomeCard(true);
    } else {
      // Handle form validation errors
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!showWelcomeCard ? (
        <View style={styles.formContainer}>
          <Text style={styles.title}>SignUp form</Text>
          <TextInput
            style={styles.input}
            placeholder=" Enter Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder=" Enter your Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Date of Birth"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            keyboardType="date-time"
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Welcome, {userInfo.fullName}! pleasure to be with us ?? </Text>
          <Text style={styles.info}>
            Email: {userInfo.email}
            {'\n'}
            Address: {userInfo.address}
            {'\n'}
            Date of Birth: {userInfo.dateOfBirth}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c5b1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  formContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ede8d0',
    borderRadius: 20,
    borderColor:'#4f4d46',
    shadowColor: '#4f4d46',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ede8d0',
    borderRadius: 10,
    shadowColor: '#4f4d46',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: '#787569',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default SignupForm;
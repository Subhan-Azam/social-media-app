import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import AuthBtn from '../../components/Buttons/AuthBtn';

type LogInProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const LogIn: React.FC<LogInProps> = ({navigation}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled">
          <View style={styles.box}>
            <Image
              style={styles.instagramImg}
              source={require('../../assets/images/InstagramLogo.png')}
            />
            <View style={styles.inputsBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email"
                placeholderTextColor="#00000033"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View style={styles.textInput}>
                <TextInput
                  style={styles.textInputPass}
                  placeholder="Enter Password"
                  placeholderTextColor="#00000033"
                  autoCapitalize="none"
                  secureTextEntry={!showPassword}
                />
                <Text onPress={() => setShowPassword(!showPassword)}>Chg</Text>
              </View>

              <TouchableOpacity style={styles.forgetPassLink}>
                <Text
                  style={styles.forgotText}
                  onPress={() => navigation.navigate('ForgetPassword')}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>

            <AuthBtn title="Log In" />

            <TouchableOpacity style={styles.logInWithGoogle}>
              <Image source={require('../../assets/images/Icon.png')} />
              <Text>Login with Google</Text>
            </TouchableOpacity>
            <View style={styles.OrSec}>
              <View style={styles.line} />
              <Text>OR</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.signUpSec}>
              <Text style={styles.signUpText1}>Don’t have an account? </Text>
              <Text
                style={styles.signUpText2}
                onPress={() => navigation.navigate('SignUp')}>
                Sign up.
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    padding: 20,
  },
  instagramImg: {
    marginBottom: 30,
  },
  inputsBox: {
    width: '100%',
    gap: 15,
  },
  textInput: {
    width: '100%',
    height: 44,
    borderColor: 'gray',
    color: 'black',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: '#0000001A',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputPass: {
    width: '90%',
    color: 'black',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
  },
  forgetPassLink: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  forgotText: {
    color: '#3797EF',
    textAlign: 'right',
    fontWeight: '500',
    fontSize: 12,
  },

  logInWithGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 30,
  },
  OrSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#00000033',
  },
  signUpSec: {
    flexDirection: 'row',
  },
  signUpText1: {
    color: 'gray',
  },
  signUpText2: {
    color: '#3797EF',
  },
});

// import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
// import React, { useState } from 'react';

// const LogIn = () => {
//   // State for form fields
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

//   // Function to validate form inputs
//   const validateForm = (): boolean => {
//     let valid = true;
//     let newErrors: { name?: string; email?: string } = {};

//     if (!name.trim()) {
//       newErrors.name = 'Name is required';
//       valid = false;
//     }

//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Invalid email address';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   // Form submission handler
//   const handleSubmit = () => {
//     if (validateForm()) {
//       Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}`);
//       setName(''); // Reset name
//       setEmail(''); // Reset email
//       setErrors({}); // Clear errors
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Log In</Text>

//       <View style={styles.inputContainer}>
//         <Text>Name:</Text>
//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//         />
//         {errors.name && <Text style={styles.error}>{errors.name}</Text>}
//       </View>

//       <View style={styles.inputContainer}>
//         <Text>Email:</Text>
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />
//         {errors.email && <Text style={styles.error}>{errors.email}</Text>}
//       </View>

//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 5,
//     paddingLeft: 10,
//   },
//   error: {
//     color: 'red',
//     fontSize: 12,
//   },
// });

// export default LogIn;

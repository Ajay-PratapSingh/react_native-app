import { StyleSheet } from 'react-native'
import { View, TextInput, Alert, Text } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

export default function LoginForm() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleEmailChange = (email) => setEmail(email);
    const handlePasswordChange = (password) => setPassword(password);

    const handleSubmit = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const user = data.find(user => user.email === `${email}`);
                if (user && user.username === `${password}`) {
                    inputuser={email:`${email}`,
                    password:`${password}`}                  
                    dispatch(login(inputuser));
                    navigation.navigate('home');
                }
                else {
                    Alert.alert('Login failed', 'Please check login details', [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ]);
                }
            });
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                    placeholder="Email"
                    value={email}
                    onChangeText={handleEmailChange}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                <Text>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: 100,
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
})
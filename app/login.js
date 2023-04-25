import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from "expo-router";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (email) => setEmail(email);
    const handlePasswordChange = (password) => setPassword(password);

    const handleSubmit = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const user = data.find(user => user.email ===`${email}`);
                if (user && user.username ===`${password}`) {
                    console.log("Yes");
                    navigation.navigate('home');
                } else {
                    console.log("no");
                    // User is not authenticated
                }
            });
        console.log(`Email: ${email}, Password: ${password}`);
    };
    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};
export default Login;


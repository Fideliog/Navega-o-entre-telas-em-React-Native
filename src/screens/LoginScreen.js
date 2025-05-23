import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
 
const windowWidth = Dimensions.get('window').width;
 
export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Entrar"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#ffebcd',
        width: windowWidth * 0.5,
        margin: 10,
        borderRadius: 5,
    },
});
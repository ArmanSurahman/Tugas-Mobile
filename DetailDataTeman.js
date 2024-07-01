import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function DetailDataTeman({ route }) {
    const { friend } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={friend.photo} style={styles.photo} />
            <Text style={styles.name}>{friend.name}</Text>
            <Text style={styles.info}>No Tlp: {friend.phone}</Text>
            <Text style={styles.info}>Email: {friend.email}</Text>
            <Text style={styles.info}>Alamat: {friend.address}</Text>
            <Text style={styles.info}>TTL: {friend.birthdate}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#E8F5E9', // Warna latar belakang hijau muda
    },
    photo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 10,
    },
    info: {
        fontSize: 18,
        marginBottom: 5,
        color: '#388E3C',
    },
});
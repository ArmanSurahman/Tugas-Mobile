import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const friends = [
    { id: '1', name: 'Raditiya Bagja Saputra', phone: '0858-9898-7676', email: 'raditya@gmail.com', address: 'Kp. Cibodas, Kab. Sukabumi', birthdate: 'Sukabumi, 20-09-2004', photo: require('./assets/friend1.jpg') },
    { id: '2', name: 'Faisal TriPutra', phone: '0858-1212-3434', email: 'faisal@gmail.com', address: 'Kp. Cisatwa, Kab. Sukabumi', birthdate: '11-06-2004', photo: require('./assets/friend2.jpg') },
    { id: '3', name: 'Raihan Rahma Aulia', phone: '0858-5656-7878', email: 'ehankuy@gmail.com', address: 'Kp. Cibule, Kab. Sukabumi', birthdate: 'Sukabumi, 30-11-2004', photo: require('./assets/friend3.jpg') },
    { id: '4', name: 'Nobara Kugisaki', phone: '0858-4343-1212', email: 'nobara@gmail.com', address: 'Kp. Cipanas, Kab. Sukabumi', birthdate: 'Sukabumi, 28-09-2003', photo: require('./assets/friend4.jpg') },
    { id: '5', name: 'Dani Akhmad Maulana', phone: '0852-1997-1516', email: 'dakhmad140104@gmail.com', address: 'Klh. Naggeleng, Kab. Sukabumi', birthdate: 'Sukabumi, 01-01-2004', photo: require('./assets/friend5.jpg') },
];

export default function DataTeman({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={friends}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { friend: item })}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E8F5E9', // Warna latar belakang hijau muda
    },
    item: {
        padding: 15,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        color: '#2E7D32', // Warna hijau daun
    },
});
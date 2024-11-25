import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { pokemonData } from './Data';

const AddPokemon = ({ navigation }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = () => {
        if (!name || !id || !type) {
            alert('Please fill out all fields.');
            return;
        }

        const sectionIndex = pokemonData.findIndex((section) => section.title.includes(type));
        if (sectionIndex >= 0) {
            pokemonData[sectionIndex].data.push({ name, id: parseInt(id, 10) });
            navigation.navigate('Home');
        } else {
            alert('Invalid type.');
        }
    };

    return (
        <View style={{ padding: 10 }}>
            <Text>Pokemon Name:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={name}
                onChangeText={setName}
            />

            <Text>Pokemon Number:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={id}
                onChangeText={setId}
                keyboardType="numeric"
            />

            <Text>Pokemon Type:</Text>
            <RNPickerSelect
                onValueChange={setType}
                items={[
                    { label: 'Electric', value: 'ELECTRIC' },
                    { label: 'Water', value: 'WATER' },
                ]}
            />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default AddPokemon;

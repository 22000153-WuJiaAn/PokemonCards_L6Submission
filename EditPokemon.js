import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { pokemonData } from './Data';

const EditPokemon = ({ navigation, route }) => {
    const { index, sectionTitle, name, id } = route.params;
    const [newName, setNewName] = useState(name);
    const [newId, setNewId] = useState(id.toString());

    const handleSave = () => {
        const sectionIndex = pokemonData.findIndex(
            (section) => section.title === sectionTitle
        );
        if (sectionIndex >= 0) {
            pokemonData[sectionIndex].data[index] = {
                name: newName,
                id: parseInt(newId, 10),
            };
            navigation.navigate('Home');
        }
    };

    const handleDelete = () => {
        const sectionIndex = pokemonData.findIndex(
            (section) => section.title === sectionTitle
        );
        if (sectionIndex >= 0) {
            pokemonData[sectionIndex].data.splice(index, 1);
            navigation.navigate('Home');
        }
    };

    return (
        <View style={{ padding: 10 }}>
            <Text>Edit Pokemon Name:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={newName}
                onChangeText={setNewName}
            />

            <Text>Edit Pokemon Number:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={newId}
                onChangeText={setNewId}
                keyboardType="numeric"
            />

            <Button title="Save" onPress={handleSave} />
            <Button title="Delete" color="red" onPress={handleDelete} />
        </View>
    );
};

export default EditPokemon;

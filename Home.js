import React from 'react';
import {
    SectionList,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    Button,
} from 'react-native';
import { pokemonData } from './Data';

const Home = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            marginTop: 30,
        },
        sectionHeader: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            padding: 10,
            textTransform: 'uppercase',
        },
        itemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            backgroundColor: '#f9f9f9',
            borderRadius: 10,
            marginVertical: 5,
            borderWidth: 1,
            borderColor: '#ddd',
        },
        itemText: {
            fontSize: 18,
            fontWeight: 'bold',
            flex: 1,
        },
        itemImage: {
            width: 120,
            height: 160,
            borderRadius: 10,
        },
        addButton: {
            marginBottom: 10,
        },
    });

    const renderPokemonItem = ({ item, index, section }) => {
        const imageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.id}-2x.png`;

        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() =>
                    navigation.navigate('EditPokemon', {
                        index,
                        sectionTitle: section.title,
                        name: item.name,
                        id: item.id,
                    })
                }
            >
                <Text style={styles.itemText}>{item.name}</Text>
                <Image source={{ uri: imageUrl }} style={styles.itemImage} />
            </TouchableOpacity>
        );
    };

    const renderSectionHeader = ({ section: { title, bgColor } }) => (
        <View style={{ backgroundColor: bgColor }}>
            <Text style={styles.sectionHeader}>{title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.addButton}>
                <Button
                    title="Add Pokemon"
                    onPress={() => navigation.navigate('AddPokemon')}
                />
            </View>
            <SectionList
                sections={pokemonData}
                renderItem={renderPokemonItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Home;

import React from 'react';
import {
    SectionList,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    ToastAndroid,
    Button
} from 'react-native';

const datasource = [
    {
        data: [
            { name: 'Charmander', cardnumber: '4' },
            { name: 'Vulpix', cardnumber: '37' },
        ],
        title: "Fire",
        txtcolor: "white",
        bgcolor: "#FF6A00",
    },
    {
        data: [
            { name: 'Squirtle', cardnumber: '7' },
            { name: 'Psyduck', cardnumber: '54' },
        ],
        title: "Water",
        txtcolor: "white",
        bgcolor: "#0094FF",
    },
    {
        data: [
            { name: 'Bulbasaur', cardnumber: '1' },
            { name: 'Oddish', cardnumber: '43' },
        ],
        title: "Grass",
        txtcolor: "white",
        bgcolor: "#3CB043",
    },
];

const styles = StyleSheet.create({
    greyBox: {
        height: 70,
        backgroundColor: "#ccc",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        margin: 10,
        textAlign: "left",
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        borderWidth: 1,
    },
    image: {
        borderColor: "red",
        borderWidth: 2,
        width: 120,
        height: 160,
    },
});

const handler = (name) => {
    ToastAndroid.show(name + ' clicked!', ToastAndroid.SHORT);
};

const renderItem = ({ item }) => {
    let cardimg = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' +
        item.cardnumber + '-2x.png';

    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => handler(item.name)}
        >
            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image source={{ uri: cardimg }} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
};

const sectionHeader = ({ section: { title, bgcolor } }) => {
    return (
        <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
            {title}
        </Text>
    );
};

const App = () => {
    return (
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={sectionHeader}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={
                <View style={styles.greyBox}>
                    <Button
                        title="Add Pokémon"
                        onPress={() => ToastAndroid.show("Add Pokémon clicked!", ToastAndroid.SHORT)}
                    />
                </View>
            }
        />
    );
};

export default App;

import React, { } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props {
    position?: 'br' | 'bl';
    title: string,
    onPress: () => void,
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    return (
        <TouchableOpacity
            // style={
            //     position==='bl'
            //         ?styles.fabLocationBL
            //         :styles.fabLocationBR
            // }
            style={[
                styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right

            ]}
            onPress={onPress}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}> {title} </Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: {
        left: 25

    },
    right: {
        right: 25

    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FloatingButton({open, closed}) {
    return(
            <Pressable
            onPress={open}
             style={styles.press}>
                <Text style={styles.text}>
                    Nuevo Registro
                </Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    press : {
        backgroundColor : 'black',
        height : 80,
        justifyContent : 'center',
        alignItems : 'center',
        borderTopLeftRadius : 40,
        borderTopRightRadius : 40
    },

    text : {
        color : 'white',
        fontSize : 20

    }
})
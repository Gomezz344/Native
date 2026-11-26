import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Usuarios
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'black',
        height : 80,
        borderBottomLeftRadius : 40,
        borderBottomRightRadius : 40,
        justifyContent : 'center',
        padding : 20
    },


    text : {
        color : 'white',
        fontSize : 25
    }


})
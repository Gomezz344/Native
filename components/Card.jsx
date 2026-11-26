import { Image, StyleSheet, Text, View } from "react-native";

export default function Cards({ item }) {
    const isActive = item.estado?.toLowerCase() === 'activo'
    const isAdmin = item.cargo?.toLowerCase() === 'administrador'

    return(
        <View style={[styles.card, { borderColor: isActive ? '#2e9d55' : '#dc3545' }]}>
            <Image
                source={item.imagen}
                style={styles.imagen}
                accessibilityLabel={`Foto de ${item.nombre}`}
            />
            <View style={styles.details}>
                <Text style={styles.name}>{item.nombre}</Text>
                <Text style={styles.text}>{item.correo}</Text>
                <Text style={styles.text}>Teléfono: {item.tel}</Text>
                <Text style={styles.text}>
                    Cargo: <Text style={isAdmin ? styles.adminRole : styles.employeeRole}>{item.cargo}</Text>
                </Text>
                <Text style={styles.text}>Estado: {item.estado}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginBottom: 12,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 14,
        elevation: 2,
    },

    imagen : {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: '#e5e7eb',
    },

    details: {
        flex: 1,
        marginLeft: 14,
        gap: 4,
    },

    name: {
        color: '#111827',
        fontSize: 17,
        fontWeight: '700',
    },

    text : {
        color: '#4b5563',
        fontSize: 13,
    },
    adminRole: {
        color: '#2e9d55',
        fontWeight: '700',
    },
    employeeRole: {
        color: '#2563eb',
        fontWeight: '700',
    },
})
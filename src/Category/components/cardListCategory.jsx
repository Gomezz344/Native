import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CardCategory({id, name, description, DeleteItem}) {

    const deleteItemCard = (id) => {
        DeleteItem(id)
    }
    return(
        <View style={styles.card}>
            <Text style={styles.label}>Nombre</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.label}>Descripcion</Text>
            <Text style={styles.description}>{description}</Text>
            <Pressable
            onPress={() => deleteItemCard(id)}
            style={({ pressed }) => [
                styles.deleteButton,
                pressed && styles.deleteButtonPressed,
            ]}
            >
                <Text style={styles.deleteButtonText}>Eliminar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        marginBottom: 12,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    label: {
        color: "#6b7280",
        fontSize: 12,
        fontWeight: "600",
        marginBottom: 2,
    },
    name: {
        color: "#111827",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 12,
    },
    description: {
        color: "#374151",
        fontSize: 14,
        marginBottom: 16,
    },
    deleteButton: {
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: "#dc2626",
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    deleteButtonPressed: {
        backgroundColor: "#b91c1c",
        opacity: 0.9,
    },
    deleteButtonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "700",
    },
});
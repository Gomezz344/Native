import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import axios from "axios";
import CardCategory from "./components/cardListCategory";


export default function CategoryModule() {


    const url = process.env.EXPO_PUBLIC_API_URL;

    const [categoryList, setCategoryList] = useState([]);


    const ListData = async () => {
        try {
            let data = await axios.get(`${url}/categories`);
            setCategoryList(data.data.data);
        } catch (error) {
            console.error(error);
        }
    };



    const DeleteItem = async (id) => {
        console.log("Eliminando item con id:", id);

        try {
            let data = await axios.delete(`${url}/categories/${id}`);
            if (data.data.success) {
              ListData()  
            }
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        ListData();
    }, []);

    return(
        <View style={styles.container}>
            <FlatList
                data={categoryList}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <CardCategory 
                    id={item._id} 
                    name={item.name} 
                    description={item.description} 
                    DeleteItem={DeleteItem}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f8",
    },
    list: {
        padding: 16,
        paddingBottom: 24,
    },
});
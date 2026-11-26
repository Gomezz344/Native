import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { IconHome, IconProduct, IconUser } from "../../components/ui/icons";


export default function Tabs_Layout() {
    return(
        <Tabs>
            <Tabs.Screen 
            name="index"
            options={{
                title:"Inicio",
                tabBarIcon: () => <IconHome />
            }}
            
            />
            <Tabs.Screen name="users"
            options={{
                title:"Usuarios",
                tabBarIcon: () => <IconUser />
            }}
            />

            <Tabs.Screen name="category"
            options={{
                title:"Categorias"
            }}
            />


            <Tabs.Screen name="products" 
            options={{
                title:"Productos",
                tabBarIcon: () => <IconProduct />
            }}

            />
            <Tabs.Screen name="clients" 
            options={{
                title:"Clientes"
            }}
            />
        </Tabs>
    )
}
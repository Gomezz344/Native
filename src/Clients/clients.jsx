import { FlatList, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from '../../components/Header';
import Cards from '../../components/Card';
import avatar from '../../assets/avatar.webp';
import FloatingButton from '../../components/FloatingButton';
import Modall from '../../components/Modall';

export default function ClientsModule() {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([
    {
      imagen: avatar,
      nombre: 'Emmanuel',
      correo: 'emmag@gmail.com',
      tel: '3012573505',
      cargo: 'administrador',
      estado: 'Activo',
    },
    {
      imagen: avatar,
      nombre: 'Santiago',
      correo: 'elvasito@gmail.com',
      tel: '3013573505',
      cargo: 'empleado',
      estado: 'Inactivo',
    },
  ]);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const addUser = (user) => {
    setUsers((currentUsers) => [
      ...currentUsers,
      { ...user, imagen: avatar },
    ]);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={users}
        renderItem={({ item }) => <Cards item={item} />}
        keyExtractor={(item, index) => `${item.correo}-${index}`}
        contentContainerStyle={styles.list}
      />

      <Modall
        visible={modalVisible}
        closed={closeModal}
        onSave={addUser}
      />

      <FloatingButton open={openModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  list: {
    padding: 16,
    paddingBottom: 24,
  },
});
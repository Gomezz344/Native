import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Modall({ closed, visible, onSave }) {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [tel, setTel] = useState('')
    const [cargo, setCargo] = useState('')
    const [estado, setEstado] = useState('Activo')

    const handleSave = () => {
        if (!nombre.trim() || !correo.trim() || !cargo.trim()) {
            return
        }

        onSave({
            nombre: nombre.trim(),
            correo: correo.trim(),
            tel: tel.trim(),
            cargo: cargo.trim(),
            estado,
        })

        setNombre('')
        setCorreo('')
        setTel('')
        setCargo('')
          setEstado('Activo')
      }

      return(
          <Modal
              visible={visible}
              animationType="slide"
              onRequestClose={closed}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                      <Text style={styles.headerText}>Nuevo usuario</Text>
                </View>

                  <ScrollView contentContainerStyle={styles.form}>
                      <Text style={styles.label}>Nombre *</Text>
                    <TextInput
                          value={nombre}
                          onChangeText={setNombre}
                          style={styles.input}
                          placeholder="Nombre completo"
                          autoCapitalize="words"
                      />

                      <Text style={styles.label}>Correo *</Text>
                      <TextInput
                          value={correo}
                          onChangeText={setCorreo}
                          style={styles.input}
                          placeholder="correo@ejemplo.com"
                          keyboardType="email-address"
                          autoCapitalize="none"
                      />

                      <Text style={styles.label}>Teléfono</Text>
                      <TextInput
                          onChangeText={setTel}
                          value={tel}
                          style={styles.input}
                          placeholder="Número de teléfono"
                          keyboardType="phone-pad"
                      />

                      <Text style={styles.label}>Cargo *</Text>
                      <TextInput
                          onChangeText={setCargo}
                          value={cargo}
                          style={styles.input}
                          placeholder="Cargo del usuario"
                          autoCapitalize="words"
                    />

                      <Text style={styles.label}>Estado</Text>
                      <View style={styles.statusOptions}>
                          {['Activo', 'Inactivo'].map((option) => (
                              <Pressable
                                  key={option}
                                  accessibilityRole="button"
                                  accessibilityState={{ selected: estado === option }}
                                  onPress={() => setEstado(option)}
                                  style={[
                                      styles.statusOption,
                                      estado === option && (option === 'Activo' ? styles.activeSelected : styles.inactiveSelected),
                                  ]}
                              >
                                  <Text style={[
                                      styles.statusText,
                                      estado === option && styles.selectedStatusText,
                                  ]}>
                                      {option}
                                  </Text>
                              </Pressable>
                          ))}
                      </View>

                      <View style={styles.pressCont}>
                          <Pressable
                              onPress={closed}
                              style={[styles.press, styles.cancelButton]}
                          >
                              <Text style={styles.textPress}>Atras</Text>
                          </Pressable>

                          <Pressable
                              onPress={handleSave}
                              style={[styles.press, styles.saveButton]}
                              disabled={!nombre.trim() || !correo.trim() || !cargo.trim()}
                          >
                              <Text style={styles.textPress}>Guardar</Text>
                          </Pressable>
                      </View>
                  </ScrollView>
              </View>
          </Modal>

    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#f4f6f8',
    },

    form: {
        padding: 20,
        paddingBottom: 32,
    },

    pressCont : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        gap: 12,
    },

    press : {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textPress : {
        color: 'white',
        fontWeight: '600',
    },

    cancelButton: {
        backgroundColor: '#6b7280',
    },

    saveButton: {
        backgroundColor: '#2563eb',
    },

    header : {
        backgroundColor: '#111827',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
    },

    headerText : {
        color: 'white',
        fontSize: 22,
        fontWeight: '700',
    },

    input : {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 10,
        marginTop: 6,
        marginBottom: 16,
        paddingHorizontal: 12,
        paddingVertical: 11,
        backgroundColor: 'white',
        fontSize: 16,
    },

    label: {
        color: '#374151',
        fontSize: 14,
        fontWeight: '600',
    },

    statusOptions: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
    },

    statusOption: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 10,
        backgroundColor: 'white',
    },

    activeSelected: {
        borderColor: '#2e9d55',
        backgroundColor: '#ecfdf3',
    },

    inactiveSelected: {
        borderColor: '#dc3545',
        backgroundColor: '#fff1f2',
    },

    statusText: {
        color: '#4b5563',
        fontWeight: '500',
    },

    selectedStatusText: {
        color: '#111827',
        fontWeight: '700',
    }
})
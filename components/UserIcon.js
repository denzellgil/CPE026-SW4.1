import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, Image, TouchableOpacity, Pressable, Modal} from 'react-native';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HideSourceSharpIcon from '@mui/icons-material/HideSourceSharp';
import { UserCircleIcon, ArrowLeftIcon } from 'react-native-heroicons/outline'



const UserIcon = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal style= {style.modalView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Pressable style={style.modalButton} onPress={() => setModalVisible(false)}>
                <ArrowLeftIcon size="25" color="blue"/>
            </Pressable>
            <Text style = {style.userText}>Are you Denzell Gil because you're nice or are you nice because You're Denzell Gil? </Text>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <UserCircleIcon />
      </Pressable>
    </View>
  );
};

export default UserIcon;

const style = StyleSheet.create({
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    //justifyContent: 'center',
    backgroundColor: '#d7d9d9',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    borderColor: 'black'
  },
  userText: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f5f5',
    borderRadius: 10,
  },
  modalButton: {
    padding: 10,
    //marginBottom: 10,
    justifyContent: 'flex-start',
  }
})
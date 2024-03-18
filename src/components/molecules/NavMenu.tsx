import React, {useState} from 'react';
import {Modal, View, Text, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../styles';

const NavMenu = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <Text style={styles.headerButton}>☰</Text>
        </TouchableWithoutFeedback>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Home');
                  closeModal();
                }}>
                <Text style={styles.modalText}>Home</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('ActiveTasks');
                  closeModal();
                }}>
                <Text style={styles.modalText}>Active Tasks</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('CompletedTasks');
                  closeModal();
                }}>
                <Text style={styles.modalText}>Completed Tasks</Text>
              </TouchableWithoutFeedback>
              {/* Add settings option */}
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Settings');
                  closeModal();
                }}>
                <Text style={styles.modalText}>Settings</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={closeModal}>
                <Text style={styles.modalText}>Close</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default NavMenu;

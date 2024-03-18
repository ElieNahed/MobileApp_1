// styles.ts

import { StyleSheet } from 'react-native';

export const themeColors = {
  primary: '#35374B',
  secondary: '#344955',
  tertiary: '#50727B',
  quaternary: '#78A083',
  text: '#EEEEEE',
};

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.primary,
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    padding: 20,
    color: themeColors.quaternary,
  },
  settingsInfo: {
    fontSize: 16,
    textAlign: 'center',
    color: themeColors.quaternary,
  },
  textContainer: {
    color: themeColors.text,
    padding: 20,
  },
  buttonContainer: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: themeColors.secondary,
    borderRadius: 11,
  },
  buttonText: {
    fontSize: 16,
    color: themeColors.primary,
  },
  deadpoolImg: {
    width: 200,
    height: 200,
  },
  headerContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  headerButton: {
    marginRight: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: themeColors.text,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: themeColors.text,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: '50%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    color: themeColors.primary,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 35,
  },
  textInput: {
    backgroundColor: themeColors.secondary,
    color: themeColors.text,
    marginTop: 20,
    padding: 20,
    width: '75%',
  },
  card: {
    backgroundColor: themeColors.text,
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: themeColors.primary,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: themeColors.quaternary,
  },
  
  iosShadow: {
    shadowColor: themeColors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  androidShadow: {
    elevation: 5,
  },
});

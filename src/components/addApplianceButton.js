import React from 'react';
import { TouchableOpacity, Text, StyleSheet , View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddApplianceButton = ({ onPress }) => {
  return (
 

      <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
            <Ionicons name="md-add" size={24} color="black" style={styles.buttonIcon}/>
              <Text style={styles.addButtonText}>Add</Text>
            </View>
          </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',  // Align items to the center vertically
    borderRadius: 50,
    paddingVertical: 1,
    paddingHorizontal: 9,
    backgroundColor: '#45A8AE',
    marginRight: 30,
    marginTop: 30,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    elevation: Platform.OS === 'android' ? 6 : 0,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
   
  },
  buttonIcon: {
    marginRight: 3,  // Add some spacing between the icon and text
  },
  addButtonText: {
    color: '#1F3334',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default AddApplianceButton;
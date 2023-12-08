import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from './devicesIcons';
import { PowerEyeContext } from '../services/powerEye.context';

const AddNewRoom = () => {
  const {appliances,appliance_ids, setAppliance_ids} = useContext(PowerEyeContext)

  const devices = [
    { id: 1, name: 'lightbulb-on', label: 'Device 1' },
    { id: 2, name: 'fan', label: 'Device 2' },
    { id: 3, name: 'television', label: 'Device 3' },
    { id: 4, name: 'lock', label: 'Device 4' },
    { id: 5, name: 'speaker', label: 'Device 5' },
    { id: 6, name: 'camera', label: 'Device 6' },
    { id: 7, name: 'thermometer', label: 'Device 7' },
    { id: 8, name: 'coffee', label: 'Device 8' },
    { id: 9, name: 'washing-machine', label: 'Device 9' },
  ];

  const [selectedDevices, setSelectedDevices] = useState([]);

  const toggleDeviceSelection = (device) => {
    if (selectedDevices.some((d) => d.id === device.id)) {
      setSelectedDevices(selectedDevices.filter((d) => d.id !== device.id));
      setAppliance_ids(selectedDevices.filter((d) => d.id !== device.id).map((device)=>device.id));
      
    } else {
      setSelectedDevices([...selectedDevices, device]);
      setAppliance_ids([...selectedDevices.map((device)=>device.id), device.id])
    }
  };

  const isDeviceSelected = (device) => {
    return selectedDevices.some((d) => d.id === device.id);
  };

  const createRows = (devices, itemsPerRow) => {
    const rows = [];
    let row = [];
    appliances?.forEach((device, index) => {

      const isSelected = isDeviceSelected(device);
      row.push(
        <TouchableOpacity
          key={device.id}
          style={[
            styles.deviceBox,
            isSelected && styles.selectedDeviceBox,
          ]}
          onPress={() => toggleDeviceSelection(device)}
        >
          <View style={styles.iconContainer}>
            {isSelected ? (
              <Icon
                id={device.type}
                size={40}
                color="#00707C"
              />
            ) : (
              <Icon
                id={device.type}
                size={40}
                color="black"
              />
            )}
          </View>
          <Text style={styles.deviceText}>{device.name}</Text>
        </TouchableOpacity>
      );

      if ((index + 1) % itemsPerRow === 0 || index === devices?.length - 1) {
        rows.push(
          <View key={index} style={styles.deviceRow}>
            {row}
          </View>
        );
        row = [];
      }
    });
    return rows;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Room ...</Text>
      <Text style={styles.subheader}>1- Choose your devices</Text>
      <View style={styles.deviceContainer}>{createRows(appliances, 3)}</View>
      <View style={styles.buttonContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    marginRight: 140,
    color: "#00707C",
  },
  subheader: {
    fontSize: 18,
    marginBottom: 40,
    marginRight: 105,
    color: "#45A8AE",
  },
  deviceContainer: {
    marginBottom: 20,
  },
  deviceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  deviceBox: {
    width: 80,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  selectedDeviceBox: {
    backgroundColor: 'rgba(0, 112, 124, 0.5)',
    borderColor: '#00707C',
  },
  deviceText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  iconContainer: {
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default AddNewRoom;

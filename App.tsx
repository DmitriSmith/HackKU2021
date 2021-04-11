/**
 * Dmitri Smith 
 * HackKU 2021
 * Pandemic Planner
 */

 import React, { useState } from 'react';
 import {
   Button,
   SafeAreaView,
   StyleSheet,
   Text,
   TextInput,
   View,
   Dimensions,
 } from 'react-native';

 import {Picker} from '@react-native-picker/picker';
 import {RadioButton} from 'react-native-paper';
 import QRCode from 'react-native-qrcode-svg';

 import VerifyInputs from './helpers/VerifyInput';
 import GenerateQRCode from './helpers/GenerateQRHelper'

 const App = () => {

  const [qrGenerated, setQRGenerated] = useState(false);
  const [qrCode, setQrCode] = useState('example text');
  const [lotNumber, setLotNumber] = React.useState('');
  const [dateAdministered, setDateAdministered] = React.useState('');
  const [manufacturer,setManufacturer] = React.useState('pfizer');
  const [dose, setDose] = React.useState('');
  const [submitDisabled, setButtonDisabled] = useState(true);
  
  const handleSubmitClick = (event: any) => {
    if (Verify()) {
        setQrCode(GenerateQRCode(manufacturer, lotNumber, dateAdministered, dose));
        setQRGenerated(true);
    }
  }  

  const Verify = () => {
    let verified:boolean = VerifyInputs(manufacturer, lotNumber, dateAdministered, dose)
    setButtonDisabled(!verified)
    return verified
  }

  const handleResetClick = (event: any) => {
    setQRGenerated(false);
    setQrCode('');
    setLotNumber('');
    setDateAdministered('');
    setManufacturer('pfizer');
    setDose('');
    Verify();
  } 

  const handleLotNumber = (lot:string) => {
    setLotNumber(lot);
    Verify();
  }

  const handleManufacturer = (manufacturer:string) => {
    setManufacturer(manufacturer);
    Verify();
  }

  const handleDose = (dose:string) => {
    setDose(dose);
    Verify();
  }

  const handleDateAdministered = (date:string) => {
    setDateAdministered(date);
    Verify();
  }

  if(!qrGenerated) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.text}>Fill out the information from your vaccination record to generate a QR Code!</Text>
        <Text style={styles.separator}></Text>
        <Text style={styles.header}>Lot Number</Text>
        <Picker
          style={styles.elementContainer}
          selectedValue={manufacturer}
          onValueChange={(val) =>
            handleManufacturer(val)
          }>
          <Picker.Item label="Pfizer" value="pfizer" />
          <Picker.Item label="Moderna" value="moderna" />
          <Picker.Item label="Johnson and Johnson" value="jandj" />
          <Picker.Item label="AstraZeneca" value="astrazeneca" />
        </Picker>
        <View style={styles.separator}/>
        <Text style={styles.header}>Lot Number</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Lot Number"
          defaultValue={''}
          onChangeText={lotNumber => handleLotNumber(lotNumber)}
        />
        <View style={styles.separator}/>
        <Text style={styles.header}>Date</Text>
        <TextInput 
          style={styles.input} 
          placeholder="MM/DD/YY"
          defaultValue={''}
          onChangeText={dateAdministered => handleDateAdministered(dateAdministered)}
        />
        <View style={styles.separator}/>
        <Text style={styles.header}>Was this your first or second dose?</Text>
        <RadioButton.Group onValueChange={newValue => handleDose(newValue)} value={dose}>
          <View>
            <Text>First</Text>
            <RadioButton value="first" />
          </View>
          <View>
            <Text>Second</Text>
            <RadioButton value="second" />
          </View>
        </RadioButton.Group>
        <View style={styles.separator}/>
        <Button
          disabled={submitDisabled}
          onPress={handleSubmitClick}
          title="Submit"
          color="#841584"
        />
      </SafeAreaView>
    )
  } else {
    let logo = require('./assets/hackku_logo.png');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.separator}/>
        <QRCode 
          value={qrCode}
          size={Dimensions.get('window').width * 0.75}
          logo={logo}
        />
        <View style={styles.separator}/>
        <View style={styles.wideSeparator}/>
        <Button
          onPress={handleResetClick}
          title="Reset"
          color="#841584"
        />
      </View>
    );
  }
 };

 const styles = StyleSheet.create({
  elementContainer: {
    marginTop: 8,
    width: 260,
    height: 40,
  },
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
    borderTopColor: 'blue',
    borderTopWidth: 2,
  },
  text: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    height:40,
    width: 260,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#ededed'
  },
  wideSeparator: {
    marginVertical: 80,
    height: 1,
    width: '80%',
  },
 });

 export default App;

import React, {useState} from 'react';
import {
  Button, 
  Text, 
  TextInput, 
  View, 
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';


const styles = StyleSheet.create({
  input:{
    height:40,
    margin:12,
    borderWidth: 1,
    padding:10,
  },
});

const getFullName=(firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const Cat = props => {

  const [isHungry, setIsHungry] = useState(true);
  const [messageCat, setMessageCat] = useState("");
  return(
    <SafeAreaView>
    <Image
      source={{
        uri:'https://reactnative.dev/docs/assets/p_cat1.png'
      }}
      style={{width: 50, height: 50}}
    />
    <Text>Hello, I am {getFullName(props.name,"Anthonio","jimenez")}</Text>
    <TextInput
      style={styles.input}
      placeholder="Type here to translate!"
      onChangeText={newMessage=>setMessageCat(newMessage)}
      defaultValue={messageCat}
      autoCapitalize='words'
      cursorColor={"gray"}
      
    />
    <Button
      onPress={()=>{
        setIsHungry(!isHungry);
      }}
      
      title={isHungry? "Alimenta a " + props.name : "thanks, again"}
    />
    <Text style={{padding:10, fontSize:18}}>
      {messageCat.split(' ').map(word => word && '👾').join(' ')}
    </Text>
    </SafeAreaView>
  );
};


const Cafe = () => {
  return(
    <ScrollView>
    <View style={{padding: 10}}>
      <Text>Welcome!</Text>
      <Cat name="Michi"/>
      <Cat name="Gateto"/>
      <Cat name="Pipi"/>
      <Cat name="Pipi"/>
      <Cat name="Pipi"/>
      <Cat name="Pipi"/>
      <Cat name="Pipi"/>
      <Cat name="Pipi"/>
    </View>
    </ScrollView>
  );
}

export default Cafe;
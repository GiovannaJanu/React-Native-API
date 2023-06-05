import React from "react";
import {View, Text, StyleSheet} from "react-native";

/*
const containerStyle = {
    marginTop: 25,
    backgroundColor: '#eb34e5',
    alignItems: 'center',
    justifyContent: 'center',
}

const titleStyle= {
    fontSize: 30,
    color:'#fff',
    padding: 10,
}
*/

function Header(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
          
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
       marginTop: 25,
       backgroundColor: '#345eeb',
       alignItems: 'center',
       justifyContent: 'center',
    },
    
    title: {
        fontSize: 30,
        color:'#fff',
        padding: 10,
    },



});


export default Header;
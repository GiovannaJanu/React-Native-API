import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function PeopleList(props){

    if(props.people.length != 0){
        const textElements = props.people.map(person => {
          return (
               <View key={person.login.uuid} style={styles.container}>
                 <Image source={{uri: person.picture.thumbnail}} style={styles.photo}/>
                 <Text style={styles.text}>{`${person.name.first} ${person.name.last}`/*person.name.first + " " + person.name.last*/}</Text>
               </View>

            )

        });
    
        return(
            <View>
                {textElements}
            </View>
        );
    }
  
    return(
        <Text style={styles.loading}>Carregando os dados...Aguarde!!</Text>
    );
}

const styles = StyleSheet.create({
    photo: {
        //width: 50,
        aspectRatio: 1,
        marginLeft: 20,
        borderRadius: 30,
        flex: 1,
    },

    container:{
        backgroundColor: '#E2F9FF',
        height: 80,
        borderBottomColor:"#bbb",
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    text:{
        fontSize: 20,
        paddingLeft: 20,
        flex: 5,
    },

    loading:{
        fontSize:20,
        color: '#F00',
    }
});

export default PeopleList;

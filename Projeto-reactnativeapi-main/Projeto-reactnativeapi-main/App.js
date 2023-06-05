import React, {useEffect, useState} from 'react';
import {View, ScrollView } from 'react-native';

import Header from './src/Components/Header';
import PeopleList from './src/Components/PeopleList';

import axios from 'axios';


export default function App() {
  
  const [people, setPeople] = useState([])

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=20&nat=br')
      .then(response => {
         setPeople(response.data.results)
      }).catch(error => {
        console.log('Ocorreu um erro - ' + error);
      });
  }, []);


  return(
    <ScrollView>
      <View>
        <Header title="Pessoas!"/>
        <PeopleList people={people}/>
      </View>
    </ScrollView>

  );

}


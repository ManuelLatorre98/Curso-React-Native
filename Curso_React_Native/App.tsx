import React from 'react';
import { View } from 'react-native';
import { BusinessCard } from "./Proyectos_res/businessCard/components/BusinessCard";
import { Project1 } from "./Proyectos_res/Project1/components/Project1";
import { ConceptProps } from "./Conceptos/Props/ConceptProps";
import { AirBnb } from "./Proyectos_res/airbnb/components/airBnb/AirBnb";

function App(): JSX.Element {
  return (
    <View style={{flex:1}}>
      <Project1></Project1>
      {/*<BusinessCard></BusinessCard>*/}
      {/*<ConceptProps></ConceptProps>*/}
      {/*<AirBnb></AirBnb>*/}
    </View>
  );
}

export default App;

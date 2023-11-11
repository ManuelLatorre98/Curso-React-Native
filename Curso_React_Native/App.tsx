import React from 'react';
import { View } from 'react-native';
import { BusinessCard } from "./Proyectos_res/businessCard/components/BusinessCard";
import { Project1 } from "./Proyectos_res/Project1/components/Project1";
import { ConceptProps } from "./Conceptos/Props/ConceptProps";

function App(): JSX.Element {
  return (
    <View style={{flex:1}}>
      {/*<Project1></Project1>*/}
      {/*<BusinessCard></BusinessCard>*/}
      <ConceptProps></ConceptProps>
    </View>
  );
}

export default App;

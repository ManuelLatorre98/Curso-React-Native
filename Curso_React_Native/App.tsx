import React from 'react';
import { View } from 'react-native';
import { ConceptProps } from "./Conceptos/Props/ConceptProps";


function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      {/* TODO Aca van a poner los proyectos como si fueran componentes unicos */}
      <ConceptProps></ConceptProps>
    </View>
  );
}

export default App;

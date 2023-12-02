import React from 'react';
import { View } from 'react-native';
import { ConceptProps } from "./Conceptos/Props/ConceptProps";
import { ArrayMap } from "./Conceptos/ArrayMap/ArrayMap";
import { Estrella } from "./Conceptos/Estrella/Estrella";
import { FlatListEj } from "./Conceptos/FlatList/FlatList";
import { Estados } from "./Conceptos/estados/estados";
import { Counter } from "./Proyectos_res/counter/counter";


function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      {/* TODO Aca van a poner los proyectos como si fueran componentes unicos */}
      {/*<ConceptProps></ConceptProps>*/}
      {/*<ArrayMap></ArrayMap>*/}
      {/*<Estrella></Estrella>*/}
      {/*<FlatListEj />*/}
      {/*<Estados />*/}
      <Counter />
    </View>
  );
}

export default App;

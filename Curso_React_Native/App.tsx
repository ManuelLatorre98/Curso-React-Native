import React from 'react';
import { View } from 'react-native';
import { ConceptProps } from "./Conceptos/Props/ConceptProps";
import { ArrayMap } from "./Conceptos/ArrayMap/ArrayMap";
import { Estrella } from "./Conceptos/Estrella/Estrella";
import { FlatListEj } from "./Conceptos/FlatList/FlatList";
import { Estados } from "./Conceptos/estados/estados";
import { Counter } from "./Proyectos_res/counter/counter";
import { Objetos } from "./Conceptos/estados/objetos/objetos";
import { Login } from "./Conceptos/estados/login/login";
import { Effect } from "./Conceptos/effect/effect";
import { Effect2 } from "./Conceptos/effect/effect2";
import { EjemploTsx } from "./Conceptos/a";


function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      {/* TODO Aca van a poner los proyectos como si fueran componentes unicos */}
      {/*<EjemploTsx/>*/}
      {/*<ConceptProps></ConceptProps>*/}
      {/*<ArrayMap></ArrayMap>*/}
      {/*<Estrella></Estrella>*/}
      {/*<FlatListEj />*/}


      {/*<Estados />*/}
      {/*<Objetos/>*/}
      <Login/>
      {/*<Effect/>*/}
      {/*<Effect2/>*/}


      {/*<Counter />*/}
    </View>
  );
}

export default App;

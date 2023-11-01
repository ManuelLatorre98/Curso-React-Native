import React from 'react';
import {Text, View} from 'react-native';
import { Project1 } from "./Proyectos_res/Project1/components/Project1";
import { ProjectsRes } from "./Proyectos_res/ProjectsRes";

/*todo intercambiar por el folder de trabajo*/
function App(): JSX.Element {
  return (
    <View>
      <ProjectsRes></ProjectsRes>
    </View>
  );
}

export default App;

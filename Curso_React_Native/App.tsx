import React from 'react';
import { View } from 'react-native';
import { ProjectsRes } from "./Proyectos_res/ProjectsRes";

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <ProjectsRes></ProjectsRes>
    </View>
  );
}

export default App;

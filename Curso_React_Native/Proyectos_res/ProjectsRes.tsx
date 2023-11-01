// eslint-disable-next-line prettier/prettier
import {Text, View} from 'react-native';
import { Project1 } from "./Project1/components/Project1";
/*
* Este directorio lo vamos a usar como si fuera un main que luego vamos a renderizar en App.tsx
* */
function ProjectsRes (){
  return (
    <View>
      <Project1></Project1>
    </View>
  )
}

export { ProjectsRes }

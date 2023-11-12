import { ScrollView } from "react-native";

import { Contact } from "./Contact";
require
function ConceptProps(){
  return(
    <ScrollView style={{flex:1}}>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </ScrollView>
  )
}

export { ConceptProps }

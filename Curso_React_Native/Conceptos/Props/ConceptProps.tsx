import { ScrollView } from "react-native";

import { Contact } from "./Contact";
require
function ConceptProps(){
  return(
    <ScrollView style={{flex:1}}>
      <Contact
        img={require("./images/gatocharlyjuzgando.png")}
        name='mr.charles'
        phone = "1234"
        email= "asdas@oaskdas"
      />
      <Contact
        img={require("./images/gatocharlysiesta.png")}
        name='mr.charles siestando'
        phone = "1234"
        email= "asdas@oaskdas"
      />
      <Contact
        img={require("./images/bikecat.png")}
        name='El Mauri'
        phone = "1234"
        email= "asdas@oaskdas"
      />
      <Contact
        img={require("./images/gato3.png")}
        name='Gato generico'
        phone = "1234"
        email= "asdas@oaskdas"
      />
    </ScrollView>
  )
}

export { ConceptProps }

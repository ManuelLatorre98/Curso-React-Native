import { ScrollView } from "react-native";

import { Contact } from "./Contact";
require
function ConceptProps(){
  return(
    <ScrollView style={{flex:1}}>
      <Contact
        img={require('./images/gatocharlyjuzgando.png')}
        name={"mr.Charles"}
        phone={"123213213"}
        email={"email.com"}
      />
      <Contact
        img={require('./images/gato3.png')}
        name={"mr.Charles"}
        phone={"123213213"}
        email={"email.com"}
      />
      <Contact
        img={require('./images/bikecat.png')}
        name={"mr.Charles"}
        phone={"123213213"}
        email={"email.com"}
      />
      <Contact
        img={require('./images/gatocharlysiesta.png')}
        name={"mr.Charles"}
        phone={"123213213"}
        email={"email.com"}
      />
    </ScrollView>
  )
}

export { ConceptProps }

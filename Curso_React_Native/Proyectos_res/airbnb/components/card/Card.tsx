import { Image, ImageSourcePropType, Text, View } from "react-native";
import { cardStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPiggyBank, faSackDollar, faSackXmark, faStar } from "@fortawesome/free-solid-svg-icons";

interface Props {
  city: string,
  country: string,
  date: string,
  amountHost: string,
  price: number,
  qualification: number,
  imageUrl:string,
  offer:boolean,
  sold:boolean
}

function Card(props: Props){
  return(
    <View style={cardStyles.container}>
      <Image source={{uri: props.imageUrl}} style={cardStyles.img}/>
      <View style={cardStyles.containerPlace}>
        <Text style={cardStyles.placeText}>{props.city}, {props.country}</Text>
        <FontAwesomeIcon icon={faStar} style={cardStyles.starIcon}/>
        <Text style={cardStyles.p}>{props.qualification}</Text>
      </View>
      <Text style={cardStyles.p}>City views</Text>
      <Text style={cardStyles.p}>{props.date} • {props.amountHost}</Text>
      <View style={cardStyles.containerPrice}>
        {!props.sold && !props.offer && <FontAwesomeIcon icon={faSackDollar} style={cardStyles.iconNotSold} size={25}/>}

        {!props.sold && props.offer && <FontAwesomeIcon icon={faPiggyBank} style={cardStyles.iconOffer} size={25} />}

        {props.sold && <FontAwesomeIcon icon={faSackXmark} style={cardStyles.iconSold} size={25}/>}

        {!props.sold && <Text style={cardStyles.priceText}>${props.price}</Text>}
        {!props.sold && <Text style={cardStyles.priceText}> / night</Text>}


        {props.sold && <Text style={cardStyles.soldText}>${props.price}</Text>}

        {props.sold && <Text style={cardStyles.soldText}> / night</Text>}
      </View>
    </View>
    )

}

export { Card }

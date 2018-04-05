import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const restaurantsAPI = 
{
    "data": [{
      "restaurants": [{
        "title": "Da Mario",
        "image": "https://pbs.twimg.com/profile_images/671589544618270720/az1nVX0r.png",
        "rating": "The shortest article. Ever.",
        "address": "2015-05-22T14:56:29.000Z",
        "keywords": "2015-05-22T14:56:28.000Z",
        "menu": {
            "starter": {
              "data": [
                {"id": "1", "title": "Bruschetta"},
                {"id": "2", "title": "Salumi vari"},
                {"id": "3", "title": "Ciabatta"}
            ]
            },
            "firstcourse": {
                "data": [
                    {"id": "1", "title": "Lasagna"},
                    {"id": "2", "title": "Ravioli"},
                    {"id": "3", "title": "Fusilli col Pesto"},
                    {"id": "4", "title": "Pasta all'Ubriaca"}
                ]
            },
            "secondcourse": {
                "data": [
                    {"id": "1", "title": "Bistecca al Sangue"},
                    {"id": "2", "title": "Pollo arrosto"},
                    {"id": "3", "title": "Nasello"}
                ]
            },
            "desserts": {
                "data": [
                    {"id": "1", "title": "Tiramisu"},
                    {"id": "2", "title": "Ice-cream"}
                ]
            },
            "drinks": {
                "data": [
                    {"id": "1", "title": "Terra Rossa", "type":"red"},
                    {"id": "2", "title": "Lambrusco", "type":"red"},
                    {"id": "3", "title": "Chianti", "type":"white"}
                ]
            }
          }
      }]
    }]
  };


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {

    let restaurants = restaurantsAPI.data[0].restaurants[0];

        return (
            <View>
                <Text>{restaurants.title}</Text>
                <Image 
                    style={{height: 40, width:40}}
                    source={{uri: restaurants.image}} />
            </View>
        );
    }
}


export default Header;
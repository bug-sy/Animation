/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { typography } from './app/theme/typography';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Card, Button, } from 'react-native-elements';
import Deck from "./app/screen/Deck"
import MobxSection from "./app/screen/MobxSection"
import ExampleOne from "./app/screen/MobxExample"


const StoreContext = React.createContext();

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class App extends React.Component {

  renderCard = (item) => {
    // console.log("++++",item)
    return (
      <Card
      >
        <Card.Title>{item.text}</Card.Title>
        <View >
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <Text>I can customize the card further {item.text}</Text>
        <Button
          icon={{ name: "code" }}
          backgroundKColor="#03A9F4"
          title="View Now!"
        >
        </Button>
      </Card>


    )
  }

  render() {


    return (
      <View style={styles.sectionContainer}>
        {/* <Deck
          data={DATA}
          renderCard={this.renderCard}
        /> */}
        {/* <MobxSection />
        <Text style={{ fontFamily: typography.secondary }}>Welcome start a new journey</Text> */}
        <ExampleOne/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: "pink"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

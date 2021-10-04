import React, { Component } from "react";
import { } from "react-native";
import { View, Animated, PanResponder } from "react-native";


export default class Deck extends Component {

    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                //debugger
                //console.log(gesture);
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: () => { }

        });

        //this.panResponder = panResponder
        this.state = { panResponder, position }
    }



    renderCards = () => {
        //console.log("-->",this.props.data)
        return this.props.data.map((item, indes) => {

            if (index === 0) {
                return (
                    <Animated.View
                        key = {item.id}
                        style={this.state.position.getLayout()}
                        {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }

            return this.props.renderCard(item)
        })
    }

    render() {
        return (
            <View
            >
                {this.renderCards()}
            </View>
        )
    }
}
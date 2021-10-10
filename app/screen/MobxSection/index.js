import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button
} from 'react-native';
import { Card, Input } from 'react-native-elements';
const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        bugs: ["Centipede"],
        addBug: bug => {
            store.bugs.push(bug);
        },
        get bugsCount() {
            return store.bugs.length;
        }
    }));

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

const BugsHeader = () => {
    const store = React.useContext(StoreContext);
    return useObserver(() =>

        <Text>{store.bugsCount} Bugs!</Text>


    );
};

const BugsList = () => {
    const store = React.useContext(StoreContext);

    return useObserver(() => (
        <View>
            {store.bugs.map(bug => (
                <Text key={bug}>{bug}</Text>
            ))}
        </View>
    ));
};

const BugsForm = () => {
    const store = React.useContext(StoreContext);
    const [bug, setBug] = React.useState("");

    return (
        <View>
            <Input
                value={bug}
                placeholder="Comment"
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
              
                onChangeText={value => setBug(value)}
  />

            <Button
                onPress={(e) => {
                    store.addBug(bug);
                    setBug("");
                    e.preventDefault();
                }}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>

    );
};

export default function index() {
    return (
        <StoreProvider>
            <View>
                <BugsHeader />
                <BugsList />
                <BugsForm />
            </View>
        </StoreProvider>
    );
}
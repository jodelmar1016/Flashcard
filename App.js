import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Review from './screens/Review';
import CreateSet from './screens/CreateSet';
import Subject from './screens/Subject';
import AddCards from './screens/AddCards';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Home
        moveToSubject={() => {navigation.navigate('SubjectScreen');}}
        rev={() => {navigation.navigate('ReviewScreen');}} 
        createSetClick={() => {navigation.navigate('CreateSetScreen');}} 
       />
    </View>
  );
}

function ReviewScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Review
        moveToHome={() => {navigation.navigate("HomeScreen");}}
      />
    </View>
  );
}

function CreateSetScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333333' }}>
      <CreateSet
        moveToHome={() => {navigation.goBack();}}
        moveToSubjects={() => {navigation.navigate('SubjectScreen');}}
        moveToAddCards={() => {navigation.navigate('AddCardsScreen');}}
      />
    </View>
  );
}

function SubjectScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#333333'}}>
      <Subject
        moveToHome={() => {navigation.goBack();}}
      />
    </View>
  );
}

function AddCardsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#333333'}}>
      <AddCards
        moveToHome={() => {navigation.navigate('HomeScreen');}}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
        <Stack.Screen name="CreateSetScreen" component={CreateSetScreen} />
        <Stack.Screen name="SubjectScreen" component={SubjectScreen} />
        <Stack.Screen name="AddCardsScreen" component={AddCardsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
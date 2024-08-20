import React from "react"; // Correto
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack"; 
import Login from "./src/Screen/login"; 

const Stack = createStackNavigator(); 

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{headerShown: false}} 
          name='Login' 
          component={Login}    
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

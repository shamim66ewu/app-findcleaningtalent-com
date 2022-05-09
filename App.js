import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import RegPage from "./pages/RegPage";
import RegSubPage from "./pages/RegSubPage";
import LoginForm from './pages/LoginForm';
import MyProfile from './pages/MyProfile';
import Candidates from './pages/Candidates';
import Messages from './pages/Message';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Password from './pages/Password';
import Address from './pages/Address';
import Notifications from './pages/Notifications';
import Privacy from './pages/Privacy';
//import SidebarBTN from './components/SidebarBTN';

const Stack = createNativeStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomePage}/>
        <Stack.Screen name = "Login" component={LoginPage}/>
        <Stack.Screen name = "Registration" component={RegPage}/>
        <Stack.Screen name = "Submission" component={RegSubPage}/>
        <Stack.Screen name = "LoginForm" component={LoginForm}/>
        <Stack.Screen name = "MyProfile" component={MyProfile}/>
        <Stack.Screen name = "Candidates" component={Candidates}/>
        <Stack.Screen name = "Messages" component={Messages}/>
        <Stack.Screen name = "Notification" component={Notification}/>
        <Stack.Screen name = "Profile" component={Profile}/>
        <Stack.Screen name = 'Password' component={Password}/>
        <Stack.Screen name = 'Address' component={Address}/>
        <Stack.Screen name = 'Notifications' component={Notifications}/>
        <Stack.Screen name = 'Privacy' component={Privacy} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
 }



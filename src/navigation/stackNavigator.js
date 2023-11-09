import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home';
import SetGoal from '../screens/setGoalPage';
import TotalPage from '../screens/totalPage';
import RoomPage from "../screens/roomPage";
import ApplaincePage from "../screens/appliancePage";


const Stack = createStackNavigator();

export default function StackNavigator (){
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
           >

           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="SetGoal" component={SetGoal} />
           <Stack.Screen name="TotalPage" component={TotalPage} />
           <Stack.Screen name="RoomPage" component={RoomPage} />
           <Stack.Screen name="ApplaincePage" component={ApplaincePage} />
       
           

           </Stack.Navigator>

    )
}

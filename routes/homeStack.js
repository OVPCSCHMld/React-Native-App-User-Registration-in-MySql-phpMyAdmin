import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import WetherForecast from "../components/WetherForecast";

const screens = {
    SignInScreen: {
        screen: SignIn,
    },
    SignUpScreen: {
        screen: SignUp,
    },
    HomeScreen: {
        screen: Home,
    },
    WetherForecastScreen1: {
        screen: WetherForecast,
    },
}
const homeStack = createStackNavigator(
    screens,
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#009387",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign:'center',
                fontWeight: 'bold',
            },
        },
    },
    {initialRouteName: 'SignUpScreen'}
    );

export default createAppContainer(homeStack);
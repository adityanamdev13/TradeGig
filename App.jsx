import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Home from './src/screens/Home';
import DashBoard from './src/screens/DashBoard';
import Positions from './src/screens/Positions';
import TradeLog from './src/screens/TradeLog';
import Profile from './src/screens/AccountSettings';
import CustomHeader from './src/components/CustomHeader';
import CustomDrawerHeader from './src/components/CustomDrawerHeader';
import PositionsForm from './src/screens/PositionsForm';
import CustomDrawerHeaderOut from './src/components/CustomDrawerHeaderOut';
import TradelogForm from './src/screens/TradelogForm';
import AccountSettings from './src/screens/AccountSettings';
import TradeSettings from './src/screens/TradeSettings';
import SubscriptionDetails from './src/screens/SubscriptionDetails';
import AppearanceOptions from './src/screens/AppearanceOptions';
import NotificationSettings from './src/screens/NotificationSettings';
import DailyReportNotification from './src/screens/DailyReportNotification';
import BrokerBalanceTracking from './src/screens/BrokerBalanceTracking';
import AdvisorSettings from './src/screens/AdvisorSettings';
import WidgetSettings from './src/screens/WidgetSettings';
import WeeklyReport from './src/screens/WeeklyReport';
import ReferAndWin from './src/screens/ReferAndWin';
import AdvisorClaimsCheck from './src/screens/AdvisorClaimsCheck';
import FAQandHelp from './src/screens/FAQandHelp';
import LogoutOption from './src/screens/LogoutOption';
import TradeLogTable from './src/screens/TradeLogTable';
import ZoomChart from './src/screens/ZoomChart';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Tasks') {
            iconName = 'exclamation-circle';
          } else if (route.name === 'Positions') {
            iconName = 'sort-amount-up';
          } else if (route.name === 'Log') {
            iconName = 'clipboard-list';
          } else if (route.name === 'Dashboard') {
            iconName = 'chart-bar';
          }
          return (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}>
              <FontAwesome name={iconName} size={28} color={color} />
            </View>
          );
        },
        header: ({route}) => (
          <CustomHeader
            title={
              route.name === 'Positions' ? 'Current Positions' : `${route.name}`
            }
          />
        ),
        tabBarLabel: ({focused, color}) => {
          return focused ? (
            <Text style={{color, fontSize: 16, bottom: 10, marginTop: 3}}>
              {route.name}
            </Text>
          ) : null;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        headerShown: true,
        tabBarStyle: {
          height: 70,
          paddingBottom: 1,
          paddingTop: 10,
          backgroundColor: '#444444',
          paddingHorizontal: 20,
        },
      })}>
      <Tab.Screen
        name="Tasks"
        component={Home}
        options={{
          title: 'Tasks',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Positions"
        component={Positions}
        options={{
          title: 'Current Positions',
        }}
      />
      <Tab.Screen
        name="Log"
        component={TradeLog}
        options={{
          title: 'Log',
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          title: 'Dashboard',
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#76cf14',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {fontSize: 18},
        drawerStyle: {backgroundColor: '#222223'},
        header: ({route}) => <CustomDrawerHeaderOut title={route.name} />,
      }}
      drawerContent={props => (
        <View style={{flex: 1}}>
          <CustomDrawerHeader />
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{paddingVertical: 0}}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        </View>
      )}>
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="Account/Profile Settings"
        component={AccountSettings}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Default Trade Settings"
        component={TradeSettings}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Subscription Details"
        component={SubscriptionDetails}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Appearance Options"
        component={AppearanceOptions}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Notifications Settings"
        component={NotificationSettings}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Daily Report Notification"
        component={DailyReportNotification}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Broker Balance Tracking"
        component={BrokerBalanceTracking}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Advisor Settings"
        component={AdvisorSettings}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Weekly Report,Monthly"
        component={WeeklyReport}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Widget Settings"
        component={WidgetSettings}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Refer and Win Subscription!"
        component={ReferAndWin}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Advisor Claims Check"
        component={AdvisorClaimsCheck}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="FAQs and Help "
        component={FAQandHelp}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />

      <Drawer.Screen
        name="Logout Option"
        component={LogoutOption}
        options={{drawerItemStyle: {marginVertical: -10}}}
      />
      <Drawer.Screen
        name="Positions Form"
        component={PositionsForm}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: {height: 0},
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Tradelog Form"
        component={TradelogForm}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: {height: 0},
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Excel Sheet"
        component={TradeLogTable}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: {height: 0},
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Zoom Chart"
        component={ZoomChart}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: {height: 0},
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  activeIconContainer: {
    backgroundColor: '#76cf14',
    elevation: 5,
    shadowColor: '#76cf14',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    bottom: 25,
  },
});

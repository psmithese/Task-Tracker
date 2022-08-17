import { View, Text, Image} from 'react-native'
import React from 'react'
import TaskBar from './TaskBar';
import Task from './Task';
import Page from './Page';
import Select from './Select';
import PlannerScreen from './PlannerScreen';
import Header from './Header';


const HomeScreen = () => {
  return (
    <View style={{marginRight:20, marginLeft:20}}>
         <View>
          <Header/>
         <PlannerScreen/>
         <Page/>
         <Select/>
         <Task/>
         <TaskBar/>
         </View>     
    </View>
    
  )
}

export default HomeScreen
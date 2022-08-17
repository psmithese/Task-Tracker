import { View, Text } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';



const Page = () => {
  return (
      <View>
          <View style={{marginTop:30,flexDirection:"row", 
           justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
          <Octicons name="clock" size={20} color="black" />
             <Text style={{fontSize:17, marginLeft:10}}> Jun 26, 2022</Text> 
             <Text style={{fontSize:17, marginLeft:15}}>12:00AM</Text> 
          </View>
          <View style={{flexDirection:"row"}}>
          <Text>text</Text>
          <Text style={{marginLeft:10, 
            marginRight:10, 
            fontSize:17}}>All day</Text>
          </View>
          </View>
      </View>
   
  )
}

export default Page
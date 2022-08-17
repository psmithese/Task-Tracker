import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


const Header = () => {
  return (
    <View>
        <View style={{display:"flex"}}>
         <View style={{flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
            <AntDesign name="leftcircleo" size={20} color="black" />
           <Text style={{fontSize: 20, fontWeight: "600", marginTop:12}}> Task Tracker</Text>
           <Image source={require("../assets/status.png")} style={{width: 30, height: 35, 
          resizeMode: "cover", borderRadius:"50%"}}/>
         </View>
      </View>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
          <View>
          <Text style={{fontSize:18}}>Title</Text>
          </View>
       <View style={{flexDirection:"row"}}>
       <MaterialCommunityIcons name="clipboard-check-outline" size={20} color="black" style={{marginRight:10}}/>
        <Octicons name="pencil" size={20} color="black" />
       </View>
        
         </View>
    </View>
  )
}

export default Header
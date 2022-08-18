import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {Dropdown} from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';



const DATA= [



  {label: 'Does not repeat'},

  {label: 'Daily'},

  {label: 'Weekly on Teusday'},

  {label: 'Monthly on the last Tuesday'},

  {label: 'Anually on july 26'},

  {label: 'Every weekend(Monday to Friday)'},

  {label: 'Custom..'},

   

];

const Item = ({ label}) => (

    <Text style={[styles.label]}>{label}</Text>

);
const Select = () => {
  const [dropdown, setDropdown] = useState(null);

    const renderValue= ({ item }) => (

      <Item label={item.label}/>

    );

    return (

        <View>

            <Dropdown

                data={DATA}

                labelField="label"

                label={[dropdown]}

                renderValue={renderValue}

                onChange={item => {

                setDropdown(item.label);

               

                }}

                style={{width:140, marginLeft:36, border:2}}

                containerStyle={{width:250, borderRadius:20,

                   padding:0, margin:0}}

                    />
                    <View style={{flexDirection:"row"}}>
                    <View style={{marginRight:30}}>
                    <MaterialIcons name="timer" size={24} color="black" />
                    </View>
                    <View style={{flexDirection:"row"}}>
                      <TouchableOpacity style={{borderWidth:1.7, width:80, borderRadius:7}}>
                      <Text style={{alignSelf:"center", marginTop:3}}>12.00AM</Text>
                      </TouchableOpacity>
                       <Text style={{marginTop:4}}>-</Text>
                    <TouchableOpacity style={{borderWidth:1.7, width:80, borderRadius:7}}>
                    <Text style={{alignSelf:"center", marginTop:3}}>1.00PM</Text>
                    </TouchableOpacity>
                    
                    </View>
                    <View style={{marginLeft:60}}>
                      <TouchableOpacity style={{ borderWidth:1.7, 
                        width:"100%", padding:3, borderRadius:7, backgroundColor:"#FDB8B8"}}>
                      <Text>1hr:00:00</Text>
                      </TouchableOpacity>
                    
                    </View>
                    </View>
                    

        </View>

    );

};

export default Select
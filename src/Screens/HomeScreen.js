import React from 'react'
//  import {View,Text,StatusBar} from 'react-native'
// // import Header from '../Component/Header/TopHeader'
// import {useTheme} from '@react-navigation/native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function HomeScreen({navigation}) {
    // const {colors} =useTheme()
    // const theme =useTheme()
    return (
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //         <StatusBar barStyle={theme.dark?"light-content":"light-content"}/>
    //         <Text style={{color:colors.text}}>Home Screen</Text>
    // </View>
        // <Header title={"Home"}/>
        <Card  mode='outlined' style={{marginVertical:8, marginHorizontal:8}}>
        <Card.Title title="Gr Name"  />
        <Card.Content>
          <Title>New Assignment Added</Title>
          <Paragraph>Assignment is about this subject and Due date is 30 may</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>To View</Button>
        </Card.Actions>
      </Card>
      
    )
}

import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ion from 'react-native-vector-icons/MaterialIcons'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import pic from '../assets/smile_big.png'
export function DrawerContent(props) {
  
    
    const paperTheme = useTheme()
    
      

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image 
                                source={pic}
                                size={50}
                            />
                            <View style={{ marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Vyankatesh G</Title>
                                <Caption style={styles.caption}>@vyankatesh</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>10</Paragraph>
                                <Caption style={[styles.caption,{
                                    fontSize:14}]}> Reward</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>10</Paragraph>
                                <Caption style={[styles.caption,{
                                    fontSize:14}]}> Achievement</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color,size})=>(
                                <Icon name='home' color={color} size={size}/>
                            )}
                            label='Home'
                            onPress={()=>{props.navigation.navigate('Home')}}
                        />
                         <DrawerItem
                            icon={({color,size})=>(
                                <Ion name='leaderboard' color={color} size={size}/>
                            )}
                            label='LeaderBoard'
                            onPress={()=>{props.navigation.navigate('Leader')}}
                        />
                         <DrawerItem
                            icon={({color,size})=>(
                                <Icon name='account-outline' color={color} size={size}/>
                            )}
                            label='Profile'
                            onPress={()=>{props.navigation.navigate('Profile')}}
                        />
                         <DrawerItem
                            icon={({color,size})=>(
                                <Icon name='account-check-outline' color={color} size={size}/>
                            )}
                            label='Quiz'
                            onPress={()=>{props.navigation.navigate('Quiz')}}
                        />
                    </Drawer.Section>
                    {/* <Drawer.Section title='preferences'>
                            <TouchableRipple  onPress={()=>{props.toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents='none'>
                                        <Switch value={paperTheme.dark}/>
                                    </View>
                                </View>
                            </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView >
                <Drawer.Section style={styles.bottomDrawerSection} >
                    <DrawerItem
                        icon={({color,size})=>(
                            <Icon name='exit-to-app' color={color} size={size}/>
                        )}
                        label='Sign Out'
                        onPress={()=>{props.navigation.navigate('LoginScreen')}}
                    />

                </Drawer.Section>

           
        </View>
    )
       
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      lineHeight: 14,
      fontWeight: 'bold',
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      fontSize:13
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
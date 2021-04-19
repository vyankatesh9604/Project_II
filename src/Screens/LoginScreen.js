import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet ,
    TextInput,
    StatusBar,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';


export default function LoginScreen({navigation}) {
    const [data ,setData] = React.useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true
    })
    
    const textInputChnge =(val) =>{
        if(val.length !== 0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            })
        }else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })
        }
    }

    const handlePasswordIcon = (val) =>{
        setData({
            ...data,
            password:val
        })
    }
    const updateSecureEntry = () =>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        })
    }
    
    return (
            <View style={styles.container}>
                <StatusBar  barStyle="light-content"/>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Login</Text>
                </View>

        

                < Animatable.View 

                    animation="fadeInUpBig"
                    style={styles.footer}
                
                >

                     {/*--------------- Email Text Input ---------------------------- */}
                            <Text style={styles.text_footer}>Email</Text>
                            <View style={styles.action}>
                                <Icon 
                                    name="email"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput 
                                    placeholder="Your Email"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val)=>textInputChnge(val)}
                                />
                                {data.check_textInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                                </Animatable.View>
                                :null}
                            </View>

                    {/*--------------- Password Input ---------------------------- */}

                                <Text style={styles.text_footer,{
                                    marginTop:35
                                }}>Password</Text>
                                <View style={styles.action}>
                                    <Feather 
                                        name="lock"
                                        color="#05375a"
                                        size={20}
                                    />
                                    <TextInput 
                                        placeholder="Your Password"
                                        secureTextEntry={data.secureTextEntry ?  true :false}
                                        style={styles.textInput}
                                        autoCapitalize="none"
                                        onChangeText={(val)=>handlePasswordIcon(val)}
                                    />
                                    <TouchableOpacity onPress={updateSecureEntry}>
                                        {data.secureTextEntry ?
                                            <Feather
                                            name="eye-off"
                                            color="green"
                                            size={20}
                                            />:
                                            <Feather
                                                name="eye"
                                                color="green"
                                                size={20}
                                            />}
                                    </TouchableOpacity>
                                </View>



                    
                    
                            <View style={styles.button}>
                                {/*--------------- sign In Button ---------------------------- */}
                    

                                    <TouchableOpacity style={styles.signIn} onPress={()=>navigation.navigate('HomeDrawer')}>
                                        <LinearGradient
                                            colors={['#08d4c4','#01ab9d']}
                                            style={styles.signIn}
                                        >
                                        <Text style={styles.textSign,{
                                                color:'#fff'
                                        }}>Sign In</Text>

                                        </LinearGradient>
                                    </TouchableOpacity>

                                {/*--------------- sign up  Button ---------------------------- */}

                                    <TouchableOpacity 
                                    onPress={()=>navigation.navigate('RegisterScreen')}
                                    style={[styles.signIn, {
                                        borderColor: '#009387',
                                        borderWidth: 1,
                                        marginTop: 15
                                    }]}
                                    >
                                        <Text style={styles.textSign,{
                                            color:"#009387"
                                        }}>Sign Up</Text>
                                    </TouchableOpacity>
                            </View>
                    </Animatable.View>
            </View>
            
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

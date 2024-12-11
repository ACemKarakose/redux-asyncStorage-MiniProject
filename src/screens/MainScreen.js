import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Pressable,
    KeyboardAvoidingView, Platform
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {setName, saveDecrease, saveIncrease, deleteName} from "../redux/actionSlice";
import {loadCradential, saveName} from "../redux/actionSlice";
import {useEffect, useState} from "react";
import CustomBttn from "../components/customBttn";
const MainScreen = () => {

    const dispatch = useDispatch();
    const taskItem = useSelector(state =>state.taskTest)
    const [inputActive,setInputActive ] = useState(false);
    const [nameValue,setNameValue] = useState('');
    useEffect(() => {
     dispatch(loadCradential())

    }, []);

    const styles = StyleSheet.create({

        container : {
            flex : 1,
            justifyContent:'center',
            alignItems:'center',
            width:'100%'
        },
        firstScene : {
            width:'100%',
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:'2.5%'

        },
        textInputStyle : {
            color:inputActive ? '#9644f6' : 'purple',
            marginBottom : '5%',
            borderWidth:2,
            width:'100%',
            height:75,
            borderRadius:25,
            //padding:'5%',
            textAlign:'center',
            borderColor : inputActive ? '#9644f6' : 'purple'

},
        secondScene : {
            paddingTop:'20%',
            width:'100%',
            flex:1.5,
            justifyContent:'space-around',
            alignItems:'flex-start',
            flexDirection:'row'
        },
        cancelBttn:{
            width:100,
            height:50,
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            top: 5,
            right: 4,
            zIndex:10000
        }


    })

    const SavedName = () => {

        return(
            <View style={{flexDirection:'row',width:'100%',paddingHorizontal:5,justifyContent:'center',alignItems:'flex-start'}}>
                <Text style={{textAlign:'left',textAlignVertical:'center', color:'purple',fontSize:20, fontStyle:'italic'}}>Saved Value : </Text>
                <Text style={{textAlign:'left',textAlignVertical:'center', color:'green',fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>{taskItem.name}</Text>
            </View>
        )
    }

    const NullName = () => {
        return(
            <>
            <TextInput
                style={styles.textInputStyle}
                value={nameValue}
                maxLength={11}
                onChangeText={setNameValue}
                placeholder={'Save to memory...'}
                onFocus={()=>setInputActive(true)}
                onBlur={()=> setInputActive(false)}
            />
                <CustomBttn
                    name={`Save`}
                    fontSize={25}
                    width={150}
                    height={55}
                    onPress={()=> dispatch(saveName(`${nameValue}`))}/>
            </>
    )
    }

  return(
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? null : ""} style={{flex:1}}>
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} style={{flex:1,width:'100%'}}>
      <View style={styles.container}>
         <View style={styles.firstScene}>
             {
                 taskItem.name !== null ?
             <Pressable onPress={()=> dispatch(deleteName(null))} style={styles.cancelBttn}><Text style={{fontSize:30,color:'purple',textAlign:'center'}}>X</Text></Pressable>
             : ''
             }
             {taskItem.name === null ?  NullName() : SavedName()}
           </View>
          <View style={styles.secondScene}>
              <CustomBttn name={"-"} disabled={false} onPress={()=> dispatch(saveDecrease(1))}/>
              <View style={{marginTop:"-10%"}}>
                  <CustomBttn name={`${taskItem.counter}`} disabled={true} height={100} width={100}/>
              </View>
              <CustomBttn name={"+"} disabled={false}  onPress={()=> dispatch(saveIncrease(1))}/>
          </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  )
}


export default MainScreen;



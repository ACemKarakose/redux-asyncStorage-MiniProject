import {Text, TouchableOpacity, StyleSheet} from "react-native";

const CustomBttn = (props) => {


    const styles = StyleSheet.create({

        container : {

            backgroundColor : 'purple',
            width: props.width || 80,
            height: props.height ||  80,
            borderRadius: 25,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:2,
            borderColor:'#9644f6',
            margin: 2,
        },
        textStyle : {
            fontSize : props.fontSize || 35,
            textAlign:'center',
            color:'white',

        }
    })

    return(
        <TouchableOpacity  disabled={props.disabled || false}  onPress={props.onPress} style={styles.container}>
            <Text style={styles.textStyle}>{props.name}</Text>
        </TouchableOpacity>
    )
}



export default CustomBttn;


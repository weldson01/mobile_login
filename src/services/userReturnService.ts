import AsyncStorage from "@react-native-async-storage/async-storage";


export const getUser =  async ()=>{
    try{
        const response = await AsyncStorage.getItem("user");
        const responseJ = JSON.parse(response)
        return responseJ;
    }catch(err){
        console.log(err);
    }
}

export const saveUser = async (value)=>{
    try{
        await AsyncStorage.setItem("user", JSON.stringify(value))
        console.log("USER WAS SAVED")
    }catch(err){
        console.log(err);
    }
}
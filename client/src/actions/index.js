import axios from 'axios';

export function getcharacter(){
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/characters");  //aca es donde sucede   // la conexion entre el front y el back
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: json.data
        })
    }
}

export function getNameCharacters(name){
    return async function (dispatch){
        try{
            var json = await axios.get("http://localhost:3001/characters?name=" + name)
            return dispatch({
                type: "GET_NAME CHARACTERS",
                payload: json.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function filterCharactersByStatus(payload){
    console.log(payload)
    return {
        type: 'FILTER_BY_STATUS',
        payload
    }
}

export function filterCreated(payload) {
    return{
        type: 'FILTER_CREATED',
        payload
    }
}
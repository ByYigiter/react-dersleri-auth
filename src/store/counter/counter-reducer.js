import { COUNTER_DOWN, COUNTER_SET, COUNTER_UP } from "../types";
import { counterInitialState } from "./counter-initial-state";

export const counterReducer = (state=counterInitialState,action) =>{
    if(action.type === COUNTER_UP){
        const newState ={...state,counter:state.counter+1}
        return newState; //oluşturulan yeni state return edildiğinde mevcut state güncellenmiş olur

    }else if (action.type === COUNTER_DOWN){
        const newState ={...state,counter:state.counter-1}
        return newState; 
        
    }else if (action.type === COUNTER_SET){
        const newState ={...state,counter:action.payload}
        return newState; 

    }
    return state; // hiç bir if case ine girmezse geriye mevcut state i göndermek için yazıldı yazmazsak state i kaybederiz
}
import { SEND_MESSAGE } from '../_actions/types'

export default function (state = {}, action){
    switch(action.type){
        case SEND_MESSAGE:
            return { ...state, message: action.payload }
            break
        default:
            return state
    }
}
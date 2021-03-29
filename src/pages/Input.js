import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../_actions/message_action'


function Input({currentUser}){

    const dispatch = useDispatch()

    const [msg, setMsg] = useState("")
    const [user, setUser] = useState(null)


    const handleOnChange = (e) => {
        setMsg(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        handleOnSubmit() 
        setMsg("");
    }

    const handleOnSubmit = async (e) => {
        setUser(currentUser)



        let message = {
            author: user.name,
            content: msg
        }

        dispatch(sendMessage(message))
            .then(response =>{

                
            })
    }

    return(
        <div className="chat-bottom">
            <form onSubmit={ handleSubmit }>
                <TextField
                    label="내용을 입력하세요."
                    value={msg}
                    onChange={handleOnChange}
                    onKeyPress={(e) => {
                        if(e.key === "Enter"){
                            handleOnChange(e)
                        }
                    }}
                    style={{width: "73%"}}
                    />
                    <Button type="submit" variant="contained" color="primary"
                    style={{margin: "10px"}}
                     >전송</Button>
            </form>
        </div>
    )


}

export default Input;
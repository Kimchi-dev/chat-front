import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) =>({
    button: {
        margin: theme.spacing(1),
    },
}))

function Input({handleOnSubmit}){
    const [msg, setMsg] = useState("")

    const handleOnChange = (e) => {
        setMsg(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        handleOnSubmit(msg) 
        setMsg("");
    }

    const classes = useStyles()

    return(
        <div className="chat-bottom">
            <form onSubmit={ handleSubmit }>
                <TextField
                    label="내용을 입력하세요."
                    value={msg}
                    onChange={handleOnChange}
                    onKeyPress={(e) => {
                        if(e.key === "Enter"){
                            handleSubmit(e)
                        }
                    }}
                    style={{width: "84%"}}
                    />
                    <Button type="submit" variant="contained" color="primary"
                    style={{margin: "10px"}}
                     >전송</Button>
            </form>
        </div>
    )


}

export default Input;
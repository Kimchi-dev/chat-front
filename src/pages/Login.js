import React,{ useState } from 'react'
import { 
    TextField,
    Container,
    Button } from '@material-ui/core'
function Login({handleOnSubmit }){
    const [name , setName] = useState("")

    const handleOnChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        handleOnSubmit(name)
    }

    return (
        <Container maxWidth="sm" style={{textAlign:"center"}}>
            <h1>KIMCHI CHAT</h1>
            <form onSubmit={ handleSubmit }>
                <TextField id="standard-basic" label="닉네임을 입력하세요." 
                value={name}
                onChange={ handleOnChange } wid />
                <Button type="submit" variant="contained" color="primary" style={{margin:"10px"}}>Go !</Button>
            </form>
        </Container>
    )
}
export default Login;
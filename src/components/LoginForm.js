import { useState } from "react";

let initialForm = {
    nickname:"",
    password:"",
}

const LoginForm = ({setLoged}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!form.nickname||!form.password){
            alert("Datos Incompletos")
            return
        }
        
        setLoged(true)
        setForm(initialForm)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="nickname" placeholder="Nickname" onChange={handleChange} value={form.nickname}/>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password}/>
            <input type="submit" value="Login"/>
        </form>
     );
}

export default LoginForm;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
    const [name, setName] = useState ("");
    const [email, setEmail]= useState("");
    const navigate = useNavigate();

    const handleSubmit = async() => {
        const resoonse =await createUser({ name, email});
        localStorage.setItem("token", resoonse.data.token);
        navigate("/");

    };

    return(
        
    )
}
import { data, useNavigate } from "react-router-dom";




function Register() {
    const {Register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Registered Successfully!");
        navigate("/login");
    };
}
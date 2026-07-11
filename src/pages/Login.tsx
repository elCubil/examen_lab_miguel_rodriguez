import {Link} from "react-router-dom";
import {useState} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {

        if (!email || !password){
            alert("complete todos los campos");
            return;
        }

        try{
            const response=await api.post("/login", {email, password});
            const token=response.data.token;
            localStorage.setItem("token", token);
            navigate("/search");
        }


    return(
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl">Login</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                        className="input w.full"
                        placeholder="correo@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">contraseña</legend>
                        <input type="password"
                        className="input w.full"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </fieldset>
                    <button className="btn btn-primary mt-4"
                    onClick={() => console.log("email: ", email, "password: ", password)}
                    >iniciar sesion</button>
                    <p className="text-center mt-4">¿no tienes cuenta? 
                        {" "}
                        <Link className="link link - primary" to ="/register">Regístrate
                        </Link></p>

                </div>



            </div>
        </div>
    );

}
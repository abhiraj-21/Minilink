import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import TextField from "./TextField.jsx";
import {Link, useNavigate} from "react-router-dom";
import api from "../api/api.js";
import toast from "react-hot-toast";

const RegisterPage = () => {

    const [loader, setLoader] = useState(false);

    const navigate = useNavigate()

    const {register, handleSubmit, formState:{errors}, reset}
        = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }, mode: "onTouched"
    })

    const registerHandler = async (data) => {
        setLoader(true);
        try{
            const {data : response} = await api.post("/api/auth/public/register", data)
            console.log(response)
            reset()
            navigate("/login")
            toast.success("Registration successful. Please login.")
        }catch (error){
            console.log(error)
            toast.error("Registration failed. Please try again.")
        }finally{
            setLoader(false)
        }
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form onSubmit={handleSubmit(registerHandler)} className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
                <h1 className="text-center font-serif text-indigo-500 font-bold lg:text-3xl text-2xl">
                    Register Here
                </h1>

                <hr className="mt-2 mb-5 text-gray-300" />

                <div className="felx flex-col gap-3">
                    <TextField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        message="*Username is required"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        label="Email"
                        required
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        message="*Email is required"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        message="*Password is required"
                        register={register}
                        min={6}
                        errors={errors}
                    />
                </div>

                <button disabled={loader} type="submit"
                        className="w-full bg-custom-gradient-2 text-white font-semibold py-2 rounded-md mt-6 hover:cursor-pointer hover:opacity-80 duration-300">
                    {loader ? "Registering..." : "Register"}
                </button>

                <p className="text-center text-sm mt-4 text-slate-600">
                    Already have an account?
                    <Link to={"/login"}>
                        <span className="text-btnColor underline hover:cursor-pointer ">Login</span>
                    </Link>
                </p>

            </form>
        </div>
    )
}
export default RegisterPage

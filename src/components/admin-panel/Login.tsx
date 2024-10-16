import { sign } from "crypto";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen bg-black place-items-center grid">
      <button onClick={(e)=>signIn("google")} className="flex bg-white gap-4 px-8 py-4 items-center">
        <FcGoogle size={40} />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;

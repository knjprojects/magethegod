import React from "react";
import Link from "next/link";
import Form from "@/components/daisyui/Form";
const SignInForm = () => {
  return (
    <div className="h-screen flex items-center w-full justify-center">
      <Form sign="in" />
      <div className="flex flex-row">
        <h3>Do not have an account?</h3>
        <Link href="/auth/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInForm;

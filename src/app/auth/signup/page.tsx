import React from "react";
import Link from "next/link";
import Form from "@/components/daisyui/Form";
const SignUpForm = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Form sign="up" />
      <div className="flex flex-row">
        <h3>Already have an account?</h3>
        <Link href="/auth/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpForm;

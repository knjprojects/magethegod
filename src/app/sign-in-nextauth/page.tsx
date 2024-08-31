import { auth } from "@/auth";
import SignInButton from "@/components/SignInButton";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();

  if (session?.user) redirect("/");

  return <SignInButton type="github" />;
}

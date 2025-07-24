import SignInForm from "@/features/auth/components/signInForm";
import { auth } from "@/features/auth/services/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/tripsOverview");
  }
  return (
    <div className="w-full h-full flex items-center justify-center flex-col relative">
      <h1 className="text-5xl font-bold text-green-700 top-10 absolute">
        Bus Tracking System
      </h1>
      <SignInForm></SignInForm>
    </div>
  );
}

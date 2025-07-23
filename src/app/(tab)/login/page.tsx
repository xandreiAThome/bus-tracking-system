import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "@/features/auth/components/signInForm";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-[-100]">
      <Card className="w-[90%] sm:w-[350px] md:w-[450px] p-4 shadow-lg">
        <CardHeader className="flex flex-col items-center justify-center">
          <Image
            src="/amoec.jpg"
            alt="logo"
            width={150}
            height={150}
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          ></Image>
          <CardTitle className="text-xl font-bold mt-1 mb-[-10]">
            Welcome back
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <SignInForm></SignInForm>
        </CardContent>
      </Card>
    </div>
  );
}

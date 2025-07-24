import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "@/features/auth/components/signInForm";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-full flex items-center justify-center bg-gray-50">
      <Card className="w-10/12 sm:w-[350px] md:w-[450px] lg:w-[600px] shadow-lg">
        <CardHeader className="flex flex-col items-center pt-6 justify-center">
          <Image
            src="/amoec.jpg"
            alt="logo"
            width={150}
            height={150}
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          ></Image>
          <CardTitle className="text-3xl font-bold mt-1 mb-[-10] text-center">
            Trip Management System
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center pb-6">
          <SignInForm></SignInForm>
        </CardContent>
      </Card>
    </div>
  );
}

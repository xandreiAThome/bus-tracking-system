import { signOut } from "@/features/auth/services/auth";
import Link from "next/link";

export default function Unauthorzed() {
  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/signOut" });
  }
  return (
    <main className="flex gap-6 flex-col min-w-full justify-center items-center h-full relative">
      <Link
        href={"/tripsOverview"}
        className="text-lg font-bold absolute left-5 top-5 cursor-pointer bg-green-800 text-white rounded-lg px-4 py-2"
      >
        Home
      </Link>
      <button
        onClick={handleSignOut}
        className="text-lg font-bold absolute right-5 top-5 cursor-pointer bg-green-800 text-white rounded-lg px-4 py-2"
      >
        Log Out
      </button>
      <h1 className="text-4xl text-green-800 font-bold">
        You are not Authorized to access this website
      </h1>
      <h1 className="text-lg text-green-900">
        Contact the IT Department so you can be given access
      </h1>
    </main>
  );
}

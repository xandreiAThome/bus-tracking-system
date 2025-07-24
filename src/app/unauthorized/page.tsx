import { signOut } from "@/features/auth/services/auth";

export default function Unauthorzed() {
  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/signOut" });
  }
  return (
    <main className="flex gap-6 flex-col min-w-full justify-center items-center h-full relative">
      <button
        onClick={handleSignOut}
        className="text-lg font-bold absolute right-5 top-5"
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

import NavBar from "@/components/navbar";
import { auth, signOut } from "@/features/auth/services/auth";
import { redirect } from "next/navigation";

async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/signOut" });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session?.user?.role === "user") {
    redirect("/unauthorized");
  }

  return (
    <div className="h-full ">
      <NavBar handleSignOut={handleSignOut}></NavBar>

      {children}
    </div>
  );
}

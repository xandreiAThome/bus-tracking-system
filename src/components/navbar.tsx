"use client";

import { Undo2, AlignJustify, House } from "lucide-react";
import { SheetTrigger, SheetContent, Sheet, SheetTitle } from "./ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavBar({
  handleSignOut,
}: {
  handleSignOut: (formData: FormData) => void | Promise<void>;
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header
      className={cn(
        "p-2 bg-black/10 sm:bg-black/0 absolute flex w-full",
        pathname !== "/tripsOverview" ? "justify-between" : "justify-end"
      )}
    >
      {pathname !== "/tripsOverview" && (
        <Undo2 className="text-green-700" onClick={() => router.back()} />
      )}

      <Sheet>
        <SheetTrigger>
          <AlignJustify className="text-green-700" />
        </SheetTrigger>
        <SheetContent className="px-8 py-10 text-lg text-green-800 font-bold">
          <SheetTitle className="text-green-800">Navigation Menu</SheetTitle>
          <Link href={"/tripsOverview"} className="flex items-center gap-2">
            <House />
            Home
          </Link>
          <form action={handleSignOut}>
            <button type="submit" className="w-full text-left">
              Log Out
            </button>
          </form>
        </SheetContent>
      </Sheet>
    </header>
  );
}

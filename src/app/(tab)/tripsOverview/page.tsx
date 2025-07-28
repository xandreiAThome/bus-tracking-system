import { auth } from "@/features/auth/services/auth";
import { redirect } from "next/navigation";
import OverviewCard from "@features/trips/components/overviewCard";

export default async function TripsOverview() {
  // const session = await auth();

  // console.log(session?.user?.role);
  // if (session?.user?.role === "driver") {
  //   redirect("/map/1");
  // }
  return(
    <>
      <OverviewCard/>
    </>
  )
}

import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-up");
  }

  return (
    <div className=" flex flex-col items-center justify-center gap-4">
      <div className="w-100 flex gap-x-5 justify-end">
        <ThemeToggle />
        <UserButton />
      </div>
      <h1  className="font-bold font-great-vibes  ">Welcome to the</h1>
              <p className="font-cinzel">Grand</p>
              <p className="font-cinzel">Opening of</p> 
        <p className="text-5xl font-cinzel text-blue-500" >Watch Me</p>
        <p className="font-cormorant-garamond text-blue-500" >Sparkle <span className="text-blue-500 font-great-vibes" >& Shine</span></p>
      <Button variant="outline" className="m-4"> Click here </Button>
    </div>
  );
}

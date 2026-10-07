import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1  className="font-bold font-great-vibes text-blue-500 ">Welcome to the Home Page</h1>
      <Button variant="outline" className="m-4"> Click here </Button>
    </div>
  );
}

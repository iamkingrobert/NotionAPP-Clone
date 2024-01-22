import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heading } from "./(marketing)/_Components/heading";
import { Heroes } from "./(marketing)/_Components/heroes";
import { Footer } from "./(marketing)/_Components/footer";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
}

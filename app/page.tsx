import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-3">
        <Button label="Log in" type="submit" classname="" />
        <Button label="Sign in" type="submit" classname="bg-pink-500" />
        <Button label="Sign in" type="submit" classname="bg-green-500" />
      </div>
    </main>
  );
}

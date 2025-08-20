"use client";
import img from "../public/images/splashScreen.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/menu");
    }, 1500);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <main className=" relative bg-[#F9F3F4] h-screen">
      <section className="pt-30">
        <div className="flex justify-center flex-col items-center gap-6">
          <Image
            src={"/images/splashscreen-image.svg"}
            width={100}
            height={100}
            alt="splash screen"
            className="w-full"
          />
        </div>
      </section>
      <Image
        src={img}
        height={400}
        width={400}
        alt="Footer image in the splash screen"
        className="absolute bottom-0 left-0 mt-9 w-full"
        priority={true}
      />
    </main>
  );
}

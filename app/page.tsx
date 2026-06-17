"use client";
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
    <main className=" relative bg-[#f6e7ce] h-screen">
      <section className="pt-30">
        <div className="flex justify-center flex-col items-center gap-6 ">
          <Image
            src={"/images/splashscreen-image.svg"}
            width={100}
            height={100}
            alt="splash screen"
            className="w-1/2 mx-auto"
            
          />
        </div>
      </section>
      <Image
        src="/images/پترن.svg"
        width={1000}
        height={1000}
        alt="background pattern"
        style={{
          clipPath: "ellipse(150% 100% at 50% 0%)",
        }}
        className="absolute bottom-0 left-0 w-full h-96 object-cover"
      />
    </main>
  );
}
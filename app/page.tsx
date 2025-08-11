"use client";
import logo from "../public/images/logo.jpg";
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
    <main className="relative bg-[#F9F3F4] h-screen">
      <section className="pt-20">
        <Image
          className="mx-auto w-7/12"
          src={logo}
          height={400}
          width={400}
          alt="Logo image in the splash screen"
          priority={true}
        />
        <div className="text-[#795D4C] flex justify-center flex-col items-center gap-6">
          <h1 className="text-stone-600 text-5xl font-bold font-['Playfair_Display']">
            Crust
          </h1>
          <span style={{ direction: "rtl" }}>
            قهوه؟ شیرینی؟ حال خوب؟ اینجاست.
          </span>
        </div>
      </section>
      <Image
        src={img}
        height={400}
        width={400}
        alt="Footer image in the splash screen"
        className="mt-9 w-full"
        priority={true}
      />
    </main>
  );
}

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
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <main className="relative bg-[#FFFCF7] h-screen">
      <section className="pt-20">
        <Image
          className="mx-auto w-7/12"
          src={logo}
          height={400}
          width={400}
          alt="img"
        />
        <div className="text-[#795D4C] flex justify-center flex-col items-center gap-6">
          <h1 className="text-stone-600 text-5xl font-bold font-['Playfair_Display']">
            Bake Away
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
        alt="image"
        className=" w-full"
      />
    </main>
  );
}

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative bg-[#f6e7ce] min-h-screen">
      <section className="pt-20">
        <div className="flex justify-center flex-col items-center gap-8 px-6">
          <h1 className="text-8xl font-bold text-[#8B4513]">404</h1>
          <p className="text-2xl text-[#654321] text-center">
            صفحه مورد نظر پیدا نشد!
          </p>
          <p className="text-lg text-[#8B7355] text-center">
            متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
          </p>

          <button
            onClick={() => router.push("/menu/productlist")}
            className="mt-4 px-8 py-4 bg-[#cd4444] hover:bg-[#b33c3c] text-white rounded-2xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            بازگشت به منو
          </button>

          <Image
            src={"/images/splashscreen-image.svg"}
            width={150}
            height={150}
            alt="bakery logo"
            className="w-1/2 mx-auto mt-8 opacity-70"
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

import logo from "../public/images/logo.jpg";
import splash from "../public/images/splashScreen.png";
import Image from "next/image";
export default function Page() {
  return (
    <main className="relative bg-[#FFFCF7] h-screen">
      <section className="mt-15">
        <Image src={logo} height={400} width={400} alt="img" />
        <div className="text-[#795D4C] flex justify-center flex-col items-center gap-6">
          <h1 className="text-stone-600 text-5xl font-normal font-[FrederickatheGreat]">
            Bake Away
          </h1>
          <span>قهوه؟ شیرینی؟ حال خوب؟ اینجاست.</span>
        </div>
      </section>
      <Image
        src={splash}
        height={400}
        width={400}
        alt="img"
        className="absolute bottom-0 left-0 w-full"
      />
    </main>
  );
}

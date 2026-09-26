import Image from "next/image";
import FooterImg from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070809]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row">

        <div className="flex items-center gap-2 font-black tracking-widest text-white">
          <span className="grid h-8 w-8 place-items-center rounded">
            <Image
              src={FooterImg}
              alt="footer icon"
              width={40}
              height={40}
            />
          </span>

          FITLOG
        </div>

        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}

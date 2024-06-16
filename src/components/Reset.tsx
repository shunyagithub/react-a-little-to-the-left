import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useStore } from "../store";

gsap.registerPlugin(useGSAP);

function Reset() {
  const reset = useStore((state) => state.reset);

  return (
    <div className="absolute bottom-0 z-30 my-auto w-fit rounded-t-xl bg-slate-500/50 px-16 py-4 ">
      <div
        className="mx-auto size-16 bg-[url(./reset.png)] bg-contain bg-center bg-no-repeat transition-all duration-300 hover:scale-125 hover:cursor-pointer"
        onClick={reset}
      />
    </div>
  );
}

export default Reset;
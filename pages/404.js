import ButtonLink from "@/src/components/ButtonLink/ButtonLink";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    var pupils = document.querySelectorAll(".circle-1");
    window.addEventListener("mousemove", (e) => {
      pupils.forEach((pupil) => {
        // get x and y postion of cursor
        var rect = pupil.getBoundingClientRect();
        var x = (e.pageX - rect.left) / 50 + "px";
        var y = (e.pageY - rect.top) / 50 + "px";
        pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
      });
    });
  }, []);
  return (
    <div className="bg-white h-screen w-screen overflow-hidden flex justify-center items-center fixed top-0 z-[9999]">
      <div className="circle-1 rounded-full  w-[200vh] h-[200vh] bg-blue-50 flex justify-center items-center">
        <div className="circle-1 rounded-full  w-[170vh] h-[170vh] bg-blue-100 flex justify-center items-center shadow-inner">
          <div className="circle-1 rounded-full  w-[110vh] h-[110vh] bg-blue-200 flex justify-center items-center shadow-inner">
            <div className="circle-1 rounded-full  w-[60vh] h-[60vh] bg-blue-300 flex justify-center items-center shadow-inner"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-[40%] text-center">
        <h2 className="text-9xl font-heading font-semibold">404</h2>
        <p className="mb-3 text-xl">صفحه مورد نظر یافت نشد!</p>
        <ButtonLink
          label="انتقال به صفحه نخست"
          destination="/"
        />
      </div>
    </div>
  );
}

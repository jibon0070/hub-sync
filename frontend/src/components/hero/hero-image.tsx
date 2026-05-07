import type { ComponentProps } from "react";
import fontRender from "../../assets/font-render.png";
import sprignAbstractShape from "../../assets/spring-abstract-shape.png";

export default function HeroImage({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div {...props} className={`${className} relative`}>
      <img
        src={sprignAbstractShape}
        alt="font render"
        className="w-[650px] absolute top-0 left-0 opacity-2"
      />
      <img
        src={fontRender}
        alt="font render"
        className="block relative w-[550px]"
      />
    </div>
  );
}

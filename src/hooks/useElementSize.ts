import { DependencyList, useEffect, useRef, useState } from "react";

export function useElementSize(...deps: DependencyList) {
  const [width, setWidth] = useState<any>(0);
  const [height, setHeight] = useState<any>(0);
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        setWidth(elementRef.current.offsetWidth);
        setHeight(elementRef.current.offsetHeight);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef, width, height, deps]);

  return [elementRef, width, height];
}

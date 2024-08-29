import * as React from "react";

export function useElementSize(...deps: React.DependencyList) {
  const [width, setWidth] = React.useState<any>(0);
  const [height, setHeight] = React.useState<any>(0);
  const elementRef = React.useRef<any>(null);

  React.useEffect(() => {
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

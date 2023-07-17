import { useEffect, useRef, useState } from "react";

const importAll = (r: any) => {
  return r.keys().reduce((all: any, item: any, index: number) => {
    const alt = item.replace("./", "");
    const className = alt === "img-1.png" ? "top-section-img" : "";
    return [...all, { img: r(item), alt, className }];
  }, []);
};

interface importedImages {
  img: string;
  alt: string;
  className?: string;
}

export const images: importedImages[] = importAll(
  require.context("./imgs", false)
);

export const useElementOnScreen = (options: any) => {
  const ref: any = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, isVisible, options]);

  return [ref, isVisible];
};

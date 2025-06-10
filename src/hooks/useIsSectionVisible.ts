import { useEffect, useState } from 'react';

export function useIsSectionVisible(sectionId: string, threshold = 0.6) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionId, threshold]);

  return isVisible;
}

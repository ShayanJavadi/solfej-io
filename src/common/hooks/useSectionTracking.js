import { useEffect, useRef } from 'react';
import { trackSectionView } from '../utils/analytics';

export default function useSectionTracking(sectionName) {
    const ref = useRef(null);
    const hasFired = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasFired.current) {
                    hasFired.current = true;
                    trackSectionView(sectionName);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [sectionName]);

    return ref;
}

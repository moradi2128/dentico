import React, { useEffect } from 'react';
import { ArrowSmallUpIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {

        let scrollPosition = 0;

        const isScrollingDown = () => {
            let scrollingDown = false;
            let newScrollPosition = window.pageYOffset;
            if (newScrollPosition > scrollPosition) {
                scrollingDown = true;
            }
            scrollPosition = newScrollPosition;
            return scrollingDown;
        };

        const handleScroll = () => {
            const scrollToTopButton = document.querySelector('[data-backToTopButton]');
            if (isScrollingDown() || window.pageYOffset == 0) {
                scrollToTopButton?.classList.add('opacity-0', 'invisible');
                scrollToTopButton?.classList.remove('opacity-100', 'visible');
            } else {
                scrollToTopButton?.classList.remove('opacity-0', 'invisible');
                scrollToTopButton?.classList.add('opacity-100', 'visible');
            }
        };

        window.addEventListener("scroll", handleScroll);

    });

    return (
        <div data-backToTopButton role="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top"
            className="fixed bottom-4 right-2 z-[999] group shadow-back-to-top opacity-0 invisible
         w-[50px] h-[50px] rounded-full
         flex justify-center items-center
         shadow-custom-lg
         bg-white

         ">
            <ChevronUpIcon width="30" height="20" className="text-gray-700 transition-all duration-500 relative group-hover:-mt-1" />
        </div>

    )
}

export default BackToTop



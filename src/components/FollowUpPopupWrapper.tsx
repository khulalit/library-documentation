"use client";
import { useEffect, useState } from "react";
import FollowMePopup from "./FollowNudgePopup";

export default function FollowUpPopupWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrolledRatio = scrollY / (docHeight - winHeight);

      if (!hasTriggered && scrolledRatio >= 0.5) {
        setHasTriggered(true);

        setTimeout(() => {
          setIsOpen(true);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);
  return (
    <FollowMePopup
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    />
  );
}

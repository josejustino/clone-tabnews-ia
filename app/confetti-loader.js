"use client";

import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("./confetti"), {
  ssr: false,
  loading: () => null,
});

export default function ConfettiLoader() {
  return <Confetti />;
}

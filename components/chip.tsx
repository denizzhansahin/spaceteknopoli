"use client";
import React from "react";
import { Chip } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

export default function App() {
  return (
    <Link isExternal href={siteConfig.links.youtube}>
      <Chip
        variant="shadow"
        classNames={{
          base: "bg-gradient-to-br from-red-500 to-red-500 border-none border-white/50 shadow-pink-500/30 p-2",
          content: "drop-shadow shadow-black text-white",
        }}
      >
        <span className="font-semibold text-xs">✨ En İyi Videolarmızı İzleyin!</span>
      </Chip></Link>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";

export function EwolynLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/ewolyn-logo.jpg"
      alt="Ewolyn Logo"
      width={180}
      height={60}
      className={cn("h-auto w-auto", className)}
      priority
    />
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/utils";

interface MobileNavProps {
  commonDict: Record<string, string>;
  locale: Locale;
}

export function MobileNav({ commonDict, locale }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: commonDict["nav.home"] },
    { href: `/${locale}/about`, label: commonDict["nav.about"] },
    { href: `/${locale}/products`, label: commonDict["nav.products"] },
    { href: `/${locale}/contact`, label: commonDict["nav.contact"] },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            className={cn(
              "fixed top-0 right-0 z-50 h-full w-72 bg-background border-l shadow-xl",
              "animate-slide-down p-6 pt-20"
            )}
          >
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 rounded-lg text-base font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

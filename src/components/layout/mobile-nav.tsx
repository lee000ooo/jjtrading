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
  const [partnerOpen, setPartnerOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: commonDict["nav.home"] },
    { href: `/${locale}/about`, label: commonDict["nav.about"] },
    { href: `/${locale}/products`, label: commonDict["nav.products"] },
    { href: `/${locale}/contact`, label: commonDict["nav.contact"] },
  ];

  const partnerSubLinks = [
    { href: `/${locale}/partner`, label: commonDict["nav.partner"] },
    { href: `/${locale}/partner/shuofeng`, label: commonDict["nav.partner.shuofeng"] },
    { href: `/${locale}/partner/youchang`, label: commonDict["nav.partner.youchang"] },
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
              {/* Partner Sub-links */}
              <div className="ml-4 border-l-2 border-primary/20 pl-3 space-y-1">
                <button
                  onClick={() => setPartnerOpen(!partnerOpen)}
                  className="flex items-center gap-1 px-4 py-3 rounded-lg text-base font-medium hover:bg-primary/5 hover:text-primary transition-colors w-full text-left"
                >
                  {commonDict["nav.partner"]}
                  <svg
                    className={cn(
                      "h-3 w-3 transition-transform ml-auto",
                      partnerOpen && "rotate-180"
                    )}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {partnerOpen && partnerSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

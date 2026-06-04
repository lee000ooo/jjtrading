"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sun,
  Moon,
  ChevronDown,
  Globe,
  Cpu,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, type Locale, localeNames } from "@/lib/utils";
import { useTheme } from "@/components/layout/theme-provider";
import { MobileNav } from "@/components/layout/mobile-nav";
import { useState, useRef, useEffect } from "react";

interface HeaderProps {
  commonDict: Record<string, string>;
  locale: Locale;
}

export function Header({ commonDict, locale }: HeaderProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const locales: { code: Locale; name: string; flag: string }[] = [
    { code: "ru", name: localeNames.ru, flag: "🇷🇺" },
    { code: "en", name: localeNames.en, flag: "🇬🇧" },
    { code: "zh", name: localeNames.zh, flag: "🇨🇳" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocalePath = (newLocale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && ["ru", "en", "zh"].includes(segments[0]!)) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    return "/" + segments.join("/");
  };

  const isActive = (path: string) => {
    if (path === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: `/${locale}`, label: commonDict["nav.home"] },
    { href: `/${locale}/about`, label: commonDict["nav.about"] },
    { href: `/${locale}/products`, label: commonDict["nav.products"] },
    { href: `/${locale}/partner`, label: commonDict["nav.partner"] },
    { href: `/${locale}/contact`, label: commonDict["nav.contact"] },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group"
          >
            <img
              src="/images/logo.png"
              alt="璟江贸易"
              className="h-9 w-auto transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-tight">
                璟江<span className="text-primary">贸易</span>
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
                {commonDict["header.tagline"]}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative hidden sm:block" ref={langRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLangOpen(!langOpen)}
                className="gap-1.5"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{locale.toUpperCase()}</span>
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform",
                    langOpen && "rotate-180"
                  )}
                />
              </Button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-card shadow-lg animate-slide-down overflow-hidden">
                  {locales.map((l) => (
                    <Link
                      key={l.code}
                      href={switchLocalePath(l.code)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-muted",
                        l.code === locale && "bg-primary/5 text-primary font-medium"
                      )}
                      onClick={() => setLangOpen(false)}
                    >
                      <span>{l.flag}</span>
                      <span>{l.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={commonDict["header.themeToggle"]}
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            {/* Contact Phone - Desktop */}
            <a
              href="tel:+8613580353907"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+86 135-8035-3907</span>
            </a>

            {/* Mobile Nav */}
            <MobileNav commonDict={commonDict} locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}

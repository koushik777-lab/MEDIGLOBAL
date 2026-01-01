import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Treatments", href: "/treatments" },
    { name: "Doctors", href: "/doctors" },
    { name: "Cost Guide", href: "/cost" },
    { name: "Process", href: "/process" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3"
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/10 group-hover:shadow-blue-900/20 transition-all">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-900 leading-tight tracking-tight">
                MediGlobal
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                Premium Healthcare
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location === link.href
                    ? "text-primary font-semibold"
                    : "text-slate-600"
                )}
              >
                {link.name}
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full"
                  />
                )}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="ghost" className="gap-2 text-slate-600 font-medium hover:text-primary hover:bg-blue-50">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="rounded-full px-6 bg-primary hover:bg-sky-700 shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5 font-semibold">
              <FileText className="w-4 h-4 mr-2" />
              Get Free Opinion
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-lg font-medium text-slate-900 py-2 border-b border-slate-50 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button className="w-full justify-center bg-primary">
                  Get Free Opinion
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  Upload Reports
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

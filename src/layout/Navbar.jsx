import {Button} from "@/components/Button"
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                MZ<span className="text-primary">.</span>
            </a>

            {/* Desktop Nav*/}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex item-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foregound rounded-full hover:bg-surface">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/*CTA Button*/}
            <div className="hidden md:block">
                <Button size="sm">Contact me</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-foregound cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu  size={24}/>}
            </button>

        </nav>

        {/*Mobile Menu*/}
        {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col">
                {navLinks.map((link, index) => (
                    <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foregound py-2">
                        {link.label}
                    </a>
                ))}
                <Button size="sm">Contact me</Button>
            </div>
        </div>
        )}

    </header>
    )
};
"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Mouse, Crown } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
}

interface HeaderProps {
  navigationItems: NavigationItem[];
}

export function Header({ navigationItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-blue-900 text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo和网站名称 */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Mouse className="h-8 w-8 transition-transform duration-300 hover:scale-110" />
              <Crown className="h-4 w-4 text-yellow-400 -ml-2 -mt-4 transition-transform duration-300 hover:scale-125" />
            </div>
            <div>
              <h1 className="text-xl font-bold">小鼠帝国政府网</h1>
              <p className="text-xs text-blue-200">官方政府门户网站</p>
            </div>
          </div>

          {/* 桌面端导航 */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`text-sm transition-all duration-300 px-2 py-1 rounded-md ${isActive 
                    ? 'text-white bg-blue-800 font-medium' 
                    : 'text-blue-100 hover:text-white hover:bg-blue-800'}`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* 移动端菜单按钮 */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-blue-800 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 transition-transform duration-300 rotate-90" /> : <Menu className="h-5 w-5 transition-transform duration-300" />}
          </Button>
        </div>

        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blue-800 animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`text-sm text-left py-3 px-4 rounded-md transition-all duration-300 ${isActive 
                      ? 'text-white bg-blue-800 font-medium' 
                      : 'text-blue-100 hover:text-white hover:bg-blue-800'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
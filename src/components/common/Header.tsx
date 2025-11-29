"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, Mouse, Crown, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo和网站名称 */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mouse className="h-8 w-8 md:h-10 md:w-10" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Crown className="h-4 w-4 md:h-6 md:w-6 text-yellow-400 -ml-2 -mt-4" />
              </motion.div>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold tracking-tight">小鼠帝国政府网</h1>
              <p className="hidden sm:block text-xs text-primary-foreground/80">官方政府门户网站</p>
            </div>
          </motion.div>

          {/* 桌面端导航 */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${isActive 
                    ? 'bg-primary-foreground/10 text-primary-foreground font-semibold' 
                    : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </nav>

          {/* 桌面端功能按钮 */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="h-5 w-5 text-primary-foreground/80" />
            </motion.button>
            <motion.button
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="h-5 w-5 text-primary-foreground/80" />
            </motion.button>
          </div>

          {/* 移动端菜单按钮 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <motion.div
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-6 w-6" />
                </motion.div> : 
                <motion.div
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              }
            </Button>
          </motion.div>
        </div>

        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden py-4 border-t border-primary-foreground/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`text-sm font-medium py-3 px-4 rounded-lg transition-all duration-300 ${isActive 
                      ? 'bg-primary-foreground/10 text-primary-foreground font-semibold' 
                      : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
              <div className="flex space-x-3 pt-4 border-t border-primary-foreground/10">
                <Button variant="ghost" className="flex-1 justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  搜索
                </Button>
                <Button variant="ghost" className="flex-1 justify-start">
                  <User className="h-4 w-4 mr-2" />
                  个人中心
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
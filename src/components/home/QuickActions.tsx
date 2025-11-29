import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard } from "../common/AnimatedSection";

interface QuickAction {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

interface QuickActionsProps {
  quickActions: QuickAction[];
}

export function QuickActions({ quickActions }: QuickActionsProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <AnimatedSection>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            我该如何...
          </h3>
        </AnimatedSection>
        
        {/* 快捷操作网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <AnimatedCard key={index} index={index}>
              <a
                href={action.href}
                className="group block"
              >
                <Card className="bg-card border border-border cursor-pointer transition-all duration-300 group-hover:shadow-xl overflow-hidden relative">
                  {/* 渐变背景效果 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-center space-x-3">
                      {/* 图标容器 */}
                      <motion.div 
                        className="p-3 bg-primary/10 rounded-xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <action.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <CardTitle className="text-lg font-semibold">{action.title}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </CardContent>
                  
                  {/* 悬停时显示的箭头 */}
                  <motion.div 
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 3 }}
                  >
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </Card>
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
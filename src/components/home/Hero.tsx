import { Button } from "../ui/button";
import { Cookie, HelpCircle, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard } from "../common/AnimatedSection";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-32 overflow-hidden relative">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 标题 */}
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              让政府服务更易于查找
            </h2>
          </AnimatedSection>
          
          {/* 副标题 */}
          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              小鼠帝国政府官方网站，为所有帝国公民提供便捷的政府服务信息和在线办理
            </p>
          </AnimatedSection>
          
          {/* 按钮组 */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full max-w-md mx-auto">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 px-6 sm:px-8 w-full sm:w-auto"
              >
                <Cookie className="mr-2 h-5 w-5" />
                查看所有服务
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 px-6 sm:px-8 w-full sm:w-auto"
              >
                <HelpCircle className="mr-2 h-5 w-5" />
                获取帮助
              </Button>
            </div>
          </AnimatedSection>
          
          {/* 优势卡片 */}
          <AnimatedSection delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedCard>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20">
                  <div className="bg-primary-foreground/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">官方认证</h3>
                  <p className="text-primary-foreground/80">所有服务均经过帝国政府官方认证</p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard index={1}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20">
                  <div className="bg-primary-foreground/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">24/7 服务</h3>
                  <p className="text-primary-foreground/80">随时随地访问政府服务信息</p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard index={2}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20">
                  <div className="bg-primary-foreground/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">公民优先</h3>
                  <p className="text-primary-foreground/80">专为帝国公民设计的便捷服务</p>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
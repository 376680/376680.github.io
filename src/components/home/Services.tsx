import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { LucideIcon, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard, AnimatedItem } from "../common/AnimatedSection";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* 标题和副标题 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              热门政府服务
            </h3>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground">
              查找您需要的政府服务，轻松获取相关信息和在线办理
            </p>
          </AnimatedSection>
        </div>
        
        {/* 服务卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={index} index={index}>
              <Card className="bg-card border border-border hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* 卡片顶部装饰 */}
                <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    {/* 图标容器 */}
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-xl mt-1"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <service.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold mb-1">{service.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <AnimatedItem key={itemIndex} index={itemIndex}>
                        <li className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary cursor-pointer group">
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 mr-2 text-primary/50 group-hover:text-primary transition-colors" />
                            {item}
                          </div>
                          <motion.div 
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ x: 2 }}
                          >
                            <ArrowRight className="h-4 w-4 text-primary" />
                          </motion.div>
                        </li>
                      </AnimatedItem>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
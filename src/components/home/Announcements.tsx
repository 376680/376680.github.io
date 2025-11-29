import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Shield, Building, Users, HelpCircle, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard } from "../common/AnimatedSection";

interface Announcement {
  title: string;
  date: string;
  content: string;
  importance: "重要" | "通知";
}

export function Announcements() {
  const announcements: Announcement[] = [
    {
      title: "帝国奶酪配给制度调整通知",
      date: "2024年1月15日",
      content: "由于近期猫头鹰威胁等级升高，帝国总务管理局决定调整奶酪配给制度。所有公民需重新登记身份芯片ID，以确保配给准确发放...",
      importance: "重要"
    },
    {
      title: "新一批幼鼠奶粉补贴开始发放",
      date: "2024年1月12日",
      content: "帝国福利局宣布，2024年第一季度幼鼠奶粉补贴即日起开始接受申请。符合条件的家庭可通过在线平台提交申请材料...",
      importance: "通知"
    }
  ];

  const quickLinks = [
    { icon: Shield, label: "帝国监察院", href: "#" },
    { icon: Building, label: "帝国总务管理局", href: "#" },
    { icon: Users, label: "公民服务中心", href: "#" },
    { icon: HelpCircle, label: "在线帮助", href: "#" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* 最新公告 */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-foreground mb-8">
                最新帝国公告
              </h3>
            </AnimatedSection>
            
            {/* 公告时间线 */}
            <div className="space-y-8 relative">
              {/* 时间线竖线 */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
              
              {announcements.map((announcement, index) => (
                <AnimatedCard key={index} index={index} className="relative">
                  {/* 时间线节点 */}
                  <div className="absolute left-0 top-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md hidden md:flex z-10">
                    <Clock className="h-5 w-5 text-primary-foreground" />
                  </div>
                  
                  <Card className="bg-card border border-border hover:shadow-xl transition-all duration-300 md:ml-12">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between flex-wrap gap-3">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-xl font-semibold mb-1 truncate">{announcement.title}</CardTitle>
                          <CardDescription className="flex items-center text-sm">
                            <Clock className="h-3 w-3 mr-1 text-primary/60" />
                            发布时间：{announcement.date}
                          </CardDescription>
                        </div>
                        <Badge 
                          variant={announcement.importance === "重要" ? "destructive" : "secondary"} 
                          className="whitespace-nowrap"
                        >
                          {announcement.importance}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {announcement.content}
                      </p>
                      <AnimatedSection delay={0.3}>
                        <div className="mt-4">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-primary hover:text-primary/80 p-0 h-auto"
                          >
                            阅读全文
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </AnimatedSection>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-foreground mb-8">
                快速链接
              </h3>
            </AnimatedSection>
            
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <AnimatedCard key={index} index={index}>
                  <Card className="bg-card border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-4 h-auto text-left"
                      onClick={() => window.location.href = link.href}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <link.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium">{link.label}</span>
                        </div>
                        <motion.div 
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 2 }}
                        >
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </motion.div>
                      </div>
                    </Button>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
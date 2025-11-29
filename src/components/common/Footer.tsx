import { Separator } from "../ui/separator";
import { Mouse, Crown, ArrowRight, Shield, Clock, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 品牌信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-2">
                <Mouse className="h-8 w-8 text-primary" />
                <Crown className="h-4 w-4 text-yellow-400 -ml-2 -mt-3" />
              </div>
              <span className="text-xl font-bold text-foreground">小鼠帝国政府</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              为所有帝国公民提供优质、高效、便捷的政府服务
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Shield className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Phone className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* 热门服务 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">热门服务</h4>
            <ul className="space-y-4">
              {[
                "帝国通行证", 
                "基础奶酪保障", 
                "税务申报", 
                "入籍申请"
              ].map((item, index) => (
                <motion.li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span>{item}</span>
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 2 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* 政府部门 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">政府部门</h4>
            <ul className="space-y-4">
              {[
                "帝国总务管理局", 
                "帝国福利局", 
                "帝国财政部", 
                "帝国监察院"
              ].map((item, index) => (
                <motion.li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span>{item}</span>
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 2 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* 联系我们 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">联系我们</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">紧急热线</p>
                  <p className="text-sm text-muted-foreground">帝国鼠洞123号</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">办公时间</p>
                  <p className="text-sm text-muted-foreground">9:00-17:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">邮箱</p>
                  <p className="text-sm text-muted-foreground">empire@mouse.gov</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <Separator className="mb-8 bg-border" />
        
        {/* 底部信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              © 2024 小鼠帝国政府 版权所有
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "隐私政策", 
              "使用条款", 
              "无障碍访问", 
              "网站地图"
            ].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
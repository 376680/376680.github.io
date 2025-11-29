import { Separator } from "./ui/separator";
import { Mouse, Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mouse className="h-6 w-6" />
              <Crown className="h-3 w-3 text-yellow-400 -ml-2 -mt-3" />
              <span className="font-bold">小鼠帝国政府</span>
            </div>
            <p className="text-sm text-blue-200">
              为所有帝国公民提供优质的政府服务
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">热门服务</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><button className="hover:text-white transition-colors">帝国通行证</button></li>
              <li><button className="hover:text-white transition-colors">基础奶酪保障</button></li>
              <li><button className="hover:text-white transition-colors">税务申报</button></li>
              <li><button className="hover:text-white transition-colors">入籍申请</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">政府部门</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><button className="hover:text-white transition-colors">帝国总务管理局</button></li>
              <li><button className="hover:text-white transition-colors">帝国福利局</button></li>
              <li><button className="hover:text-white transition-colors">帝国财政部</button></li>
              <li><button className="hover:text-white transition-colors">帝国监察院</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>紧急热线：帝国鼠洞123号</li>
              <li>办公时间：9:00-17:00</li>
              <li>邮箱：empire@mouse.gov</li>
              <li><button className="hover:text-white transition-colors">在线客服</button></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-blue-800" />
        
        <div className="text-center text-sm text-blue-200">
          <p>© 2024 小鼠帝国政府 版权所有 | 隐私政策 | 使用条款 | 无障碍访问</p>
        </div>
      </div>
    </footer>
  );
}
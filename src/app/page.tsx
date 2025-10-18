"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle, 
  Menu, 
  X, 
  CreditCard, 
  Users, 
  DollarSign, 
  Briefcase, 
  Shield, 
  Plane, 
  Building, 
  Heart,
  FileText,
  HelpCircle,
  ChevronRight,
  Mouse,
  Crown,
  Cookie
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const quickActions = [
    {
      title: "获取帝国通行证",
      description: "申请穿越不同鼠群领地的官方证件",
      icon: CreditCard,
      href: "/immigration",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200"
    },
    {
      title: "查找被遗忘的葵花籽",
      description: "搜索您可能拥有的被遗忘仓库",
      icon: DollarSign,
      href: "/services",
      color: "bg-green-50 hover:bg-green-100 border-green-200"
    },
    {
      title: "申请基础奶酪保障",
      description: "了解帝国公民福利和经济援助",
      icon: Heart,
      href: "/benefits",
      color: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200"
    },
    {
      title: "外来小鼠入籍申请",
      description: "成为帝国公民的完整指南",
      icon: Users,
      href: "/immigration",
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200"
    }
  ];

  const services = [
    {
      title: "政府福利",
      description: "基础奶酪保障、幼鼠奶粉补贴等",
      icon: Heart,
      items: ["基础奶酪保障", "幼鼠奶粉补贴", "伤残小鼠勇士关爱", "老年小鼠养老计划"]
    },
    {
      title: "移民与公民身份",
      description: "入籍申请、永久居住权等",
      icon: Users,
      items: ["外来小鼠入籍", "永久居住权", "身份芯片ID", "帝国通行证"]
    },
    {
      title: "金钱与信贷",
      description: "被遗忘的葵花籽、财务管理",
      icon: DollarSign,
      items: ["被遗忘的葵花籽", "奶酪贡品管理", "个人财务规划", "紧急奶酪援助"]
    },
    {
      title: "工作与劳动",
      description: "就业机会、劳动权益保护",
      icon: Briefcase,
      items: ["帝国工作机会", "奶酪店开设指南", "劳动法保护", "失业奶酪救济"]
    },
    {
      title: "税收与财政",
      description: "奶酪贡品、税务申报",
      icon: FileText,
      items: ["奶酪贡品计算", "年度税务申报", "税务减免政策", "企业税收优惠"]
    },
    {
      title: "旅行与探索",
      description: "帝国领地探索、安全指南",
      icon: Plane,
      items: ["领地探索许可", "安全路线规划", "猫头鹰威胁预警", "跨境旅行指南"]
    }
  ];

  const navigationItems = [
    { name: "关于帝国", href: "/about" },
    { name: "政府福利", href: "/benefits" },
    { name: "移民入籍", href: "/immigration" },
    { name: "服务中心", href: "/services" },
    { name: "灾害预警", href: "#" },
    { name: "投诉建议", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 政府停摆通知横幅 */}
      <Alert className="bg-red-50 border-red-200 text-red-800 rounded-none">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="text-sm font-medium">
          由于政府临时停摆，本网站的部分内容目前无法更新。
        </AlertDescription>
      </Alert>

      {/* 顶部导航栏 */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo和网站名称 */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Mouse className="h-8 w-8" />
                <Crown className="h-4 w-4 text-yellow-400 -ml-2 -mt-4" />
              </div>
              <div>
                <h1 className="text-xl font-bold">小鼠帝国政府网</h1>
                <p className="text-xs text-blue-200">官方政府门户网站</p>
              </div>
            </div>

            {/* 桌面端导航 */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm hover:text-blue-200 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* 移动端菜单按钮 */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-blue-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* 移动端导航菜单 */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-blue-800">
              <div className="grid grid-cols-2 gap-2">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm text-left py-2 px-3 hover:bg-blue-800 rounded transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero 区域 */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            让政府服务更易于查找
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            小鼠帝国政府官方网站，为所有帝国公民提供便捷的政府服务信息和在线办理
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
              <Cookie className="mr-2 h-4 w-4" />
              查看所有服务
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
              <HelpCircle className="mr-2 h-4 w-4" />
              获取帮助
            </Button>
          </div>
        </div>
      </section>

      {/* 快捷操作区域 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">我该如何...</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <a key={index} href={action.href}>
                <Card className={`${action.color} cursor-pointer transition-all hover:shadow-md`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <action.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-gray-600">
                      {action.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* 政府服务主题区域 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">热门政府服务</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-sm">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        <ChevronRight className="h-3 w-3 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 政府公告区域 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">最新帝国公告</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">帝国奶酪配给制度调整通知</CardTitle>
                        <CardDescription>发布时间：2024年1月15日</CardDescription>
                      </div>
                      <Badge variant="secondary">重要</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      由于近期猫头鹰威胁等级升高，帝国总务管理局决定调整奶酪配给制度。所有公民需重新登记身份芯片ID，以确保配给准确发放...
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">新一批幼鼠奶粉补贴开始发放</CardTitle>
                        <CardDescription>发布时间：2024年1月12日</CardDescription>
                      </div>
                      <Badge variant="outline">通知</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      帝国福利局宣布，2024年第一季度幼鼠奶粉补贴即日起开始接受申请。符合条件的家庭可通过在线平台提交申请材料...
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">快速链接</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  帝国监察院
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building className="mr-2 h-4 w-4" />
                  帝国总务管理局
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  公民服务中心
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  在线帮助
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
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
                <li><button className="hover:text-white">帝国通行证</button></li>
                <li><button className="hover:text-white">基础奶酪保障</button></li>
                <li><button className="hover:text-white">税务申报</button></li>
                <li><button className="hover:text-white">入籍申请</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">政府部门</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><button className="hover:text-white">帝国总务管理局</button></li>
                <li><button className="hover:text-white">帝国福利局</button></li>
                <li><button className="hover:text-white">帝国财政部</button></li>
                <li><button className="hover:text-white">帝国监察院</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>紧急热线：帝国鼠洞123号</li>
                <li>办公时间：9:00-17:00</li>
                <li>邮箱：empire@mouse.gov</li>
                <li><button className="hover:text-white">在线客服</button></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-blue-800" />
          
          <div className="text-center text-sm text-blue-200">
            <p>© 2024 小鼠帝国政府 版权所有 | 隐私政策 | 使用条款 | 无障碍访问</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
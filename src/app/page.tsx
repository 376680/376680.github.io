"use client";

import { Suspense, lazy } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, CreditCard, Users, DollarSign, Heart, Briefcase, FileText, Plane } from "lucide-react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

// 动态导入组件，实现懒加载
const Hero = lazy(() => import("@/components/home/Hero"));
const QuickActions = lazy(() => import("@/components/home/QuickActions"));
const Services = lazy(() => import("@/components/home/Services"));
const Announcements = lazy(() => import("@/components/home/Announcements"));

// 加载占位符组件
const Loading = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-pulse text-muted-foreground">加载中...</div>
  </div>
);

export default function Home() {
  const navigationItems = [
    { name: "关于帝国", href: "/about" },
    { name: "政府福利", href: "/benefits" },
    { name: "移民入籍", href: "/immigration" },
    { name: "服务中心", href: "/services" },
    { name: "灾害预警", href: "#" },
    { name: "投诉建议", href: "#" }
  ];

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
      <Header navigationItems={navigationItems} />

      {/* Hero 区域 */}
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>

      {/* 快捷操作区域 */}
      <Suspense fallback={<Loading />}>
        <QuickActions quickActions={quickActions} />
      </Suspense>

      <Separator className="my-12" />

      {/* 政府服务主题区域 */}
      <Suspense fallback={<Loading />}>
        <Services services={services} />
      </Suspense>

      {/* 政府公告区域 */}
      <Suspense fallback={<Loading />}>
        <Announcements />
      </Suspense>

      {/* 页脚 */}
      <Footer />
    </div>
  );
}
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  DollarSign, 
  Plane, 
  Briefcase, 
  Building,
  FileText,
  Calculator,
  MapPin,
  Shield,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  ChevronRight,
  Download,
  Phone,
  Mail,
  HelpCircle,
  Target,
  Globe,
  PiggyBank,
  Receipt,
  Navigation,
  Factory,
  GraduationCap,
  Heart,
  Home,
  Car,
  ShoppingCart
} from "lucide-react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("taxes");

  const services = [
    {
      id: "taxes",
      title: "税收与财政",
      description: "奶酪贡品管理和税务申报服务",
      icon: Calculator,
      color: "bg-green-50 border-green-200"
    },
    {
      id: "travel",
      title: "旅行与探索",
      description: "帝国领地探索和安全出行服务",
      icon: Plane,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: "jobs",
      title: "工作与劳动",
      description: "就业机会和劳动权益保护",
      icon: Briefcase,
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: "business",
      title: "企业开办",
      description: "创业支持和商业服务",
      icon: Building,
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const taxServices = [
    {
      title: "奶酪贡品计算器",
      description: "快速计算您应缴纳的奶酪贡品",
      icon: Calculator,
      features: ["自动计算", "多种税率", "历史记录", "优化建议"],
      action: "立即计算"
    },
    {
      title: "年度税务申报",
      description: "在线完成年度税务申报流程",
      icon: FileText,
      features: ["在线填写", "自动审核", "进度跟踪", "电子回执"],
      action: "开始申报"
    },
    {
      title: "税务减免申请",
      description: "申请各类税务减免和优惠政策",
      icon: PiggyBank,
      features: ["减免查询", "资格评估", "在线申请", "状态跟踪"],
      action: "查询减免"
    },
    {
      title: "企业税务服务",
      description: "为企业提供专业税务管理服务",
      icon: Building,
      features: ["税务筹划", "申报代理", "风险评估", "专业咨询"],
      action: "企业服务"
    }
  ];

  const travelServices = [
    {
      title: "领地探索许可",
      description: "申请前往不同帝国领地的探索许可",
      icon: MapPin,
      features: ["在线申请", "快速审批", "多种许可类型", "延期服务"],
      action: "申请许可"
    },
    {
      title: "安全路线规划",
      description: "智能规划最安全的探索路线",
      icon: Navigation,
      features: ["智能推荐", "实时预警", "路线优化", "紧急救援"],
      action: "规划路线"
    },
    {
      title: "猫头鹰威胁预警",
      description: "实时监控猫头鹰活动，提供安全预警",
      icon: Shield,
      features: ["实时监控", "分级预警", "避险建议", "历史数据"],
      action: "查看预警"
    },
    {
      title: "跨境旅行服务",
      description: "办理跨境旅行的相关手续和证件",
      icon: Globe,
      features: ["证件办理", "签证服务", "旅行保险", "紧急援助"],
      action: "旅行服务"
    }
  ];

  const jobServices = [
    {
      title: "帝国工作机会",
      description: "浏览和申请帝国政府及企业职位",
      icon: Briefcase,
      features: ["职位搜索", "在线申请", "面试安排", "录用通知"],
      action: "找工作"
    },
    {
      title: "奶酪店开设指南",
      description: "完整的创业指导和扶持政策",
      icon: ShoppingCart,
      features: ["创业指导", "资金支持", "技术培训", "市场推广"],
      action: "创业指南"
    },
    {
      title: "劳动法保护",
      description: "了解和维护您的劳动权益",
      icon: Shield,
      features: ["法律咨询", "权益保护", "纠纷调解", "法律援助"],
      action: "权益咨询"
    },
    {
      title: "失业奶酪救济",
      description: "为失业小鼠提供临时生活保障",
      icon: Heart,
      features: ["救济申请", "技能培训", "就业推荐", "心理支持"],
      action: "申请救济"
    }
  ];

  const businessServices = [
    {
      title: "企业注册服务",
      description: "快速完成企业注册和开业手续",
      icon: Building,
      features: ["在线注册", "材料指导", "快速审批", "证件发放"],
      action: "注册企业"
    },
    {
      title: "创业资金支持",
      description: "为创业者提供资金支持和融资服务",
      icon: DollarSign,
      features: ["资金申请", "项目评估", "投资对接", "财务顾问"],
      action: "申请资金"
    },
    {
      title: "经营许可办理",
      description: "办理各类经营许可证和资质证书",
      icon: Receipt,
      features: ["许可查询", "在线申请", "进度跟踪", "续期提醒"],
      action: "办理许可"
    },
    {
      title: "企业税收优惠",
      description: "享受各类企业税收优惠政策",
      icon: TrendingUp,
      features: ["优惠查询", "资格评估", "自动申报", "政策解读"],
      action: "查询优惠"
    }
  ];

  const renderServiceContent = () => {
    switch (activeService) {
      case "taxes":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">税收与财政服务</h2>
              <p className="text-lg text-gray-600">
                简化税务流程，让奶酪贡品缴纳变得简单便捷
              </p>
            </div>
            
            <Alert className="bg-blue-50 border-blue-200 text-blue-800">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-sm font-medium">
                年度税务申报期间：1月1日-3月31日。请及时完成申报，避免产生滞纳金。
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              {taxServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">服务特色:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full">
                        {service.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "travel":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">旅行与探索服务</h2>
              <p className="text-lg text-gray-600">
                安全探索帝国领地，发现更多精彩
              </p>
            </div>
            
            <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800">
              <Shield className="h-4 w-4" />
              <AlertDescription className="text-sm font-medium">
                当前猫头鹰威胁等级：中等。建议避免夜间单独出行，出行前请查看最新预警信息。
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              {travelServices.map((service, index) => (
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
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">服务特色:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 mr-2 text-blue-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full">
                        {service.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "jobs":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">工作与劳动服务</h2>
              <p className="text-lg text-gray-600">
                连接人才与机会，保护劳动者权益
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {jobServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">服务特色:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 mr-2 text-purple-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full">
                        {service.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "business":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">企业开办服务</h2>
              <p className="text-lg text-gray-600">
                全方位支持创业，助力企业成长
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {businessServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">服务特色:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 mr-2 text-orange-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full">
                        {service.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Target className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">政府服务中心</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            为帝国公民和企业提供全方位的政府服务，让生活更便利，让发展更迅速
          </p>
        </div>
      </div>

      {/* 服务导航 */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`py-4 px-4 border-b-2 transition-colors flex items-center space-x-2 whitespace-nowrap ${
                  activeService === service.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <service.icon className="h-4 w-4" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 服务内容 */}
      <div className="container mx-auto px-4 py-12">
        {renderServiceContent()}
      </div>

      {/* 快速统计 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">服务数据</h2>
            <p className="text-lg text-gray-600">
              实时了解我们的服务成效
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-lg bg-green-50 mb-4">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">45,678</div>
                <div className="text-sm text-gray-600 mb-2">年度税务申报</div>
                <Badge variant="secondary" className="text-xs">+12.3%</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-lg bg-blue-50 mb-4">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">12,345</div>
                <div className="text-sm text-gray-600 mb-2">旅行许可发放</div>
                <Badge variant="secondary" className="text-xs">+8.7%</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-lg bg-purple-50 mb-4">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">8,901</div>
                <div className="text-sm text-gray-600 mb-2">职位成功匹配</div>
                <Badge variant="secondary" className="text-xs">+15.2%</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-lg bg-orange-50 mb-4">
                  <Building className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">3,456</div>
                <div className="text-sm text-gray-600 mb-2">新企业注册</div>
                <Badge variant="secondary" className="text-xs">+23.5%</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 联系支持 */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">需要帮助？</h2>
            <p className="text-xl text-blue-100">
              我们的专业团队随时为您提供支持
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">服务热线</h3>
                <p className="text-blue-200 mb-4">服务中心123号</p>
                <p className="text-sm text-blue-300">工作日 9:00-17:00</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">在线客服</h3>
                <p className="text-blue-200 mb-4">service@mouse.gov</p>
                <p className="text-sm text-blue-300">24小时内回复</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <HelpCircle className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">帮助中心</h3>
                <p className="text-blue-200 mb-4">自助服务指南</p>
                <p className="text-sm text-blue-300">随时可用</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
              <Download className="mr-2 h-4 w-4" />
              下载服务指南
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
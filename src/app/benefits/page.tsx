"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Heart, 
  Baby, 
  Users, 
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Calculator,
  FileText,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Cookie,
  Milk,
  Home,
  Activity,
  Star,
  TrendingUp,
  HelpCircle,
  Download,
  ArrowRight
} from "lucide-react";

export default function BenefitsPage() {
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

  const benefits = [
    {
      id: "basic-cheese",
      title: "基础奶酪保障",
      description: "为所有帝国公民提供基本生活保障",
      icon: Cookie,
      color: "bg-yellow-50 border-yellow-200",
      eligibility: "所有帝国公民",
      amount: "每月标准奶酪配给",
      duration: "长期保障",
      features: [
        "每月固定奶酪配给",
        "特殊节日额外补贴",
        "家庭成员覆盖",
        "配送上门服务"
      ]
    },
    {
      id: "milk-powder",
      title: "幼鼠奶粉补贴",
      description: "支持幼鼠健康成长的家庭援助计划",
      icon: Milk,
      color: "bg-blue-50 border-blue-200",
      eligibility: "有0-12个月幼鼠的家庭",
      amount: "每月高品质奶粉供应",
      duration: "幼鼠满12个月为止",
      features: [
        "进口高品质奶粉",
        "营养师指导服务",
        "定期健康检查",
        "育儿知识培训"
      ]
    },
    {
      id: "disability-care",
      title: "伤残小鼠勇士关爱计划",
      description: "为伤残小鼠提供全方位关爱和支持",
      icon: Shield,
      color: "bg-purple-50 border-purple-200",
      eligibility: "经认证的伤残小鼠",
      amount: "根据伤残程度定制",
      duration: "终身保障",
      features: [
        "特殊医疗设备支持",
        "专业康复训练",
        "无障碍环境改造",
        "心理咨询服务"
      ]
    },
    {
      id: "elderly-care",
      title: "老年小鼠养老计划",
      description: "尊重和关爱老年小鼠的晚年生活",
      icon: Users,
      color: "bg-green-50 border-green-200",
      eligibility: "24个月以上的小鼠",
      amount: "养老金+医疗保障",
      duration: "终身保障",
      features: [
        "每月养老金发放",
        "免费医疗服务",
        "社区活动参与",
        "定期探访服务"
      ]
    },
    {
      id: "education-support",
      title: "教育成长支持计划",
      description: "投资年轻小鼠的教育和未来发展",
      icon: Star,
      color: "bg-pink-50 border-pink-200",
      eligibility: "6-18个月的学习期小鼠",
      amount: "教育资源补贴",
      duration: "学习期间持续支持",
      features: [
        "学习材料补贴",
        "技能培训课程",
        "导师指导计划",
        "成就奖励机制"
      ]
    },
    {
      id: "housing-support",
      title: "住房改善援助",
      description: "改善公民居住条件的专项支持",
      icon: Home,
      color: "bg-orange-50 border-orange-200",
      eligibility: "住房条件困难的公民",
      amount: "根据需求评估确定",
      duration: "一次性或分期支持",
      features: [
        "鼠洞改造补贴",
        "基础设施升级",
        "安全环境评估",
        "居住指导服务"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "资格评估",
      description: "在线填写申请表，系统自动评估您的资格",
      icon: Calculator,
      time: "5分钟"
    },
    {
      step: 2,
      title: "材料准备",
      description: "准备身份芯片ID、家庭情况证明等必要材料",
      icon: FileText,
      time: "1-2天"
    },
    {
      step: 3,
      title: "提交申请",
      description: "通过在线平台或前往服务中心提交完整申请",
      icon: ArrowRight,
      time: "10分钟"
    },
    {
      step: 4,
      title: "审核批准",
      description: "帝国福利局审核申请，通常3-5个工作日完成",
      icon: CheckCircle,
      time: "3-5工作日"
    },
    {
      step: 5,
      title: "开始享受福利",
      description: "申请批准后，您将开始享受相应的福利保障",
      icon: Heart,
      time: "立即生效"
    }
  ];

  const statistics = [
    {
      label: "受益公民",
      value: "12,456",
      icon: Users,
      change: "+15.3%",
      color: "text-blue-600"
    },
    {
      label: "月度发放",
      value: "45.2吨",
      icon: Cookie,
      change: "+8.7%",
      color: "text-yellow-600"
    },
    {
      label: "满意度",
      value: "98.5%",
      icon: TrendingUp,
      change: "+2.1%",
      color: "text-green-600"
    },
    {
      label: "覆盖范围",
      value: "100%",
      icon: Shield,
      change: "稳定",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Heart className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">政府福利</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            小鼠帝国政府为所有公民提供全面的福利保障，确保每位公民都能享有尊严和幸福的生活
          </p>
        </div>
      </div>

      {/* 重要通知 */}
      <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="text-sm font-medium">
          由于近期奶酪配给调整，部分福利发放可能延迟。我们正在加急处理，给您带来的不便敬请谅解。
        </AlertDescription>
      </Alert>

      {/* 统计数据 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gray-50 mb-4`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                  <Badge variant="secondary" className="text-xs">
                    {stat.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 福利项目 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">福利项目</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们提供多样化的福利项目，满足不同公民的需求，确保帝国大家庭的每一位成员都能得到适当照顾
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card 
                key={benefit.id} 
                className={`${benefit.color} cursor-pointer transition-all hover:shadow-lg ${
                  selectedBenefit === benefit.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedBenefit(selectedBenefit === benefit.id ? null : benefit.id)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <CardDescription className="text-sm">{benefit.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">适用对象:</span>
                      <span className="font-medium">{benefit.eligibility}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">发放标准:</span>
                      <span className="font-medium">{benefit.amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">保障期限:</span>
                      <span className="font-medium">{benefit.duration}</span>
                    </div>
                    
                    {selectedBenefit === benefit.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold mb-2">福利内容:</h4>
                        <ul className="space-y-1">
                          {benefit.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-4" size="sm">
                          立即申请
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 申请流程 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">申请流程</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              简化申请流程，让福利保障更快到达需要帮助的公民手中
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {applicationSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
                )}
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex p-3 rounded-full bg-blue-100 mb-4">
                      <step.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mb-3">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {step.time}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* 常见问题 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">常见问题</h2>
              <p className="text-lg text-gray-600">
                关于福利申请的常见疑问和解答
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">如何判断我是否符合福利申请资格？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    您可以通过我们的在线资格评估工具快速判断。每个福利项目都有明确的适用对象标准，
                    系统会根据您填写的信息自动评估。如有疑问，您也可以联系我们的客服中心获得帮助。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">申请需要准备哪些材料？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    基本材料包括：身份芯片ID、家庭情况证明、收入证明等。不同福利项目可能需要额外材料，
                    具体清单会在资格评估后显示。我们支持在线上传材料，也接受现场提交。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">福利发放需要多长时间？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    审核通常需要3-5个工作日。批准后，基础奶酪保障等常规福利会在当月开始发放，
                    特殊福利如设备支持等可能需要额外1-2周准备时间。您可以通过在线平台查询申请进度。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">如果申请被拒绝怎么办？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    您有权在收到拒绝通知后15个工作日内提出申诉。帝国监察院会重新审核您的申请，
                    确保公平公正。同时，我们的客服人员会帮助您了解拒绝原因并提供改进建议。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">需要帮助？</h2>
            <p className="text-xl text-blue-100">
              我们的客服团队随时为您提供支持和指导
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">客服热线</h3>
                <p className="text-blue-200 mb-4">帝国鼠洞123号</p>
                <p className="text-sm text-blue-300">工作日 9:00-17:00</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">邮件咨询</h3>
                <p className="text-blue-200 mb-4">benefits@mouse.gov</p>
                <p className="text-sm text-blue-300">24小时内回复</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">线下服务中心</h3>
                <p className="text-blue-200 mb-4">帝国广场东侧</p>
                <p className="text-sm text-blue-300">周一至周五开放</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
              <Download className="mr-2 h-4 w-4" />
              下载申请指南
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
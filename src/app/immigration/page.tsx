"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Users, 
  CreditCard, 
  Shield,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  MapPin,
  Home,
  BookOpen,
  Award,
  Heart,
  AlertTriangle,
  ChevronRight,
  Download,
  Phone,
  Mail,
  Calendar,
  Target,
  Flag,
  IdCard,
  UserCheck,
  ArrowRight
} from "lucide-react";

export default function ImmigrationPage() {
  const [activeTab, setActiveTab] = useState("citizenship");
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const citizenshipPrograms = [
    {
      id: "standard-citizenship",
      title: "标准入籍程序",
      description: "适用于所有外来小鼠的标准入籍流程",
      icon: UserCheck,
      color: "bg-blue-50 border-blue-200",
      processingTime: "2-4周",
      requirements: [
        "年满3个月",
        "无不良记录",
        "通过帝国文化测试",
        "承诺遵守帝国法律"
      ],
      benefits: [
        "完整公民权利",
        "可参与帝国建设",
        "享受所有福利",
        "获得身份芯片ID"
      ],
      steps: [
        "提交入籍申请",
        "背景审查",
        "文化知识测试",
        "入籍宣誓仪式",
        "发放公民证件"
      ]
    },
    {
      id: "talent-citizenship",
      title: "人才快速通道",
      description: "具有特殊才能小鼠的优先入籍程序",
      icon: Award,
      color: "bg-purple-50 border-purple-200",
      processingTime: "1-2周",
      requirements: [
        "具备特殊技能",
        "有推荐人",
        "通过技能评估",
        "承诺为帝国贡献"
      ],
      benefits: [
        "加急处理",
        "专项扶持政策",
        "优先工作机会",
        "额外福利补贴"
      ],
      steps: [
        "技能认证申请",
        "专家评估",
        "推荐材料审核",
        "快速背景审查",
        "优先入籍仪式"
      ]
    },
    {
      id: "family-reunification",
      title: "家庭团聚计划",
      description: "帮助家庭成员团聚的人性化政策",
      icon: Heart,
      color: "bg-pink-50 border-pink-200",
      processingTime: "3-6周",
      requirements: [
        "有直系亲属是公民",
        "亲属关系证明",
        "无不良记录",
        "居住承诺"
      ],
      benefits: [
        "家庭团聚支持",
        "住房优先安排",
        "子女教育保障",
        "就业指导服务"
      ],
      steps: [
        "亲属担保申请",
        "关系核实",
        "家庭情况评估",
        "居住安排",
        "统一入籍仪式"
      ]
    }
  ];

  const residencyTypes = [
    {
      id: "temporary-residency",
      title: "临时居住权",
      description: "短期访问和居留许可",
      icon: Clock,
      color: "bg-yellow-50 border-yellow-200",
      duration: "1-6个月",
      purpose: "旅游、探亲、短期工作",
      restrictions: [
        "不能享受完整福利",
        "需定期报到",
        "工作许可限制",
        "不能拥有财产"
      ],
      renewal: "可续期，最多2次"
    },
    {
      id: "permanent-residency",
      title: "永久居住权",
      description: "长期居留许可，可申请入籍",
      icon: Home,
      color: "bg-green-50 border-green-200",
      duration: "永久有效",
      purpose: "长期居住、工作、投资",
      benefits: [
        "可拥有财产",
        "享受基本福利",
        "工作自由",
        "子女教育权"
      ],
      requirements: "连续居住6个月后可申请入籍"
    },
    {
      id: "student-residency",
      title: "学习居住权",
      description: "专为学习设计的居住许可",
      icon: BookOpen,
      color: "bg-blue-50 border-blue-200",
      duration: "学习期间有效",
      purpose: "教育、技能培训",
      benefits: [
        "教育补贴",
        "住宿安排",
        "实习机会",
        "毕业后优先入籍"
      ],
      extension: "可延长至完成学业"
    }
  ];

  const documents = [
    {
      id: "empire-passport",
      type: "帝国通行证",
      description: "国际旅行和身份证明证件",
      icon: IdCard,
      processingTime: "2-3周",
      validity: "5年有效",
      features: [
        "国际旅行认证",
        "生物识别技术",
        "紧急救援服务",
        "全球领事保护"
      ]
    },
    {
      id: "identity-chip",
      type: "身份芯片ID",
      description: "帝国公民身份识别芯片",
      icon: Shield,
      processingTime: "1周",
      validity: "终身有效",
      features: [
        "植入式身份认证",
        "电子钱包功能",
        "健康记录存储",
        "门禁系统通行"
      ]
    },
    {
      id: "permanent-residence",
      type: "永久居住卡",
      description: "永久居民身份证明",
      icon: CreditCard,
      processingTime: "2-4周",
      validity: "10年有效",
      features: [
        "居住权证明",
        "工作许可",
        "基本福利资格",
        "可续期"
      ]
    }
  ];

  const statistics = [
    {
      label: "年度入籍",
      value: "3,456",
      icon: Users,
      change: "+23.5%",
      color: "text-blue-600"
    },
    {
      label: "当前居民",
      value: "18,234",
      icon: Home,
      change: "+15.2%",
      color: "text-green-600"
    },
    {
      label: "申请成功率",
      value: "94.8%",
      icon: Target,
      change: "+3.1%",
      color: "text-purple-600"
    },
    {
      label: "满意度",
      value: "96.3%",
      icon: Heart,
      change: "+2.8%",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Globe className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">移民与公民身份</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            欢迎来到小鼠帝国！我们为所有希望加入这个大家庭的外来小鼠提供多种入籍和居住选择
          </p>
        </div>
      </div>

      {/* 重要通知 */}
      <Alert className="bg-green-50 border-green-200 text-green-800">
        <CheckCircle className="h-4 w-4" />
        <AlertDescription className="text-sm font-medium">
          帝国正在积极欢迎新公民！当前入籍申请处理速度提升30%，人才快速通道已开放。
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

      {/* 导航标签 */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: "citizenship", label: "入籍程序", icon: Flag },
              { id: "residency", label: "居住权", icon: Home },
              { id: "documents", label: "证件办理", icon: CreditCard }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-colors flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="container mx-auto px-4 py-12">
        {/* 入籍程序 */}
        {activeTab === "citizenship" && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">选择适合的入籍程序</h2>
              <p className="text-lg text-gray-600">
                我们提供多种入籍途径，根据您的情况选择最适合的程序
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {citizenshipPrograms.map((program) => (
                <Card 
                  key={program.id} 
                  className={`${program.color} cursor-pointer transition-all hover:shadow-lg ${
                    selectedProgram === program.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <program.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                        <CardDescription className="text-sm">{program.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">处理时间:</span>
                        <Badge variant="secondary">{program.processingTime}</Badge>
                      </div>
                      
                      {selectedProgram === program.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">申请要求:</h4>
                            <ul className="space-y-1">
                              {program.requirements.map((req, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">公民权益:</h4>
                            <ul className="space-y-1">
                              {program.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <Award className="h-3 w-3 mr-2 text-blue-500 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">申请步骤:</h4>
                            <div className="space-y-2">
                              {program.steps.map((step, index) => (
                                <div key={index} className="flex items-center text-sm">
                                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center mr-2 flex-shrink-0">
                                    {index + 1}
                                  </div>
                                  {step}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Button className="w-full">
                            开始申请
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 居住权 */}
        {activeTab === "residency" && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">居住权类型</h2>
              <p className="text-lg text-gray-600">
                根据您的需求和情况，选择最适合的居住权类型
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {residencyTypes.map((residency) => (
                <Card key={residency.id} className={`${residency.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <residency.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{residency.title}</CardTitle>
                        <CardDescription className="text-sm">{residency.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">有效期:</span>
                          <p className="font-medium">{residency.duration}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">用途:</span>
                          <p className="font-medium">{residency.purpose}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">
                          {residency.restrictions ? "限制条件:" : "主要权益:"}
                        </h4>
                        <ul className="space-y-1">
                          {(residency.restrictions || residency.benefits).map((item, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <ChevronRight className="h-3 w-3 mr-2 text-blue-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          <strong>备注:</strong> {residency.renewal || residency.requirements}
                        </p>
                      </div>
                      
                      <Button className="w-full" variant="outline">
                        了解详情
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 证件办理 */}
        {activeTab === "documents" && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">证件办理</h2>
              <p className="text-lg text-gray-600">
                为帝国公民和居民提供各类身份证明证件
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <doc.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doc.type}</CardTitle>
                        <CardDescription className="text-sm">{doc.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">处理时间:</span>
                          <p className="font-medium">{doc.processingTime}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">有效期:</span>
                          <p className="font-medium">{doc.validity}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">主要功能:</h4>
                        <ul className="space-y-1">
                          {doc.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full">
                        立即申请
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator />

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">申请材料清单</h3>
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold mb-3">基础材料</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-blue-500" />
                          身份证明文件
                        </li>
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-blue-500" />
                          居住地址证明
                        </li>
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-blue-500" />
                          无犯罪记录证明
                        </li>
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-blue-500" />
                          健康检查报告
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">特定材料</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-purple-500" />
                          财务状况证明
                        </li>
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-purple-500" />
                          教育背景证明
                        </li>
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-purple-500" />
                          推荐信（如需）
                        </li>
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-purple-500" />
                          语言能力证明
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      下载完整材料清单
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* 联系支持 */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">需要移民咨询？</h2>
            <p className="text-xl text-blue-100">
              专业的移民顾问团队为您提供一对一指导
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">移民热线</h3>
                <p className="text-blue-200 mb-4">帝国移民局123号</p>
                <p className="text-sm text-blue-300">工作日 9:00-17:00</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">邮件咨询</h3>
                <p className="text-blue-200 mb-4">immigration@mouse.gov</p>
                <p className="text-sm text-blue-300">24小时内回复</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">现场咨询</h3>
                <p className="text-blue-200 mb-4">移民局服务中心</p>
                <p className="text-sm text-blue-300">需提前预约</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
              <Calendar className="mr-2 h-4 w-4" />
              预约咨询
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
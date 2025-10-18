"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mouse, 
  Crown, 
  Calendar,
  MapPin,
  Users,
  Building,
  Shield,
  BookOpen,
  History,
  ChevronRight,
  Award,
  Target,
  Globe,
  Heart,
  DollarSign
} from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("history");

  const timeline = [
    {
      year: "2023年",
      title: "低盐大鼠的诞生",
      description: "在一篇阅读理解中，'高盐小鼠'一词被同学们发现，成为帝国起源的种子。",
      icon: BookOpen
    },
    {
      year: "2023年春",
      title: "第一幅壁画",
      description: "第一位同学在黑板上绘制了低盐大鼠的形象，象征着帝国的艺术觉醒。",
      icon: Award
    },
    {
      year: "2023年夏",
      title: "小鼠帝国建立",
      description: "越来越多的同学加入创作，小鼠帝国的概念正式形成。",
      icon: Crown
    },
    {
      year: "2023年秋",
      title: "文化繁荣期",
      description: "帝国文化蓬勃发展，各种小鼠形象和故事在班级中传播。",
      icon: Globe
    },
    {
      year: "2024年",
      title: "数字化纪念",
      description: "建立小鼠帝国政府网，将这段珍贵的班级记忆永久保存。",
      icon: Target
    }
  ];

  const governmentStructure = [
    {
      title: "帝国元首",
      description: "由最具创造力的小鼠担任，负责帝国的文化发展方向",
      icon: Crown,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "帝国总务管理局(IGSA)",
      description: "负责帝国日常运营，包括奶酪配给、基础设施管理等",
      icon: Building,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "帝国福利局",
      description: "管理基础奶酪保障、幼鼠奶粉补贴等公民福利项目",
      icon: Heart,
      color: "bg-red-50 border-red-200"
    },
    {
      title: "帝国财政部",
      description: "负责奶酪贡品征收、预算分配、财政政策制定",
      icon: DollarSign,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "帝国监察院",
      description: "监督政府运作，处理公民投诉，维护帝国法治",
      icon: Shield,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "帝国文化部",
      description: "保护和发扬小鼠帝国文化，组织艺术创作活动",
      icon: BookOpen,
      color: "bg-pink-50 border-pink-200"
    }
  ];

  const coreValues = [
    {
      title: "创造力",
      description: "鼓励每一位公民发挥想象力，创造属于自己的小鼠故事",
      icon: Award
    },
    {
      title: "团结协作",
      description: "从一个人画画到全班参与，体现集体的力量",
      icon: Users
    },
    {
      title: "快乐学习",
      description: "将学习的枯燥转化为创造的乐趣",
      icon: Target
    },
    {
      title: "文化传承",
      description: "将班级的珍贵记忆永久保存下去",
      icon: History
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Mouse className="h-12 w-12" />
            <Crown className="h-6 w-6 text-yellow-400 -ml-6 -mt-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于小鼠帝国</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            从一个课堂梗到一个充满想象力的帝国，这里是记录我们班级集体创造力和友谊的数字纪念馆
          </p>
        </div>
      </div>

      {/* 导航标签 */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: "history", label: "帝国历史", icon: History },
              { id: "government", label: "政府结构", icon: Building },
              { id: "values", label: "核心价值", icon: Award },
              { id: "culture", label: "帝国文化", icon: BookOpen }
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
        {/* 帝国历史 */}
        {activeTab === "history" && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">帝国的诞生</h2>
              <p className="text-lg text-gray-600">
                一切始于一篇阅读理解中的"高盐小鼠"，这个偶然的词汇激发了同学们的创造力，
                最终发展成为一个充满想象力的小鼠帝国。
              </p>
            </div>

            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className={`flex items-center space-x-3 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <event.icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <Badge variant="secondary" className="mb-2">{event.year}</Badge>
                              <CardTitle className="text-lg">{event.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 政府结构 */}
        {activeTab === "government" && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">帝国政府结构</h2>
              <p className="text-lg text-gray-600">
                小鼠帝国采用现代化治理结构，各部门分工明确，为所有公民提供优质服务
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentStructure.map((dept, index) => (
                <Card key={index} className={`${dept.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <dept.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{dept.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{dept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>政府运作原则</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">透明公开</h4>
                      <p className="text-sm text-gray-600">所有政策制定过程公开透明，接受公民监督</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">公民参与</h4>
                      <p className="text-sm text-gray-600">鼓励所有公民参与帝国建设，提出建议和意见</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">创新驱动</h4>
                      <p className="text-sm text-gray-600">以创新思维推动帝国发展，不断改进服务质量</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">团结协作</h4>
                      <p className="text-sm text-gray-600">各部门密切配合，共同为公民服务</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 核心价值 */}
        {activeTab === "values" && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">帝国核心价值</h2>
              <p className="text-lg text-gray-600">
                这些价值观指导着帝国的发展方向，也是我们班级精神的体现
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-blue-100 rounded-full">
                        <value.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{value.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator />

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">帝国宣言</h3>
              <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 border border-blue-200">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "我们，小鼠帝国的公民，本着创造力、团结、快乐的精神，
                  共同建立这个充满想象力的王国。在这里，每一只小鼠都能发挥自己的才华，
                  每一个想法都能得到尊重，每一份友谊都能永久珍藏。
                  让我们携手并进，将这个从课堂诞生的帝国，
                  建设成为充满欢乐和创造力的美好家园。"
                </p>
                <div className="mt-6 flex items-center justify-center space-x-2">
                  <Mouse className="h-6 w-6 text-blue-600" />
                  <Crown className="h-4 w-4 text-yellow-500 -ml-3 -mt-4" />
                  <span className="text-sm text-gray-600 ml-2">小鼠帝国全体公民</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 帝国文化 */}
        {activeTab === "culture" && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">帝国文化</h2>
              <p className="text-lg text-gray-600">
                小鼠帝国拥有丰富多彩的文化传统，这些文化元素构成了我们独特的身份认同
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span>低盐大鼠精神</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    低盐大鼠代表着不随波逐流、保持独立思考的精神，这是帝国文化的核心。
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    <span>黑板艺术</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    黑板是帝国艺术的起源地，每一幅画作都承载着同学们的创意和友谊。
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-500" />
                    <span>集体创作</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    从一个人到全班参与，集体创作是帝国文化发展的重要推动力。
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-purple-500" />
                    <span>想象王国</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    在这里，想象力是唯一的限制，每个公民都能构建自己的想象王国。
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span>友谊传承</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    帝国的建立源于同学间的友谊，这种友谊精神将代代相传。
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-orange-500" />
                    <span>快乐学习</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    将学习的压力转化为创造的快乐，这是帝国给每个公民的礼物。
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">文化传承计划</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">数字化保存</div>
                    <p className="text-gray-600">通过网站和数字媒体永久保存帝国文化</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">创意工作坊</div>
                    <p className="text-gray-600">定期举办创作活动，激发新的创意灵感</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">文化推广</div>
                    <p className="text-gray-600">向更多人分享小鼠帝国的文化魅力</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* 行动号召 */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">加入小鼠帝国</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            每一个有创造力、有梦想的同学都是帝国欢迎的公民。让我们一起建设这个充满想象力的王国！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
              <Users className="mr-2 h-4 w-4" />
              申请成为公民
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
              <BookOpen className="mr-2 h-4 w-4" />
              了解更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
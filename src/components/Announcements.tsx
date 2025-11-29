import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Shield, Building, Users, HelpCircle } from "lucide-react";

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

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">最新帝国公告</h3>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{announcement.title}</CardTitle>
                        <CardDescription>发布时间：{announcement.date}</CardDescription>
                      </div>
                      <Badge variant={announcement.importance === "重要" ? "secondary" : "outline"}>
                        {announcement.importance}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {announcement.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
  );
}
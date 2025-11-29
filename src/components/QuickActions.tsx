import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface QuickAction {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

interface QuickActionsProps {
  quickActions: QuickAction[];
}

export function QuickActions({ quickActions }: QuickActionsProps) {
  return (
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
                  <p className="text-sm text-gray-600">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
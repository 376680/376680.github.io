import { Button } from "./ui/button";
import { Cookie, HelpCircle } from "lucide-react";

export function Hero() {
  return (
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
  );
}
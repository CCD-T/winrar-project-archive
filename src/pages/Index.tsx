
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900">
      <Card className="w-full max-w-3xl border-none shadow-2xl bg-white/10 backdrop-blur-md">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              Kevin
            </h1>
            <div className="h-1 w-24 mx-auto bg-purple-500"></div>
            <p className="text-xl md:text-2xl text-white/80 max-w-xl mx-auto">
              Bienvenido a mi página personal
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;

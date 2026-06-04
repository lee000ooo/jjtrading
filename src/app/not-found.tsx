import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-3">Страница не найдена</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Запрашиваемая страница не существует или была перемещена.
          Пожалуйста, проверьте URL или вернитесь на главную.
        </p>
        <Link href="/ru">
          <Button size="lg">На главную</Button>
        </Link>
      </div>
    </div>
  );
}

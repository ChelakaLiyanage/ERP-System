import { Card, CardContent } from "@/components/ui/card";

export default function AuthLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40">
      <Card className="w-100 shadow-lg">
        <CardContent className="space-y-6 p-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

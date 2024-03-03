// shadcn components
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-start justify-center max-w-4xl gap-6 mx-auto md:flex-row md:gap-12">
      <Card className="flex-1 w-full">
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-1/3 mb-2 h-7" />
            <Skeleton className="w-1/4 h-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="text-2xl font-bold">
            <Skeleton className="w-1/3 h-7" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-2/3 h-4" />
            <Skeleton className="w-2/3 h-4" />
            <Skeleton className="w-2/3 h-4" />
          </div>
          <Button className="w-full opacity-05 bg-muted" disabled></Button>
        </CardContent>
      </Card>
      <Card className="flex-1 w-full">
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-1/3 mb-2 h-7" />
            <Skeleton className="w-1/4 h-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="text-2xl font-bold">
            <Skeleton className="w-1/3 h-7" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-2/3 h-4" />
            <Skeleton className="w-2/3 h-4" />
            <Skeleton className="w-2/3 h-4" />
          </div>
          <Button className="w-full opacity-05 bg-muted" disabled></Button>
        </CardContent>
      </Card>
    </div>
  );
}

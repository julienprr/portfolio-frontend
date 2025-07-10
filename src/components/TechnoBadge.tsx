import { Badge } from '@/components/ui/badge';

const TechnoBadge = ({ name, src, alt }: { name: string; src: string; alt: string }) => {
  return (
    <Badge className="flex items-center gap-2 rounded bg-muted px-2 py-1 text-sm text-foreground">
      <img src={src} alt={alt} className="h-4 w-4" />
      <span>{name}</span>
    </Badge>
  );
};

export default TechnoBadge;

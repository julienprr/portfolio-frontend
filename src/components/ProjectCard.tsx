import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
}

const ProjectCard = ({ title, description, imageUrl, iconUrl }: ProjectCardProps) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return (
      <Card className="flex flex-row items-center p-2 text-left transition-shadow duration-300 hover:shadow-lg">
        <img src={iconUrl} alt={title} className="h-12 w-12 rounded object-cover" />
        <div>
          <CardHeader className="p-0">
            <CardTitle className="font-heading">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="flex h-92 flex-col justify-between overflow-hidden pt-0 transition-transform duration-300 hover:border-primary">
        <div className="relative">
          <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
          <div className="absolute inset-0 bg-primary opacity-75"></div>
        </div>

        <div className="flex flex-1 flex-col justify-start px-4 text-center">
          <CardHeader>
            <CardTitle className="font-heading text-xl">{title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </div>
      </Card>
    );
  }
};

export default ProjectCard;

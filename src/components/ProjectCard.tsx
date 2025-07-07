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
      <Card className="flex flex-row items-center text-left p-2 hover:shadow-lg transition-shadow duration-300">
        <img src={iconUrl} alt={title} className="w-12 h-12 rounded object-cover" />
        <div>
          <CardHeader className="p-0">
            <CardTitle className="font-heading">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground text-sm">{description}</p>
          </CardContent>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-transform hover:border-primary duration-300">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    );
  }
};

export default ProjectCard;

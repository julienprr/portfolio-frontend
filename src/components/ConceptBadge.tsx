import { useTranslation } from 'react-i18next';

import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon } from 'lucide-react';

interface ConceptBadgeProps {
  conceptKey: string;
}

const ConceptBadge = ({ conceptKey }: ConceptBadgeProps) => {
  const { t } = useTranslation();

  const name = t(`${conceptKey}.name`);
  const link = t(`${conceptKey}.link`);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${name}`}>
      <Badge variant="outline" className="cursor-pointer hover:text-accent transition-colors">
        {name} <ExternalLinkIcon/>
      </Badge>
    </a>
  );
};

export default ConceptBadge;

import { useTranslation } from 'react-i18next';

import { ExternalLinkIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

interface ConceptBadgeProps {
  conceptKey: string;
}

const ConceptBadge = ({ conceptKey }: ConceptBadgeProps) => {
  const { t } = useTranslation();

  const name = t(`${conceptKey}.name`);
  const link = t(`${conceptKey}.link`);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${name}`}>
      <Badge variant="outline" className="cursor-pointer transition-colors hover:text-accent">
        {name} <ExternalLinkIcon />
      </Badge>
    </a>
  );
};

export default ConceptBadge;

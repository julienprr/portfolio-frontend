import { cn } from '@/lib/utils';
import type { BackgroundItem } from '@/sections/TimelineSection';

import { Card } from './ui/card';

const TimelineCard = ({ item }: { item: BackgroundItem }) => (
  <Card className={cn('w-90 border border-primary/30 bg-card p-4 text-foreground sm:w-full')}>
    <h3 className="text-xl font-semibold">{item.title}</h3>
    <div>
      <h4 className="text-primary">{item.location}</h4>
      <h4 className="text-sm text-accent">{item.date}</h4>
    </div>
    <p className="mt-2 text-base">{item.description}</p>
  </Card>
);
export default TimelineCard;

import { Timeline } from 'primereact/timeline';

import FadeInOnScroll from '@/components/FadeInOnScroll';
import { Card } from '@/components/ui/card';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';

import type { BackgroundItem } from './TimelineSection';

const BackgroundTimeLine = ({ timeline }: { timeline: BackgroundItem[] }) => {
  const breakpoint = useBreakpoint();

  const customizedMarker = () => {
    return <span className="hidden h-4 w-4 rounded-full bg-primary sm:flex"></span>;
  };

  const TimelineCard = ({ item }: { item: BackgroundItem }) => (
    <FadeInOnScroll>
      <Card className={cn('w-90 border border-primary/30 p-4 text-foreground sm:w-full bg-card')}>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <div>
          <h4 className="text-primary">{item.location}</h4>
          <h4 className="text-sm text-accent">{item.date}</h4>
        </div>
        <p className="mt-2 text-base">{item.description}</p>
      </Card>
    </FadeInOnScroll>
  );

  if (breakpoint === 'mobile') {
    return (
      <div className="flex flex-col gap-4">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={cn('flex w-full flex-col', index % 2 === 0 ? 'items-start text-left' : 'items-end text-right')}
          >
            <TimelineCard item={item} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Timeline
        value={timeline}
        align="alternate"
        marker={customizedMarker}
        content={(item) => <TimelineCard item={item} />}
        opposite={() => null}
        className="text-foreground"
        style={{ position: 'relative' }}
        pt={{
          content: { className: 'flex-1' },
          marker: { className: 'flex-shrink-0' },
          connector: { className: 'hidden sm:block bg-primary w-1 mx-auto' },
        }}
      />
    );
  }
};

export default BackgroundTimeLine;

import { Timeline } from 'primereact/timeline';

import FadeInOnScroll from '@/components/FadeInOnScroll';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';

import type { BackgroundItem } from '../sections/TimelineSection';
import TimelineCard from './TimelineCard';

const BackgroundTimeLine = ({ timeline }: { timeline: BackgroundItem[] }) => {
  const breakpoint = useBreakpoint();

  const customizedMarker = () => {
    return <span className="hidden h-4 w-4 rounded-full bg-primary sm:flex"></span>;
  };

  if (breakpoint === 'mobile') {
    return (
      <div className="flex flex-col gap-4">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={cn('flex w-full flex-col', index % 2 === 0 ? 'items-start text-left' : 'items-end text-right')}
          >
            <FadeInOnScroll>
              <TimelineCard item={item} />
            </FadeInOnScroll>{' '}
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
        content={(item) => (
          <FadeInOnScroll>
            <TimelineCard item={item} />
          </FadeInOnScroll>
        )}
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

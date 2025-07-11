import { VerticalTimeline as ReactVericalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import type { BackgroundItem } from './TimelineSection';

const VerticalTimeline = ({ timeline }: { timeline: BackgroundItem[] }) => {
  return (
    <ReactVericalTimeline lineColor="#6366F1">
      {timeline.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'transparent', color: 'white' }}
          contentArrowStyle={{ borderRight: 'none' }}
          date={item.date}
          iconStyle={{ background: '#6366F1', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle text-sm text-muted-foreground">{item.location}</h4>
          <p className="mt-2 text-base">{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </ReactVericalTimeline>
  );
};

export default VerticalTimeline;

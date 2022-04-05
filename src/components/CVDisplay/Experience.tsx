import moment from 'moment';
import RawHtml from 'components/RawHtml';
import { ExperienceItem } from 'types';

type Props = {
  items: ExperienceItem[];
};

const Experience = ({ items }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      {items.slice(0, 3).map((work) => {
        const start = moment(work.startDate).format('MMM YYYY');
        const end = moment(work.endDate).format('MMM YYYY');

        return (
          <div key={work.project} className="relative flex flex-col pl-5">
            <div className="absolute left-[0.625rem] top-1 h-3 w-3 -translate-x-1/2 transform rounded-full bg-gray-500" />
            <div className="absolute left-[0.625rem] top-[0.7rem] h-[110%] w-[2px] -translate-x-1/2 transform bg-gray-500" />

            <div className="flex flex-row justify-between text-sm">
              <h3 className="font-semibold">{work.position}</h3>
              <span>
                {start} - {end}
              </span>
            </div>
            <h4 className="pb-3 text-sm">
              {work.project} {work.company && `| ${work.company}`}
            </h4>
            <RawHtml
              html={work.description}
              className="flex flex-col gap-3 text-justify"
              addClassName={{
                ul: 'list-disc pl-5 flex flex-col gap-3',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Experience;

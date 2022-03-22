import {
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  SkypeOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import Image from 'next/image';
import { RawHtml } from 'components';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const CVDisplay = ({ data }: Props) => {
  const { contactInfo } = data;
  return (
    <div className="flex h-[29.7cm] w-[21cm] flex-row text-xs">
      <div className="flex basis-1/3 flex-col justify-start gap-5 bg-gray-700 p-5 align-middle text-gray-300">
        <div className="w-full text-center">
          <div className="relative aspect-square ">
            <Image
              src={data.photoUrl}
              alt="Person cv picture"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <h1 className="py-2 text-xl font-semibold uppercase text-white">
            {data.name}
          </h1>
          <h2>{data.title}</h2>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">CONTACT</h2>
          <ul>
            <li className="flex items-center gap-2">
              <PhoneOutlined />
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <MailOutlined />
              <a
                target="_blank"
                href={`mailto:${contactInfo.email}`}
                rel="noreferrer"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <EnvironmentOutlined />
              {contactInfo.address}
            </li>
            <li className="flex items-center gap-2">
              <LinkedinOutlined />
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                {contactInfo.linkedin.replace(/.+\.com\/(.+)\//, '$1')}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <SkypeOutlined />
              <a target="_blank" href={contactInfo.skype} rel="noreferrer">
                {data.name}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <GithubOutlined />
              <a target="_blank" href={contactInfo.github} rel="noreferrer">
                {contactInfo.github.split('/').slice(-1)[0]}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">SKILLS</h2>
          <div className="grid grid-cols-[1fr,min-content]">
            {data.skills.map((skill) => (
              <>
                <span>{skill.name}</span>
                <span className="whitespace-nowrap">
                  {skill.years} year{skill.years > 1 ? 's' : ''}
                </span>
              </>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">LANGUAGES</h2>
          <div className="grid grid-cols-[1fr,min-content]">
            {data.languages.map((language) => (
              <>
                <span>{language.name}</span>
                <span>{language.level}</span>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="basis-2/3 bg-white p-5">
        <div>
          <h2 className="text-base font-semibold">ABOUT ME</h2>
          <RawHtml html={data.introduction} className="flex flex-col gap-2" />
        </div>
        <div>
          <h2 className="text-base font-semibold">WORK EXPERIENCE</h2>
          <div className="flex flex-col gap-2">
            {data.experience.map((work) => {
              const start = moment(work.startDate).format('MMM YYYY');
              const end = moment(work.endDate).format('MMM YYYY');

              return (
                <div key={work.project} className="flex flex-col">
                  <div className="flex flex-row justify-between text-sm">
                    <h3 className="font-semibold">{work.position}</h3>
                    <span>
                      {start} - {end}
                    </span>
                  </div>
                  <h4 className="text-sm">
                    {work.project} {work.company && `| ${work.company}`}
                  </h4>
                  <RawHtml
                    html={work.description}
                    className="flex flex-col gap-2"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDisplay;

import {
  EnvironmentFilled,
  GithubFilled,
  LinkedinFilled,
  LinkOutlined,
  MailFilled,
  PhoneFilled,
  SkypeFilled,
} from '@ant-design/icons';
import moment from 'moment';
import Image from 'next/image';
import { Fragment } from 'react';
import { RawHtml } from 'components';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const CVDisplay = ({ data }: Props) => {
  const { contactInfo } = data;

  return (
    <div>
      <div className="flex h-[29.7cm] w-[21cm] flex-row text-xs">
        <div className="flex basis-1/3 flex-col justify-start gap-6 bg-gray-700 p-5 align-middle text-gray-300">
          <div className="w-full text-center">
            <div className="relative aspect-square ">
              <Image
                src={data.photoUrl}
                alt="Person cv picture"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <h1 className="py-2 text-2xl font-semibold uppercase text-white">
              {data.name}
            </h1>
            <h2 className="text-sm">
              <RawHtml html={data.title} />
            </h2>
          </div>
          <div>
            <h2 className="pb-1 text-base font-semibold text-white">CONTACT</h2>
            <div className="grid grid-cols-[min-content,1fr] gap-y-1 gap-x-2">
              <PhoneFilled />
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>

              <MailFilled />
              <a
                target="_blank"
                href={`mailto:${contactInfo.email}`}
                rel="noreferrer"
              >
                {contactInfo.email}
              </a>

              <EnvironmentFilled />
              {contactInfo.address}

              <LinkedinFilled />
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                {contactInfo.linkedin.replace(/.+\.com\/(.+)\//, '$1')}
              </a>

              <SkypeFilled />
              <a target="_blank" href={contactInfo.skype} rel="noreferrer">
                {data.name}
              </a>

              <GithubFilled />
              <a target="_blank" href={contactInfo.github} rel="noreferrer">
                {data.name}
              </a>
            </div>
          </div>
          <div>
            <h2 className="pb-1 text-base font-semibold text-white">SKILLS</h2>
            <div className="grid grid-cols-[1fr,min-content]">
              {data.skills.map((skill) => (
                <Fragment key={skill.name}>
                  <span>{skill.name}</span>
                  <span className="whitespace-nowrap">
                    {skill.years} year{skill.years > 1 ? 's' : ''}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
          {!!data.languages.length && (
            <div>
              <h2 className="pb-1 text-base font-semibold text-white">
                LANGUAGES
              </h2>
              <div className="grid grid-cols-[1fr,min-content]">
                {data.languages.map((language) => (
                  <Fragment key={language.name}>
                    <span>{language.name}</span>
                    <span>{language.level}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          )}
          <div>
            <h2 className="pb-1 text-base font-semibold text-white">
              OPEN SOURCE
            </h2>
            <div className="grid grid-cols-[min-content,1fr] gap-x-2 gap-y-1">
              {data.openSource.map((openSource) => (
                <Fragment key={openSource.name}>
                  <LinkOutlined />
                  <a target="_blank" href={openSource.url} rel="noreferrer">
                    {openSource.name}
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
          <div>
            <h2 className="pb-1 text-base font-semibold text-white">AWARDS</h2>
            <div className="grid grid-cols-[1fr,min-content]">
              {data.awards.map((award) => (
                <Fragment key={award.competition}>
                  <span>{award.name}</span>
                  <span className="whitespace-nowrap">{award.competition}</span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-2/3 bg-white p-5 pr-10">
          <div className="h-full overflow-hidden">
            <div className="pb-3">
              <h2 className="pb-3 text-base font-semibold">ABOUT ME</h2>
              <RawHtml
                html={data.introduction}
                className="flex flex-col gap-3 text-justify"
              />
            </div>
            <div>
              <h2 className="pb-2 pt-3 text-base font-semibold">
                MOST RELEVANT WORK EXPERIENCE
              </h2>
              <div className="flex flex-col gap-6">
                {data.experience.slice(0, 3).map((work) => {
                  const start = moment(work.startDate).format('MMM YYYY');
                  const end = moment(work.endDate).format('MMM YYYY');

                  return (
                    <div
                      key={work.project}
                      className="relative flex flex-col pl-5"
                    >
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
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex h-[29.7cm] w-[21cm] flex-row text-xs">
        <div className="flex basis-1/3 flex-col justify-start gap-6 bg-gray-700 p-5 align-middle text-gray-300"></div>
        <div className="basis-2/3 bg-white p-5">
          <div className="flex flex-col gap-5">
            {data.experience.slice(3).map((work) => {
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
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CVDisplay;

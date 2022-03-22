import Image from 'next/image';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const CVDisplay = ({ data }: Props) => {
  return (
    <div className="flex h-[29.7cm] w-[21cm] flex-row">
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
          <h2 className="text-xs">{data.title}</h2>
          <h2 className="text-xs">Contractor - Freelancer</h2>
        </div>
        <div>
          <h2 className="font-semibold text-white">CONTACT</h2>
        </div>
        <div>
          <h2 className="font-semibold text-white">SKILLS</h2>
        </div>
        <div>
          <h2 className="font-semibold text-white">LANGUAGES</h2>
        </div>
      </div>
      <div className="basis-2/3 bg-white p-5">
        <div>
          <h2 className="font-semibold">ABOUT ME</h2>
        </div>
        <div>
          <h2 className="font-semibold">WORK EXPERIENCE</h2>
        </div>
      </div>
    </div>
  );
};

export default CVDisplay;

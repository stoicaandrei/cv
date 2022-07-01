import Image from 'next/image';
import { InvisibleInput } from 'components/ui';

type Props = {
  photoUrl: string;
  name: string;
  title: string;
};

const Profile = ({ photoUrl, name, title }: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="relative aspect-square h-[224.56px]">
        <Image
          src={photoUrl}
          alt="Person cv picture"
          layout="fill"
          className="rounded-full"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <InvisibleInput
        type="text"
        className="text-center text-2xl font-semibold uppercase text-white"
        value={name}
      />
      <InvisibleInput
        type="text"
        className="text-center text-sm"
        value={title}
        multiline
      />
    </div>
  );
};

export default Profile;

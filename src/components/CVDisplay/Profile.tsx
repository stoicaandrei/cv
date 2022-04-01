import Image from 'next/image';
import RawHtml from 'components/RawHtml';

type Props = {
  photoUrl: string;
  name: string;
  title: string;
};

const Profile = ({ photoUrl, name, title }: Props) => {
  return (
    <div className="w-full text-center">
      <div className="relative aspect-square ">
        <Image
          src={photoUrl}
          alt="Person cv picture"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <h1 className="py-2 text-2xl font-semibold uppercase text-white">
        {name}
      </h1>
      <h2 className="text-sm">
        <RawHtml html={title} />
      </h2>
    </div>
  );
};

export default Profile;

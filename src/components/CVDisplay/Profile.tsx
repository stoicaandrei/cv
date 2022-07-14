import Image from 'next/image';
import { EditableImage, InvisibleInput } from 'components/ui';
import { CVData } from 'types';

type Props = {
  photoUrl: string;
  name: string;
  title: string;
  onUpdate: (data: Partial<CVData>) => void;
};

const Profile = ({ photoUrl, name, title, onUpdate }: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <EditableImage
        src={photoUrl}
        alt="Person cv picture"
        className="h-[224.56px] rounded-full object-cover object-center"
        onUpdate={(url) => onUpdate({ photoUrl: url })}
      />
      <InvisibleInput
        type="text"
        className="text-center text-2xl font-semibold uppercase text-white"
        value={name}
        onChange={(name) => onUpdate({ name })}
        multiline
      />
      <InvisibleInput
        type="text"
        className="text-center text-sm"
        value={title}
        onChange={(title) => onUpdate({ title })}
        multiline
      />
    </div>
  );
};

export default Profile;

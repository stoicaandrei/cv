import classNames from 'classnames';
import Image from 'next/image';
import { HTMLAttributes, useState } from 'react';
import { ImageUploader } from 'components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  onUpdate?: (url: string) => void;
  editable?: boolean;
}

export const EditableImage = ({
  src,
  alt,
  onUpdate = (url: string) => {},
  editable = true,
  className,
}: Props) => {
  const [image, setImage] = useState(src || placeholderImage);
  const [uploading, setUploading] = useState(false);

  return (
    <div
      className={classNames(
        'group relative h-full w-full overflow-hidden',
        className
      )}
    >
      <Image src={image} alt={alt} layout="fill" className={className} />
      {editable && (
        <div
          className={classNames(
            'absolute top-0 left-0 h-full w-full bg-gray-50/90',
            {
              'hidden group-hover:block': !uploading,
            },
            classNames
          )}
        >
          <ImageUploader
            onUploadStart={() => setUploading(true)}
            onUploadEnd={() => setUploading(false)}
            onUpload={(url) => {
              setImage(url);
              onUpdate(url);
            }}
            className={className}
          />
        </div>
      )}
    </div>
  );
};

const placeholderImage =
  'https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800';

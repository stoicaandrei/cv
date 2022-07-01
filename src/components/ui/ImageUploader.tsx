import classNames from 'classnames';
import { useState } from 'react';
import { uploadFile } from 'lib';

type Props = {
  onUploadStart?: () => void;
  onUploadEnd?: () => void;
  onUpload?: (url: string) => void;
  className?: string;
};

export const ImageUploader = ({
  onUpload,
  onUploadStart,
  onUploadEnd,
  className,
}: Props) => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File>();

  const uploadImage = async (file: File) => {
    try {
      const url = await uploadFile(`cv-profile/${file.name}`, file);
      setUploading(false);
      onUpload?.(url);
      setFile(undefined);
      onUploadEnd?.();
    } catch (e) {
      setUploading(false);
      setFile(undefined);
      onUploadEnd?.();
      alert(e);
    }
  };

  const wrapperClass = classNames(
    'flex flex-col justify-center items-center h-full w-full border-2 border-gray-300 border-dashed',
    className
  );

  if (uploading) {
    return <div className={wrapperClass}>Uploading...</div>;
  }

  return (
    <label
      // Trick EditableImage into keeping the uploader open
      onClick={onUploadStart}
      // Trick EditableImage into hiding the uploader if the user cancels the upload
      onMouseEnter={() => {
        if (!file) onUploadEnd?.();
      }}
      className={classNames(wrapperClass, 'cursor-pointer')}
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="mb-3 h-10 w-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        onChange={(e) => {
          const files = e.target.files;
          if (!files) return;
          setUploading(true);
          onUploadStart?.();

          const file = files[0];
          setFile(file);
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            uploadImage(file);
          };
        }}
      />
    </label>
  );
};

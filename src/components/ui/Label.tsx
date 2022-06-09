import { LabelHTMLAttributes } from 'react';

type Props = { name: string } & LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ className, name, ...props }: Props) => {
  return (
    <label
      {...props}
      className={
        'mb-2 block text-sm font-medium text-gray-900' +
        (className ? ' ' + className : '')
      }
    >
      {name}
    </label>
  );
};

export default Label;

import { HTMLAttributes } from 'react';
import sanitizeHtml from 'sanitize-html';

type Props = {
  html: string;
} & HTMLAttributes<HTMLDivElement>;

const RawHtml = ({ html, ...props }: Props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} {...props} />
  );
};

export default RawHtml;

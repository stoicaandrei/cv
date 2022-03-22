import { HTMLAttributes } from 'react';
import sanitizeHtml from 'sanitize-html';

type Props = {
  html: string;
} & HTMLAttributes<HTMLDivElement>;

const RawHtml = ({ html, ...props }: Props) => {
  const content = sanitizeHtml(html, {
    allowedAttributes: {
      '*': ['class'],
    },
  });
  return <div dangerouslySetInnerHTML={{ __html: content }} {...props} />;
};

export default RawHtml;

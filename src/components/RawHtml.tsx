import { HTMLAttributes } from 'react';
import sanitizeHtml from 'sanitize-html';

type Props = {
  html: string;
  addClassName?: { [key: string]: string };
} & HTMLAttributes<HTMLDivElement>;

const RawHtml = ({ html, addClassName, ...props }: Props) => {
  let content = sanitizeHtml(html, {
    allowedAttributes: {
      '*': ['class'],
    },
  });

  if (addClassName && typeof window === 'object') {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    Object.entries(addClassName).forEach(([selector, className]) => {
      doc
        .querySelectorAll(selector)
        .forEach((el) => (el.className = className));
    });
    content = doc.documentElement.outerHTML;
  }

  return <div dangerouslySetInnerHTML={{ __html: content }} {...props} />;
};

export default RawHtml;

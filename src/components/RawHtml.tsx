import sanitizeHtml from 'sanitize-html';

type Props = {
  html: string;
};

const RawHtml = ({ html }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} />;
};

export default RawHtml;

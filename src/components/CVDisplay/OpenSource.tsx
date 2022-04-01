import { LinkOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import { OpenSourceItem } from 'types';

type Props = {
  items: OpenSourceItem[];
};

const OpenSource = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-[min-content,1fr] gap-x-2 gap-y-1">
      {items.map((item) => (
        <Fragment key={item.name}>
          <LinkOutlined />
          <a target="_blank" href={item.url} rel="noreferrer">
            {item.name}
          </a>
        </Fragment>
      ))}
    </div>
  );
};

export default OpenSource;

import classNames from 'classnames';
import produce from 'immer';
import { Fragment } from 'react';
import { IconDisplay, InvisibleInput } from 'components';
import { ContactInfoItem } from 'types';

type Props = {
  items: ContactInfoItem[];
  onUpdate?: (data: ContactInfoItem[]) => void;
  editable?: boolean;
};

const ContactInfo = ({ items, onUpdate, editable }: Props) => {
  const updateItem = (data: Partial<ContactInfoItem>, index: number) => {
    onUpdate?.(
      produce(items, (draft) => {
        draft[index] = { ...draft[index], ...data };
      })
    );
  };

  return (
    <div className="grid grid-cols-[min-content,1fr] gap-y-1 gap-x-2">
      {items.map((item, index) => {
        return (
          <div className="group contents" key={index}>
            <IconDisplay
              icon={item.icon}
              className={classNames({ 'cursor-pointer': editable })}
              onClick={() => {
                if (!editable) return;

                const icon: any = prompt('Enter icon', item.icon);
                if (!icon) return;

                updateItem({ icon }, index);
              }}
            />
            {editable && (
              <div className="flex flex-row gap-1">
                <InvisibleInput
                  value={item.text}
                  onChange={(text) => updateItem({ text }, index)}
                />

                <IconDisplay
                  icon="fas link"
                  className="cursor-pointer opacity-0 group-hover:opacity-100"
                  onClick={() => {
                    const url: any = prompt('Enter url', item.url);
                    if (!url) return;

                    updateItem({ url }, index);
                  }}
                />
                <IconDisplay
                  icon="fas grip-vertical"
                  className="cursor-pointer opacity-0 group-hover:opacity-100"
                />
              </div>
            )}
            {!editable && item.url && (
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.text}
              </a>
            )}
            {!editable && !item.url && item.text}
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;

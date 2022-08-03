import classNames from 'classnames';
import produce from 'immer';
import { IconDisplay, InvisibleInput } from 'components';
import { ContactInfoItem } from 'types';
import { reorder } from 'utils';

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

  const addNew = () => {
    onUpdate?.(
      produce(items, (draft) => {
        draft.push({
          icon: 'fas question',
          text: '',
          url: '',
        });
      })
    );
  };

  const removeItem = (index: number) => {
    onUpdate?.(
      produce(items, (draft) => {
        draft.splice(index, 1);
      })
    );
  };

  return (
    <div className="grid grid-cols-[min-content,1fr] gap-y-1 gap-x-2">
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

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
                  icon="fas angle-down"
                  className={classNames(
                    'cursor-pointer opacity-0 group-hover:opacity-100',
                    { 'cursor-auto text-gray-500': isLast }
                  )}
                  onClick={() =>
                    !isLast && onUpdate?.(reorder(items, index, index + 1))
                  }
                />
                <IconDisplay
                  icon="fas angle-up"
                  className={classNames(
                    'cursor-pointer opacity-0 group-hover:opacity-100',
                    { 'cursor-auto text-gray-500': isFirst }
                  )}
                  onClick={() =>
                    !isFirst && onUpdate?.(reorder(items, index, index - 1))
                  }
                />
                <IconDisplay
                  icon="fas trash"
                  className="cursor-pointer opacity-0 group-hover:opacity-100"
                  onClick={() => removeItem(index)}
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
      {editable && (
        <div
          className="col-span-full cursor-pointer border border-dashed border-gray-500 text-center hover:bg-gray-500"
          onClick={addNew}
        >
          Add new
        </div>
      )}
    </div>
  );
};

export default ContactInfo;

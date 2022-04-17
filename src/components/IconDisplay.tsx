import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { IconNameWithPrefix } from 'types';

type Props = {
  icon: IconNameWithPrefix;
} & Omit<FontAwesomeIconProps, 'icon'>;

const IconDisplay = ({ icon, ...props }: Props) => {
  const [isValid, setIsValid] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const childCount = ref.current?.childElementCount;

    if (childCount === 1) return;

    setIsValid(false);
  }, []);

  const iconArray = icon.split(' ') as unknown as [IconPrefix, IconName];
  return (
    <div
      ref={ref}
      className={classNames({
        'has-tooltip': !isValid,
      })}
    >
      <FontAwesomeIcon
        {...props}
        className={classNames(props.className, {
          'text-red-400': !isValid,
        })}
        icon={isValid ? iconArray : 'circle-exclamation'}
      />
      {!isValid && (
        <span className="tooltip">
          {`The icon "${icon}" could not be found`}
        </span>
      )}
    </div>
  );
};

export default IconDisplay;

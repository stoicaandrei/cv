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

const IconDisplay = ({ icon, className, ...props }: Props) => {
  const [isValid, setIsValid] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setIsValid(true), [icon]);

  useEffect(() => {
    if (!isValid) return;
    const childCount = ref.current?.childElementCount;

    if (childCount === 1) return;

    setIsValid(false);
  }, [icon, isValid]);

  const iconArray = icon.split(' ') as unknown as [IconPrefix, IconName];
  return (
    <div
      ref={ref}
      className={classNames(
        'relative flex items-center justify-center',
        className,
        {
          'has-tooltip': !isValid,
        }
      )}
    >
      <FontAwesomeIcon
        {...props}
        className={classNames({
          'text-red-400': !isValid,
        })}
        icon={isValid ? iconArray : 'circle-exclamation'}
      />
      {!isValid && (
        <span className="tooltip left-3 -top-3 w-52">
          {`The icon "${icon}" could not be found`}
        </span>
      )}
    </div>
  );
};

export default IconDisplay;

import classNames from 'classnames';
import { forwardRef, HTMLProps, useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

type Props = Omit<HTMLProps<HTMLInputElement>, 'onChange'> & {
  multiline?: boolean;
  hoverableClass?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  dynamicWidth?: boolean;
};

export const InvisibleInput = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  Props
>(
  (
    {
      className,
      multiline,
      onChange,
      hoverableClass,
      dynamicWidth,
      onBlur,
      ...props
    }: any,
    ref: any
  ) => {
    const [isHover, setIsHover] = useState(false);
    const [savedContent, setSavedContent] = useState(props.value);
    const [content, setContent] = useState(props.value);
    const [width, setWidth] = useState(0);
    const span = useRef<HTMLSpanElement | null>(null);

    const styleInput = dynamicWidth ? { width } : null;

    const classes = classNames(
      'resize-none outline-none w-full',
      hoverableClass && isHover ? hoverableClass : 'bg-transparent',
      className
    );

    useEffect(() => {
      if (span && span.current) {
        setWidth(span.current.offsetWidth);
      }
    }, [content]);

    return multiline ? (
      <TextareaAutosize
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={classes}
        rows={1}
        onChange={(e) => {
          setContent(e.target.value);
          onChange && onChange(e.target.value);
        }}
        onBlur={() => {
          if (savedContent !== content) {
            setSavedContent(content);
            onBlur && onBlur();
          }
        }}
        ref={ref}
        {...(props as any)}
      />
    ) : (
      <div>
        <span className="pointer-events-none absolute opacity-0" ref={span}>
          {content}
        </span>
        <input
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={classes}
          onChange={(e) => {
            setContent(e.target.value);
            onChange && onChange(e.target.value);
          }}
          onBlur={() => {
            if (savedContent !== content) {
              setSavedContent(content);
              onBlur && onBlur();
            }
          }}
          style={styleInput}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

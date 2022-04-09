import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

type Props = {
  type?: 'text' | 'email' | 'password';
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ onChange, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={
          'rounded border border-gray-500 p-3' +
          (className ? ' ' + className : '')
        }
        {...props}
      />
    );
  }
);

export default Input;

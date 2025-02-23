
import * as React from 'react';
import { TextInput } from 'react-native';
import { cn } from '../../lib/utils';

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(({ className, placeholderClassName, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        'rounded-md border border-input bg-background px-3 py-3 text-base lg:text-sm   text-foreground placeholder:text-muted_foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
        // props.editable === false && 'opacity-50 web:cursor-not-allowed',
        className
      )}
      placeholderClassName={cn('text-muted_foreground', placeholderClassName)}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
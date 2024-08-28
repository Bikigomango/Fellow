import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Pressable , Text} from 'react-native';
import { TextClassContext } from '../../components/ui/text';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'group flex items-center justify-center rounded-md ',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white active:opacity-90',
        destructive: 'bg-red-500  active:opacity-90',
        outline:
          'border border-input bg-background  active:bg-accent',
        secondary: 'bg-secondary  active:opacity-80',
        ghost: 'active:bg-accent',
        link: '',
      },
      size: {
        default: 'h-10 px-4 py-2 native:h-12 native:px-5 native:py-3',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8 native:h-14',
        icon: 'h-10 w-10',
        md:'h-10 rounded-md px-3'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva(
  ' text-sm native:text-base font-medium text-foreground ',
  {
    variants: {
      variant: {
        default: 'text-primary_foreground',
        destructive: 'text-destructive_foreground',
        outline: 'group-active:text-accent-foreground border-border',
        secondary: 'text-secondary_foreground group-active:text-secondary-foreground',
        ghost: 'text-thin',
        link: 'text-primary group-active:underline',
      },
      size: {
        default: '',
        sm: '',
        lg: 'native:text-lg',
        icon: '',
        md:'',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>&{
    children?: React.ReactNode;
    textClassName:string;
  }

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size,children,textClassName, ...props }, ref) => {
    return (
      // <TextClassContext.Provider
      //   value={buttonTextVariants({ variant, size, className: 'web:pointer-events-none' })}
      // >
        <Pressable
          className={cn(
            props.disabled && 'opacity-5r0 web:pointer-events-none',
            buttonVariants({ variant, size, className  })
          )}
          ref={ref}
          role='button'
          {...props}
        >

            <Text className={cn(buttonTextVariants({variant , size , className:textClassName}))}>{children}</Text>

        </Pressable>
      // </TextClassContext.Provider>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
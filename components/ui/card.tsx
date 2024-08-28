import * as React from 'react';
import { Text, View } from 'react-native';
import { TextClassContext } from '../../components/ui/text';
import { TextRef, ViewRef } from '@rn-primitives/types';
import { cn } from '../../lib/utils';

const Card = React.forwardRef<ViewRef, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        'rounded-lg border w-64  flex justify-between p-4 border-border bg-card shadow-sm shadow-foreground/10',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<ViewRef, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('flex flex-row gap-2 space-y-1.5 justify-start items-center', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<TextRef, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text
      role='heading'
    //   aria-level={3}
      ref={ref}
      className={cn(
        'text-lg text-card-foreground font-semibold leading-none tracking-tight ',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<TextRef, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<ViewRef, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => (
    <TextClassContext.Provider value='text-card-foreground'>
      <View ref={ref} className={cn(' pt-0', className)} {...props} />
    </TextClassContext.Provider>
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<ViewRef, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('flex flex-row justify-between items-center gap-2 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
import { Meta } from '@storybook/react';
import { [FTName] } from './[FTName]';

export default {
   title: 'shared/[FTName]',
   component: [FTName],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof [FTName]>;

export const Primary = {
   args: {

};
}

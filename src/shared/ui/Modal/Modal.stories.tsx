import { Meta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

export const Primary = {
    args: {
        isOpen: true,
        children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },

    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: 'asdfsdf',
            },
        }),
    ],
};

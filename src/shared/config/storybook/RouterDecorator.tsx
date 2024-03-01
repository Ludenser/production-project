import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryFn: StoryFn) => (
    <BrowserRouter>
        <StoryFn />
    </BrowserRouter>
);

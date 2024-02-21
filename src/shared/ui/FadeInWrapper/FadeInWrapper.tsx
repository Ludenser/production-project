import {
    ReactNode, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FadeInWrapper.module.scss';

type FadeInWrapperProps = {
  children: ReactNode;
  className?: string;
};

export const FadeInWrapper = ({ className, children }: FadeInWrapperProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={classNames(cls.fadeIn, { [cls.visible]: isVisible }, [className])}>
            {children}
        </div>
    );
};

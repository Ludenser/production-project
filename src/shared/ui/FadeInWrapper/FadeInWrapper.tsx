import {
    FC, ReactNode, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FadeInWrapper.module.scss';

type FadeInWrapperProps = {
  children: ReactNode;
};

export const FadeInWrapper: FC<FadeInWrapperProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={classNames(cls.fadeIn, { [cls.visible]: isVisible })}>
            {children}
        </div>
    );
};

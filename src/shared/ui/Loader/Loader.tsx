import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
 className?: string;
 fitContent?: boolean;
}

export const Loader = ({ className, fitContent }: LoaderProps) => (
    <div className={classNames('lds-hourglass', { 'fit-content': fitContent }, [className])} />
);

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { t } = useTranslation()

    const [collapsed, setCollapsed] = useState(false)
    const {
        className,
        ...otherProps
    } = props

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
            {...otherProps}
        >
            <button onClick={onToggle}>{t('Sidebar-toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
}
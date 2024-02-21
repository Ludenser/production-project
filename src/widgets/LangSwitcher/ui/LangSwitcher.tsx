import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import RuIcon from 'shared/assets/icons/ru.svg';
import EnIcon from 'shared/assets/icons/us.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (

        <Button
            className={classNames('', {}, [className])}
            shadow
            hover
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {i18n.language === 'en' ? <RuIcon /> : <EnIcon />}
        </Button>
    );
});

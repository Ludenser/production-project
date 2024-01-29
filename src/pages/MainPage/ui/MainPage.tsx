import { useTranslation } from 'react-i18next';
import { FadeInWrapper } from 'shared/ui/FadeInWrapper/FadeInWrapper';

function MainPage() {
    const { t } = useTranslation('main');
    return (
        <FadeInWrapper>
            <div>
                {t('main-page')}
            </div>
        </FadeInWrapper>
    );
}

export default MainPage;

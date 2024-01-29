import { useTranslation } from 'react-i18next';
import { FadeInWrapper } from 'shared/ui/FadeInWrapper/FadeInWrapper';

function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <FadeInWrapper>
            <div>
                {t('About-page')}
            </div>
        </FadeInWrapper>
    );
}

export default AboutPage;

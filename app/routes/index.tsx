import { useTranslation } from 'react-i18next';
import { json, LoaderFunction } from 'remix';
import { i18n } from '~/i18n.server';

export let loader: LoaderFunction = async ({ request }) => {
  return json({
    i18n: await i18n.getTranslations(request, ['common']),
  });
};

export default function Index() {
  let { t } = useTranslation('index');
  return <h1>{t('title')}</h1>;
}

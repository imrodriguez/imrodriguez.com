import { t } from "i18next";

export default function getContactContent() {
    return {
        title: t('contact.title'),
        description: t('contact.description'),
        privacy: t('contact.privacy'),
        fields: {
            firstname: t('contact.fields.firstname'),
            lastname: t('contact.fields.lastname'),
            email: t('contact.fields.email'),
            message: t('contact.fields.message'),
        },
        action: t('contact.action'),
    }
}
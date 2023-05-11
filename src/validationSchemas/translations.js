import {useTranslation} from "react-i18next";

export const Translations = () => {
    const {t} = useTranslation();

    return {
        enterName: t('enterName'),
        nameSize: t('nameSize'),
        isValidName: t('isValidName'),
        enterSurname: t('enterSurname'),
        surnameSize: t('surnameSize'),
        isValidSurname: t('isValidSurname'),
        enterPatronymic: t('enterPatronymic'),
        patronymicSize: t('patronymicSize'),
        isValidPatronymic: t("isValidPatronymic"),
        enterBornDate: t("enterBornDate"),
        enterPassportNum: t("enterPassportNum"),
        isValidPassportNum: t("isValidPassportNum"),
        issuedBySize: t("issuedBySize"),
        enterIssuedBy: t("enterIssuedBy"),
        isValidIssuedBy: t("isValidIssuedBy"),
        townSize: t("townSize"),
        enterTown: t("enterTown"),
        isValidTown: t("isValidTown"),
        streetSize: t("streetSize"),
        enterStreet: t("enterStreet"),
        isValidStreet: t("isValidStreet"),
        enterHouse: t("enterHouse"),
        isValidHouse: t("isValidHouse"),
        enterFlat: t("enterFlat"),
        isValidFlat: t("isValidFlat"),
        isValidEmail: t("isValidEmail"),
        enterEmail: t("enterEmail"),
        enterLogin: t("enterLogin"),
        enterCompanyName: t('enterCompanyName'),
        companyNameSize: t('companyNameSize'),
        isValidCompanyName: t('isValidCompanyName')
    };
};
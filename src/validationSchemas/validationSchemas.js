import * as yup from 'yup';
import {Translations} from './translations';

export const userSchema = () => {
    const {
        enterName,
        nameSize,
        isValidName,
        enterSurname,
        surnameSize,
        isValidSurname,
        enterPatronymic,
        patronymicSize,
        isValidPatronymic,
        enterBornDate,
        enterPassportNum,
        isValidPassportNum,
        enterIssuedBy,
        issuedBySize,
        isValidIssuedBy,
        enterTown,
        townSize,
        isValidTown,
        enterStreet,
        streetSize,
        isValidStreet,
        enterHouse,
        isValidHouse,
        enterFlat,
        isValidFlat,
        enterEmail,
        isValidEmail,
        enterLogin,
    } = Translations();
    return yup.object().shape({
        name: yup
            .string()
            .min(2, enterName)
            .max(20, nameSize)
            .required()
            .matches(/[A-Za-zА-Яа-яЁё]+/, isValidName),
        surname: yup
            .string()
            .min(2, enterSurname)
            .max(20, surnameSize)
            .required()
            .matches(/[A-Za-zА-Яа-яЁё]+/, isValidSurname),
        patronymic: yup
            .string()
            .min(2, enterPatronymic)
            .max(20, patronymicSize)
            .required()
            .matches(/[A-Za-zА-Яа-яЁё]+/, isValidPatronymic),
        bornDate: yup.string().required(enterBornDate),
        passportNum: yup
            .string()
            .required(enterPassportNum)
            .matches(/^(MP|MC)\d{7}$/, isValidPassportNum),
        issuedBy: yup
            .string()
            .max(50, issuedBySize)
            .required(enterIssuedBy)
            .matches(/[A-Za-zА-Яа-яЁё]+/, isValidIssuedBy),
        town: yup
            .string()
            .max(20, townSize)
            .required(enterTown)
            .matches(/[A-Za-zА-Яа-яЁё]+/, isValidTown),
        street: yup
            .string()
            .max(20, streetSize)
            .required(enterStreet)
            .matches(/[A-Za-zА-Яа-яЁё]+/, isValidStreet),
        house: yup
            .string()
            .required(enterHouse)
            .matches(/[0-9]+/, isValidHouse),
        flat: yup
            .string()
            .required(enterFlat)
            .matches(/[0-9]+/, isValidFlat),
        email: yup.string().email(isValidEmail).required(enterEmail),
        login: yup.string().required(enterLogin),
    });
};

export const clientSchema = () => {
    const {
        enterCompanyName,
        companyNameSize,
        isValidCompanyName,
    } = Translations();
    return yup.object().shape({
        companyName: yup
            .string()
            .min(2, enterCompanyName)
            .max(20, companyNameSize)
            .required()
            .matches(/[A-Za-zА-Яа-яЁё]+/, isValidCompanyName),
        status: yup.string().required(),
    });
};
export const logInSchema = () => {
    const {
        isValidEmail,
        enterEmail,
        enterPassword,
        passwordSize
    } = Translations();
    return yup.object().shape({
        email: yup
            .string()
            .email(isValidEmail).required(enterEmail),
        password: yup
            .string()
            .min(4, enterPassword)
            .max(15, passwordSize)
            .required(enterPassword),
    });
}
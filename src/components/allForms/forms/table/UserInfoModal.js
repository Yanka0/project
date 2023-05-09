import React, { useState } from "react";
import "../Forms.scss";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import "./Modal.scss";
import Modal from "./Modal";
import Input from "../../../UI/input/Input";
import Button from "../../../UI/button/Button";
import Select from "../../../UI/select/Select";

function UserInfoModal({ closeModal, onSubmit, rowToEdit }) {
  const { t } = useTranslation();
  const title = t("addUser");
  const [maxDateTime, setMaxDateTime] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("enterName"))
      .max(20, t("nameSize"))
      .required()
      .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidName")),
    surname: yup
      .string()
      .min(2, t("enterSurname"))
      .max(20, t("surnameSize"))
      .required()
      .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidSurname")),
    patronymic: yup
      .string()
      .min(2, t("enterPatronymic"))
      .max(20, t("patronymicSize"))
      .required()
      .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidPatronymic")),
    bornDate: yup.string().required(t("enterBornDate")),
    passportNum: yup
      .string()
      .required(t("enterPassportNum"))
      .matches(/^(MP|MC)\d{7}$/, t("isValidPassportNum")),
    issuedBy: yup
      .string()
      .max(50, t("issuedBySize"))
      .required(t("enterIssuedBy"))
      .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidIssuedBy")),
    town: yup
      .string()
      .max(20, t("townSize"))
      .required(t("enterTown"))
      .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidTown")),
    street: yup
      .string()
      .max(20, t("streetSize"))
      .required(t("enterStreet"))
      .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidStreet")),
    house: yup
      .string()
      .required(t("enterHouse"))
      .matches(/[0-9]+/, t("isValidHouse")),
    flat: yup
      .string()
      .required(t("enterFlat"))
      .matches(/[0-9]+/, t("isValidFlat")),
    email: yup.string().email(t("isValidEmail")).required(t("enterEmail")),
    login: yup.string().required(t("enterLogin")),
  });
  
  
  return (
    <Modal
      schema={schema}
      title={title}
      closeModal={closeModal}
      onSubmit={onSubmit}
      defaultValues={rowToEdit}
      inputRenderer={(register, errors) => (
        <>
          <Input
            id="name"
            type="text"
            placeholder={t("name")}
            register={{ ...register("name") }}
            errorMessage={errors.name?.message}
          />
          <Input
            id="surname"
            type="text"
            placeholder={t("surname")}
            register={{ ...register("surname") }}
            errorMessage={errors.surname?.message}
          />
          <Input
            id="patronymic"
            type="text"
            placeholder={t("patronymic")}
            register={{ ...register("patronymic") }}
            errorMessage={errors.patronymic?.message}
          />
          <Input
            id="bornDate"
            type="date"
            placeholder={t("bornDate")}
            register={{ ...register("bornDate") }}
            errorMessage={errors.bornDate?.message}
            max={maxDateTime}
          />
          <Input
            id="passportNum"
            type="text"
            placeholder={t("passportNum")}
            register={{ ...register("passportNum") }}
            errorMessage={errors.passportNum?.message}
          />
          <Input
            id="issuedBy"
            type="text"
            placeholder={t("issuedBy")}
            register={{ ...register("issuedBy") }}
            errorMessage={errors.issuedBy?.message}
          />
          <Input
            id="town"
            type="text"
            placeholder={t("town")}
            register={{ ...register("town") }}
            errorMessage={errors.town?.message}
          />
          <Input
            id="street"
            type="text"
            placeholder={t("street")}
            register={{ ...register("street") }}
            errorMessage={errors.street?.message}
          />
          <Input
            id="house"
            type="text"
            placeholder={t("house")}
            register={{ ...register("house") }}
            errorMessage={errors.house?.message}
          />
          <Input
            id="flat"
            type="text"
            placeholder={t("flat")}
            register={{ ...register("flat") }}
            errorMessage={errors.flat?.message}
          />
          <Input
            id="email"
            type="text"
            placeholder={t("email")}
            register={{ ...register("email") }}
            errorMessage={errors.email?.message}
          />
          <Input
            id="login"
            type="text"
            placeholder={t("login")}
            register={{ ...register("login") }}
            errorMessage={errors.login?.message}
          />
          <Select
            register={{ ...register("role") }}
            options={['USER','DRIVER','ADMIN']}
          />
        </>
      )}
      buttonRenderer={() => (
        <>
          <Button className="tableBtn" name={t("continue")} />
        </>
      )}
    />
  );
}

export default UserInfoModal;
import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {invoicesSchema} from "../../validationSchemas/validationSchemas";
import ModalForm from "../../components/forms/ModalForm";
import Input from "../../components/forms/input/Input";
import Select from "../../components/forms/select/Select";

function InvoicesModal({closeModal, onSubmit}) {
    const {t} = useTranslation();
    const title = t("addInvoice");
    const schema = invoicesSchema();
    const [maxDateTime, setMaxDateTime] = useState(
        new Date().toISOString().slice(0, 10)
    );

    return (
        <ModalForm
            schema={schema}
            title={title}
            closeModal={closeModal}
            onSubmit={onSubmit}
            inputRenderer={(register, errors) => (
                <>
                    <Input
                        id="invoiceNumber"
                        type="text"
                        placeholder={t("invoiceNumber")}
                        register={{...register("number")}}
                        errorMessage={errors.number?.message}/>
                    <Input
                        id="invoiceCreationDate"
                        type="date"
                        placeholder={t("invoiceCreationDate")}
                        register={{...register("creationDate")}}
                        errorMessage={errors.creationDate?.message}
                        max={maxDateTime}
                    />
                    <Input
                        id="invoiceVerifiedDate"
                        type="date"
                        placeholder={t("invoiceVerifiedDate")}
                        register={{...register("verifiedDate")}}
                        errorMessage={errors.verifiedDate?.message}
                        max={maxDateTime}
                    />
                    <Select
                        register={{...register("status")}}
                        options={[t('framed'), t('verificationСompleted'), t('lost')]}
                    />


                </>
            )}
            onSubmitButtonText={t("save")}
        />
    );
}

export default InvoicesModal;
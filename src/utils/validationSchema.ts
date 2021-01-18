import * as yup from "yup";

export const schemaContact = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required().max(100),
});

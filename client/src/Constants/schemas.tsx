import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    accountType: Yup.string()
        .required('Account type requied'),
	username: Yup.string()
        .email('Invalid username')
		.required('Username requied'),
	password: Yup.string()
		.required('Password required'),
    serverAddress: Yup.string()
        .matches(
        /^(\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
        'Invalid URL') 
        .required('Server address requied')
})

export const formSchemaAdvanced = formSchema.shape({
    serverPath: Yup.string()
        .matches(/^\/(?:[^\/]+(?:\/[^\/]+)?)?$/, 'Invalid server path')
        .required('Server path requied'),
    port: Yup.number()
        .min(0, 'Port number must be greater than or equal to 0')
        .max(65535, 'Port number must be less than or equal to 65535')
        .required('Port requied'),
})
import { useState } from "react"
import { Button, ErrorText, FormContainer, MainContainer, MainWrapper, RowContainer } from "../../Components/generalComponents"
import { Formik } from "formik"
import { formSchema, formSchemaAdvanced } from "../../Constants/schemas"
import { FormValues } from "../../Constants/interfaces"
import { Input } from "../../Components/Input"
import { Select } from "../../Components/Select"
import axios from "axios"
import { Checkbox, FormControlLabel } from "@mui/material"
import { colors } from "../../Constants/colors"

export const Home = () => {
    const accountTypes = ['Advanced', 'Manual']
    const [data, setData] = useState<FormValues>({
        accountType: accountTypes[0],
	    username: '',
	    password: '',
        serverAddress: '',
        serverPath: '',
        port: '',
        ssl: true
    })

    const submitForm = (values: FormValues) => {
        console.log(JSON.stringify(values)) //JSON form data
        const {
            accountType,
            username,
            password,
            serverAddress,
            serverPath,
            port,
            ssl
        } = values

        const commonData = {
            accountType,
            username,
            password,
            serverAddress
        }
              
        const dataToSend = {
            ...commonData,
            ...(accountType === accountTypes[0] && { serverPath, port, ssl })
        }

        axios
            .post(`${process.env.REACT_APP_SERVER}/addData`, dataToSend)
            .then((rsp) => {
                console.log(rsp)
                alert("Congratulations! Your data has been successfully saved on the Node.js server! :)")
            })
            .catch((err) => 
                console.log(err)
            )
    }

    const getData = () => {
        axios
        .get(`${process.env.REACT_APP_SERVER}/getData`)
        .then((rsp) => {
            console.log(rsp)
        })
        .catch((err) => 
            console.log(err)
        )
    }

    return (
        <MainWrapper>
            <MainContainer>
            <Button 
                onClick={() => getData()}>
                Get server data and display to console
                </Button>
                <Formik
                initialValues={data}
                validationSchema={
                    data.accountType === accountTypes[0] ?
                        formSchemaAdvanced 
                            : formSchema
                }
                onSubmit={(e) => {
                    submitForm(e)

                }}>
                    {(formikProps) => (
                        <FormContainer>
                        <Select
                            name="accountType"
                            labelValue="Account type"
                            value={formikProps.values['accountType']}
                            options={accountTypes}
                            error={formikProps.errors['accountType'] ? true : false}
					        onChange={(event) => {
                                setData({...data, accountType: event.target.value ? event.target.value.toString() : ''})
								formikProps.setFieldValue('accountType', event.target.value)
                                formikProps.setFieldTouched('accountType', true)
                            }
							}/>
				    
                         <Input 
                            placeholder={'name@exemple.com'} 
                            type="text" 
                            name="username"
                            label="User name"
                            error={formikProps.errors['username'] ? true : false}
                            value={formikProps.values['username']}
                            onBlur={() =>  formikProps.setFieldTouched('username', true)}
					        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								formikProps.setFieldValue('username', event.target.value)
                            }
							}/>
				        {formikProps.touched['username'] &&
                            formikProps.errors['username'] && (
								<ErrorText>
									{formikProps.errors['username']}
								</ErrorText>
							)}
                         <Input 
                            placeholder={'Requied'} 
                            type="password" 
                            name="password"
                            label="Password"
                            error={formikProps.errors['password'] ? true : false}
                            value={formikProps.values['password']}
                            onBlur={() =>  formikProps.setFieldTouched('password', true)}
					        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								formikProps.setFieldValue('password', event.target.value)
                            }
							}/>
				        {formikProps.touched['password'] &&
                            formikProps.errors['password'] && (
								<ErrorText>
									{formikProps.errors['password']}
								</ErrorText>
							)}
                         <Input 
                            placeholder={'exemple.com'} 
                            type="text" 
                            name="serverAddress"
                            label="Server Address"
                            error={formikProps.errors['serverAddress'] ? true : false}
                            value={formikProps.values['serverAddress']}
					        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								formikProps.setFieldValue('serverAddress', event.target.value)
                            }}
                            onBlur={() =>  formikProps.setFieldTouched('serverAddress', true)}
							/>
				        {formikProps.touched['serverAddress'] &&
                            formikProps.errors['serverAddress'] && (
								<ErrorText>
									{formikProps.errors['serverAddress']}
								</ErrorText>
							)}
                        {
                            formikProps.values.accountType === accountTypes[0] && (
                                <>
                            <Input 
                                placeholder={'/calendar/users'} 
                                type="text" 
                                name="serverPath"
                                label="Server Path"
                                error={formikProps.errors['serverPath'] ? true : false}
                                value={formikProps.values['serverPath']}
					            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								    formikProps.setFieldValue('serverPath', event.target.value)
                                }
							}
                            onBlur={() =>  formikProps.setFieldTouched('serverPath', true)}/>
				        {formikProps.touched['serverPath'] &&
                            formikProps.errors['serverPath'] && (
								<ErrorText>
									{formikProps.errors['serverPath']}
								</ErrorText>
							)}
                        <RowContainer>
                            <Input 
                                placeholder={'Port'} 
                                type="number" 
                                name="port"
                                label="Port"
                                error={formikProps.errors['port'] ? true : false}
                                dimension='180px'
                                value={formikProps.values['port']}
                                onBlur={() =>  formikProps.setFieldTouched('port', true)}
					            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								    formikProps.setFieldValue('port', event.target.value)
                                }
							}/>
                            <FormControlLabel 
                                control={
                                    <Checkbox  
                                        style ={{
                                            color: colors.mainColor,
                                        }}
                                        checked={data.ssl}
                                        onChange={(event) => setData({...data, ssl: event?.target.checked})} />} 
                                label="Use SSL" />
                        </RowContainer>
                        
				        {formikProps.touched['port'] &&
                            formikProps.errors['port'] && (
								<ErrorText>
									{formikProps.errors['port']}
								</ErrorText>
							)}
                                </>
                            )
                        }
        

                            <Button 
                                type="submit"
                                onClick={() => formikProps.handleSubmit()}>
                            Submit
                            </Button>
                        </FormContainer>
                       

                )}
                </Formik>
                
            </MainContainer>
        </MainWrapper>
    )
}
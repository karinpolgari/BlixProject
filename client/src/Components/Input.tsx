import React from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { colors } from '../Constants/colors'

const StyledTextField = styled(TextField)<StyledProps>(
	({ dimension, error }) => ({
		backgroundColor: colors.white,
		borderRadius: '4px',
		height: '38px',
		color: colors.text,
		'& label.Mui-focused': {
			color: colors.text
		},
		'& .MuiInputLabel-outlined': {
			color: error ? colors.red : colors.text,
			fontSize: '14px'
		},
		'& .MuiInputLabel-outlined.Mui-error': {
			color: colors.text
		},
		'&  label.Mui.Mui-error': {
			color: colors.text
		},
		'& .Mui-focused': {
			color: colors.text
		},
		'& .MuiInputBase-input': {
			WebkitTextFillColor: colors.text,
		},
		'& .MuiOutlinedInput-root': {
			padding: '0px !important',
			'& fieldset': {
				borderColor: colors.text
			},
			'&:hover fieldset': {
				borderColor: colors.text
			},
			'&.Mui-focused fieldset': {
				borderColor: colors.text
			}
		},
		'& .MuiFormHelperText-root': {
			color: 'red !important'
		},
		width: dimension ? dimension : '300px'
	})
)

interface Props {
	name?: string
	placeholder: string
	value: string | number
    label: string
	type?: string
    dimension?: string
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
    error: boolean
    onBlur: () => void
}

interface StyledProps {
	dimension?: string
    error: boolean
}


export const Input = (props: Props) => {
	return (
		<StyledTextField
			type={props.type}
			name={props.name}
			size='small'
            label={props.label}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
            dimension={props.dimension}
            error={props.error}
            onBlur={props.onBlur}
		/>
	)
}
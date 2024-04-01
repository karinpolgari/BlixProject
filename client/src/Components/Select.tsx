import { styled } from '@mui/material/styles'
import { SelectChangeEvent } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { default as SelectMui } from '@mui/material/Select'
import {colors} from './../Constants/colors'

interface Props {
	labelValue: string
	name: string
	value: string
	options: string[]
	onChange: (event: SelectChangeEvent<unknown>) => void
    error: boolean
}

interface StyledProps {
    error: boolean
}

const StyledMenuItem = styled(MenuItem)({
	backgroundColor: colors.white,
	color: colors.text,
	'& .Mui-focused': {
		color: colors.text,
	},
	'&.MuiMenuItem-gutters': {
		backgroundColor: colors.white
	},
	'&.MuiMenuItem-gutters:hover': {
		backgroundColor: colors.mainContainer
	},
	'&.MuiMenuItem-gutters-selected': {
		backgroundColor: colors.white
	}
})

const StyledOutline = styled(OutlinedInput)<StyledProps>(
	({ error }) => ({
	fontSize: '16px',
	'& .MuiOutlinedInput-notchedOutline': {
		borderColor: error ? colors.red : colors.text
	},
	'&:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: colors.text
	},
	'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: colors.text
	}
	})
)

const StyledInputLabel = styled(InputLabel)({
		color: colors.text,
		'&.Mui-focused': {
			color: colors.text,
			marginTop: '0px'
		}
	})

const SelectControl = styled(FormControl)({
		color: colors.text,
		borderRadius: '4px',
		textOverflow: 'ellipsis',
		width: '300px'
})

const StyledSelectMui = styled(SelectMui)({
		color: colors.text,
		'& .MuiSvgIcon-root': {
			color: colors.text
		},
		background: colors.white
})


export const Select = (props: Props) => {
	
	const handleChange = (event: SelectChangeEvent<unknown>) => {
		props.onChange(event)
	}

	return (
		<SelectControl 
			variant={'outlined'}
			size='small' 
			margin ='dense'>
			<StyledInputLabel 
				margin='dense'>
				{props.labelValue}
			</StyledInputLabel>
			<StyledSelectMui
				name={props.name}
				value={props.value}
				onChange={handleChange}
				margin='dense'
				input={<StyledOutline 
					label={props.labelValue} 
					error={props.error}/>}
				MenuProps={{
					disableScrollLock: true,
					MenuListProps: {
						sx: {
							padding: 0
						}
					},
					PaperProps: {
						sx: {
							background: 'white',
							maxHeight: '200px'
						}
					}
				}}>
				{props.options.map((option, index) => (
					<StyledMenuItem dense={true} 
						key={index} 
						value={option}>
						{option}
					</StyledMenuItem>
				))}
			</StyledSelectMui>
		</SelectControl>
	)
}
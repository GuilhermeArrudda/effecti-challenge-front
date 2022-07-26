export const styles = {
	page: {
		width: '100vw',
		height: '100vh',
		backgroundColor: '#303134',
	},
	box: {
		width: '100vw',
		height: '90vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		ml: '20px',
		fontWeight: '500'
	},
	list: {
		maxWidth: '1000px',
		overflow: 'auto',
		height: '100%',
		backgroundColor: '#dae0ea',
		maxHeight: '500px',
		p: '20px',
		'& ul': { pl: '20px', pr: '20px', pb: '10px' },
		'::-webkit-scrollbar': {
			display: 'none'
		}
	},
	emptyList: {
		width: '1000px',
		height: '500px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'auto',
		backgroundColor: '#dae0ea',
		fontSize: '50px',
		p: '20px',
		'& ul': { pl: '20px', pr: '20px', pb: '10px' },
		'::-webkit-scrollbar': {
			display: 'none'
		}
	},
	header: {
		width: '1000px',
		mt: '10px',
		backgroundColor: '#dae0ea',
		textAlign: 'center',
		fontWeight: '700',
		fontSize: '30px'
	},
	navigate: {
		width: '75px',
		backgroundColor: '#dae0ea', 
		display: 'flex', 
		justifyContent: 'end',
		gap: '10px', 
		mt: '10px'
	},
	button: {
		cursor: 'pointer',
		'&:hover': {
			background: "#565656",
		},	
	},
	navigatePrevious: {
		width: '75px',
		backgroundColor: '#dae0ea', 
		display: 'flex', 
		justifyContent: 'start',
		gap: '10px', 
		mt: '10px'
	}

}
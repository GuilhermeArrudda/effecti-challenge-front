import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { styles } from "./styles";
import BasicButtonGroup from "../../components/buttonGroup";
import Check from "../../components/checkbox";
import Variants from "../../components/skeleton";
import ButtonAppBar from "../../components/appBar";
import { api } from "../../services/api";
import useCount from "../../hooks/useCount";
import useProgress from "../../hooks/useProgress";

export default function Bids() {
	const [bids, setBids] = useState([])
	const { count, setCount } = useCount()
	const { progress } = useProgress()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

useEffect(() => {
	getBids()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [count, progress])

function getBids() {
	setLoading(true)
	api.getBids(count, progress)
.then((response) => {
	setError(false)
	setBids(response.data)
})
.catch((error) => {
	setError(true)
	console.log(error)
})
.finally(() => {
	setLoading(false)
})
}

function handleNextPage() {
	setCount(count + 1)
}

function handlePreviousPage() {
	setCount(count - 1)
}

const data = ['Divulgado',	'Aberto', 'Encerrado']

	if(loading === true) {
		return (
			<Box sx={styles.page}>
				<ButtonAppBar/>
				<Box sx={styles.box}>
				<BasicButtonGroup/>
				<Variants/>
				</Box>
			</Box>
		)
	}

	if(error === true) {
		return (
			<Box sx={styles.page}>
				<ButtonAppBar/>
				<Box sx={styles.box}>
				<BasicButtonGroup/>
				<Box sx={styles.header}>{data[Number(progress)-1]}</Box>
				<Divider sx={{ height: '10px' }}/>
				<Box sx={styles.emptyList}>Não existem mais licitações</Box>
				<Divider/>
				<Box sx={styles.navigatePrevious}>
				<NavigateBeforeIcon sx={styles.button} onClick={handlePreviousPage}/>
				<Typography>{count}</Typography>
				</Box>
				</Box>
			</Box>
		)
	}

	return (
		<Box sx={styles.page}>
		<ButtonAppBar/>
		<Box sx={styles.box}>
			<BasicButtonGroup/>
			<Box sx={styles.header}>{data[Number(progress)-1]}</Box>
			<Divider sx={{ height: '10px' }}/>
			<Box sx={styles.list}>
				{bids.map((b, i) => 
					<>
					<Box sx={{display: 'flex', gap: '20px'}}>
							<Check/>
							<li dangerouslySetInnerHTML={{__html: b.html }}/>
					</Box>
					<Divider/>
					</>
					)}
			</Box>
			{count > 1 ?
			<Box sx={styles.navigate}>
				<NavigateBeforeIcon sx={styles.button} onClick={handlePreviousPage}/>
				<Typography>{count}</Typography>
				<NavigateNextIcon sx={styles.button} onClick={handleNextPage}/>
			</Box>
			:
			<Box sx={styles.navigate}>
				<Typography>{count}</Typography>
				<NavigateNextIcon sx={styles.button} onClick={handleNextPage}/>
			</Box>
			}			
		</Box>
		</Box>
	)
}
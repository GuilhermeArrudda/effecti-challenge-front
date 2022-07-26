import { Button, ButtonGroup } from '@mui/material';
import useCount from '../../hooks/useCount';
import useProgress from '../../hooks/useProgress';
import { styles } from './styles';

export default function BasicButtonGroup() {
	const { setProgress } = useProgress()
	const { setCount } = useCount()

	function handleButton(e) {
		setProgress(e.target.id)
		setCount(1)
	}

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={styles.box}>
      <Button id='1' sx={styles.button} onClick={(e) => {handleButton(e)}}>Divulgado</Button>
      <Button id='2' sx={styles.button} onClick={(e) => {handleButton(e)}}>Aberto</Button>
      <Button id='3' sx={styles.button} onClick={(e) => {handleButton(e)}}>Encerrados</Button>
    </ButtonGroup>
  );
}
import { AppBar, Box, Button, Divider, Toolbar } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx= {{ p: '10px' }}>
          <Button color="inherit">Entrar</Button>
										<Divider orientation="vertical" flexItem sx={{ backgroundColor: '#000' }}/>
										<Button color="inherit">Home</Button>
										<Divider orientation="vertical" flexItem sx={{ backgroundColor: '#000' }}/>
										<Button color="inherit">Licitações salvas</Button>
										<Divider orientation="vertical" flexItem sx={{ backgroundColor: '#000' }}/>
										<Button color="inherit">Registrar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
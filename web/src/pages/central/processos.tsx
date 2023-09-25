import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/header';
import { MARGIN_BOTTOM } from '../../constants/marginBottom';

export function Processos() {
  //   const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     async function buscandoConvenios() {
  //       const convenios = await ConveniosServices.index();

  //       setConvenios(convenios);
  //       setIsLoading(false);
  //     }

  //     buscandoConvenios();
  //   }, [setConvenios]);

  //   if (isLoading) {
  //     return <Typography>Carregando...</Typography>;
  //   }

  return (
    <>
      <Header
        breadcrumbs={{
          activePage: 'Processos',
          otherPages: [
            { name: 'Home', link: '/' },
            { name: 'Central', link: '/' },
          ],
        }}
      />

      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        style={{ marginBottom: MARGIN_BOTTOM * 2 }}
      >
        <Grid item xl={6} lg={6} md={6}>
          <Button
            size='small'
            type='button'
            color='primary'
            variant='contained'
            style={{ color: '#FFF' }}
            onClick={() => navigate('/central/processos/novo')}
          >
            CADASTRAR
          </Button>
        </Grid>

        <Grid item xl={6} lg={6} md={6}>
          <TextField
            size='small'
            fullWidth
            margin='dense'
            variant='outlined'
            label='PESQUISAR POR NOME'
          />
        </Grid>
      </Grid>

      <Grid container justifyContent='center'>
        <Grid item xl={12} lg={12} md={12}>
          {/* {convenios.length === 0 ? (
            <Typography align='center' color='textSecondary'>
              Nenhum convênio encontrado
            </Typography>
          ) : (
            <Tabela editar={abrirModalEditar} excluir={abrirModalExcluir} />
          )} */}
        </Grid>
      </Grid>
    </>
  );
}

import { Autocomplete, Box, Button, Grid, IconButton, TextField, Tooltip } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { MdInfo } from 'react-icons/md';

import { useProcessos } from '../../../hooks/useProcessos';
import { useSteppers } from '../../../hooks/useStepper';
import { ConfigPermissao } from '../../../models/configPermissao';
import ProcessosServices from '../../../services/processos';
import { FormField } from '../../formField';
import { PopUpAlert } from '../../popUpAlert';

export function Processo() {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  const { setProcessos, setProcesso } = useProcessos();
  const { handleNext } = useSteppers();

  const [configsPermissao, setConfigsPermissao] = useState<ConfigPermissao[]>([]);
  const [configPermissao, setConfigPermissao] = useState({} as ConfigPermissao);

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      nome: '',
      descricao: '',
      configPermissao: {} as ConfigPermissao,
    },
    onSubmit: async values => {
      const { message, processos, criado } = await ProcessosServices.store({
        nome: values.nome,
        descricao: values.descricao,
        configPermissao: values.configPermissao,
      });

      if (!processos) {
        setAlertType('error');
        setAlertMessage(message);
        setAlertIsOpen(true);
      } else {
        setProcessos(processos);
        setProcesso(criado);

        setAlertType('success');
        setAlertMessage(message);
        setAlertIsOpen(true);
        handleNext();
      }
    },
  });

  //   useEffect(() => {
  //     async function buscandoConvenios() {
  //       const convenios = await ConveniosServices.index();

  //       setConvenios(convenios);
  //       setIsLoading(false);
  //     }

  //     buscandoConvenios();
  //   }, [setConvenios]);

  return (
    <>
      <PopUpAlert
        type={alertType}
        isOpen={alertIsOpen}
        message={alertMessage}
        onClose={() => setAlertIsOpen(false)}
      />

      <Grid
        container
        spacing={2}
        alignContent='center'
        justifyContent='center'
        onSubmit={handleSubmit}
        component={'form'}
        style={{ textAlign: 'center' }}
      >
        <Grid item xl={4} lg={4} md={4}>
          <FormField>
            <TextField
              required
              fullWidth
              margin='dense'
              variant='outlined'
              placeholder='Escolha um nome para o seu processo'
              label='Nome'
              InputLabelProps={{ shrink: true }}
              {...getFieldProps('nome')}
            />
          </FormField>
        </Grid>

        <Grid item xl={6} lg={6} md={6}>
          <Grid item>
            <FormField>
              <Autocomplete
                options={configsPermissao}
                getOptionLabel={option => option.descricao}
                // getOptionSelected={(option, value) => option.id === value.id}
                onChange={(event, value) =>
                  value ? setConfigPermissao(value) : setConfigPermissao({} as ConfigPermissao)
                }
                renderInput={params => (
                  <Tooltip
                    title='Informe a empresa em que o associado está vinculado. Esta opção é utilizada para pagamentos com desconto em folha ou a título informativo em relatórios do sistema.'
                    placement='top'
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <IconButton size='small'>
                        <MdInfo size={16} />
                      </IconButton>

                      <TextField
                        {...params}
                        required
                        fullWidth
                        margin='dense'
                        variant='outlined'
                        InputLabelProps={{ shrink: true }}
                        placeholder='Qual a configuração de permissão?'
                        label='Permissão'
                      />
                    </div>
                  </Tooltip>
                )}
              />
            </FormField>
          </Grid>
        </Grid>

        <Grid item xl={12} lg={12} md={12}>
          <FormField>
            <TextField
              multiline
              minRows={5}
              required
              fullWidth
              margin='dense'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              label='Descrição'
              placeholder='Descreva brevemente o processo'
              {...getFieldProps('descricao')}
            />
          </FormField>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button variant='contained' type='submit' sx={{ mt: 1, mr: 1 }}>
                CONTINUAR
              </Button>

              <Button disabled={true}>VOLTAR</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

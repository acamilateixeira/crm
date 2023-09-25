// import { Box, Button, Grid, IconButton, TextField } from '@mui/material';
// import { useState } from 'react';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// import { FaPlus } from 'react-icons/fa';
// import { MdClose } from 'react-icons/md';

// import { useProcessos } from '../../../hooks/useProcessos';
// import { useSteppers } from '../../../hooks/useStepper';
// import { useTheme } from '../../../hooks/useTheme';
// import { ConfigEtapa } from '../../../models/configEtapa';
// import EtapasServices from '../../../services/etapas';
// import { FormField } from '../../formField';
// import { PopUpAlert } from '../../popUpAlert';

export function Campo() {
  //   const [alertMessage, setAlertMessage] = useState('');
  //   const [alertIsOpen, setAlertIsOpen] = useState(false);
  //   const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  //   const { type } = useTheme();
  //   const { setProcessos, processo } = useProcessos();
  //   const { handleNext } = useSteppers();

  //   const [etapas, setEtapas] = useState<ConfigEtapa[]>([]);

  //   const salvarTodasEtapas = async () => {
  //     const promises = etapas.map(async etapa => {
  //       const { message, processos } = await EtapasServices.store({
  //         idProcesso: processo.id,
  //         nomeEtapa: etapa.nomeEtapa,
  //         descricao: etapa.descricao,
  //         posicao: etapa.posicao,
  //       });

  //       if (!processos) {
  //         setAlertType('error');
  //         setAlertMessage(message);
  //         setAlertIsOpen(true);
  //       } else {
  //         setProcessos(processos);
  //       }
  //     });

  //     // Aguarde todas as requisições serem concluídas antes de prosseguir
  //     await Promise.all(promises);

  //     setAlertType('success');
  //     setAlertMessage('Todas as etapas foram salvas com sucesso.');
  //     setAlertIsOpen(true);
  //     handleNext();
  //   };

  //   // Função para adicionar uma etapa ao estado
  //   const adicionarEtapa = () => {
  //     const novaEtapa: ConfigEtapa = {
  //       id: etapas.length + 1, // Gere um ID único para a nova etapa
  //       idProcesso: processo.id,
  //       nomeEtapa: '',
  //       descricao: '',
  //       posicao: etapas.length + 1, // Defina a posição com base no número de etapas existentes
  //       campos: [], // Inicialize os campos com uma matriz vazia (você pode ajustar isso conforme necessário)
  //     };

  //     // Adicione a nova etapa ao estado
  //     setEtapas([...etapas, novaEtapa]);
  //   };

  //   const handleDragEnd = (result: any) => {
  //     if (!result.destination) return;

  //     const items = [...etapas];
  //     const [reorderedItem] = items.splice(result.source.index, 1);
  //     items.splice(result.destination.index, 0, reorderedItem);

  //     // Atualize a propriedade 'posicao' com base na nova ordem
  //     items.forEach((etapa, index) => {
  //       etapa.posicao = index + 1;
  //     });

  //     setEtapas(items);
  //   };

  //   const removerEtapa = (index: number) => {
  //     const updatedEtapas = [...etapas];
  //     updatedEtapas.splice(index, 1);

  //     // Após a remoção, atualize as posições das etapas restantes
  //     updatedEtapas.forEach((etapa, i) => {
  //       etapa.posicao = i + 1;
  //     });

  //     setEtapas(updatedEtapas);
  //   };

  return (
    <>
      {/* <PopUpAlert
        type={alertType}
        isOpen={alertIsOpen}
        message={alertMessage}
        onClose={() => setAlertIsOpen(false)}
      />

      <Grid
        container
        spacing={3}
        alignContent='center'
        justifyContent='center'
        onSubmit={salvarTodasEtapas}
        component={'form'}
        style={{ textAlign: 'center' }}
      >
        <Grid item xs={12}>
          <Button variant='contained' startIcon={<FaPlus />} onClick={adicionarEtapa}>
            ADICIONAR ETAPA
          </Button>
        </Grid>

        <Grid item xs={6}>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='etapas'>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    borderRadius: '10px',
                    border: '1px solid #00AE9D',
                    padding: '1em',
                  }}
                >
                  {etapas.map((etapa, index) => (
                    <Draggable key={etapa.id} draggableId={`etapa-${etapa.id}`} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            borderRadius: '8px',
                            padding: '0.8em',
                            margin: '8px',
                            background: snapshot.isDragging
                              ? 'rgba(0, 174, 157, 0.4)'
                              : type === 'dark'
                              ? 'rgba(255, 255, 255, 0.2)'
                              : 'rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <Grid container justifyContent='space-between'>
                            <Grid item>
                              <strong>Posição:</strong> {etapa.posicao}°
                            </Grid>

                            <Grid item>
                              <IconButton
                                style={{
                                  top: '0',
                                }}
                                onClick={() => removerEtapa(index)}
                              >
                                <MdClose />
                              </IconButton>
                            </Grid>
                          </Grid>

                          <Grid container justifyContent='center'>
                            <Grid item xs={12}>
                              <FormField>
                                <TextField
                                  required
                                  fullWidth
                                  margin='dense'
                                  variant='outlined'
                                  label='Nome da Etapa'
                                  size='small'
                                  value={etapa.nomeEtapa}
                                  onChange={e => {
                                    const updatedEtapas = [...etapas];
                                    updatedEtapas[index].nomeEtapa = e.target.value;
                                    setEtapas(updatedEtapas);
                                  }}
                                />
                              </FormField>
                            </Grid>

                            <Grid item xs={12}>
                              <FormField>
                                <TextField
                                  multiline
                                  minRows={3}
                                  required
                                  fullWidth
                                  margin='dense'
                                  variant='outlined'
                                  label='Descreva brevemente a etapa'
                                  InputLabelProps={{ shrink: true }}
                                  value={etapa.descricao}
                                  onChange={e => {
                                    const updatedEtapas = [...etapas];
                                    updatedEtapas[index].descricao = e.target.value;
                                    setEtapas(updatedEtapas);
                                  }}
                                />
                              </FormField>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
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
      </Grid> */}
    </>
  );
}

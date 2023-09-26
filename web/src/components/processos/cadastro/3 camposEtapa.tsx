import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useProcessos } from '../../../hooks/useProcessos';
import { InputProcesso, InputProcessoProps } from '../campos/inputProcessos';
import { InputPreviewTabs } from '../campos/previewInput';

export function Campo() {
  const { setProcessos, processo } = useProcessos();
  const [formFields, setFormFields] = useState<InputProcessoProps[]>([]);

  // Função para adicionar um campo ao formulário
  const addFieldToForm = (field: InputProcessoProps) => {
    setFormFields([...formFields, field]);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        alignContent='center'
        justifyContent='center'
        component={'form'}
        style={{ textAlign: 'center', marginTop: 8 }}
      >
        <Grid item xs={7} sx={{ bgcolor: 'divider', borderRadius: '16px' }}>
          <Typography variant='h6' color='textSecondary'>
            Preview Formulário
          </Typography>

          {formFields.map((field, index) => (
            <InputProcesso
              key={index}
              tamanhoGrid={field.tamanhoGrid}
              label={field.label}
              // Outras propriedades do campo, como multiline, required, etc.
              // O tipo já foi definido pela guia atual na função handleAddFieldToForm
              type={field.type}
            />
          ))}
        </Grid>

        <Grid
          item
          xs={4}
          sx={{ bgcolor: 'divider', borderRadius: '16px', display: 'flex', marginLeft: 1 }}
        >
          <InputPreviewTabs onAddField={addFieldToForm} />
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

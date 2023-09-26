import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react';

import { FormField } from '../../formField';
import { InputProcesso, InputProcessoProps } from './inputProcessos';

interface TabOption {
  label: string;
  type: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface InputPreviewTabsProps {
  onAddField: (field: InputProcessoProps) => void;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`vertical-tabpanel-${index}`}>
      {value === index && (
        <Grid
          container
          alignContent='center'
          justifyContent='center'
          p={3}
          style={{ textAlign: 'center' }}
        >
          {children}
        </Grid>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export function InputPreviewTabs({ onAddField }: InputPreviewTabsProps) {
  const [value, setValue] = useState(0);
  const [newField, setNewField] = useState<InputProcessoProps>({
    tamanhoGrid: 12,
    label: '',
    placeholder: '',
    required: false,
    // Outras propriedades iniciais
  });
  const [selectedFieldType, setSelectedFieldType] = useState<string>('text'); // Estado para o tipo selecionado

  const tabOptions: TabOption[] = [
    { label: 'Texto', type: 'text' },
    { label: 'Número', type: 'number' },
    { label: 'Data', type: 'date' },
    { label: 'DOCS | IMG', type: 'file' },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    // Use o índice da guia para acessar o tipo diretamente no array
    setSelectedFieldType(tabOptions[newValue].type);
  };

  const handleAddFieldToForm = () => {
    onAddField(newField);
    // Limpe os campos do formulário
    setNewField({
      tamanhoGrid: 12,
      label: '',
      placeholder: '',
      required: false,
      // Outras propriedades iniciais
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {tabOptions.map((option, index) => (
            <Tab key={index} label={option.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Grid>

      <Grid item xs={9}>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '10px',
              padding: '1rem',
              display: 'flex',
            }}
          >
            <InputProcesso
              tamanhoGrid={12}
              label='Texto Preview'
              type='text'
              onChange={value => console.log('Valor do Text Input:', value)}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* Conteúdo para o tipo 'number' */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '10px',
              padding: '1rem',
              display: 'flex',
            }}
          >
            <InputProcesso
              tamanhoGrid={12}
              label='Número Preview'
              type='number'
              onChange={value => console.log('Valor do Number Input:', value)}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* Conteúdo para o tipo 'date' */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '10px',
              padding: '1rem',
              display: 'flex',
            }}
          >
            <InputProcesso
              tamanhoGrid={12}
              label='Data Preview'
              type='date'
              onChange={value => console.log('Valor do Date Input:', value)}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          {/* Conteúdo para o tipo 'file' */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '10px',
              padding: '1rem',
              display: 'flex',
            }}
          >
            <InputProcesso
              tamanhoGrid={12}
              label='Arquivo Preview'
              type='file'
              onChange={value => console.log('Valor do File Input:', value)}
            />
          </Box>
        </TabPanel>
      </Grid>

      <Grid item xs={12}>
        <Divider style={{ marginBottom: 5 }} />
        {/* Formulário para adicionar propriedades do campo */}
        <Box
          sx={{
            bgcolor: 'divider',
            borderRadius: '16px',
            padding: '1rem',
          }}
        >
          <Typography variant='h6' color='textSecondary'>
            Adicionar Campo
          </Typography>

          <FormField>
            <FormControl fullWidth>
              <InputLabel>Tipo de Campo</InputLabel>
              <Select
                size='small'
                value={selectedFieldType}
                onChange={e => setSelectedFieldType(e.target.value as string)}
              >
                {tabOptions.map((option, index) => (
                  <MenuItem key={index} value={option.type}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FormField>

          <FormField>
            <TextField
              size='small'
              label='Titulo'
              margin='dense'
              fullWidth
              value={newField.label}
              onChange={e => setNewField({ ...newField, label: e.target.value })}
            />
          </FormField>

          <FormField>
            <TextField
              size='small'
              label='Tamanho Grid'
              type='number'
              fullWidth
              margin='dense'
              value={newField.tamanhoGrid}
              onChange={e => setNewField({ ...newField, tamanhoGrid: Number(e.target.value) })}
            />
          </FormField>

          <FormField>
            <TextField
              size='small'
              label='Placeholder'
              margin='dense'
              fullWidth
              value={newField.placeholder}
              onChange={e => setNewField({ ...newField, placeholder: e.target.value })}
            />
          </FormField>

          {/* Adicione mais campos para outras propriedades como tamanhoGrid, placeholder, required, etc. */}
          <Button onClick={handleAddFieldToForm}>Adicionar ao formulário</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

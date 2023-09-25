import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import { Header } from '../../components/header';
import { Processo } from '../../components/processos/cadastro/1 processo';
import { Etapa } from '../../components/processos/cadastro/2 etapasProcesso';
import { useSteppers } from '../../hooks/useStepper';

export function ProcessosNovo() {
  const { steps, handleReset, activeStep } = useSteppers();

  const passos = [<Processo />, <Etapa />];

  const exibir =
    Number(activeStep) + 1 < 9 ? (
      <>
        <Grid item xs={12} style={{ marginBottom: 5 }}>
          <Typography variant='h5' style={{ fontWeight: 'bold' }}>{`Passo ${
            Number(activeStep) + 1
          } | ${steps[Number(activeStep)]?.nome}`}</Typography>
        </Grid>

        {passos[Number(activeStep)]}
      </>
    ) : null;

  return (
    <>
      <Header
        breadcrumbs={{
          activePage: 'Novo',
          otherPages: [
            { name: 'Home', link: '/' },
            { name: 'Central', link: '/' },
            { name: 'Processos', link: '/central/processos' },
          ],
        }}
      />

      <Grid container justifyContent='center'>
        <Grid item xl={12} lg={12} md={12}>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => (
              <Step key={step.nome}>
                <StepLabel
                  optional={
                    index === 3 ? <Typography variant='caption'>ÚLTIMO PASSO</Typography> : null
                  }
                >
                  {step.nome}
                </StepLabel>

                <StepContent style={{ padding: '1.5em' }}>
                  <Grid container component={Paper} style={{ textAlign: 'center', padding: '1em' }}>
                    {exibir}
                  </Grid>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Grid>
      </Grid>
    </>
  );
}

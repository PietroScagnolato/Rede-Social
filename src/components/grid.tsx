import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFBF3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: "20px",
  borderRadius: "20px"
}));

const ContentContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(1)
}));

const StyleddAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: 'auto',
  marginTop: 10
}));

const StyledInput = styled(Typography)(({ theme }) => ({
  border: `1px solid #000`,
  padding: theme.spacing(1),
  borderRadius: "20px",
  cursor: "pointer",
  width: '600px',
}));

const StyleddInput = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    borderRadius: "20px",
    cursor: "pointer",
  }));

const StyledDivider = styled(Typography)(({ theme }) => ({
  borderBottom: `1px solid #000`,
  marginBottom: theme.spacing(1),
}));

export default function AutoGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Item sx={{ height: "260px" }}>
            <StyleddAvatar alt="Pietro" src="static" />
            <Typography variant="h6" marginTop={1.5} fontWeight={800} fontSize={18}>Pietro Augusto Scagnolato</Typography>
            <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15}>CISO</Typography>
            <StyledDivider />
            <StyleddInput variant="body1" onClick={handleOpenModal}>
                Minhas publicações
            </StyleddInput>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ height: "55px", columnCount: "row" }}>
            <ContentContainer>
              <StyledAvatar alt="Pietro" src="static" />
              <StyledInput variant="body1" onClick={handleOpenModal}>
                Começar publicação
              </StyledInput>
            </ContentContainer>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ height: "260px" }}>
          <Typography variant="h6" fontWeight={800} fontSize={18}>Ultimas noticias</Typography>
          <Typography variant="h6" marginTop={2} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Relatorio Global de Ameaças</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Lideres Global em Cibersegurança</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Golpe da mão fantasma</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>200 sites ilegais são bloqueados no Brasil</Typography>
          <Typography variant="h6" marginTop={8} marginBottom={1} fontWeight={800} fontSize={15}>Ver todas as noticias</Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{ marginTop: '-28px' }}>
        <Grid item xs={3}>
          <Item sx={{ height: "260px" }}>
            <Typography variant="h6" fontWeight={800} fontSize={18}>
              Ações
            </Typography>
            <Typography variant="h6" marginTop={2} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Estou pesquisando</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Estou comprando</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Estou querendo ISO</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Estou querendo certificações</Typography>          </Item>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ height: "260px" }}>
            <Typography variant="h6" fontWeight={800} fontSize={18}>
              Eventos
            </Typography>
            <Typography variant="h6" marginTop={2} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Relatorio Global de Ameaças</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Lideres Global em Cibersegurança</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Golpe da mão fantasma</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>200 sites ilegais são bloqueados no Brasil</Typography>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={0} style={{ marginTop: '-28px' }}>
        <Grid item xs={3}>
          <Item sx={{ height: "260px" }}>
            <Typography variant="h6" fontWeight={800} fontSize={18}>
            Recentes
            </Typography>
            <Typography variant="h6" marginTop={2} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Boas praticas de segurança</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Tecnologias</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Artigos</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Estou querendo certificações</Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ height: "260px" }}>
            <Typography variant="h6" fontWeight={800} fontSize={18}>
            Empresas Licenciadas
            </Typography>
            <Typography variant="h6" marginTop={2} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Relatorio Global de Ameaças</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Lideres Global em Cibersegurança</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Golpe da mão fantasma</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>200 sites ilegais são bloqueados no Brasil</Typography>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={0} style={{ marginTop: '-28px' }}>
        <Grid item xs={3}>
          <Item sx={{ height: "260px" }}>
            <Typography variant="h6" fontWeight={800} fontSize={18}>
            Mais pesquisados
            </Typography>
            <Typography variant="h6" marginTop={2} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Boas praticas de segurança</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Como combater hack</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Como minha empresa pode pegar ISO</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Tecnologias para segurança de dados</Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ height: "260px" }}>
            <Typography variant="h6" fontWeight={800} fontSize={18}>
            Empresas Open Source
            </Typography>
            <Typography variant="h6" marginTop={2} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Relatorio Global de Ameaças</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Lideres Global em Cibersegurança</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>Golpe da mão fantasma</Typography>
          <Typography variant="h6" marginTop={0.5} marginBottom={1} fontWeight={500} fontSize={15} textAlign={'left'} marginLeft={1}>200 sites ilegais são bloqueados no Brasil</Typography>
          </Item>
        </Grid>
      </Grid>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Crie sua publicação</DialogTitle>
        <DialogContent>
          <p>This is the content of the modal.</p>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

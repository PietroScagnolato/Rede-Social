import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFF8EE",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: "20px",
  borderRadius: "20px"
}));

export default function AutoGrid() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs >
          <Item sx={{ height: "200px" }}>Perfil</Item>
        </Grid>
        <Grid item xs={6} >
          <Item sx={{ height: "100px", columnCount: "row" }}>
            <Avatar alt="Pietro" src="static/" />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onClick={handleOpenModal}
              InputProps={{
                readOnly: true,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item  sx={{ height: "400px" }}>Noticias</Item>
        </Grid>
      </Grid>

    {/* Modal */}
    <Dialog open={isModalOpen} onClose={handleCloseModal}>
    <DialogTitle>Modal Title</DialogTitle>
    <DialogContent>
    {/* Add your content for the modal here */}
    <p>This is the content of the modal.</p>
    <Button onClick={handleCloseModal} color="primary">
        Close
    </Button>
    </DialogContent>
    </Dialog>
    </Box>
  );
}

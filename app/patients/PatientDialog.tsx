import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { useState, type FormEvent } from "react";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export interface PatientDialogProps {
  open: boolean;
  handleClose: Function;
  onSubmit: Function;
}

export const PatientDialog = ({
  open,
  handleClose,
  onSubmit,
  ...props
}: PatientDialogProps) => {
  const [name, setName] = useState("");
  const onSubmitCallback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name });
    handleClose()
  };
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={onSubmitCallback}>
          <Grid
            container
            spacing={3}
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid size={12}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {`Add new patient`}
              </Typography>
            </Grid>
            <Grid>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                onChange={(event) => {
                  setName(event.target.value);
                  return event;
                }}
              />
            </Grid>
            <Grid >
              <Button  variant="outlined" startIcon={<AddIcon />} type="submit">
                Add new Patient
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

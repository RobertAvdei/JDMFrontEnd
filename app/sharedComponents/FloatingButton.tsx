import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface floatingButtonProps {
  onClick: Function;
  text: string;
}

export const FloatingButton = ({ onClick, text, ...prop }: floatingButtonProps) => {
  const handleChange = () => {
    onClick();
  };
  return (
    <Fab
      variant="extended"
      onClick={handleChange}
      sx={{
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
      }}
    >
      <AddIcon sx={{ mr: 1 }} />
      {text}
    </Fab>
  );
};

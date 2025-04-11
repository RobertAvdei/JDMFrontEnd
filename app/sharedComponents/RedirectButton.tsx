import { Button } from "@mui/material";
import { NavLink } from "react-router";
import SendIcon from '@mui/icons-material/Send';

export interface RedirectButtonProps {
  text: string;
  path: string;
}

export const RedirectButton = ({
  text,
  path,
  ...prop
}: RedirectButtonProps) => {
  return (
    <NavLink to={path}>
      <Button variant="outlined" endIcon={<SendIcon />}>
        {text}
      </Button>
    </NavLink>
  );
};

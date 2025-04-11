import { Avatar, Box, Grid } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import PageviewIcon from "@mui/icons-material/Pageview";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { RedirectButton } from "~/sharedComponents/RedirectButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const LoginContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 1,
        m: 1,
        borderRadius: 1,
      }}
    >
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[900px] w-full space-y-6 px-4">
          <Grid
            container
            spacing={2}
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid alignItems={"center"} justifyItems={"center"} size={6}>
              <Avatar sx={{ bgcolor: green[500], width: 56, height: 56 }}>
                <AccountCircleIcon />
              </Avatar>
              <br />
              <RedirectButton path="/doc/dashboard" text="Login Doctor" />
            </Grid>
            <Grid alignItems={"center"} justifyItems={"center"} size={6}>
              <Avatar sx={{ bgcolor: pink[500], width: 56, height: 56 }}>
                <LibraryBooksIcon />
              </Avatar>
              <br />
              <RedirectButton path="/demo" text="Testing" />
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
};

import type { FC } from "react";
import SideMenu from "./SideMenu";
import { Box, Grid } from "@mui/material";
import AppTheme from "~/theme/AppTheme";

export interface PageLayoutProps {
  Content: FC;
}

export const PageLayout = ({ Content, ...props }: PageLayoutProps) => {
  return (
    <AppTheme>

      <main className="flex items-center justify-center pt-16 pb-4">
      <SideMenu />
      <Box sx={{ flexGrow: 1 }}>
          <Content />
        </Box>
      </main>
    </AppTheme>
  );
};

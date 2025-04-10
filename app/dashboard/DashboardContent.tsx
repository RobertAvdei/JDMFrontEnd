import { Box, Grid } from "@mui/material";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";

export const DashboardContent = () => {
  return (
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
          <GridBox size={7}> <NumberDisplay {...{ title: "Test Title", content: `Test`, number: 55 }}/></GridBox>
          <GridBox size={5}><NumberDisplay {...{ title: "Test Title", content: `Test`, number: 55 }}/></GridBox>
          <GridBox size={4}> <NumberDisplay {...{ title: "Test Title", content: `Test`, number: 55 }}/></GridBox>
          <GridBox size={8}><NumberDisplay {...{ title: "Test Title", content: `Test`, number: 55 }}/></GridBox>
        </Grid>
      </div>
    </div>
  );
};


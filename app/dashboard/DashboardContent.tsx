import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchValue } from "~/constants/utils";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";
import { BarChartComponent } from "./BarChartComponent";

export const DashboardContent = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const serverLink = import.meta.env.VITE_SERVER_LINK;

  useEffect(() => {
    fetchValue(`${serverLink}/patients/count`, setPatientsCount);
  }, []);
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
          <Grid size={4} container>
            <GridBox size={12}>
              <NumberDisplay
                {...{
                  title: "Total Patients",
                  content: `Patients`,
                  number: patientsCount,
                }}
              />
            </GridBox>
            <GridBox size={12}>
              <NumberDisplay
                {...{ title: "Next Appointment", content: `Days`, number: 20 }}
              />
            </GridBox>
          </Grid>
          <Grid size={8} container>
            <GridBox size={12}>
              <BarChartComponent />
            </GridBox>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

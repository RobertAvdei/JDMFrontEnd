import { Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import type { CMAS, Patient } from "~/constants/interfaces";
import { fetchValue } from "~/constants/utils";
import { FloatingButton } from "~/sharedComponents/FloatingButton";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";
import { RedirectButton } from "~/sharedComponents/RedirectButton";
import { LineGraphComponent } from "./LineGraphComponent";

export const PatientDetailContent = () => {
  const { patientId: id } = useParams();
  const [currentPatient, setCurrentPatient] = useState({} as Patient);
  const [cmas, setCmas] = useState([] as CMAS[]);
  const serverLink = import.meta.env.VITE_SERVER_LINK;

  const location = useLocation();

  useEffect(() => {
    fetchValue(`${serverLink}/patients/${id}`, setCurrentPatient);
    fetchValue(`${serverLink}/CMAS/patient/${id}`, setCmas);
  }, []);

  const patientDashboard = [
    { title: "Next Appointment", content: `Days`, number: 10 },
    {
      title: "Patient Name",
      content: `Test`,
      number: 0,
      value: currentPatient.name,
    },
  ];

  const setData = useCallback(() => {
    const result = [];

    for (let index = 0; index < 6; index++) {
      if (cmas[index]) {
        result.push(cmas[index].score);
      }
    }
    return result;
  }, [cmas.length]);

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
          <Grid container spacing={2} size={4}>
            {patientDashboard.map((item, index) => {
              if (!item.value)
                return (
                  <GridBox size={12} key={index}>
                    <NumberDisplay {...item} />
                  </GridBox>
                );
              return (
                <GridBox size={12} key={index}>
                  <p className="text-center">{item.title}</p>
                  <Typography
                    variant={item.value.length > 20 ? "h5" : "h2"}
                    className="text-center"
                  >
                    {item.value}
                  </Typography>
                </GridBox>
              );
            })}
          </Grid>
          <Grid size={8}>
            <GridBox size={12}>
              <LineGraphComponent series={setData()} />
            </GridBox>
          </Grid>

          <GridBox size={6}>
            <NumberDisplay
              {...{ title: "Last Evaluation", content: `Days Ago`, number: 22 }}
            />
            <br />
            <RedirectButton
              path={`${location.pathname}/evaluations`}
              text="More Details"
            />
          </GridBox>
          <GridBox size={6}>
            <NumberDisplay
              {...{ title: "Last Lab results", content: `Days Ago`, number: 5 }}
            />
            <br />
            <RedirectButton
              path={`${location.pathname}/labResults`}
              text="More Details"
            />
          </GridBox>
        </Grid>
      </div>
      <FloatingButton
        onClick={() => console.log("Clicked")}
        text="Assign Exercises"
      />
    </div>
  );
};

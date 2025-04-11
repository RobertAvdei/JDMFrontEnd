import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import type { Patient } from "~/constants/interfaces";
import { fetchValue } from "~/constants/utils";
import { FloatingButton } from "~/sharedComponents/FloatingButton";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";
import { RedirectButton } from "~/sharedComponents/RedirectButton";

export const PatientDetailContent = () => {
  const { patientId: id } = useParams();
  const [currentPatient, setCurrentPatient] = useState({} as Patient);
  const serverLink = import.meta.env.VITE_SERVER_LINK;

  const location = useLocation();


  useEffect(() => {
    fetchValue(`${serverLink}/patients/${id}`, setCurrentPatient);
  
  }, [])
  

  const patientDashboard = [
    { title: "Next Appointment", content: `Days`, number: 10 },
    { title: "Patient Name", content: `Test`, number: 0, value: currentPatient.name },
    { title: "Patient ID", content: ``, number: 0, value: id },
  ];

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
          {patientDashboard.map((item, index) => {
            if (!item.value)
              return (
                <GridBox size={4} key={index}>
                  <NumberDisplay {...item} />
                </GridBox>
              );
            return (
              <GridBox size={4} key={index}>
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

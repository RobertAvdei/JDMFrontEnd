import { Grid, Typography } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { LabResult, LabResultGroup } from "~/constants/interfaces";
import { fetchValue } from "~/constants/utils";
import { DataGridComponent } from "~/sharedComponents/DataGridComponent";
import { FloatingButton } from "~/sharedComponents/FloatingButton";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";

export const LabResultContent = () => {
  const { patientId: id } = useParams();
  const [rows, setRows] = useState([] as LabResult[]);
  const serverLink = import.meta.env.VITE_SERVER_LINK;

  useEffect(() => {
    fetchValue(`${serverLink}/labResults/patient/${id}`, setRows);
  }, []);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "labResultId",
      headerName: "Id ",
      minWidth: 150,
    },
    {
      field: "resultName",
      headerName: "Name",
      // editable: true,
      minWidth: 220,
    },
    {
      field: "unit",
      headerName: "Unit",
      // editable: true,
      minWidth: 220,
    },
    {
      field: "labResultGroup",
      headerName: "Group",
      // editable: true,
      minWidth: 220,
      // @ts-ignore
      valueGetter: (value) => value.groupName,
    },
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
          <Grid size={12}>
            <Typography variant="h2">Lab Results</Typography>
          </Grid>

          <Grid size={12}>
            <DataGridComponent
              rows={rows}
              columns={columns}
              getRowId={(row) => row.labResultId}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

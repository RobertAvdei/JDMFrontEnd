import { Grid, Typography } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { DataGridComponent } from "~/sharedComponents/DataGridComponent";
import { FloatingButton } from "~/sharedComponents/FloatingButton";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";

export const EvaluationsContent = () => {
  const [rows, setRows] = useState([{ id: 1, date: "11/11/2024", score: 20 }]);

  const patientDashboard = [
    { title: "Last evaluation", content: `Days Ago`, number: 10, size: 8 },
    { title: "CMAS", content: ``, number: 40, size: 4 },
  ];

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "id",
      headerName: "Id ",
      minWidth: 150,
    },
    {
      field: "date",
      headerName: "Date",
      // editable: true,
      minWidth: 220,
    },
    {
      field: "score",
      headerName: "Score",
      // editable: true,
      minWidth: 220,
    },
    // {
    //   field: "actions",
    //   type: "actions",
    //   headerName: "Actions",
    //   width: 100,
    //   cellClassName: "actions",
    //   getActions: ({ id, row }) => {
    //     return [
    //       <GridActionsCellItem
    //         icon={<OpenInFullIcon />}
    //         label="Edit"
    //         className="textPrimary"
    //         onClick={handleEditClick(id, row)}
    //         color="inherit"
    //       />,
    //     ];
    //   },
    // },
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
          {patientDashboard.map((item, index) => (
            <GridBox size={item.size} key={index}>
              <NumberDisplay {...item} />
            </GridBox>
          ))}
          <Grid size={12}>
            <Typography variant="h2">Evaluations</Typography>
          </Grid>

          <Grid size={12}>
            <DataGridComponent
              rows={rows}
              columns={columns}
              getRowId={(row) => row.id}
            />
          </Grid>
        </Grid>
      </div>
      <FloatingButton onClick={() => console.log('Clicked')} text="Request new evaluation"/>
    </div>
  );
};

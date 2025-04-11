import { Grid, Typography } from "@mui/material";
import { GridActionsCellItem, type GridColDef, type GridRowId } from "@mui/x-data-grid";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { CMAS } from "~/constants/interfaces";
import { fetchValue } from "~/constants/utils";
import { DataGridComponent } from "~/sharedComponents/DataGridComponent";
import { FloatingButton } from "~/sharedComponents/FloatingButton";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { EvaluationDialog } from "./EvaluationDialog";

export const EvaluationsContent = () => {
  const { patientId: id } = useParams();
  const [cmas, setCmas] = useState([] as CMAS[]);
  const serverLink = import.meta.env.VITE_SERVER_LINK;
  const [showDialog, setShowDialog] = useState(false)
  const [currentCMAS, setCurrentCMAS] = useState({} as CMAS)

    useEffect(() => {
      fetchValue(`${serverLink}/CMAS/patient/${id}`, setCmas);
    }, [])
    

  const patientDashboard = [
    { title: "Last evaluation", content: `Days Ago`, number: 10, size: 8 },
    { title: "CMAS", content: ``, number: cmas.at(-1)?.score || 0, size: 4 },
  ];

  const handleEditClick = (id: GridRowId, row: CMAS)=>() =>{
    setShowDialog(true)
    setCurrentCMAS(row)
  }

  const columns: GridColDef<(typeof cmas)[number]>[] = [
    {
      field: "cmasId",
      headerName: "Id ",
      minWidth: 350,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 220,
    },
    {
      field: "score",
      headerName: "Score",
      minWidth: 100,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            icon={<OpenInFullIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id, row)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleDialogClose = () => {
    setShowDialog(false);
  };

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
              rows={cmas}
              columns={columns}
              getRowId={(row) => row.cmasId}
            />
          </Grid>
        </Grid>
      </div>
      <FloatingButton onClick={() => console.log('Clicked')} text="Request new evaluation"/>
        {/* <EvaluationDialog cmas={currentCMAS} handleClose={handleDialogClose} open={showDialog}/> */}
    </div>
  );
};

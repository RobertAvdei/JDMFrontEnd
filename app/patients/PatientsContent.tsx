import { Grid } from "@mui/material";
import {
  GridActionsCellItem,
  type GridColDef,
  type GridRowId,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { DataGridComponent } from "~/sharedComponents/DataGridComponent";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useNavigate } from "react-router";
import { FloatingButton } from "~/sharedComponents/FloatingButton";
import { PatientDialog } from "./PatientDialog";
import { fetchValue, postValue } from "~/constants/utils";
import type { Patient } from "~/constants/interfaces";

export const PatientsContent = () => {
  const [rows, setRows] = useState([] as Patient[]);
  const [patientsCount, setPatientsCount] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const serverLink = import.meta.env.VITE_SERVER_LINK;

  const navigate = useNavigate();

  const patientDashboard = [
    { title: "Total Patients", content: `Patients`, number: patientsCount },
    { title: "Next Appointment", content: `Days`, number: 55 },
  ];

  const updateTable = () => {
    fetchValue(`${serverLink}/patients`, setRows);
  };

  useEffect(() => {
    fetchValue(`${serverLink}/patients/count`, setPatientsCount);
    updateTable();
  }, []);

  const handleEditClick = (id: GridRowId, row: any) => () => {
    navigate(`/doc/patients/${id}`);
  };

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "patientId",
      headerName: "Id ",
      minWidth: 150,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 550,
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

  const handleOnSubmit = (value: any) =>{
      postValue(`${serverLink}/users`,value,updateTable)
  }

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
            <GridBox size={6} key={index}>
              <NumberDisplay {...item} />
            </GridBox>
          ))}
          <Grid size={12}>
            <DataGridComponent
              rows={rows}
              columns={columns}
              getRowId={(row) => row.patientId}
            />
          </Grid>
        </Grid>
      </div>
      <FloatingButton
        onClick={() => setShowDialog(true)}
        text="Add new Patient"
      />
      <PatientDialog
        open={showDialog}
        handleClose={handleDialogClose}
        onSubmit={handleOnSubmit}
      />
    </div>
  );
};

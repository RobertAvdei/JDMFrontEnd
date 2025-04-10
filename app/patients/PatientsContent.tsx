import { Grid } from "@mui/material";
import {
  GridActionsCellItem,
  type GridColDef,
  type GridRowId,
} from "@mui/x-data-grid";
import { useState } from "react";
import { DataGridComponent } from "~/sharedComponents/DataGridComponent";
import { GridBox } from "~/sharedComponents/GridBox";
import { NumberDisplay } from "~/sharedComponents/NumberDisplay";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useNavigate } from "react-router";

export const PatientsContent = () => {
  const [rows, setRows] = useState([{ id: 1, name: "Test" }]);

  const navigate = useNavigate();

  const patientDashboard = [
    { title: "Total Patients", content: `Patients`, number: 55 },
    { title: "Test Title", content: `Test`, number: 55 },
  ];

  const handleEditClick = (id: GridRowId, row: any) => () => {
    navigate(`/doc/patients/${id}`);
  };

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "id",
      headerName: "Id ",
      minWidth: 150,
    },
    {
      field: "name",
      headerName: "Name",
      // editable: true,
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
          {/* <GridBox size={6}> <NumberDisplay {...{ title: "Test Title", content: `Test`, number: 55 }}/></GridBox>
              <GridBox size={6}><NumberDisplay {...{ title: "Test Title", content: `Test`, number: 55 }}/></GridBox> */}
          <Grid size={12}>
            <DataGridComponent
              rows={rows}
              columns={columns}
              getRowId={(row) => row.id}
            />
          </Grid>
          {/* <GridBox size={12}> <NumberDisplay {...{ title: "Test Title", content: `Test`, number: 55 }}/></GridBox> */}
        </Grid>
      </div>
    </div>
  );
};

import { LineChart } from "@mui/x-charts/LineChart";

export interface LineGraphComponentProps {
  series: number[];
}

export const LineGraphComponent = ({
  series,
  ...props
}: LineGraphComponentProps) => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: series, // [20, 29, 19, 35, 25, 39]
        },
      ]}
      width={500}
      height={300}
    />
  );
};

import { PageLayout } from "~/sharedComponents/PageLayout";
import type { Route } from "../+types/home";
import { PatientsContent } from "~/patients/PatientsContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Patients" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Patients() {
  return  <PageLayout Content={PatientsContent}/>;
}

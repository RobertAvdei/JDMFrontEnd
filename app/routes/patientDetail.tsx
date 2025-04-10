import { PageLayout } from "~/sharedComponents/PageLayout";
import type { Route } from "../+types/home";
import { PatientDetailContent } from "~/patients/PatientDetailContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Patient Details" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PatientDetail() {
  return  <PageLayout Content={PatientDetailContent}/>;
}

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("doc/patients", "routes/patients.tsx"),
  route("doc/dashboard", "routes/dashboard.tsx"),
  route("demo/camera", "routes/demo/camera.tsx"),
  route("doc/patients/:patientId", "routes/patientDetail.tsx"),
  route("doc/patients/:patientId/evaluations", "routes/evaluations.tsx"),
  route("doc/patients/:patientId/labResults", "routes/labResult.tsx"),
] satisfies RouteConfig;

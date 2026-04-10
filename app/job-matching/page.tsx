import DashboardLayout from "../../shared/layouts/DashboardLayout";
import JobMatchingScreen from "../../modules/job_matching/presentation/screens/JobMatchingScreen";

export default function JobMatchingPage() {
  return (
    <DashboardLayout>
      <JobMatchingScreen />
    </DashboardLayout>
  );
}

import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-5">
      <Sidebar />
      <div className="col-span-3 lg:col-span-4 lg:border-l">{children}</div>
    </div>
  );
}

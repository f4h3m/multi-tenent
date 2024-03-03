import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddSubdomainForm from "@/components/forms/AddSubdomainForm";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <Card className="w-[450px] shadow-md">
          <CardHeader>
            <CardTitle>Add New Subdomain</CardTitle>
          </CardHeader>
          <CardContent>
            <AddSubdomainForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

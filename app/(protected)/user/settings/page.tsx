"use client";

import Collumn from "@/components/_app/collumn";
import SettingForms from "@/components/forms/setting-forms";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <Collumn className="flex h-full items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
        </CardHeader>
        <CardContent>
          <SettingForms />
        </CardContent>
      </Card>
    </Collumn>
  );
};

export default SettingsPage;

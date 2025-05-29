import React from "react";
import { Card, CardContent } from "./components/ui/card";

function MenuItem({ icon, label }) {
  return (
    <Card className="text-center hover:shadow-md cursor-pointer">
      <CardContent className="flex flex-col items-center justify-center py-6">
        <div className="text-4xl mb-2">{icon}</div>
        <div className="text-sm font-medium text-blue-900">{label}</div>
      </CardContent>
    </Card>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-blue-900 text-white flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">SLA Tools</div>
        <div className="flex items-center gap-2">
          <span>hai, <strong>Brian Ellia Aryan...</strong></span>
          <div className="w-8 h-8 bg-white rounded-full text-blue-900 flex items-center justify-center">👤</div>
        </div>
      </div>

      <div className="bg-blue-900 text-center text-white py-10">
        <h2 className="text-lg font-semibold">KETENTUAN MEMO BUNGA TERBARU</h2>
        <p className="text-sm mt-2">Klik untuk melihat memo bunga terbaru</p>
      </div>

      <div className="grid grid-cols-3 gap-6 p-6 text-center">
        <MenuItem icon="📝" label="Sentra Layanan Kredit" />
        <MenuItem icon="🏠" label="UPPA" />
        <MenuItem icon="💱" label="PIK" />
        <MenuItem icon="🏦" label="KLIRING" />
        <MenuItem icon="💵" label="ATM" />
        <MenuItem icon="📄" label="FORMULIR" />
      </div>

      <div className="text-center text-blue-900 py-6 text-sm">
        SLA <span className="text-gray-500">Tools</span>
      </div>
    </div>
  );
}

export default App;
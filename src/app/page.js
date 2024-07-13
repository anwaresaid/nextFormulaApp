import SelectFormula from "@/components/SelectFormula";
import SelectedFormula from "@/components/SelectedFormula";
import SelectedResults from "@/components/SelectedResults";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <h1 className="font-bold text-5xl mb-20">Formulas Calclator</h1>
      <div className="text-center h-full w-auto rounded min-w-96">
        <SelectFormula />
        <div className="bg-white p-10">
          <SelectedFormula />
        </div>
        <SelectedResults />
      </div>
    </main>
  );
}

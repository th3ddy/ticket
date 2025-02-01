import { DataList } from "./_components/data-list";
import { FormCreate } from "./_components/form-create";

export default function Home() {
  return (
    <div className="max-w-xl m-auto py-12 space-y-10">
      <FormCreate />
      <DataList />
    </div>
  );
}

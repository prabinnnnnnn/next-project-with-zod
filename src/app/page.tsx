import CreateTopics from "@/components/topics/CreateTopic";

export default function Home() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-4 p-6">
        <div className="col-span-3 bg-slate-100">
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
        </div>
        <div className="col-span-1">
          <CreateTopics />
        </div>
      </div>
    </div>
  );
}

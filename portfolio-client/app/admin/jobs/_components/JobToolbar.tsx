"use client";

interface Props {
  search: string;
  setSearch: (val: string) => void;
  onAdd: () => void;
}

export default function JobToolbar({ search, setSearch, onAdd }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <input
        placeholder="Search by title or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-80 px-4 py-2 rounded-lg bg-[#111C2D] border border-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={onAdd}
        className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg"
      >
        + Add Job
      </button>
    </div>
  );
}
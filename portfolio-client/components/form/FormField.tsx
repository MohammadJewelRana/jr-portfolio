export const FormField = ({ label, children }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-gray-300">{label}</label>
    {children}
  </div>
);

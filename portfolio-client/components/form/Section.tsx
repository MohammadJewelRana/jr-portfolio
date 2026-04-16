export const Section = ({ title, children }: any) => (
  <div>
    <h2 className="text-lg font-semibold text-gray-200 border-b border-gray-700 pb-2 mb-5">
      {title}
    </h2>
    {children}
  </div>
);

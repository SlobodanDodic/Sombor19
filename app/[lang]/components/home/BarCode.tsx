export const BarCode = () => {
  return (
    <table className="table-auto absolute top-0 left-5 w-10 h-screen overflow-x-auto animate-ping -z-10">
      <thead>
        <tr>
          <th className="w-1/12 border-l border-amber-600/5"></th>
          <th className="w-1/12 border-l border-amber-600/10"></th>
          <th className="w-1/12 border-l border-amber-600/10"></th>
          <th className="w-1/12 border-l border-amber-600/20"></th>
          <th className="w-1/12 border-l border-amber-600/30"></th>
          <th className="w-1/12 border-x border-amber-600/40"></th>

          <th className="w-1/12 border-r border-amber-600/40"></th>
          <th className="w-1/12 border-r border-amber-600/30"></th>
          <th className="w-1/12 border-r border-amber-600/20"></th>
          <th className="w-1/12 border-r border-amber-600/10"></th>
          <th className="w-1/12 border-r border-amber-600/10"></th>
          <th className="w-1/12 border-r border-amber-600/5"></th>
        </tr>
      </thead>
    </table>
  );
};

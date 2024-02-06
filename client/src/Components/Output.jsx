function Output({ output }) {
  const results = atob(output?.data?.stdout || " ");

  const getOutput = () => {
    let statusId = output?.status?.id;

    //compilation error
    if (statusId === 6) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(output?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(output.stdout) !== null
            ? `${atob(output.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(output?.stderr)}
        </pre>
      );
    }
  };

  return (
    <div>
      <div
        className="h-40 w-full bg-slate-950 text-white rounded-lg p-3 text-sm over overflow-y-auto "
        style={{ whiteSpace: "pre-wrap" }}
      >
        {output? <>{getOutput()}</> : null}
      </div>
    </div>
  );
}

export default Output;

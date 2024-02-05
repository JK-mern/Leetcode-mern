function Output({ output }) {
  console.log(output);
  return (
    <div>
      <div className="h-40 w-full bg-slate-950 text-white rounded-lg p-3 text-sm">
        {output}
      </div>
    </div>
  );
}

export default Output;

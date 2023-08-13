interface headerProps {
  cdiValue: number;
  handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({ cdiValue, handle }: headerProps) {
  return (
    <header>
      <h1 className="font-mono mb-5 text-4xl font-bold">CDI Calc</h1>
      <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-green-600 text-white">
        <input
          type="number"
          value={cdiValue}
          className="bg-green-600 text-white w-12"
          onChange={handle}
          min={1}
        ></input>
        %a
      </span>
    </header>
  );
}

interface selectDateProps {
  value: number;
  handle: (event: React.ChangeEvent<{ value: string }>) => void;
}

export default function SelectDate({ value, handle }: selectDateProps) {
  return (
    <select
      onChange={handle}
      id="date"
      name="date"
      className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
    >
      <option value="1">{value > 1 ? "Dias" : "Dia"}</option>
      <option selected value="30">
        {value > 1 ? "Meses" : "Mês"}
      </option>
      <option value="365">{value > 1 ? "Anos" : "Ano"}</option>
    </select>
  );
}

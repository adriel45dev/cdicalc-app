interface InputModelProps {
  children?: React.ReactNode;
  name: string;
  placeholder: string;
  min: string;
  type: string;
  handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  alertState: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export default function InputModel(props: InputModelProps) {
  return (
    <div>
      <p className="max-w-sm font-sans font-light text-gray-600">
        {props.name}
      </p>
      <div className="flex flex-row">
        <input
          type={props.type}
          className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          placeholder={props.placeholder}
          min={props.min}
          onChange={props.handle}
          onFocus={() => props.alertState(false)}
        />
        {props.children}
      </div>
    </div>
  );
}

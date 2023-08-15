"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import InputModel from "./components/InputModel";
import Resultado from "./components/Resultado";
import SelectDate from "./components/SelectDate";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

export default function Home() {
  const [cdiValue, setCdiValue] = useState<number>(13.25);
  const [inputValue, setInputValue] = useState(0);
  const [inputDataValue, setInputDataValue] = useState(0);
  const [inputPorcentagemValue, setinputPorcentagemValue] = useState(0);
  const [dateType, setDateType] = useState(30);
  const [redimento, setRendimento] = useState(0);
  const [redimentoFinal, setRendimentoFinal] = useState(0);
  const [alert, setAlert] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setInputValue(newValue);
  };
  const handleDateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseFloat(event.target.value);
    setInputDataValue(newValue);
  };
  const handlePorcemtagemChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseFloat(event.target.value);
    setinputPorcentagemValue(newValue);
  };
  const handleCdiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setCdiValue(newValue);
  };

  const handleDateTypeChange = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    const newValue = parseInt(event.target.value);
    setDateType(newValue);
  };

  const calcCdi = () => {
    if (inputValue && inputDataValue && inputPorcentagemValue) {
      const porcentagem = (cdiValue * inputPorcentagemValue) / 10000;
      let rendimento = inputValue * porcentagem;

     let rendimentoDia = rendimento / 365;
      let rendimentoMes = rendimentoDia * 30.4166666667;
      let rendimentoAno = rendimento;

      if (dateType == 1) {
        rendimento = rendimentoDia;
      }

      if (dateType == 30) {
        rendimento = rendimentoMes;
      }

      if (dateType == 365) {
        rendimento = rendimentoAno;
      }

      const rendimentoFinal = rendimento * inputDataValue;
      const rendimentoTotalFinal = rendimentoFinal + inputValue;

      setRendimento(rendimentoFinal);
      setRendimentoFinal(rendimentoTotalFinal);
    } else {
      setAlert(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 md:p-24 bg-zinc-50">
      {alert && <Alert str={"Um dos campos estão vazios."} state={setAlert} />}
      <div className="relative flex flex-col m-3 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 ">
        <div className="p-6 md:p-20">
          {/* Header */}
          <Header handle={handleCdiChange} cdiValue={cdiValue} />

          {/* Aporte */}
          <InputModel
            name="Com"
            placeholder="0.00"
            min="0"
            type="number"
            handle={handleInputChange}
            alertState={setAlert}
          />

          {/* Periodo */}
          <InputModel
            name="Durante"
            placeholder="1"
            min="1"
            type="number"
            handle={handleDateInputChange}
            alertState={setAlert}
          >
            <SelectDate value={inputDataValue} handle={handleDateTypeChange} />
          </InputModel>

          {/* Porcentagem */}
          <InputModel
            name="Porcentagem do CDI (%)"
            placeholder="100%"
            min="1"
            type="number"
            handle={handlePorcemtagemChange}
            alertState={setAlert}
          />

          <button
            className="w-full p-3 bg-green-600 text-white border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-3 hover:bg-gray-300 hover:text-green-600 hover:font-bold  duration-150"
            onClick={calcCdi}
          >
            Calcular
          </button>

          {/* Resultado */}
          <Resultado rendimento={redimento} rendimentoFinal={redimentoFinal} />
        </div>
      </div>

      <Footer />
    </main>
  );
}

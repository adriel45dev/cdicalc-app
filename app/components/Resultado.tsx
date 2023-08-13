interface resultadoProps {
  rendimento: number;
  rendimentoFinal: number;
}

export default function Resultado({
  rendimento,
  rendimentoFinal,
}: resultadoProps) {
  const formatCurrencyBRL = (price: number) => {
    let BRL = Intl.NumberFormat("pt-BR");
    return BRL.format(+price.toFixed(2));
  };
  return (
    <div className="mt-8">
      <p className="max-w-sm font-sans font-light text-gray-600 m-auto text-center">
        Você teria
      </p>
      <h2 className="t-mono text-4xl font-bold text-center">{`R$ ${formatCurrencyBRL(
        rendimentoFinal
      )}`}</h2>

      <p className="max-w-sm font-sans font-light text-gray-600 m-auto text-center">
        <span className="font-bold text-green-500">{`R$ ${formatCurrencyBRL(
          rendimento
        )}`}</span>{" "}
        de rendimento.
      </p>

      <p className="text-sm text-gray-300 mt-3 text-center">
        * Gostaríamos de ressaltar que as informações e projeções fornecidas nesta aplicação são baseadas exclusivamente no valor anual do Certificado de Depósito Interbancário (CDI) e podem não refletir precisamente o rendimento real que você poderá obter. É essencial considerar vários fatores adicionais que podem afetar seus resultados financeiros.
      </p>
    </div>
  );
}

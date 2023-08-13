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
        * Esses dados são não consideram o índice de correção no período ou o
        desconto do imposto de renda. Essa é uma projeção baseano no valor anual
        do CDI.
      </p>
    </div>
  );
}

function Navegacao(props) {
  return (
    <div className="navegacao">
      {/* Aba Entradas */}
      <input
        name="paginas-cardapio"
        type="radio"
        id="opcao-0"
        onClick={() => props.alterarPaginaSelecionada(0)}
      />
      <label htmlFor="opcao-0">Entradas</label>
      
      {/* Aba Pratos Principais */}
      <input
        name="paginas-cardapio"
        type="radio"
        id="opcao-1"
        onClick={() => props.alterarPaginaSelecionada(1)}
      />
      <label htmlFor="opcao-1">Pratos Principais</label>
      
      {/* Aba Sobremesas */}
      <input
        name="paginas-cardapio"
        type="radio"
        id="opcao-2"
        onClick={() => props.alterarPaginaSelecionada(2)}
      />
      <label htmlFor="opcao-2">Sobremesas</label>

      {/* Aba Bebidas */}
      <input
        name="paginas-cardapio"
        type="radio"
        id="opcao-3"
        onClick={() => props.alterarPaginaSelecionada(3)}
      />
      <label htmlFor="opcao-3">Bebidas</label>

      {/* Aba Drinks */}
      <input
        name="paginas-cardapio"
        type="radio"
        id="opcao-4"
        onClick={() => props.alterarPaginaSelecionada(4)}
      />
      <label htmlFor="opcao-4">Drinks</label>
    </div>
  );
}

export default Navegacao;


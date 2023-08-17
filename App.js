import React, { useState } from 'react';
import './App.css';

function App() {
     //variáveis iniciais
  const [total, setTotal] = useState('');
  const [divisor, setDivisor] = useState('');
  const [renderedRanges, setRenderedRanges] = useState([]);
    //render inicial
  const handleRender = () => {
    const divisorValue = parseInt(divisor, '');
    const totalValue = parseInt(total, '');

    if (divisorValue > 0 && totalValue > 0) {
      const rangesToRender = generateRenderedRanges(totalValue, divisorValue);
      setRenderedRanges(rangesToRender);
    }
  };
      //renderizadondo valor total e divisor e adicionando intervalos
  const generateRenderedRanges = (totalValue, divisorValue) => {
    const ranges = [];
  
    const intervalSize = totalValue / divisorValue;
  
    for (let i = 0; i < divisorValue; i++) {
      let start = i * intervalSize;
      let end = (i === divisorValue - 1) ? totalValue : (i + 1) * intervalSize - 1;
  
      if (Number.isInteger(start)) {
        start = start.toFixed(0);
      } else {
        start = start.toFixed(1);
      }
  
      if (Number.isInteger(end)) {
        end = end.toFixed(0);
      } else {
        end = end.toFixed(1);
      }
  
      ranges.push({ start, end });
    }
  
    return ranges;
  };

      //aqui estamos renderizando os elementos da lista de intervalo

  const renderElements = () => {
    return renderedRanges.map((range, index) => (
      <div key={index}>
        de {range.start} a {range.end}
      </div>
    ));
  };
     //Retorno do render da aplicação
  return (
    <div className='center'>
      <div className="App">
        <div className='valor'>
          <label>Valor:</label>
          <input type="number" value={total} onChange={(e) => setTotal(e.target.value)}/>
        </div>
        <div className='divisor'>
          <label>Divisor:</label>
          <input type="number"value={divisor} onChange={(e) => setDivisor(e.target.value)}/>
        </div>
        <button onClick={handleRender}>Enviar</button>
        <div className="rendered-elements">
          {renderedRanges.length > 0 && renderElements()}
        </div>
      </div>
    </div>
  );
}

export default App

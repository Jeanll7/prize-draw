import { useState } from 'react'
import { NumberDisplay } from './numberDisplay '

function App() {
  const [numbers, setNumbers] = useState([
    { id: "0", number: "06 - 11 - 22 - 44 - 45 - 52" },
    { id: "1", number: "07 - 15 - 20 - 44 - 49 - 54" },
    { id: "2", number: "10 - 12 - 22 - 40 - 43 - 60" },
  ])

  const generateRandomNumbers = () => {
    const generateUniqueNumbers = (count: number, min: number, max: number) => {
      const numbers = new Set<number>();
      while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return Array.from(numbers).sort((a, b) => a - b).map(num => num.toString().padStart(2, '0')).join(' - ');
    };

    const newNumbers = numbers.map((_, index) => ({
      id: index.toString(),
      number: generateUniqueNumbers(6, 1, 60),
    }));

    setNumbers(newNumbers);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center px-4 pt-40 md:pt-[140px]">
      <h1 className="font-bold text-4xl text-white mb-10">Sorteio de Números</h1>

      <button
        type="button"
        className="bg-blue-500 mb-4 items-center rounded-md py-2 px-4 text-white font-medium"
        onClick={generateRandomNumbers}
      >
        Gerar Números
      </button>

      <section className="bg-zinc-50 p-4 rounded-md w-full max-w-[500px]">
        <article className='font-medium justify-center text-center'>
          {numbers.map((num) => (
            <NumberDisplay key={num.id} value={num.number} />
          ))}
        </article>
      </section>


    </div>
  )
}

export default App

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';

export default function App() {
  const [names, setNames] = useState<string[]>([]);
  const MAX_PARTICIPANTS = 10;

  const handleAddName = (name: string) => {
    if (names.length < MAX_PARTICIPANTS) {
      setNames([...names, name]);
    }
  };

  const handleRemoveName = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  const shuffleNames = () => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffled);
  };

  const sortNames = () => {
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    setNames(sorted);
  };

  return (
    <>
      <Header />
    </>
  )
}

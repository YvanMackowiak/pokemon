import { useEffect, useState } from "react";

export const useRandomPokemonId = (): number => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    const number = Math.floor(Math.random() * 1025);
    setRandomNumber(number);
  }, []);

  return randomNumber;
};

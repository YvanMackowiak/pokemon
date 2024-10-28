import { useEffect, useState } from "react";

interface RandomPokemonIdResult {
  randomNumber: number;
  randomNumbersArray: number[];
}

export const useRandomPokemonId = (): RandomPokemonIdResult => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [randomNumbersArray, setRandomNumbersArray] = useState<number[]>([]);

  useEffect(() => {
    // Génère le nombre principal
    const number = Math.floor(Math.random() * 1025);
    setRandomNumber(number);

    // Génère trois autres nombres aléatoires
    const numbersArray = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 1025)
    );
    setRandomNumbersArray(numbersArray);
  }, []);

  return { randomNumber, randomNumbersArray };
};

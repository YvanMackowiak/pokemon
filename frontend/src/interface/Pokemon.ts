import { Stats } from "@/models/pokemonModel";

export interface Pokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: {
    regular: string;
    shiny: string | null;
    gmax?: {
      regular: string;
      shiny: string;
    } | null;
  };
  types:
    | {
        name: string;
        image: string;
      }[]
    | null;
  talents:
    | {
        name: string;
        tc: boolean;
      }[]
    | null;
  stats: Stats | null;
  resistances:
    | {
        name: string;
        multiplier: number;
      }[]
    | null;
  evolution: {
    pre?:
      | {
          pokedex_id: number;
          name: string;
          condition: string;
        }[]
      | null;
    next?:
      | {
          pokedex_id: number;
          name: string;
          condition: string;
        }[]
      | null;
    mega?:
      | {
          orbe: string;
          sprites: {
            regular: string;
            shiny: string;
          };
        }[]
      | null;
  } | null;
  height: string | null;
  weight: string | null;
  egg_groups: string[] | null;
  sexe: {
    male: number;
    female: number;
  } | null;
  catch_rate: number | null;
  level_100: number | null;
  formes: any | null; // Utiliser `any` si les données de "formes" sont inconnues
}

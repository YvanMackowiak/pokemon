export interface Pokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: Sprites;
  types: Type[] | null;
  talents: Talent[] | null;
  stats: Stats | null;
  resistances: Resistance[] | null;
  evolution: Evolution | null;
  height: string | null;
  weight: string | null;
  egg_groups: string[] | null;
  sexe: Sexe | null;
  catch_rate: number | null;
  level_100: number | null;
  formes: any | null;
}

export interface Sprites {
  regular: string;
  shiny: string | null;
  gmax?: {
    regular: string;
    shiny: string;
  };
}
export interface Type {
  name: string;
  image: string;
}

export interface Talent {
  name: string;
  tc: boolean;
}

export interface Sexe {
  male: number;
  female: number;
}

export interface Stats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

export interface Resistance {
  name: string;
  multiplier: number;
}

export interface Evolution {
  pre?: EvolutionStage[] | null;
  next?: EvolutionStage[] | null;
  mega?: MegaEvolution[] | null;
}

export interface EvolutionStage {
  pokedex_id: number;
  name: string;
  condition: string;
}

export interface MegaEvolution {
  orbe: string;
  sprites: {
    regular: string;
    shiny: string;
  };
}

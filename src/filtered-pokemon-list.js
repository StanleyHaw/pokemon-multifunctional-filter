const UNRESTRICTED_LEGENGARY = [
  'Articuno',
  'Articuno-Galar',
  'Zapdos',
  'Zapdos-Galar',
  'Moltres',
  'Moltres-Galar',
  'Raikou',
  'Entei',
  'Suicune',
  'Regirock',
  'Regiice',
  'Registeel',
  'Latias',
  'Latios',
  'Uxie',
  'Mesprit',
  'Azelf',
  'Heatran',
  'Regigigas',
  'Cresselia',
  'Cobalion',
  'Terrakion',
  'Virizion',
  'Tornadus',
  'Tornadus-Therian',
  'Thundurus',
  'Thundurus-Therian',
  'Landorus',
  'Landorus-Therian',
  'Tapu Koko',
  'Tapu Lele',
  'Tapu Bulu',
  'Tapu Fini',
  'Kubfu',
  'Urshifu',
  'Urshifu-Rapid-Strike',
  'Regieleki',
  'Regidrago',
  'Glastrier',
  'Spectrier',
  'Enamorus',
  'Enamorus-Therian',
  'Wo-Chien',
  'Chien-Pao',
  'Ting-Lu',
  'Chi-Yu',
  'Okidogi',
  'Munkidori',
  'Fezandipiti',
  'Ogerpon',
  'Ogerpon-Wellspring',
  'Ogerpon-Hearthflame',
  'Ogerpon-Cornerstone'
];

const RESTRICTED_LEGENGARY = [
  'Mewtwo',
  'Lugia',
  'Ho-Oh',
  'Kyogre',
  'Groudon',
  'Rayquaza',
  'Dialga',
  'Dialga-Origin',
  'Palkia',
  'Palkiao-Origin',
  'Giratina',
  'Giratina-Origin',
  'Reshiram',
  'Zekrom',
  'Kyurem',
  'Kyurem-Black',
  'Kyurem-White',
  'Xerneas',
  'Yveltal',
  'Zygarde',
  'Zygarde-10',
  'Zygarde-Complete',
  'Cosmog',
  'Cosmoem',
  'Solgaleo',
  'Lunala',
  'Necrozma',
  'Necrozma-Dusk-Mane',
  'Necrozma-Dawn-Wings',
  'Zacian',
  'Zacian-Crowned',
  'Zamazenta',
  'Zamazenta-Crowned',
  'Eternatus',
  'Calyrex',
  'Calyrex-Ice',
  'Calyrex-Shadow',
  'Koraidon',
  'Miraidon',
  'Terapagos',
  'Terapagos-Terastal',
  'Terapagos-Stellar'
];

const MYTHICAL = [
  'Mew',
  'Celebi',
  'Jirachi',
  'Deoxys',
  'Deoxys-',
  'Phione',
  'Manaphy',
  'Darkrai',
  'Shaymin',
  'Shaymin-Sky',
  'Arceus',
  'Victini',
  'Keldeo',
  'Keldeoresolute',
  'Meloetta',
  'Meloetta-Pirouette',
  'Genesect',
  'Diancie',
  'Hoopa',
  'Hoopa-Unbound',
  'Volcanion',
  'Magearna',
  'Marshadow',
  'Zeraora',
  'Meltan',
  'Melmetal',
  'Zarude',
  'Pecharunt'
];

const LATE_BLOOMER = [
  'Dragonite',
  'Tyranitar',
  'Salamence',
  'Metagross',
  'Garchomp',
  'Hydreigon',
  'Goodra',
  'Goodra-Hisui',
  'Kommo-o',
  'Dragapult',
  'Baxcalibur'
];

const ULTRA_BEAST = [
  'Nihilego',
  'Buzzwole',
  'Pheromosa',
  'Xurkitree',
  'Celesteela',
  'Kartana',
  'Guzzlord',
  'Poipole',
  'Naganadel',
  'Stakataka',
  'Blacephalon'
];

const PARADOX = [
  'Great Tusk',
  'Scream Tail',
  'Brute Bonnet',
  'Flutter Mane',
  'Slither Wing',
  'Sandy Shocks',
  'Roaring Moon',
  'Walking Wake',
  'Gouging Fire',
  'Raging Bolt',
  'Iron Treads',
  'Iron Bundle',
  'Iron Hands',
  'Iron Jugulis',
  'Iron Moth',
  'Iron Thorns',
  'Iron Valiant',
  'Iron Leaves',
  'Iron Boulder',
  'Iron Crown'
];

const INVALID_FORMS = [
  'Arceus-',
  'Cherrim-Sunshine',
  'Cramorant-Gorging',
  'Cramorant-Gulping',
  'Eevee-Starter',
  'Genesect-',
  'Greninja-Ash',
  'Keldeo-Resolute',
  'Magearna-Original',
  'Maushold-Four',
  'mega',
  'Mimikyu-Busted',
  'Missingno',
  'morpekohangry',
  'Necrozma-Ultra',
  'Ogerpon-Teal-Tera',
  'Ogerpon-Wellspring-Tera',
  'Ogerpon-Hearthflame-Tera',
  'Ogerpon-Cornerstone-Tera',
  'Pichu-Spikyeared',
  'Pikachu-',
  'Poltchageist-',
  'Polteageist-',
  'Silvally-',
  'Sinistcha-',
  'Sinistea-',
  'totem',
  'Vivillon-',
  'Xerneas-',
  'Zarude-'
];

const UNUSUAL_FORME_BAN_LIST = [
  'Aegislash-Blade',
  'Castform-Rainy',
  'Castform-Snowy',
  'Castform-Sunny',
  'Darmanitan-Zen',
  'Darmanitan-Galar-Zen',
  'Dudunsparce-Three-Segment',
  'Gourgeist-Large',
  'Gourgeist-Small',
  'Gourgeist-Super',
  'Morpeko-Hangry',
  'Pumpkaboo-Large',
  'Pumpkaboo-Small',
  'Pumpkaboo-Super',
  'Wishiwashi-School'
];

const EXCEPTIONS = ['Yanmega'];

const specialPokemons = {
  unrestrictedLegengary: {
    name: 'unrestrictedLegengary',
    data: UNRESTRICTED_LEGENGARY
  },
  restrictedLegengary: {
    name: 'restrictedLegengary',
    data: RESTRICTED_LEGENGARY
  },
  mythical: {
    name: 'mythical',
    data: MYTHICAL
  },
  lateBloomer: {
    name: 'lateBloomer',
    data: LATE_BLOOMER
  },
  ultraBeast: {
    name: 'ultraBeast',
    data: ULTRA_BEAST
  },
  paradox: {
    name: 'paradox',
    data: PARADOX
  }
};

const specialPokemonCategories = [specialPokemons.mythical, specialPokemons.restrictedLegengary];

function filterCondition(pokemonName) {
  return (
    specialPokemonCategories.length > 0 &&
    specialPokemonCategories.some((category) => category.data.includes(pokemonName))
  );
}

const filteredInvalidForms = INVALID_FORMS.filter((form) => !EXCEPTIONS.includes(form));

export function isValidPokemon(pokemonName, serialNumber) {
  return (
    serialNumber > 0 &&
    !filteredInvalidForms.some((form) => pokemonName.includes(form)) &&
    !UNUSUAL_FORME_BAN_LIST.some((form) => pokemonName.includes(form)) &&
    !filterCondition(pokemonName)
  );
}

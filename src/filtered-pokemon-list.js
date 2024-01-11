const UNRESTRICTED_LEGENGARY = [
  'articuno',
  'articunogalar',
  'zapdos',
  'zapdosgalar',
  'moltres',
  'moltresgalar',
  'raikou',
  'entei',
  'suicune',
  'regirock',
  'regiice',
  'registeel',
  'latias',
  'latios',
  'uxie',
  'mesprit',
  'azelf',
  'heatran',
  'regigigas',
  'cresselia',
  'cobalion',
  'terrakion',
  'virizion',
  'tornadus',
  'tornadustherian',
  'thundurus',
  'thundurustherian',
  'landorus',
  'landorustherian',
  'tapukoko',
  'tapulele',
  'tapubulu',
  'tapufini',
  'kubfu',
  'urshifu',
  'urshifurapidstrike',
  'regieleki',
  'regidrago',
  'glastrier',
  'spectrier',
  'enamorus',
  'enamorustherian',
  'wochien',
  'chienpao',
  'tinglu',
  'chiyu',
  'okidogi',
  'munkidori',
  'fezandipiti',
  'ogerpon',
  'ogerponwellspring',
  'ogerponhearthflame',
  'ogerponcornerstone'
];

const RESTRICTED_LEGENGARY = [
  'mewtwo',
  'lugia',
  'hooh',
  'kyogre',
  'groudon',
  'rayquaza',
  'dialga',
  'dialgaorigin',
  'palkia',
  'palkiaorigin',
  'giratina',
  'reshiram',
  'zekrom',
  'kyurem',
  'kyuremblack',
  'kyuremwhite',
  'xerneas',
  'yveltal',
  'zygarde',
  'zygarde10',
  'zygardecomplete',
  'zygardecomplete',
  'cosmog',
  'cosmoem',
  'solgaleo',
  'lunala',
  'necrozma',
  'necrozmaduskmane',
  'necrozmadawnwings',
  'zacian',
  'zaciancrowned',
  'zamazenta',
  'zamazentacrowned',
  'eternatus',
  'calyrex',
  'calyrexice',
  'calyrexshadow',
  'koraidon',
  'miraidon',
  'terapagos',
  'terapagos',
  'terapagosterastal',
  'terapagosstellar'
];

const MYTHICAL = [
  'mew',
  'celebi',
  'celebi',
  'jirachi',
  'jirachi',
  'deoxys',
  'deoxysattack',
  'deoxysdefense',
  'deoxysspeed',
  'phione',
  'manaphy',
  'darkrai',
  'shaymin',
  'shayminsky',
  'shayminsky',
  'arceus',
  'victini',
  'keldeo',
  'keldeoresolute',
  'meloetta',
  'meloettapirouette',
  'meloettapirouette',
  'genesect',
  'diancie',
  'diancie',
  'hoopa',
  'hoopaunbound',
  'volcanion',
  'volcanion',
  'magearna',
  'marshadow',
  'zeraora',
  'meltan',
  'melmetal',
  'melmetal',
  'zarude',
  'pecharunt'
];

const LATE_BLOOMER = [
  'dragonite',
  'tyranitar',
  'salamence',
  'metagross',
  'garchomp',
  'hydreigon',
  'goodra',
  'goodrahisui',
  'goodrahisui',
  'kommo',
  'dragapult',
  'baxcalibur'
];

const ULTRA_BEAST = [
  'nihilego',
  'buzzwole',
  'pheromosa',
  'xurkitree',
  'celesteela',
  'kartana',
  'guzzlord',
  'poipole',
  'naganadel',
  'stakataka',
  'blacephalon'
];

const PARADOX = [
  'greattusk',
  'screamtail',
  'brutebonnet',
  'fluttermane',
  'slitherwing',
  'sandyshocks',
  'roaringmoon',
  'Walkingwake',
  'GougingFire',
  'RagingBolt',
  'IronTreads',
  'IronBundle',
  'IronHands',
  'IronJugulis',
  'IronMoth',
  'IronThorns',
  'IronValiant',
  'IronLeaves',
  'IronBoulder',
  'IronCrown'
];

const INVALID_FORMS = [
  'arceusbug',
  'arceusdark',
  'arceusdragon',
  'arceuselectric',
  'arceusfairy',
  'arceusfighting',
  'arceusfire',
  'arceusflying',
  'arceusghost',
  'arceusgrass',
  'arceusground',
  'arceusice',
  'arceuspoison',
  'arceuspsychic',
  'arceusrock',
  'arceussteel',
  'arceuswater',
  'cherrimsunshine',
  'cramorantgorging',
  'cramorantgulping',
  'dudunsparcethreesegment',
  'eeveestarter',
  'eternamax',
  'floetteeternal',
  'gmax',
  'genesectdouse',
  'genesectshock',
  'genesectburn',
  'genesectchill',
  'greninjaash',
  'keldeoresolute',
  'magearnaoriginal',
  'mausholdfour',
  'mega',
  'mimikyubusted',
  'missingno',
  'morpekohangry',
  'necrozmaultra',
  'ogerpontealtera',
  'ogerponwellspringtera',
  'ogerponhearthflametera',
  'ogerponcornerstonetera',
  'pichuspikyeared',
  'pikachucosplay',
  'pikachurockstar',
  'pikachubelle',
  'pikachupopstar',
  'pikachuphd',
  'pikachulibre',
  'pikachuoriginal',
  'pikachuhoenn',
  'pikachusinnoh',
  'pikachuunova',
  'pikachukalos',
  'pikachualola',
  'pikachupartner',
  'pikachustarter',
  'pikachuworld',
  'poltchageistartisan',
  'polteageistantique',
  'primal',
  'silvallybug',
  'silvallydark',
  'silvallydragon',
  'silvallyelectric',
  'silvallyfairy',
  'silvallyfighting',
  'silvallyfire',
  'silvallyflying',
  'silvallyghost',
  'silvallygrass',
  'silvallyground',
  'silvallyice',
  'silvallypoison',
  'silvallypsychic',
  'silvallyrock',
  'silvallysteel',
  'silvallywater',
  'sinistchamasterpiece',
  'sinisteaantique',
  'totem',
  'vivillonfancy',
  'vivillonpokeball',
  'xerneasneutral',
  'zarudedada'
];

const unusualFormeBanList = [
  'aegislashblade',
  'castformrainy',
  'castformsnowy',
  'castformsunny',
  'darmanitanzen',
  'darmanitangalarzen',
  'gourgeistlarge',
  'gourgeistsmall',
  'gourgeistsuper',
  'pumpkaboolarge',
  'pumpkaboosmall',
  'pumpkaboosuper',
  'wishiwashischool'
];

const EXCEPTIONS = ['yanmega', 'meganium'];

const SpecialPokemons = {
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

const specialPokemonCategories = [SpecialPokemons['mythical'], SpecialPokemons['restrictedLegengary']];

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
    !unusualFormeBanList.some((form) => pokemonName.includes(form)) &&
    !filterCondition(pokemonName)
  );
}

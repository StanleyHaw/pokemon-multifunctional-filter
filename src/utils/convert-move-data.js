function getPriorityInfo(array) {
  const priorityLetters = ['L', 'E', 'M'];
  const priorityMove = array.find((item) => priorityLetters.some((letter) => item.includes(letter)));

  return priorityMove || null;
}

function getContentAfterNumber(inputString) {
  const letterAfter9 = inputString.charAt(1);
  const letter = {
    E: () => 'egg move',
    L: () => getLearnableLevel(inputString),
    M: () => 'TM'
  };

  return letter[letterAfter9]();
}

function getLearnableLevel(inputString) {
  const numberAfterL = inputString.substring(2);
  if (numberAfterL === '0') {
    return 'evolved';
  }
  return numberAfterL;
}

export function inheritEggMove(validPokemonData, moveName) {
  validPokemonData.forEach((currentPokemon, indexOfCurrentPokemon) => {
    if (!Array.isArray(currentPokemon.evos)) return;

    currentPokemon.evos.forEach((evolutionName) => {
      const matchingIndex = validPokemonData.findIndex((evolvedPokemon, indexOfEvolvedPokemon) => {
        const getEvolvedPokemon =
          indexOfCurrentPokemon !== indexOfEvolvedPokemon && evolvedPokemon.name === evolutionName;
        return getEvolvedPokemon;
      });
      const eggMove = currentPokemon.learnset?.[moveName];

      if (!(matchingIndex !== -1 && eggMove)) return;
      // TODO: remove special-forme egg move inheriting (ex. Ursaluna-Bloodmoon's Yawn)
      // TODO: fix final-evolution move covered by before-evolved (ex. Dragonite's Extreme Speed)
      validPokemonData[matchingIndex].learnset = validPokemonData[matchingIndex].learnset || {};
      validPokemonData[matchingIndex].learnset[moveName] = eggMove;
    });
  });
}

export function convertMoveInfoFormat(moveData) {
  const GEN_VERSION = '9';
  const selectCurrentGenMoveData = moveData.filter((node) => node.startsWith(GEN_VERSION));
  const moveInfo = getPriorityInfo(selectCurrentGenMoveData);

  return moveInfo ? getContentAfterNumber(moveInfo) : '';
}

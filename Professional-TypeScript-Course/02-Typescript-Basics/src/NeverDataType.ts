function raiseError(eN: number, eD: string): never {
  //process

  throw {
    errNumber: eN,
    errDescription: eD,
  };
}

raiseError(14, "Invalid User");

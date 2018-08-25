// its telling that a value might never occur

function orderError(error: string): never {
    throw new Error(error);
    // never going to return something
}

orderError('something went wrong');
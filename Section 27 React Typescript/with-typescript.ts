function insertAtBeginning<T>(array: T[],value:T) {
    const newArray = [value,...array];
    return newArray;
}


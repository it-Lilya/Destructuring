export function sort(object) {
  const arr = [];
  for (const properties of object.special) {
    const {
      id,
      name,
      icon,
      description = 'Описание не доступно',
    } = properties;
    arr.push({
      id,
      name,
      icon,
      description,
    });
  }
  return arr;
}

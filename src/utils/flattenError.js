export function flattenError(error) {
  if (!error) return [];
  const result = [];

  function recurse(obj) {
    if (typeof obj === "string") {
      result.push(obj);
    } else if (Array.isArray(obj)) {
      obj.forEach(recurse);
    } else if (typeof obj === "object" && obj !== null) {
      Object.values(obj).forEach(recurse);
    }
  }

  recurse(error);
  return result;
}

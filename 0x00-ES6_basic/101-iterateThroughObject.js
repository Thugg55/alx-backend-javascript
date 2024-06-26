export default function createIteratorObject(report) {
  const iterate = [];
  for (const idx of Object.values(report.allEmployees)) {
    iterate.push(...idx);
  }
  return iterate;

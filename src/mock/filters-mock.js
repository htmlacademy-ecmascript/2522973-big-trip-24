import { filter } from '../constant/filter-const.js';
//console.log(filter);
const generateFilters = (points) => Object.entries(filter).map(([filterType, filterPatternByType]) => ({
  type: filterType,
  coont: filterPatternByType(points).length
}));

export { generateFilters };

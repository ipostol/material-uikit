export default from './Pagination';

export const pagination = (items, page, perPage = 5) => {

  const offset = (page - 1) * perPage;

  return items.slice(offset, offset + perPage);

};

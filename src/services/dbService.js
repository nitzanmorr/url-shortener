import urls from "../models/models.js";

const storeUrl = async (url) => {
  const record = await urls.create({
    url: url,
  });
  return record;
};

const doesUrlExists = async (url) => {
  // returns 1 if exists and 0 if not
  const count = await urls.count({ where: { url: url } });
  return count;
};

const getOriginal = async (id) => {
  const originalUrl = await urls.findOne({
    where: {
      id: id,
    },
  });
  return originalUrl.url;
};

export { storeUrl, doesUrlExists, getOriginal };

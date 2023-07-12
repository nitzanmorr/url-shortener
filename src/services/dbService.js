import { where } from "sequelize";
import urls from "../models/models.js";

const storeUrl = async (url) => {
  const record = await urls.create({
    url: url,
  });
  return record;
};

// const addShortUrl = async (id, short_url) => {
//   try {
//     await urls.update(
//       { short_url: short_url },
//       {
//         where: {
//           id: id,
//         },
//       }
//     );
//     return id;
//   } catch (error) {
//     return error;
//   }
// };

const doesUrlExists = async (url) => {
  // returns 1 if exists and 0 if not
  const count = await urls.count({ where: { url: url } });
  return count;
};

// const getShortUrl = async (originalUrl) => {
//   try {
//     const res = await urls.findOne({
//       where: {
//         url: originalUrl,
//       },
//     });
//     return res.short_url;
//   } catch (error) {
//     return error;
//   }
// };

const getOriginal = async (id) => {
  const originalUrl = await urls.findOne({
    where: {
      id: id,
    },
  });
  return originalUrl.url;
};

export { storeUrl, doesUrlExists, getOriginal };

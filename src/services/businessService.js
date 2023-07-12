import { storeUrl, doesUrlExists } from "./dbService.js";

const newUrl = async (originalUrl) => {
  if (await doesUrlExists(originalUrl)) {
    const short = await getShortUrl(originalUrl);
    return short;
  }
  const record = await storeUrl(originalUrl);
  const shortUrl = `localhost:3000/short/${record.id}`;
  return shortUrl;
};

const getShortUrl = async (originalUrl) => {
  try {
    const res = await urls.findOne({
      where: {
        url: originalUrl,
      },
    });
    return `localhost:3000/short/${res.id}`;
  } catch (error) {
    return error;
  }
};

export { newUrl, getShortUrl };

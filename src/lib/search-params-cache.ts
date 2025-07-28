import {
  createParser,
  createSearchParamsCache,
  parseAsIsoDateTime,
  parseAsString,
} from "nuqs/server";

const parseAsPage = createParser({
  parse(queryValue) {
    return queryValue ? Number(queryValue) : 1;
  },
  serialize(value) {
    return String(value);
  },
});

export const searchParamsParsers = {
  page: parseAsPage.withDefault(1).withOptions({
    shallow: false,
    history: "push",
    clearOnDefault: true,
  }),
  query: parseAsString.withDefault("").withOptions({
    shallow: false,
    history: "replace",
    clearOnDefault: true,
  }),
  fromDate: parseAsIsoDateTime.withOptions({
    shallow: false,
    history: "replace",
    clearOnDefault: true,
  }),
  toDate: parseAsIsoDateTime.withOptions({
    shallow: false,
    history: "replace",
    clearOnDefault: true,
  }),
};

export const searchParamsCache = createSearchParamsCache(searchParamsParsers);

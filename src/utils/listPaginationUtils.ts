export const NUM_DEFAULT_LIST_PAGE_SIZE = 10;

export function handleInitPager() {
  return { currentPage: 1, pageSize: NUM_DEFAULT_LIST_PAGE_SIZE, totalPages: 1, strSearch: '' };
}

export function handlePagerParams(currentPage: number, pageSize: number, objExtra: Record<string, unknown> = {}) {
  return { ...objExtra, page: currentPage, per_page: pageSize };
}

/** Mergea filter[search] solo si hay término. */
export function handleSearchParams(strSearch: string, objExtra: Record<string, unknown> = {}) {
  const strTerm = (strSearch || '').trim();
  if (!strTerm) return objExtra;
  return { ...objExtra, 'filter[search]': strTerm };
}

/** Parsea envelope Vertex { data, meta } y clampa current_page vs last_page. */
export function handleParseList(objResponse: any, currentPage = 1) {
  const data = Array.isArray(objResponse?.data) ? objResponse.data : (Array.isArray(objResponse) ? objResponse : []);
  const objMeta = objResponse?.meta || {};
  const last_page = Math.max(1, Number(objMeta.last_page) || 1);
  return {
    data,
    total: Number(objMeta.total) || data.length,
    current_page: Math.min(Math.max(1, Number(currentPage) || 1), last_page),
    last_page,
    per_page: Number(objMeta.per_page) || NUM_DEFAULT_LIST_PAGE_SIZE
  };
}

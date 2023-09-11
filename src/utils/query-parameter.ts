/**
 * Change a query parameter.
 *
 * @see https://developer.mozilla.org/docs/Web/API/History/pushState
 *
 * @param params - Parameters.
 */
export function changeQueryParameter(params: Record<string, string>) {
  const url = new URL(location as unknown as URL);
  Object.entries(params).forEach(([name, value]) =>
    url.searchParams.set(name, value),
  );
  history.pushState({}, '', url);
}

/**
 * Get query paramters.
 *
 * @see https://developer.mozilla.org/docs/Web/API/URLSearchParams/entries
 */
export function getQueryParameters() {
  const url = new URL(location as unknown as URL);
  return url.searchParams.entries();
}

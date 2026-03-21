export interface ViewCountResponse {
  views: number
}

export function getViewCountApiBaseUrl(): string | null {
  const apiBaseUrl = import.meta.env.PUBLIC_API_BASE_URL?.trim()
  if (!apiBaseUrl) return null

  return apiBaseUrl.replace(/\/+$/, '')
}

export async function incrementPostViews(
  postId: number,
  options: {
    apiBaseUrl?: string | null
    signal?: AbortSignal
  } = {},
): Promise<ViewCountResponse> {
  const apiBaseUrl = options.apiBaseUrl ?? getViewCountApiBaseUrl()
  if (!apiBaseUrl) {
    throw new Error('PUBLIC_API_BASE_URL is not configured.')
  }

  const response = await fetch(`${apiBaseUrl}/posts/${postId}/views`, {
    method: 'POST',
    signal: options.signal,
  })

  if (!response.ok) {
    throw new Error(`Failed to increment post views: ${response.status}`)
  }

  const data = (await response.json()) as Partial<ViewCountResponse>

  return {
    views: typeof data.views === 'number' ? data.views : 0,
  }
}

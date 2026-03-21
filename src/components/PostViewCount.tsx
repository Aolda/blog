import { useEffect, useRef, useState } from 'react'
import { getViewCountApiBaseUrl, incrementPostViews } from '@/lib/view-count'

interface Props {
  postId: number
}

export default function PostViewCount({ postId }: Props) {
  const apiBaseUrl = getViewCountApiBaseUrl()
  const [views, setViews] = useState<number | null>(null)
  const lastIncrementedPostId = useRef<number | null>(null)

  useEffect(() => {
    if (!apiBaseUrl || lastIncrementedPostId.current === postId) {
      return
    }

    lastIncrementedPostId.current = postId

    const abortController = new AbortController()

    void incrementPostViews(postId, {
      apiBaseUrl,
      signal: abortController.signal,
    })
      .then((response) => {
        setViews(response.views)
      })
      .catch((error) => {
        if (error instanceof Error && error.name === 'AbortError') {
          return
        }

        if (import.meta.env.DEV) {
          console.error('Failed to update post view count.', error)
        }
      })

    return () => {
      abortController.abort()
    }
  }, [apiBaseUrl, postId])

  if (!apiBaseUrl) {
    return null
  }

  return (
    <div
      className="flex w-full items-center justify-center gap-2 py-2 sm:w-fit sm:px-2 sm:py-0 first:sm:pl-0 last:sm:pr-0"
      aria-live="polite"
    >
      <span>{views === null ? '-회 조회' : `${views.toLocaleString('ko-KR')}회 조회`}</span>
    </div>
  )
}

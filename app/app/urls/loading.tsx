import LinksListSkeleton from "./_ui/LinksListSkeleton";

function Loading() {
  return (
    <div role="status" className="w-full flex flex-col gap-4 px-2 border-l-4 border-purple-700 divide-y-2 divide-purple-700 shadow animate-pulse">
      <LinksListSkeleton />
      <LinksListSkeleton />
      <LinksListSkeleton />
      <LinksListSkeleton />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loading;
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jga-dataset/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jga-dataset/"!</div>
}

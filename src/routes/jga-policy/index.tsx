import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jga-policy/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jga-policy/"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jga-dac/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jga-dac/"!</div>
}

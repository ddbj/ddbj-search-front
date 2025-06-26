import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jga-study/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jga-study/"!</div>
}

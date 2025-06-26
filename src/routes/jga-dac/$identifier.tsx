import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jga-dac/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jga-dac/$identifier"!</div>
}

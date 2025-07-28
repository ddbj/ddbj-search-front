import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/entry/jga-dac/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jga-dac/$identifier"!</div>
}

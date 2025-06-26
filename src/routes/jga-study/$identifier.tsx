import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jga-study/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jga-study/$identifier"!</div>
}

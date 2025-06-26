import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/all/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/all/$identifier"!</div>
}

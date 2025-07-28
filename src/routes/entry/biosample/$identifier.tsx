import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/entry/biosample/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/biosample/$identifier"!</div>
}

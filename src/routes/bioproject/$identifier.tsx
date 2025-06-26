import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bioproject/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bioproject/$identifier"!</div>
}

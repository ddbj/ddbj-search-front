import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/biosample/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/biosample/"!</div>
}

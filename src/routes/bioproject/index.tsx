import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bioproject/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bioproject/"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sra-experiment/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-experiment/$identifier"!</div>
}

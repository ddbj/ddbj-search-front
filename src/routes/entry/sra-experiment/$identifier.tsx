import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/entry/sra-experiment/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-experiment/$identifier"!</div>
}

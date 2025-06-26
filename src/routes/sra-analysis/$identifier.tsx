import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sra-analysis/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-analysis/$identifier"!</div>
}

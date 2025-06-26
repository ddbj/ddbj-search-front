import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sra-sample/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-sample/$identifier"!</div>
}

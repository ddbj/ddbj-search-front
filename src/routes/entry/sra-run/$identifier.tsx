import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/entry/sra-run/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-run/$identifier"!</div>
}

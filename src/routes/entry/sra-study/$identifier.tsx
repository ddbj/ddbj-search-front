import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/entry/sra-study/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-study/$identifier"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/entry/sra-submission/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-submission/$identifier"!</div>
}

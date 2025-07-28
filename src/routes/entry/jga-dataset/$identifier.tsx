import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/entry/jga-dataset/$identifier')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jga-dataset/$identifier"!</div>
}

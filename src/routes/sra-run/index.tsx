import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sra-run/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-run/"!</div>
}

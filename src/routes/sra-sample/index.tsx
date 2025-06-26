import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sra-sample/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-sample/"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sra-submission/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-submission/"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sra-study/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sra-study/"!</div>
}

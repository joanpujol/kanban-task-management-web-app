import Button from "../components/atoms/Button/Button";
import { Typography } from "../components/atoms/Typography/Typography";
import Layout from "./layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>Home</h1>
      <Button variant="primary" size="lg">Hello</Button>
      <Button variant="secondary" size="sm">Hello</Button>
      <Button variant="destructive" size="sm">Hello</Button>
      <Typography variant="Body" size="lg" bold>Hello</Typography>
      <Typography variant="Body" size="md">Hello</Typography>
    </Layout>
  )
}

import Button from "../components/atoms/Button/Button";
import { Typography } from "../components/atoms/Typography/Typography";
import Layout from "./layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>Home</h1>
      <Button>Hello</Button>
      <Typography variant="Body" size="l">Hello</Typography>
      <Typography variant="Body" size="m">Hello</Typography>
    </Layout>
  )
}

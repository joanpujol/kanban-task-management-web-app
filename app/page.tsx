import { Button } from "../components/atoms/Button/Button";
import Checkbox from "../components/atoms/Checkbox/Checkbox";
import { Text } from "../components/atoms/Typography/Text";
import Layout from "./layout";

export default function HomePage() {
  return (
    <Layout>
      <Button variant="primary" size="lg">Button Primary</Button>
      <Button variant="primary" size="sm">Button Primary</Button>
      <Button variant="secondary" size="sm">Button Secondary</Button>
      <Button variant="destructive" size="sm">Button Destructive</Button>
      <Text size="lg" bold>Hello</Text>
      <Text size="md">Hello</Text>
      <Checkbox />
    </Layout>
  )
}

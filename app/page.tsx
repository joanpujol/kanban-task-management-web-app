"use client";

import { Button } from "../components/atoms/Button/Button";
import { Dropdown } from "../components/atoms/Dropdown/Dropdown";
import { NavigationMenu } from "../components/atoms/NavigationMenu/NavigationMenu";
import { Text } from "../components/atoms/Typography/Text";
import Layout from "./layout";

export default function HomePage() {
  return (
    <Layout>
      <Button variant="primary" size="lg">
        Button Primary
      </Button>
      <Button variant="primary" size="sm">
        Button Primary
      </Button>
      <Button variant="secondary" size="sm">
        Button Secondary
      </Button>
      <Button variant="destructive" size="sm">
        Button Destructive
      </Button>
      <Text size="lg" bold>
        Hello
      </Text>
      <Text size="md">Hello</Text>
      <Dropdown
        options={["Todo", "Doing", "Done"]}
      />
      <NavigationMenu isActive>+ Create new board</NavigationMenu>
      <NavigationMenu isAction>+ Create new board</NavigationMenu>
      <NavigationMenu>+ Create new board</NavigationMenu>
    </Layout>
  );
}

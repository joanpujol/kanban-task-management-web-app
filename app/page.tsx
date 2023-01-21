"use client";

import { Button } from "../components/atoms/Button/Button";
import Checkbox from "../components/atoms/Checkbox/Checkbox";
import { Dropdown } from "../components/atoms/Dropdown/Dropdown";
import { NavigationMenu } from "../components/atoms/NavigationMenu/NavigationMenu";
import { TextField } from "../components/atoms/TextField/TextField";
import { Text } from "../components/atoms/Typography/Text";
import { Board } from "../components/molecules/Board/Board";
import { BoardColumn } from "../components/molecules/BoardColumn/BoardColumn";
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
      <Checkbox />
      <TextField name="name" placeholder="Enter task name" />
      <Dropdown
        options={["Todo", "Doing", "Done"]}
        eventHandler={(value) => console.log(value)}
      />
      <NavigationMenu isActive>+ Create new board</NavigationMenu>
      <NavigationMenu isAction>+ Create new board</NavigationMenu>
      <NavigationMenu>+ Create new board</NavigationMenu>
      <Board
        columns={[
          {
            id: 1,
            name: "TODO",
            tasks: [
              {
                id: 1,
                title: "Task title",
                description: "Task description",
                subtasks: [
                  { title: "Subtask 1", done: true },
                  { title: "Subtask 2", done: false },
                  { title: "Subtask 3", done: false },
                ],
              },
              {
                id: 2,
                title:
                  "This is a task about something and its text is longer than the previous one",
                description: "Task description",
                subtasks: [
                  { title: "Subtask 1", done: false },
                  { title: "Subtask 2", done: true },
                  { title: "Subtask 3", done: true },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "DOING",
            tasks: [
              {
                id: 1,
                title: "Task title",
                description: "Task description",
                subtasks: [
                  { title: "Subtask 1", done: true },
                  { title: "Subtask 2", done: false },
                  { title: "Subtask 3", done: false },
                ],
              },
              {
                id: 2,
                title:
                  "This is a task about something and its text is longer than the previous one",
                description: "Task description",
                subtasks: [
                  { title: "Subtask 1", done: false },
                  { title: "Subtask 2", done: false },
                  { title: "Subtask 3", done: false },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "DONE",
            tasks: [
              {
                id: 1,
                title: "Task title",
                description: "Task description",
                subtasks: [
                  { title: "Subtask 1", done: true },
                  { title: "Subtask 2", done: false },
                  { title: "Subtask 3", done: false },
                ],
              },
            ],
          },
        ]}
      />
    </Layout>
  );
}

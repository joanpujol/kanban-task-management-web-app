import { BoardLayout } from "../../components/molecules/BoardLayout/BoardLayout";
import Layout from "../layout";

export default function ExamplePage() {
  const columns = [
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
            { title: "Subtask 2", done: true },
            { title: "Subtask 3", done: true },
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
  ];
  return (
    <Layout>
      <BoardLayout columns={columns} />
    </Layout>
  );
}
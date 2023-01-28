import { BoardPage } from "../../components/pages/BoardPage";
import Layout from "../layout";

export default function ExamplePage() {
  return (
    <Layout>
      <BoardPage />
      <div id="portal" />
    </Layout>
  );
}

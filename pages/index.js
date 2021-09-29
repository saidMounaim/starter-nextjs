import { useSelector } from "react-redux";
import Layout from "../components/layouts/Layout";
import { fetchPosts } from "../redux/actions/PostActions";
import { wrapper } from "../redux/store";

export default function Index() {
  const { posts, loading, error } = useSelector((state) => state.allPosts);

  console.log(posts, loading, error);

  return (
    <Layout>
      <h1>Starter Full Stack App Using Next js With Redux</h1>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query, ...etc }) => {
      await store.dispatch(fetchPosts(req));
    }
);

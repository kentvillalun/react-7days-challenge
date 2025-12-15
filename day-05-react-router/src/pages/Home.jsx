import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isLoading) {
    return <h1 className="">Loading....</h1>;
  }

  if (isError) {
    return <h1 className="">There was an error</h1>;
  }

  return (
    <div className="">
      <h1>This is the home page {data?.fact}</h1>
      <button className="p-2 bg-amber-200" onClick={refetch}>
        Update the data
      </button>
    </div>
  );
};

export default Home;

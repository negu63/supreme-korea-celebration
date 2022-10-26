import useSWR from "swr";
import Pageable from "../Pageable";
import { fetcher } from "../../utils/fetcher";

export default function PageableWrapper() {
  const { data, error } = useSWR("/api/history", fetcher);

  if (error || !data) return <div></div>;

  return <Pageable histories={JSON.parse(data)} />;
}

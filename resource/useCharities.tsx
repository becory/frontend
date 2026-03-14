import { Charity, getCharities } from "@/api/charities";
import { useEffect, useState } from "react";

export const useCharities = (page: number, limit: number, q: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Charity[]>([]);
  const [resPage, setResPage] = useState<number>();
  const [hasNext, setHasNext] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await getCharities(page, limit, q);
      setData((prev) =>
        page === 1 ? res.data.data : prev.concat(...res.data.data),
      );
      setResPage(res.data.page);
      setHasNext(res.data.hasNext);
      setLoading(false);
    };
    loadData();
  }, [page, limit, q]);

  return { loading, data, page: resPage, hasNext };
};

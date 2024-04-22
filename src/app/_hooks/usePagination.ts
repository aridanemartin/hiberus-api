import { useMemo, useState } from "react";

const usePagination = <T extends any>(data: T[], volume: number = 10) => {
  
  const totalPages = useMemo(
    () => Math.floor(data.length / volume),
    [volume, data.length]
  );
  const [page, setPage] = useState(0);
  
  const slicedData = useMemo(
    () => data.slice(page * volume, page * volume + volume),
    [volume, page]
  );

  return { data: slicedData, page, totalPages, setPage };
};

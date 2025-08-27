"use client";
import { searchParamsParsers } from "@/lib/search-params-cache";
import { useQueryStates } from "nuqs";

export const Pagination = ({total}:Props) => {
    const [{ page }, setPage] = useQueryStates(searchParamsParsers);
    return total > 10 &&  (
        <div className="pagination">
                    <button className="pagination__button" aria-label="Previous page" />
                    <div className="slider">
                      {Array.from({ length: total / 10 }).map((_, index) => (
                        <button
                        type="button"
                          key={index + 1}
                          className={`slid__article ${index === page ? "active" : ""}`}
                          onClick={() => setPage({ page: index + 1 })}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    <button className="pagination__button">Older Posts</button>
                  </div>
    )
}

interface Props {
    total: number;
}
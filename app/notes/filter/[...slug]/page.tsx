import mapCategory from "@/lib/utils";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import { Metadata } from "next";

interface FilterProps {
  params: Promise<{ slug: string[] }>;
}

export const generateMetadata = async ({
  params,
}: FilterProps): Promise<Metadata> => {
  const { slug } = await params;
  const category = slug[0];

  const title =
    category === "all"
      ? "All Catalog"
      : category === "Todo"
        ? "Catalog Todo"
        : category === "Work"
          ? "Catalog Work"
          : category === "Shopping"
            ? "Catalog Shopping"
            : category === "Meeting"
              ? "Catalog Meeting"
              : "Catalog Personal";

  return {
    title,
  };
};

export default async function Filter({ params }: FilterProps) {
  const { slug } = await params;
  const category = slug[0];
  const param = mapCategory(category);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", param],
    queryFn: () => fetchNotes({ tag: param }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={param} />
    </HydrationBoundary>
  );
}

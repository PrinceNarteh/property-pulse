import { apiUrl } from "@/constants";

interface params {
  url: string;
}

export async function fetchData<T>({ url }: params): Promise<T> {
  try {
    const res = await fetch(`${apiUrl}${url}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error: any) {
    return error.message;
  }
}

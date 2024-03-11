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
    const data: { message: T } = await res.json();
    console.log(data);
    return data.message;
  } catch (error: any) {
    return error.message;
  }
}

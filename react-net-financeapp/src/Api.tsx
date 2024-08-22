import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
    return data;
  } catch (error) {
    console.log(`unexpected error ${error}`);
    return `unexpected error ${error}`;
  }
};

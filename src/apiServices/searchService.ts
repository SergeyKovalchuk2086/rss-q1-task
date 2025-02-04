class SearchService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "https://swapi.dev/api";
  }

  async fetchData(pageNumber: number = 1, pageSize: number = 10) {
    try {
      const response = await fetch(
        `${this.apiUrl}/people?page=${pageNumber}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return await response.json();
    } catch {
      console.log("Error - fetchData");
    }
  }

  async fetchDataBySearch(searchValue: string) {
    try {
      const response = await fetch(
        `${this.apiUrl}/people?search=${searchValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          `Ошибка при загрузке данных: ${response.status} ${response.statusText}`,
        );
      }

      return await response.json();
    } catch (error) {
      console.log("Error - fetchDataBySearch", error);
    }
  }
}

const searchService = new SearchService();

export { searchService };

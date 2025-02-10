class CharacterDetailsService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "https://swapi.dev/api/people/";
  }

  async fetchCharacterDetails(id: string) {
    try {
      const response = await fetch(`${this.apiUrl}${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await response.json();
    } catch (error) {
      console.log("Error in fetchCharacterDetails", error);
    }
  }
}

const characterDetailsService = new CharacterDetailsService();

export { characterDetailsService };

import { defineStore } from "pinia";

export const useRecipeStore  = defineStore({
  state: () => {
    recipe,
  },
  actions: {
    async getRecipe(){
      const response;
      this.state.recipe = response
    }
  },
  getters:{

  }
})
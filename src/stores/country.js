import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => ({
      flag: '',
      name:" ",
      capital: ' ',
      area:" " ,
      borders:[],
    }),
  });

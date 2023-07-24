import { defineStore } from 'pinia'
export const useCurrenciesStore = defineStore('currencies', {
    state: () => ({
        data: {
            Valute:{}
        }
    }),
    actions: {
        async loadData() {
          this.data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res) => res.json())
            .catch((err) => (error.value = console.log(err)));
        }
    }
})
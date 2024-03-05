const API_KEY = process.env.NEXT_PUBLIC_API_KEY                                                // importing API Key form .env (git-ignored)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL                                              // importing Base URL form .env (git-ignored)
const rand_list=['movie','harry','james','tom','lego','wars','avengers']

Array.prototype.random = function () { 
    return this[Math.floor((Math.random()*this.length))];                                      // randomly selecting a search query to ensure diffrent movies when page is loaded from random_list
  }

export const getMovies = async () => {
    var search = rand_list.random()
    const res = await fetch(BASE_URL+'s='+search+'&apikey='+API_KEY+'&type=movie');          // requesting an async call from the API
    const data = await res.json();                                                           // waiting for the promise to be fullfilled
    return data
}

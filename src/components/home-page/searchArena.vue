<template>
    <div class="searchForm container">
        <div class="form">
            <select name="manufacturer" id="manufacturer" class="dropDown">
                <option value="brand">Značka</option>
                <option value="audi">Audi</option>
                <option value="mercedes">Mercedes</option>
                <option value="bmw">BMW</option>
            </select>
            <select name="category" id="category" class="dropDown">
                <option value="class">Trieda</option>
                <option value="economic">ekonomicka</option>
                <option value="medium">stredna</option>
                <option value="luxurious">luxusna</option>
            </select>
            <searchbutton></searchbutton>
        </div>
    </div>
</template>


<script>

import searchButton from "@/components/button/searchbutton.vue" 
import searchbutton from '@/components/button/searchbutton.vue'

export default {
  components: { searchbutton },
    name: "SearchForm",
    component: {
        searchButton
    }
}
</script>
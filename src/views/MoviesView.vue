<template>
  <div class="mb-4">
    <TextSectionPageComponent title="Bem-vindo!" text="Aqui está uma lista de filmes." />
  </div>

  <div class="text-sm flex justify-end mb-4">
    <button @click="clearSearch" class="hover:text-brand duration-200">
      Limpar filtros
    </button>
  </div>

  <form class="w-full">
    <div class="flex gap-4 flex-wrap justify-end">
      <InputWrapperComponent for-name="name" class="flex-1 min-w-max w-full">
        <template #icon>
          <FiSearch />
        </template>

        <template #input>
          <InputBaseComponent placeholder="Buscar usuário" type="text" id="name" required v-model="form.Title"
            @update:model-value="handleUpdateInput" />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent for-name="year" class="min-w-max w-full md:w-auto">
        <template #icon>
          <FiSearch />
        </template>

        <template #input>
          <InputBaseComponent placeholder="Buscar por ano" id="year" required v-model="form.Year"
            @update:model-value="handleUpdateInput" />
        </template>
      </InputWrapperComponent>

      <ButtonComponent class="min-w-max" title="Buscar" @click.prevent="handleSearch" />
    </div>

    <div class="relative mt-1 ml-2" v-if="form.error">
      <span class="text-red-500 text-xs absolute mb-2">
        {{ form.error }}
      </span>
    </div>
  </form>

  <div class="flex items-center gap-2 pt-10 mt-10 ">
    <div class="flex gap-6 p-2" >
      <img :src="movie.Poster" :alt="movie.Title" class="w-32">
      <div>
        <p class="text-4xl font-bold">{{ movie.Title }}</p>
        <p class="text-sm" v-if="movie.Year">{{ movie.Year }}</p>
        <p class="mt-4" v-if="movie.Plot">{{ movie.Plot }}</p>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { FiSearch } from "vue3-icons/fi";

import { ref } from "vue";
import { Movie } from "../types/movieTypes";

import ButtonComponent from "../components/ButtonComponent.vue";
import InputWrapperComponent from "../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../components/Input/InputBaseComponent.vue";
import TextSectionPageComponent from "../components/TextSectionPageComponent.vue";

const initialValueForm = { Title: "", Year: "", Poster: "", Plot: "", error: "" };
const form = ref(initialValueForm);
const movie = ref<Movie>({ Title: "", Year: "", Poster: "", Plot: "", });

function handleSearch() {
  let url = "http://www.omdbapi.com/?apikey=fdd110c6";

  if (form.value.Title && form.value.Year) {
    url = url + `&t=${form.value.Title}&y=${form.value.Year}`;
  } else if (form.value.Title && !form.value.Year) {
    url = url + `&t=${form.value.Title}`;
  } else if (!form.value.Title && form.value.Year) {
    url = url + `&y=${form.value.Year}`;
  } else {
    form.value.error = "Preencha ou selecione no minimo um campo";
    return;
  }

  fetch(url)
    .then((response) => response.json())
    .then(m => {
      movie.value.Poster = m.Poster;
      movie.value.Title = m.Title;
      movie.value.Year = m.Year;
      movie.value.Plot = m.Plot;
    });
}

function handleUpdateInput() {
  form.value.error = "";
}

function resetForm() {
  form.value.error = "";
  form.value.Title = "";
  form.value.Year = "";
}

function clearSearch() {
  resetForm();
  // movies.value =[...store.customers];
}
</script>

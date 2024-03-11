<template>
  <form @submit.prevent="login" class="flex flex-col gap-4 w-full max-w-md justify-center items-center px-4">
    <InputWrapperComponent label="Documento" for-name="doc" class="w-full">
        <template #icon>
          <FiUser />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o documento"
            type="text"
            id="doc"
            required
            v-model="form.doc"
          />
        </template>
    </InputWrapperComponent>
    <InputWrapperComponent label="Senha" for-name="password" class="w-full">
      <template #icon>
        <FiLock />
      </template>

      <template #input>
        <InputBaseComponent
          placeholder="Digite a senha"
          type="password"
          id="password"
          required
          v-model="form.password"
        />
      </template>
    </InputWrapperComponent>
    <ButtonComponent
      class="min-w-max mt-2"
      title="Buscar"
      type="submit"
      />

      {{ form }}
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FiUser, FiLock } from "vue3-icons/fi";

import { useLocationStore } from "../store/useLoginStore";

import InputWrapperComponent from "../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../components/Input/InputBaseComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

const initialValueForm = { doc: "", password: "", error: [""] };
const form = ref(initialValueForm);
const store = useLocationStore();

function login() {
  store.auth(form.value)
  .then((c) => console.log(c))
  ;
}

</script>

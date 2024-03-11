<template>
  <div class="flex flex-col w-full max-w-md items-star px-4 mb-4">
    <LogoComponent class="w-40 mb-10"/>
    <h1 class="text-2xl font-bold">Faça seu login</h1>
    <p class="text-sm">Preencha as informações abaixo para fazer login.</p>
  </div>
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
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FiUser, FiLock } from "vue3-icons/fi";

import { useLoginStore } from "../store/useLoginStore";

import InputWrapperComponent from "../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../components/Input/InputBaseComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import LogoComponent from "../components/LogoComponent.vue";

const router = useRouter();

const initialValueForm = { doc: "", password: "", error: [""] };
const form = ref(initialValueForm);
const store = useLoginStore();

function login() {
  store.auth(form.value)
  .then(() => router.push({ path: "/user" }))
  .catch((e) => console.log(e))
  ;
}

</script>

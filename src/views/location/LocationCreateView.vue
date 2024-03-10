<template>
  <BackRouterLinkComponent path="/location" title="Voltar"/>
  <TextSectionPageComponent title="Criar locação" text="Digite as informações abaixo para criar sua locação" />

  <form class="mt-8" @submit="handleSubmit">
    <div class="grid gap-6">
      <InputWrapperComponent label="Nome" for-name="name">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o nome do locação"
            type="text"
            id="name"
            required
            v-model="user.name"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Documento" for-name="doc">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite seu documento"
            type="text"
            id="doc"
            required
            v-model="user.doc"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Senha" for-name="password">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite sua senha"
            type="password"
            id="password"
            required
            v-model="user.password"
          />
        </template>
      </InputWrapperComponent>

      <ButtonComponent title="Criar locação" type="submit"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FiUser } from "vue3-icons/fi";

import { useUsersStore } from "../../store/useUsersStore";
import {  UserCreatedProps } from "../../types/userTypes";

import InputWrapperComponent from "../../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../../components/Input/InputBaseComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import BackRouterLinkComponent from "../../components/BackRouterLinkComponent.vue";
import TextSectionPageComponent from "../../components/TextSectionPageComponent.vue";

const router = useRouter();

const user= ref<UserCreatedProps>({ name: "",  doc: "", password: "" });
const { addUserAsync } = useUsersStore();

async function handleSubmit(e: Event) {
  e.preventDefault();

  // TODO: Adicionar modal ou alert para ambos retornos
  addUserAsync(user.value)
    .then(() => router.push({ path: "/user" }))
    .catch((e) => console.log(e));
}

</script>

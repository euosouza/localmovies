<template>
  <BackRouterLinkComponent path="/user" title="Voltar"/>
  <TextSectionPageComponent title="Editar usuário" text="Atualize as informações abaixo para editar seu usuário" />

  <form class="mt-8" @submit="handleSubmit">
    <div class="grid gap-6">
      <InputWrapperComponent label="Nome" for-name="name">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o nome do usuário"
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

      <InputCheckboxWrapperComponent
        for-name="userDisabeld"
        :label="`${userDisabled ? 'Desabilitar' : 'Ativar'} usuário`"
      >
        <template #input>
          <InputCheckboxBaseComponent v-model="userDisabled" @update:model-value="handleStatusUser" id="userDisabeld"/>
        </template>
      </InputCheckboxWrapperComponent>

      <ButtonComponent title="Salvar alterações" type="submit"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { FiUser } from "vue3-icons/fi";

import { useUsersStore } from "../../store/useUsersStore";
import {  Status, User } from "../../types/userTypes";

import InputWrapperComponent from "../../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../../components/Input/InputBaseComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import BackRouterLinkComponent from "../../components/BackRouterLinkComponent.vue";
import TextSectionPageComponent from "../../components/TextSectionPageComponent.vue";
import InputCheckboxBaseComponent from "../../components/InputCheckbox/InputCheckboxBaseComponent.vue";
import InputCheckboxWrapperComponent  from "../../components/InputCheckbox/InputCheckboxWrapperComponent.vue";

const router = useRouter();
const route = useRoute();

const user= ref<User>({ name: "",  doc: "", password: "", status: Status.ATIVO, id: null});
const userDisabled = ref(false);

const { updatedUserAsync, getUserIdAsync } = useUsersStore();

onMounted(() => {
  getUserIdAsync(Number(route.params.id))
    .then((r) => {
      user.value = {...r as User};
      userDisabled.value = user.value.status == Status.ATIVO;
    });
});

const handleStatusUser = () => {
  user.value.status = userDisabled.value? Status.ATIVO : Status.DESATIVADO;
};

async function handleSubmit(e: Event) {
  e.preventDefault();

  // TODO: Adicionar modal ou alert para ambos retornos
  updatedUserAsync(user.value)
    .then(() => router.push({ path: "/user" }))
    .catch((e) => console.log(e));
}

</script>

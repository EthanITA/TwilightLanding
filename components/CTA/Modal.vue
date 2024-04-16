<template>
  <TransitionRoot :show="open" as="template">
    <Dialog as="div" class="relative z-10" @close="open = subscribed || subscribing || false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/80 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div v-auto-animate>
                <div>
                  <div
                    v-auto-animate
                    :class="{
                      'border-secondary-100 bg-secondary-50': !subscribed,
                      'border-green-400 bg-green-50': subscribed,
                    }"
                    class="mx-auto flex h-12 w-12 items-center justify-center rounded-full border"
                  >
                    <EnvelopeIcon v-if="!subscribed" aria-hidden="true" class="h-6 w-6 text-secondary" />
                    <CheckIcon v-else aria-hidden="true" class="h-6 w-6 text-green-600" />
                  </div>
                  <div v-auto-animate class="mt-3 text-center transition-all duration-200 sm:mt-5">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                      <div v-auto-animate>
                        <p v-if="!subscribed">You'll be one of the first to be invited!</p>
                        <p v-else>Thank you for subscribing!</p>
                      </div>
                    </DialogTitle>
                    <div v-if="!subscribed" class="mt-2">
                      <div class="relative mt-2 rounded-md shadow-sm">
                        <input
                          id="email"
                          v-model="email"
                          :class="{
                            'text-red-900 ring-red-300 placeholder:text-red-500/70  focus:ring-red-500': error,
                          }"
                          aria-describedby="email-error"
                          aria-invalid="true"
                          class="block w-full rounded-md border-0 px-2 py-1.5 pr-10 ring-1 ring-inset ring-gray-300 transition-all duration-200 focus:outline-0 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          name="email"
                          placeholder="you@example.com"
                          type="email"
                        />
                        <div
                          :class="{
                            'invisible w-0': !error,
                            'pr-3': error,
                          }"
                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center transition-all duration-200"
                        >
                          <ExclamationCircleIcon aria-hidden="true" class="h-5 w-5 text-red-500" />
                        </div>
                      </div>
                      <p
                        id="email-error"
                        :class="{
                          'invisible h-0 opacity-0': !error,
                          'mt-2 opacity-100': error,
                        }"
                        class="text-sm text-red-600 transition-all duration-200"
                      >
                        Not a valid email address.
                      </p>
                    </div>
                  </div>
                </div>
                <div v-if="!subscribed" class="mt-5 sm:mt-6">
                  <button
                    :class="{
                      'cursor-not-allowed opacity-50': subscribing,
                    }"
                    class="inline-flex w-full justify-center rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/85 focus-visible:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    type="button"
                    @click="subscribe"
                  >
                    <span v-if="!subscribed && !subscribing"> Join</span>
                    <svg
                      v-else-if="subscribing"
                      class="h-5 w-5 animate-spin text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path
                        class="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { CheckIcon, EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline';

const open = defineModel('open', { default: false });
const error = ref(false);
const email = ref('');
const subscribing = ref(false);
const subscribed = ref(false);

watch(open, () => {
  error.value = false;
  subscribing.value = false;
  subscribed.value = false;
  email.value = '';
});

const validateEmail = () => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email.value);
};

watch(email, () => (error.value = false));
const subscribe = async () => {
  if (!validateEmail()) {
    error.value = true;
    return;
  }
  subscribing.value = true;
  await $fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email: email.value,
    },
  });
  subscribing.value = false;
  subscribed.value = true;
  setTimeout(() => (open.value = false), 2500);
};
</script>

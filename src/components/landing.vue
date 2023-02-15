<script setup>
import { Icon } from "@iconify/vue";
</script>

<script>
export default {
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        this.show = true;
    },
};
</script>

<template>
    <Transition appear>
        <div v-if="show" class="flex items-center h-screen">
            <div id="container" class="container block px-3 mx-auto">
                <div class="grid place-items-center">
                    <h1 class="text-5xl font-light uppercase tracking-widest text-center">CofymDD</h1>
                    <h2 class="text-sm max-w-xs tracking-wider text-center mt-4 mb-8 sm:max-w-xl">
                        A 15 year old who makes excessive use of the internet.
                    </h2>
                    <div class="grid grid-cols-2 gap-1 place-items-center text-lg sm:grid-cols-3">
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-telegram">
                            <a
                                class="text-sky-300 items-center inline-flex justify-center"
                                href="https://t.me/cofymdd"
                                target="_blank"
                            >
                                <Icon icon="mingcute:telegram-fill" class="w-4 h-4 mr-2" />
                                <span>Telegram</span>
                            </a>
                        </div>
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-replit">
                            <a
                                class="text-orange-400 items-center inline-flex justify-center"
                                href="https://replit.com/@CofymDD"
                                target="_blank"
                            >
                                <Icon icon="simple-icons:replit" class="w-4 h-4 mr-2" />
                                <span>Replit</span>
                            </a>
                        </div>
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-discord">
                            <a
                                class="text-indigo-400 items-center inline-flex justify-center"
                                href="https://discordapp.com/users/419440355180544001"
                                target="_blank"
                            >
                                <Icon icon="akar-icons:discord-fill" class="w-4 h-4 mr-2" />
                                <span>Discord</span>
                            </a>
                        </div>
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-twitch">
                            <a
                                class="text-purple-500 items-center inline-flex justify-center"
                                href="https://www.twitch.tv/cofymdd"
                                target="_blank"
                            >
                                <Icon icon="fa:twitch" class="w-4 h-4 mr-2" />
                                <span>Twitch</span>
                            </a>
                        </div>
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-steam">
                            <a
                                class="text-gray-100 items-center inline-flex justify-center"
                                href="https://steamcommunity.com/id/cofymdd"
                                target="_blank"
                            >
                                <Icon icon="fa:steam" class="w-4 h-4 mr-2" />
                                <span>Steam</span>
                            </a>
                        </div>
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-youtube">
                            <a
                                class="text-red-500 items-center inline-flex justify-center"
                                href="https://www.youtube.com/channel/UCCt37GpvjvbdEf9huQPLV8A"
                                target="_blank"
                            >
                                <Icon icon="fa:youtube-play" class="w-4 h-4 mr-2" />
                                <span>YouTube</span>
                            </a>
                        </div>
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-wakatime">
                            <a
                                class="text-gray-100 items-center inline-flex justify-center"
                                href="https://wakatime.com/@e3edc2db-5b7e-46f8-8a21-e79a3d7935fe"
                                target="_blank"
                            >
                                <Icon icon="simple-icons:wakatime" class="w-4 h-4 mr-2" />
                                <span>Wakatime</span>
                            </a>
                        </div>
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-osu">
                            <a
                                class="text-pink-300 items-center inline-flex justify-center"
                                href="https://osu.ppy.sh/users/22038537"
                                target="_blank"
                            >
                                <Icon icon="fa:dot-circle-o" class="w-4 h-4 mr-2" />
                                <span>osu!profile</span>
                            </a>
                        </div>
                        <div class="px-3 py-2 rounded transition duration-500 ease-in-out hover:drop-shadow-github">
                            <a
                                class="text-gray-100 items-center inline-flex justify-center"
                                href="https://github.com/CofymDD"
                                target="_blank"
                            >
                                <Icon icon="fa:github" class="w-4 h-4 mr-2" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.v-enter-active,
.v-leave-active {
    opacity: 1;
    transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

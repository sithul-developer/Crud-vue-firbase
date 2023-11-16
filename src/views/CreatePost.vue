<template>
    <div class="w-full h-screen pt-3 bg-gray-100 ">
        <div class="flex items-center justify-between w-4/5 px-4 py-4 mx-auto bg-white rounded-md shadow-md h-100">
            <form class="w-full" @submit.prevent='handleSubmit'>
                <div class="">
                    <label class="block mb-2 text-sm text-green-700" for="title">
                        Title
                    </label>
                    <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text" v-model="title" placeholder="Input title" required>
                </div>
                <div class="my-3">
                    <label class="block mb-3 text-sm text-green-700" for="content">
                        Content
                    </label>
                    <textarea
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text" v-model="content" placeholder="Input content" required />
                </div>
                <div class="">
                    <label class="block mb-2 text-sm text-green-700" for="tag">
                        Tag
                    </label>
                    <input @keypress.space="handleAddTag"
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text" v-model="tag" placeholder="Input tag" required>
                    <div v-for="tag in tags" :key="tags" class="py-1 text-xs text-gray-500">#{{ tag }}</div>
                </div>
                <button
                    class="px-4 py-1 mt-4 mr-3 text-xs text-green-700 bg-transparent border border-gray-300 rounded shadow-md hover:bg-gray-500 hover:text-white hover:border-transparent">
                    Back
                </button>
                <button
                    class="px-4 py-1 mt-3 text-xs text-green-700 bg-transparent border border-gray-300 rounded shadow-md hover:bg-green-800 hover:text-white hover:border-transparent">
                    {{ id ? "Update" : "Save" }}
                </button>

            </form>
        </div>
    </div>
</template>

<script>

import { addPost } from "@/composable/addPost";
import getPost from "@/composable/getPost";
import updatePost from "@/composable/updatePost";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";


export default {
    props: ["id"],
    setup(props) {
        const title = ref("");
        const content = ref("");
        const tag = ref("");
        const tags = ref([]);
        const { error, load } = addPost("Posts");
        const { fetchAPost, post } = getPost("Posts");
        const { update } = updatePost("Posts");
        const router = useRouter();
        onMounted(async () => {
            if (props.id) {
                await fetchAPost(props.id);
                title.value = post.value.title;
                content.value = post.value.content;
                tags.value = post.value.tags;
                tag.value = post.value.tag;
            }


        });

        /*   const updatePost=()=>{
              const 
          }; */
        const handleAddTag = () => {
            tags.value.push(tag.value)
            tag.value = ''
        };

        const handleSubmit = async () => {
            if (props.id) {
                await update({
                    id: props.id,
                    title: title.value,
                    content: content.value,
                    tags: tags.value,
                });
            } else {

                await load({
                    title: title.value,
                    content: content.value,
                    tags: tags.value,
                })
            }
            if (!error.value) { 
                router.push({ name: "home" })
            }

        }
        return { title, content, tag, tags, handleAddTag, handleSubmit }

    }

}
</script>
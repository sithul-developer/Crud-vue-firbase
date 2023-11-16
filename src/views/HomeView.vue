<template>
  <div class="w-full h-screen pt-3 bg-gray-100 ">
    <div  v-for="post in posts" :key="post.id" class="flex justify-between w-4/5 px-2 py-2 mx-auto my-2 bg-white rounded-md shadow-md h-100">
      <div  class="w-4/5 px-2">
        <div class="w-auto py-2">
          <h2> <span class="px-3 py-1 text-sm text-white bg-blue-500 shadow-md ">{{ post.title }}</span>
          </h2>
          <p class="py-3 text-xs text-gray-500"> {{ post.content }}</p>
          <span v-for=" tag in post.tags" :key="tag" class="p-0 m-0 text-xs text-gray-400"> #{{ tag }} </span>
        </div>
      </div>

      <div class="flex justify-end w-2/12 p-3">
        <span  ><svg   @click="handleEdit(post.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="mx-1 text-green-700 cursor-pointer bi bi-pencil-square" viewBox="0 0 16 16">
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg></span>
        <span ><svg @click="handleDelete(post.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="text-red-700 cursor-pointer bi bi-trash" viewBox="0 0 16 16">
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg></span>

      </div>
    </div>
  </div>
</template>

<script>

import   getPosts from "@/composable/getPosts";
import   deletePosts from "@/composable/deletePosts";
import { useRouter } from "vue-router";
import { onMounted} from 'vue';
export default {
  setup() {
    const { error, posts, fetching } = getPosts("Posts");
    const {remove} = deletePosts("Posts");
    const router = useRouter();

    onMounted (async () => {
      await fetching();
    });

    const handleDelete = async(id)=>{
      await remove(id);
    }

    const handleEdit = (id) => {
      router.push ({ name: "CreatePost", params: {id:id} });
    };

    return { error, posts,handleDelete ,handleEdit};
  }
  
}
</script>
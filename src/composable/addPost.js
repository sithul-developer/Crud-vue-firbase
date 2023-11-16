import { projectFirestore } from "@/firebase/config";
import { ref } from "vue"
const addPost = (collection) => {
    const error = ref(null)
    const load = async (post) => {
        error.value = null
        try {
            const result = await projectFirestore.collection(collection).add(post);
            return result;
            
        } catch (err) {
        /*     error.value = err.message; */
            console.log(post)
            alert(' sdfd')
        }
    };
    return {load,error};
};
export  { addPost};
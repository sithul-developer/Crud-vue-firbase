import { projectFirestore } from "@/firebase/config";
import { ref  } from "vue"

const getPost = (collection) => {
    const error = ref(null);
    const post = ref(null);

    const fetchAPost = async (id) => {
        error.value= null;
        try {
            const result = await projectFirestore.collection(collection).doc(id).get();
            post.value = { id: result.id, ...result.data() };
        }
        catch (err) {
            error.value = err.message;
        }
    };

    return {error ,post,fetchAPost }
}

export default getPost;
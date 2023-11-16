import { projectFirestore } from "@/firebase/config";
import { ref } from "vue"

const updatePost = (collection) => {


    const error = ref(null);


    const update = async (post) => {
        try {
            error.value = null;
            await projectFirestore.collection(collection).doc(post.id).update(post);
        }
        catch(err){
            error.value= err.massage;
        }
    }
    return { error , update}
}

export default updatePost;
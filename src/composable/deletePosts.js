import { projectFirestore } from "@/firebase/config";
import { ref } from "vue"

const deletePosts =(collection)=>{
    const error = ref(null);
    const remove = async(id)=>{
        error.value= null;
        try{
         await projectFirestore.collection(collection).doc(id).delete();

        }
        catch(err){
            error.value = err.message;
        }
    }
    return {remove ,error}
};

export default deletePosts;
import { projectFirestore } from "@/firebase/config";
import { ref, watchEffect,  } from "vue"
const getPosts = (collection) => {
    const error = ref(null);
    const posts = ref(null);
    /*  const fetching = async () => {
         error.value = null;
         try {
             const result = await projectFirestore.collection(collection).get();
                 posts.value = result.docs.map((doc) => {
                     return { id: doc.id, ...doc.data() };
                 });
 
 
         } catch (err) {
                 error.value = err.message;
                 posts.value=null;
         }
     }; */
    const documentRef = projectFirestore.collection(collection);
    const unsubscribe = documentRef.onSnapshot((onSnapshot) => {
        const results = [];
        onSnapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
        });
        posts.value = results;
        error.value = results;
    },
        (err) => {
            error.value = err.message;
            posts.value = null;
        });
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsubscribe())
    });
    return { error, posts, watchEffect };
};
export default getPosts;
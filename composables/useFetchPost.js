export default function useFetchPost(id) {
    return useLazyFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
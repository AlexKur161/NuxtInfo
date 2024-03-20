export default function useFetchPosts() {
    return useLazyFetch('https://jsonplaceholder.typicode.com/posts')
}
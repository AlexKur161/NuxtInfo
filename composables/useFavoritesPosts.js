export default function useFavoritesPosts() {
    return useCookie(
        'favorites',
        {
          default: () => ({})
        }
      )
}
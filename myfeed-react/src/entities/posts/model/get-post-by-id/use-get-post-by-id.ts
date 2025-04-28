export const useGetPostById = (id: string) => {
  const { data, loading, error } = usePostByIdQuery({
    variables: {
      id: id,
    },
  });

  return {
    data,
    isLoading: loading,
    isError: error,
  };
};

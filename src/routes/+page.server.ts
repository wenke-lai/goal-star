export const load = async ({ locals }) => {
  const { userId } = locals.auth();

  if (!userId) return { userId: "null" };

  return {
    userId
  };
};

export const transformStringToNumberParamsId = ({
  params,
}: {
  params: { id: string | number };
}) => {
  const id = Number(params.id);

  if (!Number.isNaN(id)) {
    params.id = id;
  }
};

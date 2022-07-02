export default function handleRequestError(e: any) {
  let err = e.response?.data?.message || e.message || 'Server error';
  return err;
}

export async function asyncWithTryCatch<T>(promise: Promise<T>) {
  let result;
  try {
    result = await promise;
  } catch (error) {
    console.log("ERROR: ", error);
    // alert("ERROR:" + JSON.stringify(error, null, 2));
  }
  return result;
}

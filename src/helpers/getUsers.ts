export default async function getUsers() {
  try {
    const remoteData = await fetch(
      "https://gist.github.com/bltnico/f46b7d186b13832b04c2b978fead2741/raw/4fe52de8909f40e78211641988a4e5ee84459aee/dummy.json"
    );
    const data = remoteData.json();
    return data;
  } catch (error) {
    throw error;
  }
}

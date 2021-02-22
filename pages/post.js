export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    console.log(posts);
    return { props: { posts } };
  }
  
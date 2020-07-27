const About = ({ posts }) => (
    <>
     {posts.map(repo => (
          <h1 key={repo.id}>{repo.name}</h1>
      ))}
    </>
  );

  // This also gets called at build time
export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.github.com/orgs/rocketseat/repos`)
  const posts = await res.json()

  // Pass post data to the page via props
  return { props: { posts } }
}

export default About;
   
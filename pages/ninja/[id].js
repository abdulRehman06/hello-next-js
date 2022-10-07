export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const NinjsDetail = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default NinjsDetail;

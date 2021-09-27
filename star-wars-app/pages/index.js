import React from "react";
import Layout from "../components/myLayout";
import Link from "next/link";

//important module allowing API to be fetched with Next.js
import fetch from "isomorphic-unfetch";


//index or home page
//we pass data to another component through query strings
const index = props => (
  <Layout>
    <h1>Characters found in Star Wars</h1>
    <ul>
      {props.people.map(people => (
        <li key={people.name}>
          <Link
            as={`/p/${people.name}`}
            href={`/post?name=${people.name}&gender=${people.gender}&eye_color=${people.eye_color}&skin_color=${people.skin_color}`}
          >
            <a>{people.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

//function which asynchronously fetches data from API and returns it
index.getInitialProps = async function() {
  const url = "https://swapi.dev/api/people/";
  //setting origin allows for fetch request from origin url provided
  const res = await fetch(url, { origin: "http://localhost:3000" });
  const data = await res.json();

  console.log(`Fetched Stars wars people. Count: ${data.count}`);

  return {
    people: data.results
  };
};

export default index;
